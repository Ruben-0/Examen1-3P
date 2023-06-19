function calcular() {
    var contador = 0;
    var numero = parseInt(document.getElementById('numero').value);
    for (var i = 1; i <= numero; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            document.write(i + "<br>");
            contador++;
        }
    }
    document.write("La cantidad de numeros encontrados son: " + contador + "<br>")
}