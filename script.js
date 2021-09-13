var showAll = document.querySelector('#showAll');
var price = document.querySelector('#productPrice');
var tValue = document.querySelector('#totalValue');
var aReceived = document.querySelector('#amountReceived');
var productValue = '';
var total = '';
var thing = '';
function AddProductValue() {
    if (price.value != '') {
        productValue = price.value;
        showAll.innerHTML += "R$ " + Number(productValue).toFixed(2) + "<br/>";
        var soma = Number(total) + Number(productValue);
        total = soma.toString();
        tValue.innerHTML = "R$ " + Number(total).toFixed(2);
        price.value = '';
    }
}
function totalToPay() {
    if (thing == '' && aReceived.value !== '' && tValue.innerHTML !== '') {
        var conta = Number(aReceived.value) - Number(total);
        thing = conta.toString();
        showAll.innerHTML = showAll.innerHTML + " <hr/>Total: " + tValue.innerHTML + "\n            <br/> Valor recebido: R$ " + Number(aReceived.value).toFixed(2) + " <br/>\n            <p style=\"color: green\">Troco: R$ " + Number(thing).toFixed(2) + "</p><br/>";
        Number(total);
        if (aReceived.value < total) {
            showAll.innerHTML += '<p style="color:red;">Valor recebido é menor que o valor Total!</p><br/>';
        }
    }
    thing = '';
    aReceived.value = '';
}
function clean() {
    showAll.innerHTML = '';
    aReceived.value = '';
    tValue.innerHTML = '';
    productValue = '';
    thing = '';
    total = '';
}
