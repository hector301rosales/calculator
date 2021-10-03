let zero    = document.getElementById('zero');
let one     = document.getElementById('one');
let two     = document.getElementById('two');
let three   = document.getElementById('three');
let four    = document.getElementById('four');
let five    = document.getElementById('five');
let six     = document.getElementById('six');
let seven   = document.getElementById('seven');
let eight   = document.getElementById('eight');
let nine    = document.getElementById('nine');
let add     = document.getElementById('add');
let sub     = document.getElementById('sub');
let mul     = document.getElementById('mul');
let div     = document.getElementById('div');
let equal   = document.getElementById('equal');
let clear   = document.getElementById('clear');
let dot     = document.getElementById('dot');
const text  = document.getElementById('display');

let result  = '';
let operand2 = '';
let state = false;
let operation = '';

text.textContent = '0';

zero.onclick = function(){
    if(state == false){
        result = result + '0';
        text.textContent = result;
    } else {
        operand2 = operand2 + '0';
        text.textContent = operand2;
    }
}

one.onclick = function(){
    if(state == false){
        result = result + '1';
        text.textContent = result;
    } else {
        operand2 = operand2 + '1';
        text.textContent = operand2;
    }
}
two.onclick = function(){
    if(state == false){
        result = result + '2';
        text.textContent = result;
    } else {
        operand2 = operand2 + '2';
        text.textContent = operand2;
    }
}
three.onclick = function(){
    if(state == false){
        result = result + '3';
        text.textContent = result;
    } else {
        operand2 = operand2 + '3';
        text.textContent = operand2;
    }
}
four.onclick = function(){
    if(state == false){
        result = result + '4';
        text.textContent = result;
    } else {
        operand2 = operand2 + '4';
        text.textContent = operand2;
    }
}
five.onclick = function(){
    if(state == false){
        result = result + '5';
        text.textContent = result;
    } else {
        operand2 = operand2 + '5';
        text.textContent = operand2;
    }
}
six.onclick = function(){
    if(state == false){
        result = result + '6';
        text.textContent = result;
    } else {
        operand2 = operand2 + '6';
        text.textContent = operand2;
    }
}
seven.onclick = function(){
    if(state == false){
        result = result + '7';
        text.textContent = result;
    } else {
        operand2 = operand2 + '7';
        text.textContent = operand2;
    }
}
eight.onclick = function(){
    if(state == false){
        result = result + '8';
        text.textContent = result;
    } else {
        operand2 = operand2 + '8';
        text.textContent = operand2;
    }
}
nine.onclick = function(){
    if(state == false){
        result = result + '9';
        text.textContent = result;
    } else {
        operand2 = operand2 + '9';
        text.textContent = operand2;
    }
}
dot.onclick = function(){
    if(state == false){
        result = result + '.';
        text.textContent = result;
    } else {
        operand2 = operand2 + '.';
        text.textContent = operand2;
    }
}

function addition(a, b){
    return parseFloat(a) + parseFloat(b);
}

function subtraction (a, b){
    return parseFloat(a) - parseFloat(b);
}

function multiplication (a, b){
    return parseFloat(a) * parseFloat(b);
}

function division (a, b){
    return parseFloat(a) / parseFloat(b);
}



add.onclick = function(){
    operation = '+';
    state = true;
}
sub.onclick = function(){
    operation = '-';
    state = true;
}
mul.onclick = function(){
    operation = '*';
    state = true;
}
div.onclick = function(){
    operation = '/';
    state = true;
}
equal.onclick = function(){
    sign = operation;
    switch(sign){
        case '+':
            operation = '+';
            console.log('add');
            result = addition(result, operand2);
            console.log(result);
            operand2 = '';
            break;
        case '-':
            operation = '-';
            console.log('sub');
            result = subtraction(result, operand2);
            console.log(result);
            operand2 = '';
            break;
        case '*':
            operation = '*';
            console.log('mul');
            result = multiplication(result, operand2);
            console.log(result);
            operand2 = '';
            break;
        case '/':
            operation = '/';
            console.log('div');
            result = division(result, operand2);
            console.log(result);
            operand2 = '';
            break;
    }
    text.textContent = result;
}

clear.onclick = function(){
    result = '';
    operand2 = '';
    operation = '';
    state = false;
    text.textContent = '0';
}


console.log(result);