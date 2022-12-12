function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    if (parseFloat(a)!=parseInt(a) || parseFloat(b)!=parseInt(b)){
        return (a*b).toFixed(2);
    }else{
        return a*b;
    }
}
function divide(a,b){
    if (b==0) return 'Infinity';
    return (a%b==0)?(a/b):(a/b).toFixed(2);
}
function modulo(a,b){
    return a%b;
}
function operate(operator,x,y){
    if (parseInt(x)==parseFloat(x)){
        x=parseInt(x);
    }else{
        x=parseFloat(x);
    }
    if (parseInt(y)==parseFloat(y)){
        y=parseInt(y);
    }else{
        y=parseFloat(y);
    }
    if (operator=='+'){
        return add(x,y);
    }else if (operator=='-'){
        return subtract(x,y);
    }else if (operator=='*'){
        return multiply(x,y);
    }else if (operator=='/'){
        return divide(x,y);
    }else if (operator=='%'){
        return modulo(x,y);
    }
}
let display="",op='',op1='',op2='';
const outWindow=document.querySelector('.outer-display');
const innerWindow=document.querySelector('.inner-display');
const btns=document.querySelectorAll('button');
function evaluate(ch){
    if (!(ch>='0' && ch<='9') && ch!='+' && ch!='-' && ch!='*' && ch!='/' && ch!='.' && ch!='%' && ch!='=' && ch!='C' && ch!='AC' && ch!='Backspace') return;
    if (ch=='Backspace') ch='C';
    if (ch=='.' && op1==''){
        display='0.';
        op1='0';
        outWindow.textContent='0.';
    }else if (ch=='0' && op1==''){
        display='0';
        outWindow.textContent='0';
    }else if (ch!='=' && ch!='C'){
        display+=ch;
        outWindow.textContent=display;
    }
    if (ch>='0' && ch<='9'){
        if (op1=='' || op==''){
            op1+=ch;
        }else{
            op2+=ch;
        }
    }else if (ch=='='){
        op1=operate(op,op1,op2)+'';
        innerWindow.textContent=op1;
        op2='';
        op='';
    }else if (ch=='AC'){
        display='';
        op1='';
        op2='';
        op='';
        outWindow.textContent='0';
        innerWindow.textContent='';
    }else if (ch=='.'){
        if (op1!='' && op==''){
            op1+=ch;
        }else{
            op2+=ch;
        }
    }else if (ch=='C'){
        if (op1!='' && op2=='' && op==''){
            display='';
            op1='';
            op2='';
            op='';
            innerWindow.textContent='';
            outWindow.textContent='0';
        }else if (op2!=''){
            display=display.substring(0,display.length-1);
            op2=op2.substring(0,op2.length-1);
            outWindow.textContent=display;
        }else if (op!=''){
            display=display.substring(0,display.length-1);
            op=op.substring(0,op.length-1);
            outWindow.textContent=display;
        }else{
            display=display.substring(0,display.length-1);
            op1=op1.substring(0,op1.length-1);
            outWindow.textContent=display;
        }
    }
    else{
        if (op2!=''){
            op1=operate(op,op1,op2)+'';
            innerWindow.textContent=op1;
            op2='';
        }
        op=ch;
    }
}
btns.forEach(btn=>btn.addEventListener('click',(e)=>{
    const ch=e.target.value;
    evaluate(ch);
}));
window.addEventListener('keydown',(e)=>{
    const ch=e.key;
    console.log(ch);
    evaluate(ch);
});