addEventListener("DOMContentLoaded", (e)=>{
    //Operadores de comparacion
    //Estrictamente Igual: Devuelve un valor booleano true si los operandos son del mismo tipom.
    let num1 = Number(prompt("Digita un numero por favor: "));
    let num2 = Number(prompt("Digita un segundo numero por favor: "));
    console.log(`Dados los numeros ${num1} y ${num2}`);
    console.log(`El Numero 1 y Numero 2 son estrictamente iguales?. True = verdadero, False = Falso`);
    console.log(num1===num2);
    console.log(`El Numero 1 es estrictamente igual a 5?. True = verdadero, False = Falso`);
    console.log(num1===5);
})