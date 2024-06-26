$( document ).ready(function() {
    $('#btn').click(function() {
        window.alert("DID YOU JUST CLICK ME?!");
    });
});
function playAudio(url) {
    new Audio(url).play();
  }