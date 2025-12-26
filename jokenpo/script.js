const resultado = document.querySelector('#resultado')
const pontoJogador = document.querySelector('#ponto-jogador')
const pontoRobo = document.querySelector('#ponto-robo')
const pontoEmpate = document.querySelector('#ponto-empate')

let contador_pontoJogador = 0
let contador_pontoRobo = 0
let contador_pontoEmpate = 0

const jogadaJogador = (escolhaJogador) => {
    iniciarJogo(escolhaJogador, jogadaRobo())
}

const jogadaRobo = () => {
    const opcoes = ['pedra', 'papel', 'tesoura']
    const escolhaRobo = Math.floor(Math.random()*3)
    return opcoes[escolhaRobo]
}

const iniciarJogo = (jogador, robo) => {
    console.log('Jogador escolheu = '+ jogador+' / Robo escolheu = '+ robo)

    document.querySelector('#resultado').style.display = "block"

    if (jogador === robo ) {
        resultado.innerHTML = "Empate 😐"
        contador_pontoEmpate ++
        pontoEmpate.innerHTML = contador_pontoEmpate

    }else if (
        jogador==='pedra' && robo === 'tesoura' ||
        jogador==='papel' && robo === 'pedra' ||
        jogador==='tesoura' && robo === 'papel'
    ) {
        resultado.innerHTML = "Parabéns! Você Ganhouu 😀"
        contador_pontoJogador ++
        pontoJogador.innerHTML = contador_pontoJogador
    }else {
        resultado.innerHTML = "O Robô ganhouu 😭"
        contador_pontoRobo ++
        pontoRobo.innerHTML = contador_pontoRobo
    }

}