/* Exercício realizado para a plataforma Digital Innovation One.*/

let frase = 'Roma me tem amor';
let aux = frase;

frase = frase.toLocaleLowerCase(); // Métodos da string
frase = frase.split(" ").join("");  // ['roma','me','tem','amor'] 'romametemamor'

let frase_invertida = frase.split("").reverse().join(""); // 'romametemamor' - invertido
// frase_invertida = frase_invertida.split(" ").join("");

if (frase == frase_invertida) {
  alert("A " + aux + " é uma palíndromo");
}
else {
  alert("A " + aux + " não é uma palíndromo");
}