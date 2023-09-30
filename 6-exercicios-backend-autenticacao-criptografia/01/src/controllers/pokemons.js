const pool = require('../connection');

const registerPokemon = async (req, res) => {
    const { nome, habilidades, imagem, apelido } = req.body;
    const usuario_id = req.user.id;

    if (!nome || !habilidades) {
        return res.status(400).json({ mensagem: 'Os campos nome e habilidades são obrigatórios' })
    }

    try {
        const { rows } = await pool.query(
            'insert into pokemons (usuario_id, nome, habilidades, imagem, apelido) values ($1, $2, $3, $4, $5) returning *',
            [usuario_id, nome, habilidades, imagem, apelido]
        );

        return res.status(201).json(rows[0]);
    } catch (error) {
        return res.status(500).json(error);
    }
};


module.exports = {
    registerPokemon
};