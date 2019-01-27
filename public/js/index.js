const socket = io();

socket.on("connect", function() {
  console.log("connected");

  socket.emit("createMessage", {
    from: "Andrew",
    text: "yes it works"
  });
});

socket.on("disconnect", function() {
  console.log("disconnect");
});

socket.on("newMessage", function(message) {
  console.log("newMessage", message);
});
