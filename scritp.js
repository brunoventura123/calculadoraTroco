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
            tValue.innerHTML = `R$ ${soma.toFixed(2)}` 
            price.value = ''
    }
}
function totalToPay(){
     if(troco == '' && aReceived.value !== '' && tValue.innerHTML !== ''){
            troco = Number(aReceived.value) - Number(soma)
            showFull.innerHTML = `${showFull.innerHTML} <hr/>Total: ${tValue.innerHTML}
            <br/> Valor recebido: R$ ${Number(aReceived.value).toFixed(2)} <br/><p style="color: green">Troco: R$ ${troco.toFixed(2)}</p><br/>`
            if(troco < 0){
                showFull.innerHTML += '<p style="color:red;">Valor digitado está errado!</p><br/>'
            }
        }
    
    troco = ''
    aReceived.value = ''
}
function clean(){
    showFull.innerHTML = ''
    aReceived.value = ''
    tValue.innerHTML = ''
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