function rectangulo (base, altura) {
    let area_rectangulo = (base * altura);
    return area_rectangulo;
    }
console.log(rectangulo (5, 2));

function triangulo (base, altura) {
    let area_triangulo = ((base * altura)/2);
    return area_triangulo;
    }
console.log(triangulo (6, 3));

function largoDelArray(lista) {
    return lista.length;

}
console.log(largoDelArray([1,4,6]));

function cantidadDeLetras(palabra) {
    return palabra.length;
}
console.log(cantidadDeLetras("Viernes"));

function dolarHoy (precio_arg) {
    return (precio_arg / 1000);
}
console.log(dolarHoy(3500))

function precioFinal (precio) {
    return (precio + ((precio * 21)/100));
}
console.log(precioFinal(1500))

function mitad(numero){
    return (numero/2);
}
console.log(mitad(25))



