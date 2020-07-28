//Comando para establecer la conexión
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Servidor Conectado');
});

socket.on('disconnect', function() {
    console.log('Desconectado del Servidor');
});

$('button').on('click', function() {

    // console.log('clickeado');
    socket.emit('siguienteTicket', null, function(siguienteTick) {
        label.text(siguienteTick);
    });

});

socket.on('estadoActual', function(ulTicket) {
    label.text(ulTicket.actual);
});