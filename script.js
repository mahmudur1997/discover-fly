var firstClassQuantityIncrease = document.getElementById('firstClassIncrease');
var firstClassQuantityDecrease = document.getElementById('firstClassDecrease');

var economyClassQuantityIncrease = document.getElementById('economyClassIncrease');
var economyClassQuantityDecrease = document.getElementById('economyClassDecrease');

var subtotal = document.getElementById('subtotal');
var vat = document.getElementById('vat');
var total = document.getElementById('total');

var firstClassCost = document.getElementById('firstClassCost');
var economyCost = document.getElementById('economyClassCost');

var firstClassAmount = document.getElementById('firstClassAmount');
var economyQuantity = document.getElementById('economyClassAmount');

firstClassQuantityIncrease.addEventListener('click', function(){
    increaseQuantity(firstClassAmount);
    calculateAndUpdateSubtotal_Vat_Total();
});

firstClassQuantityDecrease.addEventListener('click', function(){
    decreaseQuantity(firstClassAmount);
    calculateAndUpdateSubtotal_Vat_Total();
});

economyClassQuantityIncrease.addEventListener('click', function(){
    increaseQuantity(economyQuantity);
    calculateAndUpdateSubtotal_Vat_Total();
});

economyClassQuantityDecrease.addEventListener('click', function(){
    decreaseQuantity(economyQuantity);
    calculateAndUpdateSubtotal_Vat_Total();
});

function increaseQuantity(inputFieldName) {
    inputFieldName.value = parseInt(inputFieldName.value) + 1;
}

function decreaseQuantity(inputFieldName) {
    if(parseInt(inputFieldName.value) === 0) {
        inputFieldName.value = '0';
    }
    else {
        inputFieldName.value = parseInt(inputFieldName.value) - 1;
    }
}

function calculateAndUpdateSubtotal_Vat_Total(){
    
    var totalTicketCost = (parseInt(firstClassAmount.value) * parseInt(firstClassCost.innerText)) + (parseInt(economyQuantity.value) * parseInt(economyCost.innerText));
    subtotal.innerText = totalTicketCost;

    var vatAmount = parseInt(subtotal.innerText) * 0.1;
    vat.innerText = vatAmount;

    total.innerText = parseInt(subtotal.innerText) + parseInt(vat.innerText);
}

document.getElementById('bookButton').addEventListener('click', function(){
    if(parseInt(total.innerText) === 0) {
        alert('Oops! You did not bought any tickets!');
    }
    else {
        alert('Congratulations! Your ticket is confirmed!');
       window.location.reload();    
    }
});