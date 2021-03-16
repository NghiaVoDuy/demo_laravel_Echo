require('./bootstrap');

import Echo from 'laravel-echo';

window.io = require('socket.io-client');

if(typeof(io) != 'undefined'){ //check if io loaded
    //init Echo
    window.echo = new Echo({
        transports: ['websocket', 'polling'],
        namespace: 'App.Events',
        broadcaster: 'socket.io',
        host: `${window.location.protocol}//${window.location.hostname}:6001`
    });

    //bind our events
    window.echo.connector.socket.on('connect', function(){
        console.log('connected', window.echo.socketId());
    });
    window.echo.connector.socket.on('disconnect', function(){
        console.log('disconnected');
    });
    window.echo.connector.socket.on('reconnecting', function(attemptNumber){
        console.log('reconnecting', attemptNumber);
    });
}