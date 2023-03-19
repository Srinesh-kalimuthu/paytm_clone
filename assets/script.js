var log = document.getElementById("myModal");
var btn = document.getElementById("mySbt");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  log.style.display = "block";
}
span.onclick = function() {
  log.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == log) {
    log.style.display = "none";
  }
}