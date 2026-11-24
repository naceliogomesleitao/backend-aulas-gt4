const express = require('express')
const RotasPrivadas = require('./rotas/RotasPrivadas');
const RotasPublicas = require('./rotas/RotasPublicas');


const host = "localhost"
const port = 3000;

const app = express()
app.use(express.json())

app.get('/', (request, response) => {
    return response.send("Olá, estou sendo testado")
});
app.use(RotasPublicas);
//rotas privadas
app.use(RotasPrivadas);

//passagem de dados para backend
app.put('/teste/:codigo', (request, response) => {
    //query
    const query = request.query;
    let dados = "Query: " + query.nome + " - " + query.sobrenome;
    //params  
    const params = request.params;
    dados += "<br > Params: " + params.codigo
  
    //dados
    const body = request.body;
    dados += "<br > Body: " + JSON.stringify(body);

    return response.send(dados);
});

app.listen(port, host, () => {
    console.log(`Seu servidor executando em http://${host}:${port}`)
});