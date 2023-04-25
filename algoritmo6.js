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

function sumArray(arr) {
    let sum = 0; // Se inicializa una variable 'sum' con un valor de 0
    for (let i = 0; i < arr.length; i++) { // Se utiliza un bucle 'for' para recorrer la matriz
      sum += Number(arr[i]); // Se agrega a la variable 'sum' cada valor de la matriz 'arr' convertido en un número usando la función 'Number()'
    }
    return sum; // Devuelve la suma de todos los valores como un número
  }
//   function sumArray(arr) declara una función llamada sumArray que toma un argumento arr, que se espera que sea una matriz de valores numéricos como cadenas de texto o números.
  
//   let sum = 0; inicializa una variable llamada sum con un valor de 0. Esta variable se utiliza para acumular la suma de los valores de la matriz.
  
//   for (let i = 0; i < arr.length; i++) { establece un bucle for que recorre los elementos de la matriz. La variable i se inicializa en 0, el bucle continúa mientras i sea menor que la longitud de la matriz arr, y se incrementa en 1 en cada iteración.
  
//   sum += Number(arr[i]); agrega el valor actual de la matriz arr convertido a un número a la variable sum en cada iteración del bucle. La función Number() se utiliza para convertir el valor a un número antes de sumarlo a la variable sum.
  
//   return sum; devuelve la variable sum que contiene la suma de todos los valores de la matriz como un número.
  
//   Espero que esto ayude a entender cómo funciona la función. ¡Házmelo saber si tienes alguna otra pregunta!