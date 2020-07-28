//Comando para establecer la conexión
var socket = io();

var searchParams = new URLSearchParams(window.location.search);

console.log(searchParams);

if (!searchParams.has('escritorio')) {
    window.location = "index.html";
    throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
var label = $('small');

console.log("tick : " + escritorio);
$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function() {

    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {

        if (resp === 'No hay Tickets') {
            label.text(' - No hay más tickets');
            alert('No hay más tickets');
            return;
        } else {
            label.text('Ticket ' + resp.numero);
        }
    });

});