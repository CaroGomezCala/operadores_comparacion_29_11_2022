addEventListener("DOMContentLoaded", (e)=>{
    //Operadores de comparacion
    //No es Igual: Devuelve un valor booleano true si los operandos no son iguales.
    let num1 = prompt("Digita un numero por favor: ");
    let num2 = prompt("Digita un segundo numero por favor: ");
    console.log(`Dados los numeros ${num1} y ${num2}`);
    console.log(`El Numero 1 y Numero 2 no son iguales?. True = verdadero, False = Falso`);
    console.log(num1==num2);
    console.log(`El Numero 1 no es igual a 5?. True = verdadero, False = Falso`);
    console.log(5!=num1);
})