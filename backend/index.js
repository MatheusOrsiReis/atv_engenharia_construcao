const express = require('express')
const app = express()
const cors = require('cors')

const funcionarioController = require('./controller/funcionario.controller')
const obraController = require('./controller/obra.controller')

const conn = require('./db/conn')

const hostname = 'localhost'
const PORT = 3000

//=============== MIDDLEWARE =================
app.use(express.urlencoded({force:true}))
app.use(express())
app.use(cors())

//=============== ROTAS =================
// Rotas Publicas
//Funcionario
app.post('/funcionario', funcionarioController.cadastrar)

//Obra
app.post('/obra', obraController.cadastrar)


app.get('/', (req,res)=>{
    console.log('aplicação rodando')
})

//============== SERVER =====================
conn.sync()
.then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`servidor rodando em http://${hostname}:${PORT}`)
    })
})