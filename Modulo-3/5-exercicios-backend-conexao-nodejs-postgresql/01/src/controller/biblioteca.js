const pool = require('../conexao');

const postAuthor = async (req, res) => {
    const { nome, idade } = req.body;
    const query = 'insert into autores (nome, idade) values ($1, $2) returning *'
    const params = [nome, idade];

    if (!nome) {
        return res.status(400).json({ mensagem: 'O campo nome é obrigatório' });
    }

    try {
        const novoAutor = await pool.query(query, params);

        return res.status(201).json(novoAutor.rows[0]);
    } catch (error) {
        return res.json(error);
    }
};

const getAuthor = async (req, res) => {
    const { id } = req.params;
    const queryAutor = `select * from autores where id = $1`
    const queryLivro = `select livros.id, livros.nome, livros.genero, livros.editora, livros.data_publicacao
    from autores join livros on livros.autor_id = autores.id
    where autores.id = $1`
    const params = [id];

    try {
        const autor = await pool.query(queryAutor, params);

        if (autor.rowCount === 0) {
            return res.status(404).json({ mensagem: 'Autor não encontrado' });
        }

        const livros = await pool.query(queryLivro, params);

        const resultado = {
            id: autor.rows[0].id,
            nome: autor.rows[0].nome,
            idade: autor.rows[0].idade,
            livros: livros.rows
        };

        return res.json(resultado);
    } catch (error) {
        return res.json(error);
    }
};

const postBook = async (req, res) => {
    const { nome, genero, editora, data_publicacao } = req.body;
    const { id } = req.params;
    const query = `insert into livros (nome, genero, editora, data_publicacao, autor_id)
    values ($1, $2, $3, $4, $5) returning *`
    const params = [nome, genero, editora, data_publicacao, id];

    if (!nome) {
        return res.status(400).json({ mensagem: 'O campo nome é obrigatório' });
    }

    try {
        const resultado = await pool.query(query, params);

        const novoLivro = {
            id: resultado.rows[0].id,
            nome: resultado.rows[0].nome,
            genero: resultado.rows[0].genero,
            editora: resultado.rows[0].editora,
            data_publicacao
        };

        return res.status(201).json(novoLivro);
    } catch (error) {
        return res.json(error);
    }
};

const getBooks = async (req, res) => {
    const query = `select livros.id, livros.nome, livros.genero, livros.editora, livros.data_publicacao, 
    autores.id as autor_id, autores.nome as autor_nome, autores.idade as autor_idade
    from livros join autores on livros.autor_id = autores.id`

    const { rows } = await pool.query(query);
    const resultado = []

    for (const livro of rows) {
        const { autor_id, autor_nome, autor_idade, ...livros } = livro;
        const retornoLivro = {
            ...livros,
            autor: {
                id: autor_id,
                nome: autor_nome,
                idade: autor_idade
            }
        }

        resultado.push(retornoLivro);
    };

    return res.status(200).json(resultado);
};

module.exports = {
    postAuthor,
    getAuthor,
    postBook,
    getBooks
};