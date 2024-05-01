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
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

const pokemonAliasUpdate = async (req, res) => {
    const { apelido } = req.body;
    const { pokemon_id } = req.params;
    const usuario_id = req.user.id;

    if (!apelido) {
        return res.status(400).json({ mensagem: 'informe o apelido do pokemon' });
    }

    try {
        const { rowCount } = await pool.query(
            'select * from pokemons where id = $1 and usuario_id = $2',
            [pokemon_id, usuario_id]
        );

        if (rowCount < 1) {
            return res.status(404).json({ mensagem: 'Pokemon não encontrado' })
        }

        await pool.query(
            'update pokemons set apelido = $1 where pokemons.usuario_id = $2 and pokemons.id = $3 returning *',
            [apelido, usuario_id, pokemon_id]
        );

        return res.status(204).send();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

const listPokemons = async (req, res) => {
    try {
        const { rows } = await pool.query('select * from pokemons');
        const list = []

        for (const pokemon of rows) {
            const { habilidades, imagem, ...pokemons } = pokemon;
            const arrayHabilidades = habilidades.split(', ');
            const arrayPokemons = {
                ...pokemons,
                habilidades: arrayHabilidades,
                imagem
            }
            list.push(arrayPokemons);
        }

        return res.status(200).json(list);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

const listPokemonById = async (req, res) => {
    const { id } = req.params;

    try {
        const { rows, rowCount } = await pool.query(
            'select * from pokemons where pokemons.id = $1',
            [id]
        );

        if (rowCount < 1) {
            return res.status(404).json({ mensagem: 'Pokemon não encontrado' })
        }

        const { habilidades, imagem, ...pokemon } = rows[0];
        const arrayHabilidades = habilidades.split(', ');

        const returnPokemon = {
            ...pokemon,
            habilidades: arrayHabilidades,
            imagem
        }

        return res.status(200).json(returnPokemon);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

const deletePokemon = async (req, res) => {
    const { id } = req.params;
    const { id: usuario_id } = req.user;

    try {
        const { rowCount } = await pool.query(
            'delete from pokemons where pokemons.id = $1 and pokemons.usuario_id = $2 returning *',
            [id, usuario_id]
        );

        if (rowCount < 1) {
            return res.status(404).json({ mensagem: 'Pokemon não encontrado' });
        }

        return res.status(200).json({ mensagem: 'Pokemon deletado do banco de dados' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro de servidor.' })
    }
};

module.exports = {
    registerPokemon,
    pokemonAliasUpdate,
    listPokemons,
    listPokemonById,
    deletePokemon
};