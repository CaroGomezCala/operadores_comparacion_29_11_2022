addEventListener("DOMContentLoaded", (e)=>{
    //Operadores de comparacion
    //DesIgualdad Estricta: Devuelve un valor booleano true si los operandos son del mismo tipo pero NO SON IGUALES
    // o si SON DE DISTINTO TIPO.
    let num1 = Number(prompt("Digita un numero por favor: "));
    console.log(`Has digitado el numero ${num1}`);
    console.log(`El Numero es desigualmente estrictamente 5?. True = verdadero, False = Falso`);
    console.log(num1!==5); 
    console.log(`Es 5 desigualmente estricto de "5"?. True = verdadero, False = Falso`);
    console.log(5!=="5");
    console.log(`La respuesta es true ya que 5 es un numero mientras "5" es un string, por lo tanto son de distinto tipo`);
})