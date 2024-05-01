const { AsyncLocalStorage } = require('async_hooks');
const fs = require('fs/promises');
const { parse } = require('path');
const { buscarEndereco } = require('utils-playground')

const detalharEndereco = async (req, res) => {
    const cep = req.params.cep
    try {
        const address = await fs.readFile('./src/enderecos.json')
        const parseAddress = JSON.parse(address)

        const adressFind = parseAddress.find(endereco => {
            const parte1 = cep.substring(0, 5);
            const parte2 = cep.substring(5);
            const cepFormatado = `${parte1}-${parte2}`;
            return endereco.cep === cepFormatado
        })

        if (!adressFind) {
            const endereco = await buscarEndereco(cep)

            if (!endereco || endereco.erro === true) {
                return res.status(404).json({ mensagem: "Por favor informe um Cep válido." })
            }

            parseAddress.push(endereco)
            await fs.writeFile('./src/enderecos.json', JSON.stringify(parseAddress))
            return res.status(200).json(endereco)
        }

        return res.status(200).json(adressFind)

    } catch (erro) {
        const mensagem = erro.message
        return res.status(400).json({ mensagem, })
    }
}

module.exports = detalharEndereco;