let resultado = fizzbuzz(7);

function fizzbuzz(entrada) {
  if (typeof entrada !== "number") {
    console.log("não é um número");
  } else {
    if (entrada % 3 == 0 && entrada % 5 == 0) {
      console.log("fizzbuzz");
    } else if (entrada % 3 == 0) {
      console.log("fizz");
    } else if (entrada % 5 == 0) {
      console.log("buzz");
    } else {
      console.log(entrada);
    }
  }
}
