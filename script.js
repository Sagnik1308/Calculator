function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
let x=5,y=3;
function operate(operator,x,y){
    if (operator=='+'){
        console.log(add(x,y));
    }else if (operator=='-'){
        console.log(subtract(x,y));
    }else if (operator=='*'){
        console.log(multiply(x,y));
    }else if (operator=='/'){
        console.log(divide(x,y));
    }
}
