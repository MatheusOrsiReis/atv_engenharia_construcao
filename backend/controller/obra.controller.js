const Obra = require('../models/Obra')

const CryptoJs = require('crypto-js')

const CHAVE_SECRETA = 'segredo'

const cadastrar = async(req,res) =>{
    const valores = req.body

    try{
        const cnpjCriptografado = CryptoJs.AES.encrypt(valores.cnpj, CHAVE_SECRETA).toString()

        await Obra.create({
            nome: valores.nome,
            endereco: valores.endereco,
            cnpj: cnpjCriptografado
        })

        console.log('cadastrado com sucesso!')
        res.status(201).json({message: 'cadastrado com sucesso!'})
    }catch(err){
        console.error('erro ao cadastrar',err)
        res.status(500).json({message: 'erro ao cadastrar'})
    }
}

module.exports = {cadastrar}