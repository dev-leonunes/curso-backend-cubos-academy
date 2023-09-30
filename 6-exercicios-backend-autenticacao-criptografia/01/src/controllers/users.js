const pool = require('../connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passwordJwt = require('../passwordJwt');

const createNewUser = async (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
    }

    try {
        const { rowCount } = await pool.query('select * from usuarios where email = $1', [email]);

        if (rowCount > 0) {
            return res.status(400).json({ mensagem: 'Email já cadastrado' });
        }

        const senhaHash = await bcrypt.hash(senha, 10);

        const newUser = await pool.query(
            'insert into usuarios (nome, email, senha) values ($1, $2, $3) returning *',
            [nome, email, senhaHash]
        );

        return res.status(201).json(newUser.rows[0]);

    } catch (error) {
        return res.status(500).json(error.mensagem)
    }
};

const loginUser = async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ mensagem: '' });
    }


    try {
        const user = await pool.query(
            'select * from usuarios where email = $1',
            [email]
        );

        if (user.rowCount < 1) {
            return res.status(404).json({ mensagem: 'Email ou senha invalida' });
        }

        const validPassword = await bcrypt.compare(senha, user.rows[0].senha);

        if (!validPassword) {
            return res.status(400).json({ mensagem: 'Email ou senha invalida' })
        }

        const token = jwt.sign({ id: user.rows[0].id }, passwordJwt, { expiresIn: '8h' });

        const { senha: _, ...loggedUser } = user.rows[0];

        return res.status(200).json({ usuario: loggedUser, token });

    } catch (error) {
        return res.status(500).json(error.mensagem);
    }
};


module.exports = {
    createNewUser,
    loginUser
};