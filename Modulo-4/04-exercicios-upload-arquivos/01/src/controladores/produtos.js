const knex = require('../conexao');

const { uploadImagem, excluirImagem } = require('../utils/upload');

const listarProdutos = async (req, res) => {
    const { usuario } = req;
    const { categoria } = req.query;

    try {
        const produtos = await knex('produtos')
            .where({ usuario_id: usuario.id })
            .where(query => {
                if (categoria) {
                    return query.where('categoria', 'ilike', `%${categoria}%`);
                }
            });

        return res.status(200).json(produtos);
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

const obterProduto = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;

    try {
        const produto = await knex('produtos').where({
            id,
            usuario_id: usuario.id
        }).first();

        if (!produto) {
            return res.status(404).json('Produto não encontrado');
        }

        return res.status(200).json(produto);
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

const cadastrarProduto = async (req, res) => {
    const { usuario, file } = req;
    const { nome, estoque, preco, categoria, descricao } = req.body;

    if (!nome) {
        return res.status(404).json('O campo nome é obrigatório');
    }

    if (!estoque) {
        return res.status(404).json('O campo estoque é obrigatório');
    }

    if (!preco) {
        return res.status(404).json('O campo preco é obrigatório');
    }

    if (!descricao) {
        return res.status(404).json('O campo descricao é obrigatório');
    }

    try {
        let produto = await knex('produtos').insert({
            usuario_id: usuario.id,
            nome,
            estoque,
            preco,
            categoria,
            descricao
        }).returning('*');

        if (!produto) {
            return res.status(400).json('O produto não foi cadastrado');
        }

        const id = produto[0].id;

        const { path, url } = await uploadImagem(
            `produtos/${id}/${file.originalname}`,
            file.buffer,
            file.mimetype
        );

        produto = await knex('produtos').update({
            imagem: path,
            imagem_url: url
        }).where({ id }).returning('*');

        return res.status(200).json(produto[0]);
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

const atualizarProduto = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;
    const { nome, estoque, preco, categoria, descricao, imagem } = req.body;

    if (!nome && !estoque && !preco && !categoria && !descricao && !imagem) {
        return res.status(404).json('Informe ao menos um campo para atualizaçao do produto');
    }

    try {
        const produtoEncontrado = await knex('produtos').where({
            id,
            usuario_id: usuario.id
        }).first();

        if (!produtoEncontrado) {
            return res.status(404).json('Produto não encontrado');
        }

        const produto = await knex('produtos')
            .where({ id })
            .update({
                nome,
                estoque,
                preco,
                categoria,
                descricao,
                imagem
            });

        if (!produto) {
            return res.status(400).json("O produto não foi atualizado");
        }

        return res.status(200).json('produto foi atualizado com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

const excluirProduto = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;

    try {
        const produtoEncontrado = await knex('produtos').where({
            id,
            usuario_id: usuario.id
        }).first();

        if (!produtoEncontrado) {
            return res.status(404).json('Produto não encontrado');
        }

        const produtoExcluido = await knex('produtos').where({
            id,
            usuario_id: usuario.id
        }).del();

        if (!produtoExcluido) {
            return res.status(400).json("O produto não foi excluido");
        }

        return res.status(200).json('Produto excluido com sucesso');
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

const excluirImagemProduto = async (req, res) => {
    const { id } = req.params;
    try {
        const produtoEncontrado = await knex('produtos').where({
            id,
            usuario_id: req.usuario.id
        }).first();

        if (!produtoEncontrado) {
            return res.status(404).json('Produto não encontrado');
        }

        await excluirImagem(produtoEncontrado.imagem);

        await knex('produtos')
            .where({ id })
            .update({
                imagem: null,
                imagem_url: null
            });

        return res.status(200).json('a imagem foi excluida com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

const atualizarImagemProduto = async (req, res) => {
    const { file } = req;
    const { id } = req.params;
    try {
        const produtoEncontrado = await knex('produtos').where({
            id,
            usuario_id: req.usuario.id
        }).first();

        if (!produtoEncontrado) {
            return res.status(404).json('Produto não encontrado');
        }

        await excluirImagem(produtoEncontrado.imagem);

        const { path, url } = await uploadImagem(
            `produtos/${produtoEncontrado.id}/${file.originalname}`,
            file.buffer,
            file.mimetype
        );

        const produto = await knex('produtos')
            .where({ id })
            .update({
                imagem: path,
                imagem_url: url
            });

        if (!produto) {
            return res.status(400).json("O produto não foi atualizado");
        }

        return res.status(200).json('a imagem foi atualizada com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

module.exports = {
    listarProdutos,
    obterProduto,
    cadastrarProduto,
    atualizarProduto,
    excluirProduto,
    excluirImagemProduto,
    atualizarImagemProduto
};