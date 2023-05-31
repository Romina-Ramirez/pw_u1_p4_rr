var resultadoMostrado = false;

// Muestra el elemento que se va ingresando en el label
function mostrar(elemento) {
  var pantalla = document.getElementById("pantalla");
  var elementoActual = pantalla.innerHTML;

  if (resultadoMostrado == true) {
    pantalla.innerHTML = elemento;
    resultadoMostrado = false;
  } else {
    pantalla.innerHTML += elemento;
  }
}

// Realiza el calculo del label completo con la función eval() que evalua una cadena de texto y la ejecuta como si fuera una expresión válida
function calcular() {
  var pantalla = document.getElementById("pantalla");
  var expresion = pantalla.innerHTML;
  var resultado;
  try {
    resultado = eval(expresion);
    if (isNaN(resultado)) {
      throw new Error("Invalid expression");
    }
    pantalla.innerHTML = resultado;
  } catch (error) {
    pantalla.innerHTML = "ERROR";
  }
  resultadoMostrado = true;
}