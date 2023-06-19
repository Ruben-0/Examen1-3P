function calcularfactorial() {
    var numero = document.getElementById('numero').value;
    var resultado = 1;
    for (var i = 1; i <= numero; i++) {
        resultado = resultado * i;
    }
    document.getElementById('textoResultado').innerHTML = `El factorial del numero ${numero} es: ${resultado}`;
}