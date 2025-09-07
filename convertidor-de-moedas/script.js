const acaoBotao = document.querySelector("#Converter")

function converterMoeda(event){
    event.preventDefault()
    const valorConverter = document.querySelector("#valor").value
    console.log("Valor que está no input é " + valorConverter)

    const dolarteste = 6

    const conversao = (valorConverter / dolarteste).toFixed(2)
    console.log("Valor da conversão é " + conversao)
}

acaoBotao.addEventListener("click", converterMoeda)
