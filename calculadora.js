let op; //variable global
document.querySelector('#sumar').addEventListener('click', () =>{
     op = '+';
     calcular()
});
document.querySelector('#restar').addEventListener('click', () =>{
     op = '-'; 
     calcular()
});
document.querySelector('#multiplicar').addEventListener('click', () =>{
     op = '*';
     calcular()
});
document.querySelector('#dividir').addEventListener('click', () =>{
     op = '/';
     calcular()
});

function calcular(){
    const n1 = parseInt(document.querySelector('#n1').value); //Valor ingresado 1
    const n2 = parseInt(document.querySelector('#n2').value); //Valor ingresado 2

//Si selecciona alguna operación se ejecuta
     let resultado;
     if(op == '+'){
         resultado = n1 + n2;
     }else if( op == '-'){
         resultado = n1 - n2;
     }else if(op == '*'){
         resultado = n1 * n2;
     }else if(op == '/'){
         resultado = n1 / n2;
     }
     document.querySelector('#resultado').innerHTML = resultado;
     return
;}