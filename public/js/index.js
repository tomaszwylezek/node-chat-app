const socket = io();

socket.on("connect", function () {
  console.log("connected");
});

socket.on("disconnect", function () {
  console.log("disconnect");
});

socket.on("newMessage", function (message) {
  const $li = $("<li></li>");
  $li.text(`${message.from}: ${message.text}`);

  $("#messages").append($li);
});

socket.on("newLocationMessage", function (message) {
  const $li = $("<li></li>");
  const $a = $("<a target='_blank' >My current location</a>");

  $li.text = `${message.from}`;
  $a.attr("href", message.url);
  $li.append($a);
  $("#messages").append($li);
});

$("#message-form").on("submit", function (e) {
  e.preventDefault();

  socket.emit(
    "createMessage",
    {
      from: "User",
      text: $('input[name="message"]').val()
    },
    function () {
    }
  );
});

const locationButton = $("#send-location");

locationButton.on("click", function (e) {
  if (!navigator.geolocation) {
    return alert("Geolocation not supported by your browser.");
  }

  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log(position);

      socket.emit("createLocationMessage", {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    },
    function (err) {
      alert("Unable to fetch location");
    }
  );
});
