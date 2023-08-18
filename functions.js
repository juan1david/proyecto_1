//Define la funcion sumar (add)
function add(a,b) {
    return a + b;
}

//Define la funcion restar (substract)
function substract(a,b) { 
    return a - b;
}

//Define la funcion multiplicar (multiply)
function multiply(a,b) {
    return a * b;
}

//Define la funcion dividir (divide)
function divide(a,b) {
 if (b == 0)  {
        return "error: no se puede dividir entre cero"
    } else {
        return a / b;
    }

    }

exports.add=add;
exports.substract=substract;
exports.multiply=multiply;
exports.divide=divide; 