addEventListener("DOMContentLoaded", (e)=>{
    /*Operadores de comparacion
    Menor que: devuelve valor boolean true si el operando izquierdo es menor que el derecho.
    */
    let num1 = Number(prompt("Digita un numero por favor: "));
    let num2 = Number(prompt("Digita un segundo numero por favor: "));
    console.log(`Es el numero ${num1} menor que el numero ${num2}?`);
    console.log(num1<num2);
})