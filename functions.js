// Define la función sumar (add)
function add(a, b) {
 //toma dos parámetros, 'a' y 'b', y devuelve la suma de ambos.
    return a + b;
}

// Define la función restar (substract)
function substract(a, b) { 
//toma dos parámetros, 'a' y 'b', y devuelve la resta de 'b' a 'a'.
    return a - b;
}

// Define la función multiplicar (multiply)
function multiply(a, b) {
//toma dos parámetros, 'a' y 'b', y devuelve el producto de ambos.
    return a * b;
}

// Define la función dividir (divide)
function divide(a, b) {
    if (b == 0)  {
        // Verifica si el divisor es cero y devuelve un mensaje de error si es así.
        return "error: no se puede dividir entre cero";
    } else {
        // Realiza la operación de división si el divisor no es cero.
        return a / b;
    }
    //toma dos parámetros, 'a' y 'b', y devuelve el resultado de dividir 'a' entre 'b'.
}

// Exporta las funciones para que estén disponibles para su uso en otros módulos.
exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;
// Exporta todas las funciones para que puedan ser utilizadas en otros archivos. Cada función se asigna a una propiedad en el objeto 'exports'.
