var express = require("express");
var socket = require("socket.io");

var app = express();
var server = app.listen(3000, function(){
    console.log("Server listening on PORT3000.");
});

//Static Files
app.use(express.static('public'));

//SocketIO setup
var io = socket(server);
io.on("connection", function(socket){
    console.log("Made socket connection", socket.id);
    //on.(Name of sent, function to handle data)
    socket.on("chat", function(data){
        //Reemits data recieved to all open sockets
        io.sockets.emit("chat", data);
    })
});
