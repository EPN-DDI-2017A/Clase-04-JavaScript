/**
 * Created by chalosalvador on 12/5/17.
 */
console.log("Hola Mundo!");

$(document).ready(function () {

    var left = $('.left').html();
    console.log(left);
    
    left = $('.left').text();
    console.log(left);
    
    var id_right = $('.right').attr('class');
    console.log(id_right);

    var nombre = $('form [name="nombre"]').val();
    console.log("Nombre: " + nombre);

    var apellido = $('#apellido').val();
    console.log("Apellido: " + apellido);


    $('.left').attr('id', 'nuevo_id');
    $('.left').attr('atributo', 'valorDelAtributo');
    $('.left').attr({
        'atributo2': 'valorDelAtributo',
        'atributo3': 'otroValor'
    });

    $('[name^="no"]').val('Nuevo nombre');
    $('#apellido').val('Salvador');

    $('ul').addClass('lista');

    $('ul').css({
        'text-transform': 'uppercase',
        'font-weight': 'bolder'
    });

    $('#main-content').addClass('clase');

    $('#main-content').toggleClass('right');


    $('ul').append('<li>Seis</li>');
    $('ul').prepend('<li>Cero</li>');

    $('ul').before('<div>Titulo</div>');
    $('ul').after('<div>Pie</div>');

    // $('ul .eliminar').remove();

    console.log($('ul').find('a').text());

    $('ul').children('li').addClass('resaltado');

    $('#enviar').on('click', function (event) {
        event.preventDefault();
        var nombre = $('[name="nombre"]').val();
        alert(nombre);
    });

    $('#mostrar').on('click', function (e) {
        e.preventDefault();
        $('img').fadeIn(1000);
    });

    $('#ocultar').on('click', function (e) {
        e.preventDefault();
        $('img').fadeOut(3000);
    });

    $('#toggle').on('click', function (e) {
        e.preventDefault();

        $('img').toggle();
    })
});