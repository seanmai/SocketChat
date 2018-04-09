var socket = io.connect("http://localhost:3000");

var message = document.getElementById("message");
var handle = document.getElementById("handle");
var send = document.getElementById("send");
var output = document.getElementById("output");

//Emit
send.addEventListener("click", function(){
    //emit(Name, Data sent to server)
    socket.emit("chat", {
        message: message.value,
        handle: handle.value
    });
});

//listen
socket.on("chat", function(data){
    output.innerHTML += "<p><strong>" + data.handle + ": </strong>" + data.message + "</p>";
});
