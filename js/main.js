//Calcular punto de equilibrio

function puntoDeEquilibrio(){

    //datos
    let valorCf = document.getElementById('cf').value;
    let valorPv = document.getElementById('pv').value;
    let valorCv = document.getElementById('cv').value;

    if (!isNaN(valorCf) && !isNaN(valorPv) && !isNaN(valorCv)){

        //calcular datos
        let calcular = valorCf / (valorPv - valorCv);
        let resultado = Math.round(calcular);

        //muestra resultado
        document.getElementById('resultado').innerHTML = "Tu punto de Equilibrio es: " + resultado + " Uds";
        
    } else {
        document.getElementById('resultado').innerHTML = "Los datos ingresados no son numericos";
    }
    
} 

// Calcular presupuesto

function presupuestar (){
    
    //presupuesto ingresado
    let prespuesto = document.getElementById('presupuesto').value;

    if (!isNaN(prespuesto)){

        //calcular partes
        let primerParte = prespuesto * 0.5;
        let segundaParte = prespuesto * 0.3;
        let terceraParte = prespuesto * 0.2;

        //mostrar resultados
        document.getElementById('parteuno').innerHTML = ('$') + primerParte;
        document.getElementById('partedos').innerHTML = ('$') + segundaParte;
        document.getElementById('partetres').innerHTML = ('$') + terceraParte;

    } else{        
       alert('Porfavor, ingrese solo datos numericos')
    }
}