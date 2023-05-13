
function romanoAEntero(romano) {

    // Crear objeto con numeros romanos y sus valores numericos
    const tablaRomanos = {

        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1

    };

    // Crear una variable para almacenar el resultado
    let resultado = 0;

    // Recorrer numero romano letra a letra
    for(let i=0;i<romano.length;i++){
        console.log(romano[i], tablaRomanos[romano[i]]);

        // Si la letra actual es la ultima o si el valor de la siguiente letra es menor o igual del actual,
        //entonces añadir el valor del resultado
        if(i === romano.length -1 || tablaRomanos[romano[i+1]] <= tablaRomanos[romano[i]]){
            resultado += tablaRomanos[romano[i]];
        } else {
        // Si no, restar el valor de la letra actual al resultado
        resultado -= tablaRomanos[romano[i]];
        }
    };
    
    // Devolver resultado
    return resultado;
};

console.log(romanoAEntero("MLDVXI")) // 1456