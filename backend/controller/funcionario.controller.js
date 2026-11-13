const Funcionario = require('../models/Funcionario')

const CryptoJs = require('crypto-js')

const CHAVE_SECRETA = 'segredo'

const cadastrar = async(req,res)=>{
    const valores = req.body

    if(!valores.nome || !valores.email || !valores.senha){
        return res.status(404).json({message: 'todos os campos são obrigatórios'})
    }

    try{
        const senhaCriptografada = CryptoJs.AES.encrypt(valores.senha, CHAVE_SECRETA).toString()

        await Funcionario.create({
            nome: valores.nome,
            email: valores.email,
            senha: senhaCriptografada
        })
        res.status(201).json({message:'dados cadastrados!'})
    }catch(err){
        console.error('erro',err)
        res.status(500).json({message: 'erro ao cadastrar'})
    }
}

module.exports = {cadastrar}