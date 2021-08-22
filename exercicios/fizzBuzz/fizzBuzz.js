function fizzBuzz (numero) {
    if (typeof numero !== 'number') return numero;

    if (numero % 3 === 0 & numero % 5 === 0) return "FizzBuzz";

    if (numero % 3 === 0) return "Fizz";

    if (numero % 5 === 0) return "Buzz";

    // if (numero % 3 !== 0 & numero % 3 !== 0 ) 
    return numero;
    
}

for (let num = 0; num <= 100; num++) {
    console.log(num, fizzBuzz(num))
}