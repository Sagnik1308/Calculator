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
function operate(operator,x,y){
    if (operator=='+'){
        return add(x,y);
    }else if (operator=='-'){
        return subtract(x,y);
    }else if (operator=='*'){
        return multiply(x,y);
    }else if (operator=='/'){
        return divide(x,y);
    }
}
let display="",result=0,x=0,y=0,op='';
const outWindow=document.querySelector('.outer-display');
const innerWindow=document.querySelector('.inner-display');
const btns=document.querySelectorAll('button');
btns.forEach(btn=>btn.addEventListener('click',function evaluate(e){
    const ch=e.target.value;
    if (ch!='=') display+=ch;
    outWindow.textContent=display;
    if (ch>='0' && ch<='9'){
        result+=parseInt(ch);
        if (x==0){
            x=result;
        }else{
            y=parseInt(ch);
        }
    }else if (ch=='='){
        result=operate(op,x,y);
        innerWindow.textContent=result;
        x=result;
        y=0;
        result=0;
    }else{
        if (y!=0){
            result=operate(op,x,y);
            innerWindow.textContent=result;
            x=result;
            y=0;
            result=0;
        }
        op=ch;
    }
}));