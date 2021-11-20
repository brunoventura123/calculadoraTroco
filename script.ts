const showAll = document.querySelector('#showAll')

let price = document.querySelector('#productPrice') as HTMLInputElement
let tValue = document.querySelector('#totalValue') as HTMLDivElement
let aReceived = document.querySelector('#amountReceived') as HTMLInputElement

let productValue = ''
let total = 0
let thing = ''
document.body.addEventListener('keydown', function(event){
    const code = event.keyCode;
    if(code === 13 && price.value !== ''){
        productValue = price.value
        showAll.innerHTML += `R$ ${Number(productValue).toFixed(2)}<br/>`
        let add = Number(total) + Number(productValue)
        total = add
        tValue.innerHTML = `R$ ${Number(total).toFixed(2)}` 
        price.value = ''
}
})

function totalToPay(){
     if(thing == '' && aReceived.value !== '' && tValue.innerHTML !== ''){
            let account = Number(aReceived.value) - Number(total)
            thing = account.toString()
            showAll.innerHTML = `${showAll.innerHTML} <hr/>Total: ${tValue.innerHTML}
            <br/> Valor recebido: R$ ${Number(aReceived.value).toFixed(2)} <br/>
            <p style="color: green">Troco: R$ ${Number(thing).toFixed(2)}</p><br/>`
            
            if(Number(aReceived.value) < total){
                showAll.innerHTML += '<p style="color:red;">Valor recebido é menor que o valor Total!</p><br/>'
            }
        }
    
    thing = ''
    aReceived.value = ''
}
function clean(){
    showAll.innerHTML = ''
    aReceived.value = ''
    tValue.innerHTML = ''
    productValue = ''
    thing = ''
    total = 0
}