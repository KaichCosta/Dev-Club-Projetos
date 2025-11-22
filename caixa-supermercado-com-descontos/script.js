
console.log("=================================================================")
console.log(" Bem vindo ao caixa de pagamentos dos produtos, caso seu produto") 
console.log("possua um valor maior que 30R$, esse produto terá 10% de desconto")
console.log("=================================================================")

const carrinho = [10, 244, 99, 2, 20, 33]

let valor_total = 0
let valor_desconto = 0

for (const i of carrinho) {
    valor_total = valor_total + i 

    if (i > 30) {
        const desconto = i * 0.90
        valor_desconto += desconto
    }
    else {
        valor_desconto += i
    }
}

valor_economizado = valor_total - valor_desconto
console.log(`VALOR TOTAL DA COMPRA = R$${valor_total.toFixed(2)}`)
console.log(`VALOR TOTAL COM DESCONTO NA COMPRA = R$${valor_desconto.toFixed(2)}`)
console.log(`VALOR ECONOMIZADO NA COMPRA FOI DE = R$${valor_economizado.toFixed(2)}`)