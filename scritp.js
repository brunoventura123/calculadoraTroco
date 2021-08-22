const showFull = document.querySelector('#showFull')

let price = document.querySelector('#price')
let tValue = document.querySelector('#totalValue')
let aReceived = document.querySelector('#aReceived')

let valor = ''
let soma = ''
let troco = ''

function save(){
        if(price.value !== ''){
            valor = Number(price.value)
            showFull.innerHTML += `R$ ${valor.toFixed(2)}<br/>`
            soma = Number(soma) + Number(valor)
            tValue.value = `R$ ${soma.toFixed(2)}`
            price.value = ''
    }
}
function totalToPay(){
    if(troco == ''){
        if(aReceived.value !== ''){
            troco = Number(aReceived.value) - Number(soma)
            showFull.innerHTML = `${showFull.innerHTML} <hr/>Total: ${tValue.value}
            <br/> Valor recebido: ${Number(aReceived.value).toFixed(2)} <br/> Troco: ${troco.toFixed(2)}<br/>`
        }
    }
    troco = ''
    aReceived.value = ''
}
function clean(){
    showFull.innerHTML = ''
    aReceived.value = ''
    tValue.value = ''
    valor = ''
    troco = ''
    soma = ''
}











/*
local para digitar o valor do produto
botao para salvar esse valor
salvar esse valor num array
limpar o local digitado para digitar mais
final clicar em finalizar para somar os valores
mostrar na tela a soma e os valores juntos
aparece o local do valor recebido
calcular o troco
e ao finalizar mostrar valor total, valor recebido e troco
*/