const acaoBotao = document.querySelector("#Converter")
const selectMoeda = document.querySelector("#moeda-para")

selectMoeda.addEventListener("change", function(){

    if (selectMoeda.value =="dolar") {
        const imagem = document.querySelector('img[alt="moeda-convertida"]')
        imagem.src = "./assets/estados-unidos.png"

        const descricao_da_moeda = document.querySelector(".nome-moeda-convertida")
        descricao_da_moeda.innerHTML = "Dólar"
        
    }

    if (selectMoeda.value =="euro") {
        const imagem = document.querySelector('img[alt="moeda-convertida"]')
        imagem.src = "./assets/euro.png"

        const descricao_da_moeda = document.querySelector(".nome-moeda-convertida")
        descricao_da_moeda.innerHTML = "Euro"

    }

    converterMoeda()
})  
async function converterMoeda (event){
    if (event) event.preventDefault()

    const valorConverter = document.querySelector("#valor").value
    const valor_a_converter = document.getElementById("valor-inicial")
    const valor_convertido = document.getElementById("valor-final") 

    const valoresCotacao = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(resposta => resposta.json())

    const dolar = valoresCotacao.USDBRL.high
    const euro = valoresCotacao.EURBRL.high

    if (selectMoeda.value == "dolar") {
        valor_convertido.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(valorConverter / dolar)
    }

    if (selectMoeda.value =="euro") {
        valor_convertido.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format((valorConverter / euro))

        const imagem = document.querySelector('img[alt="moeda-convertida"]')
        imagem.src = "./assets/euro.png"
    }

    
    valor_a_converter.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL' }).format(valorConverter)

}

acaoBotao.addEventListener("click", converterMoeda)
