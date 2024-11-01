// funcionalidade que encontra se um número informado pertence à sequência de Fibonacci
function isFibonacci(num) {
    var fib1 = 0;
    var fib2 = 1;
    var nextFib;

    // loop para verificar se o número pertence à sequência
    while (fib1 <= num) {
        if (fib1 === num) {
            return true;
        }
        // atualizaçao dos valores
        nextFib = fib1 + fib2;
        fib1 = fib2;
        fib2 = nextFib;
    }
    
    // se nao for encontrado o valor, ele sera declarado falso
    return false;
}

// defina o numero que deseja ser verificado
var num = parseInt(prompt("Informe um número para verificar se ele pertence à sequência de Fibonacci:"));

// codicional para verificar se o número informado pertence à sequência, aparecer no console do navegador
if (isFibonacci(num)) {
    alert("O número " + num + " pertence à sequência de Fibonacci.");
    console.log("O número " + num + " pertence à sequência de Fibonacci.");
} else {
    alert("O número " + num + " NÃO pertence à sequência de Fibonacci.");
    console.log("O número " + num + " NÃO pertence à sequência de Fibonacci.");
}
