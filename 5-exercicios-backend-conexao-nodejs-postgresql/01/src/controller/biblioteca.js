const pool = require('../conexao');

const criarAutor = async (req, res) => {
    const { nome, idade } = req.body;
    const query = 'insert into autores (nome, idade) values ($1, $2)';
    const params = [nome, idade];

    if (!nome) {
        return res.status(400).json({mensagem: 'O campo nome é obrigatório'});
    }

    try {
        await pool.query(query, params);
        const novoAutor = {
            nome,
            idade
        }

        return res.status(201).json(novoAutor);
    } catch (error) {
        return res.send(error);
    }
};

const listarAutor = async (req, res) => {
    const { id } = req.params;
    const query = 'select * from autores where id = $1';
    const params = [id];

    try {
        const resultado = await pool.query(query, params);
        
        if (resultado.rowCount === 0) {
            return res.status(404).json({mensagem: 'Autor não encontrado'});
        }

        return res.json(resultado.rows);
    } catch (error) {
        return res.send(error);
    }
};

module.exports = {
    criarAutor,
    listarAutor
};