function leerNum(idCampo) {
    return parseInt(document.getElementById(idCampo).value);
}

function mostrar(operacion) {
    return document.getElementById('idImpresionResultado').innerHTML = operacion;
}

function sumar(a, b) {
    return a + b;
}

function sumarNumeros() {
    document.getElementById('idImpresionResultado').innerHTML = sumar(leerNum('idnum1'), leerNum('idnum2'));
}

function restar(a, b) {
    return a - b;
}

function restarNumeros() {
    document.getElementById('idImpresionResultado').innerHTML = restar(leerNum('idnum1'), leerNum('idnum2'));
}

function multiplicar(a, b) {
    return a * b;
}

function multiplicarNumeros() {
    document.getElementById('idImpresionResultado').innerHTML = multiplicar(leerNum('idnum1'), leerNum('idnum2'));
}

function dividir(a, b) {
    return a / b;
}

function dividirNumeros() {
    document.getElementById('idImpresionResultado').innerHTML = dividir(leerNum('idnum1'), leerNum('idnum2'));
}

function eliminarElemento(){
    document.getElementById('idEliminar').remove();
    console.log(document.getElementById('idEliminar'))
    console.log('Test')
}

function insertarElemento(){
    document.getElementById('elemento').innerHTML = '<strong>Importante</strong>';
}