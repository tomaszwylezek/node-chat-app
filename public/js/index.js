const socket = io();

socket.on("connect", function() {
  console.log("connected");
});

socket.on("disconnect", function() {
  console.log("disconnect");
});

socket.on("newMessage", function(message) {
  console.log("newMessage", message);
});
