const { knex } = require('../conexao');
const conexao = require('../conexao');
const bcrypt = require('bcrypt');

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha, nome_loja } = req.body;

    if (!nome) {
        return res.status(404).json("O campo nome é obrigatório");
    }

    if (!email) {
        return res.status(404).json("O campo email é obrigatório");
    }

    if (!senha) {
        return res.status(404).json("O campo senha é obrigatório");
    }

    if (!nome_loja) {
        return res.status(404).json("O campo nome_loja é obrigatório");
    }

    try {
        const consulta = await knex('usuarios').where({ email });

        if (consulta.length > 0) {
            return res.status(400).json("O email já existe");
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const novoUsuario = {
            nome,
            email,
            senha: senhaCriptografada,
            nome_loja
        };

        const usuario = await knex('usuarios').insert(novoUsuario).returning('*');

        if (usuario.length === 0) {
            return res.status(400).json("O usuário não foi cadastrado.");
        }

        const { senha: _, ...usuarioCadastrado } = usuario[0];

        return res.status(200).json(usuarioCadastrado);
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

const obterPerfil = async (req, res) => {
    return res.status(200).json(req.usuario);
};

const atualizarPerfil = async (req, res) => {
    const { nome, email, senha, nome_loja } = req.body;

    if (!nome || !email || !senha || !nome_loja) {
        return res.status(404).json('Todos os campos são obrigatórios');
    }

    try {
        if (email !== req.usuario.email) {
            const quantidadeUsuarios = await knex('usuarios').where({ email });

            if (quantidadeUsuarios.length > 0) {
                return res.status(400).json("O email já existe");
            }
        }

        const usuario = await knex('usuarios').update({ nome, email, senha, nome_loja }).where({ id: req.usuario.id }).returning('*');

        if (usuario.length === 0) {
            return res.status(400).json("O usuario não foi atualizado");
        }

        const { senha: _, ...usuarioAtualizado } = usuario[0];

        return res.status(200).json(usuarioAtualizado);
    } catch (error) {
        console.log(error);
        return res.status(400).json(error.message);
    }
}

module.exports = {
    cadastrarUsuario,
    obterPerfil,
    atualizarPerfil
}