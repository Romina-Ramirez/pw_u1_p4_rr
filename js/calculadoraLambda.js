/*const sumar = (a, b) => {
    return a + b;
}*/

const sumar = (a, b) => a + b;

const sumarNumeros = () => document.getElementById('idImpresionResultado').innerHTML = sumar(leerNum('idnum1'), leerNum('idnum2'));

const restar = (a, b) => a - b;

const restarNumeros = () => document.getElementById('idImpresionResultado').innerHTML = restar(leerNum('idnum1'), leerNum('idnum2'));

const multiplicar = (a, b) => a * b;

const multiplicarNumeros = () => document.getElementById('idImpresionResultado').innerHTML = multiplicar(leerNum('idnum1'), leerNum('idnum2'));

const dividir = (a, b) => a / b;

const dividirNumeros = () => document.getElementById('idImpresionResultado').innerHTML = dividir(leerNum('idnum1'), leerNum('idnum2'));

const leerNum = (idCampo) => parseInt(document.getElementById(idCampo).value);

const mostrar = (operacion) => document.getElementById('idImpresionResultado').innerHTML = operacion;

const eliminarElemento = () => {
    document.getElementById('idEliminar').remove();
    console.log(document.getElementById('idEliminar'))
    console.log('Test')
}

const insertarElemento = () => document.getElementById('elemento').innerHTML = '<strong>Importante</strong>';

const conceptosjs = () => {

    //Declaración de variables
    //var   (ya no es comunmente utilizada)
    //let   (es mucho más eficiente)
    //const 

    var variable1 = "Abc";
    var variable2 = 1;

    let variable3 = "Def";
    let variable4 = 2;

    const variable5 = "Ghi";
    const variable6 = 3

    console.log(variable3);

    //Declaración de arreglos
    const diasSemana = ['Lunes', 'Martes', 'Miercoles']
    console.log(diasSemana);
    console.log(diasSemana[0]);
    diasSemana.push('Jueves')
    diasSemana.push('Viernes')
    console.log(diasSemana)

    const diasFinSemana = ['Sabado', 'Domingo'];
    console.log(diasSemana.concat(diasFinSemana));
    const diasCompleto = diasSemana.concat(diasFinSemana);
    console.log(diasCompleto);

    for (const dia of diasCompleto) {
        console.log(dia);
    }

    //Declaración de objetos
    const persona = {
        nombre: 'Romina',
        apellido: 'Ramírez',
        edad: 21,
        ciudad: 'Piñas'
    }

    console.log(persona);

    const persona2 = {
        nombre: 'Maite',
        apellido: 'Tapia',
        edad: 18,
        ciudad: 'Piñas',
        vehiculo: {
            marca: 'Audi',
            modelo: 'R8',
            anio: 2023
        }
    }

    console.log(persona2);

    /*const nombre = [0,1,2];
    console.log(nombre);
    nombre[1] = 3;
    console.log(nombre);*/

    //Desestructuración de arreglos (Descomposición de un elemento JS)
    const dias2 = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
    const [dia1, dia2, dia3, dia4] = dias2;
    console.log(dia2);
    console.log(dia4);

    const [d1, d2, d3, d4, d5] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
    console.log(d1);
    console.log(d5);

    //Desestructuración de objetos
    const persona3 = {
        nombre: 'Romina',
        apellido: 'Ramírez',
        edad: 21,
        ciudad: 'Piñas'
    }

    const { nombre, ciudad } = persona3;
    console.log(nombre);
    console.log(ciudad);

    const persona4 = {
        nombre: 'Maite',
        apellido: 'Tapia',
        edad: 18,
        ciudad: 'Piñas',
        vehiculo: {
            marca: 'Audi',
            modelo: 'R8',
            anio: 2023
        }
    }

    const { vehiculo } = persona4;
    console.log(vehiculo);
    const { marca } = vehiculo;
    console.log(marca);

    console.log(persona4.vehiculo.modelo);

}

