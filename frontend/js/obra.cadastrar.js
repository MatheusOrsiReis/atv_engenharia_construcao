const btn_cadastrar = document.getElementById('btn_cadastrar')
const resposta = document.getElementById('resposta')

btn_cadastrar.addEventListener('click', (e)=>{
    e.preventDefault()

    const nome = document.getElementById('nome').value
    const endereco = document.getElementById('endereco').value
    const cnpj = document.getElementById('cnpj').value

    const valores = {
        nome: nome,
        endereco: endereco,
        cnpj: cnpj
    }

       fetch(`http://localhost:3000/obra`,{
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(valores)
    })

    .then(res => res.json())
    .then(dados =>{
        resposta.innerHTML = ``
        resposta.innerHTML += `<p>${dados.message}</p>`
    })
})