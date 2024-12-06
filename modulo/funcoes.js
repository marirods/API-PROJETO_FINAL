const Cursos = require('./cursos')
const Alunos = require('./alunos.js')
const listaCursos = Cursos.cursos
const listaAlunos = Alunos.alunos

const ListaDeCursos = function(){
    let nomeCurso = { curso: listaCursos}
    return nomeCurso
}

//console.log(ListaDeCursos())


const AlunosMatriculados = function(){
    let dadosAlunos = { aluno: listaAlunos}
    return dadosAlunos
}

//console.log(AlunosMatriculados())


const MatriculaAlunos = function(matricula){
    let entradaMatricula = String(matricula).toUpperCase()
    let informacoesAluno = {nome: '', foto: '', matricula:'', sexo: ''}

    listaAlunos.forEach(function(dadosMatricula){
        if (String(dadosMatricula.matricula).toUpperCase() == entradaMatricula){
            informacoesAluno.nome = dadosMatricula.nome
            informacoesAluno.foto = dadosMatricula.foto
            informacoesAluno.matricula = dadosMatricula.matricula
            informacoesAluno.sexo = dadosMatricula.sexo

        
        }
    })

    return informacoesAluno
} 

//console.log(MatriculaAlunos('20151001004'))


const AlunosCurso = function(curso){
    let entradaMatricula = String(curso).toUpperCase()
    let informacoesCurso = {nomeAluno: [], curso: entradaMatricula}

    listaAlunos.forEach(function(dadosMatricula){
      dadosMatricula.curso.forEach(function(informacoes){
        if(String(informacoes.sigla).toUpperCase() == entradaMatricula){
            informacoesCurso.nomeAluno.push(dadosMatricula)
        }
      })
    })
    return informacoesCurso
}

//console.log(AlunosCurso('DS'))

const StatusAlunos =  function(status){
    let entradaMatricula = String(status).toUpperCase()
    let statusinformacoes = {nomeAluno: [], curso: ''}

    listaAlunos.forEach(function(dados){
        if(entradaMatricula == String(dados.status).toUpperCase()){
            statusinformacoes.nomeAluno.push(dados)
        }
        

        
    })

    return statusinformacoes
}
//console.log(StatusAlunos('Finalizado'))


const StatusAlunosCurso = function(status, nomeCurso){
    let entradaMatricula = String(status).toUpperCase()
    let statusinformacoes = {nomeAluno: [], curso: nomeCurso}


    listaAlunos.forEach(function(dados){
        dados.curso.forEach(function(cursos){
            if(String(cursos.sigla).toUpperCase == String(nomeCurso).toUpperCase){
                cursos.disciplinas.forEach(function(disciplina){
                    if(String(disciplina.status).toUpperCase() == entradaMatricula){
                        statusinformacoes.nomeAluno.push(dados)
                    } 
                })
            }
        })
    })
    //console.log(statusinformacoes.nomeAluno[0].curso[0].disciplinas)
    return statusinformacoes

    
}


// console.log(StatusAlunosCurso('Reprovado', 'DS'))


const AnoConclusao = function(curso, ano){
    let entradaMatricula = String(curso).toUpperCase()
    let statusinformacoes = {nomeAluno: [], curso: entradaMatricula}

    listaAlunos.forEach(function(dados){
        dados.curso.forEach(function(cursos){
            if(cursos.sigla == entradaMatricula){
                if(cursos.conclusao == ano){
                    statusinformacoes.nomeAluno.push(dados)
                }
            }
        })
    })
    return statusinformacoes

}

//console.log(AnoConclusao('DS', '2022'))


const StatusFiltro = function(statusA, statusAC, nomeCurso, Ano){
    let filtrar = false
    if(statusA){
        filtrar = StatusAlunos(statusA)
    }else if(nomeCurso && statusAC && !Ano){
        filtrar = StatusAlunosCurso(statusAC, nomeCurso)
    }else if(Ano && nomeCurso && !statusAC){
        filtrar = AnoConclusao(nomeCurso, Ano)
    }

    return filtrar
}

//console.log(StatusFiltro("Finalizado","","",""));


module.exports = {
    ListaDeCursos,
    AlunosMatriculados,
    MatriculaAlunos,
    AlunosCurso,
    StatusAlunos,
    StatusAlunosCurso,
    AnoConclusao,
    StatusFiltro
}