// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// https://www.codewars.com/kata/57eaeb9578748ff92a000009/

const arr = ["1", 2, "3", 4, "5"];
const sum = sumArray(arr); // returns 15 (1 + 2 + 3 + 4 + 5)

function sumArray(arr) {
    return arr.reduce((acc, val) => acc + Number(val), 0);
  }


//   function sumArray(arr) declara una función llamada sumArray que toma un argumento arr, que se espera que sea una matriz de valores numéricos como cadenas de texto o números.

// arr.reduce es un método de matriz que se utiliza para iterar sobre los elementos de una matriz y acumular un valor. El método reduce toma dos argumentos: una función de reducción y un valor inicial. En este caso, la función de reducción es (acc, val) => acc + Number(val), que toma dos argumentos: acc (el acumulador) y val (el valor actual). La función suma el valor actual val al acumulador acc después de convertir val a un número utilizando la función Number(val). El valor inicial del acumulador se establece en 0 usando el segundo argumento de reduce.

// La función reduce devuelve el valor final del acumulador, que es la suma de todos los elementos de la matriz convertidos a números.

// Entonces, en resumen, la función sumArray() toma una matriz de valores numéricos como cadenas de texto o números, y devuelve la suma de esos valores como un número.