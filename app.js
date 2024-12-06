
const cursos = require('./modulo/funcoes.js')

const express          = require('express')
const cors             = require('cors')
const bodyParser       = require('body-parser')


const app = express()



app.use((request, response, next)=>{
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET')
    app.use(cors())

    next()


})


app.get('/v1/lion-school/cursos', cors(), async function (request, response){
    let dados = cursos.ListaDeCursos()
    if(dados){
        response.status(200) 
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível localizar nenhum curso'})
    }

})

app.get('/v1/lion-school/alunos', cors(), async function (request, response){
    let dados = cursos.AlunosMatriculados()
    if(dados){
        response.status(200) 
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível localizar nenhum curso'})
    }

})

app.get('/v1/lion-school/alunos/filtro/', cors(), async function(request, response){
    let statusA = request.query.statusA
    let nome = request.query.nomes
    let statusD = request.query.statusD
    let AnoC = request.query.AnoC
    
    let dados = cursos.StatusFiltro(statusA,statusD,nome,AnoC)

    console.log(statusA);
    console.log(nome);
    console.log(statusD);
    console.log(AnoC);
    
    if(dados){
        response.status(200) 
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível localizar nenhum curso'})
    }

})

   
app.get('/v1/lion-school/alunos/:matricula', cors(), async function(request, response){
    let uf = request.params.matricula
    let dados = cursos.MatriculaAlunos(uf)
    if(dados){
        response.status(200) 
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível localizar nenhum curso'})
    }


})

app.get('/v1/lion-school/alunos/cursos/:ds', cors(), async function(request,response){
    let uf = request.params.ds
    let dados = cursos.AlunosCurso(uf)
    if(dados){
        response.status(200) 
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível localizar nenhum curso'})
    }


})


app.listen('8080', function(){
    console.log('API aguardando requisições ...')
})
    
    
    
   

