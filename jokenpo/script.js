document.addEventListener('DOMContentLoaded', () => {
    //valorPedra = 0
    //valorPapel = 1
    //valorTesoura = 2

    const escolheuPedra = () => {
        const escolhaJogador = 0
        console.log('escolha jogador = '+escolhaJogador)

        let escolhaRobo = Math.floor(Math.random() * 3);
            console.log('escolha robo = '+escolhaRobo)

        if (escolhaJogador == escolhaRobo) // os dois escolheram pedra
            console.log('empate')

        else if (escolhaRobo = 1) // robô escolheu papel   
            console.log('O robo ganhou')

        else // robô escolheu tesoura 
            console.log('vc ganhou')
    }

    const escolheuPapel = () => {
        const escolhaJogador = 1
        console.log('escolha jogador = '+escolhaJogador)

        let escolhaRobo = Math.floor(Math.random() * 3);
            console.log('escolha robo = '+escolhaRobo)

        if (escolhaJogador == escolhaRobo) // os dois escolheram papel
            console.log('empate')

        else if (escolhaRobo == 2) // robô escolheu tesoura
            console.log('O robo ganhou')

        else //robô escolheu pedra
            console.log('vc ganhou')
    }

    const escolheuTesoura = () => {
        const escolhaJogador = 2
        console.log('escolha jogador = '+escolhaJogador)

        let escolhaRobo = Math.floor(Math.random() * 3);
            console.log('escolha robo = '+escolhaRobo)

        if (escolhaJogador == escolhaRobo) // os dois escolheram tesourapapel
            console.log('empate')

        else if (escolhaRobo == 0) // robô escolheu pedra
            console.log('O robo ganhou')

        else //robô escolheu papel
            console.log('vc ganhou')
    }

    document.getElementById('pedra').addEventListener('click', () => escolheuPedra());

    document.getElementById('papel').addEventListener('click', ()=> escolheuPapel())

    document.getElementById('tesoura').addEventListener('click', () => escolheuTesoura())

});