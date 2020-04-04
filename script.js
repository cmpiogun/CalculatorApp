const number = document.querySelectorAll('.number');
const operand = document.querySelectorAll('.operand');
const equals = document.querySelector('.equals');
const reset = document.querySelector('.reset');
const ce = document.querySelector('.ce');
const point = document.querySelector('.point');
const input = document.querySelector('input');
let count = 0;
let num = 0;
let result = 0;
let numArray = [];
let opeArray = [];
let anumArray = [];

function init(){
    input.value = numArray = [];
}

//add click events to the numbers
for(let i = 0; i < number.length; i++){
    number[i].addEventListener('click', function(e){    
        if(count < 2){
            let integer = number[i].innerHTML;
            runNumber(integer);
        }else if(count >= 2){
            let integer = number[i].innerHTML;
            runSecNumber(integer);
            runSecEquals(result);
        }
    });
}

//add click events to the operands
for(let i = 0; i < operand.length; i++){
    operand[i].addEventListener('click', function(e){
       let operation = operand[i].innerHTML;
       if(opeArray.length>=1){
            opeArray.push(operation);
            result = runEquals(result);
            anumArray = [];
            count++;
       }else{
            opeArray.push(operation);
            anumArray = [...numArray];
            numArray = [];
            count++;
       }
       
    });
}

//add click events to the equals sign
equals.addEventListener('click', function(){
    runEquals(result);  
});

function runNumber(int){  
    numArray.push(int);
    input.value = numArray.join("");
    num == int;

    return int;
}

function runSecNumber(int){  
    anumArray.push(int);
    input.value = anumArray.join("");
    num == int;

    return int;
}

function runEquals(result){
    let value1 = "";
    let value2 = "";
    let op = "";
 
    for (let i = 0; i < numArray.length; i++) {
      value1 += numArray[i];
    }
    for (let i = 0; i < anumArray.length; i++) {
      value2 += anumArray[i];
    }
    //for(let i = 0; i < opeArray.length; i++) {
    //    op += opeArray[i];
   // }
   op = opeArray[0];
    
    //use if statement to access the op operator then assign operation 
    if(op === "+"){
        let sum = parseFloat(value1) + parseFloat(value2) + parseFloat(result);
        input.value = sum;
        return sum;
    }else if(op === "/"){
        let sum = parseFloat(value1) / parseFloat(value2) + parseFloat(result);
        input.value = sum;
        return sum;
    }else if(op === "-"){
        let sum = parseFloat(value1) - parseFloat(value2) + parseFloat(result);
        input.value = sum;
        return sum;
    }else if(op === "*"){
        let sum = parseFloat(value1) * parseFloat(value2) + parseFloat(result);
        input.value = sum;
        return sum;
    }else if(op === "%"){
        let sum = parseFloat(value1) % parseFloat(value2) + parseFloat(result);
        input.value = sum;
        return sum;
    }

    return sum;

}

function runSecEquals(){
    let ope = opeArray[opeArray.length-1];

    if(ope === "+"){
        let sums = parseFloat(result) + parseFloat(num);
        input.value = sums;
    }else if(ope === "-"){
        let sums = parseFloat(result) - parseFloat(num);
        input.value = sums;
    }else if(ope === "/"){
        let sums = parseFloat(result) / parseFloat(num);
        input.value = sums;
    }else if(ope === "*"){
        let sums = parseFloat(result) * parseFloat(num);
        input.value = sums;
    }else if(ope === "%"){
        let sums = parseFloat(result) % parseFloat(num);
        input.value = sums;
    }
}

reset.addEventListener('click', function(){
    input.value = numArray = []
});

ce.addEventListener('click', function(){

});

point.addEventListener('click', function(){
    let decimalPoint = point.innerHTML;
    numArray.push(decimalPoint);
    input.value = numArray.join("");
});


