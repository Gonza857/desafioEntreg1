function pregAndProm () {
    //pregunto notas
    let nota1 =parseInt(prompt("Dame la primera nota"));
    let nota2 =parseInt(prompt("Dame la segunda nota"));
    let nota3 =parseInt(prompt("Dame la tercera nota"));
    let nota4 =parseInt(prompt("Dame la cuarta nota"));
    let notas = nota1 + nota2 + nota3 + nota4;
    // las promedio
    let promedio = parseInt(notas / 4);
    //llamo a la consola para saber si funciono
    console.log(promedio);
    // retorno el resultado
    return promedio;
}

let entrada;
// se repite hasta que el usuario no quiera ingresar mas alumnos y sus notas
while ((entrada != "esc") && (entrada != "ESC") && (entrada != "Esc")) {
    let alumno = prompt("Nombre y apellido del alumno");
    let materia = prompt("¿Que materia es?");
    // ejecuto la funcion de pedir notas y promediarlas
    let promedioGeneral = pregAndProm();
    // salida de resultado
    alert(`El alumno ${alumno} tiene un promedio de ${promedioGeneral} en ${materia}`);
    // llamada para salir del bucle
    entrada = prompt("Escribe ESC si deseas salir");
}