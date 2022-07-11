$(document).ready(function () {
    
    let resultado = 0;
    let cont = 0;


    $("#boton1").click(function (e) {
        cont++;
        let distancia = $("#first_name1").val();
        let tiempo = $("#first_name2").val();
        e.preventDefault();
        resultado = distancia/tiempo;
        resultado = resultado.toFixed(5) 
         $("#first_name3").val(resultado + " m/s");
         $("#tabla").append('<tr><td text-black> n: '+cont+ '</td><td>' + resultado + ' m/s </td><td>' + distancia+ ' m </td><td>' +tiempo+ ' s </td></tr>');
    });
    $("#boton2").click(function (e) { 
        e.preventDefault();
        $("#first_name1").val(` `)
        $("#first_name2").val(` `);
        $("#first_name3").val(` `);
    });
});