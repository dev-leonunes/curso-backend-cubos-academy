const { listarPokemons, detalharPokemon } = require('utils-playground')

const listaDePokemons = async (req, res) => {
    const { pagina } = req.query

    const pokemons = await listarPokemons(pagina)
    res.json(pokemons.results)
}

const detalhesDePokemons = async (req, res) => {
    const identificação = req.params.pokemon
    try {
        const pokemon = await detalharPokemon(identificação)

        const { id, name, height, weight, base_experience, forms, abilities, species } = pokemon
        const pokemonDetalhado = {
            id,
            name,
            height,
            weight,
            base_experience,
            forms,
            abilities,
            species
        }

        return res.json(pokemonDetalhado)

    } catch (erro) {
        const mensagem = erro.message
        return res.status(404).json({ mensagem, })
    }
}

module.exports = {
    listaDePokemons,
    detalhesDePokemons
}