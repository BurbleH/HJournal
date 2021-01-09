function SetEntry() {
  var t = new Date()
  var content = document.getElementById("inputarea").innerHTML();
  var timething = t.getMonth() + 1 + "." + t.getDate() + "." + t.getFullYear();
  localStorage.setItem(timething, content);
  root = localStorage.getItem("ROOT");
  localStorage.setItem("ROOT",root + ",,"+timething);
  read();
}
function setup() {
  localStorage.clear();
  localStorage.setItem("ROOT", "");
}
function read() {
  if (!localStorage.getItem("ROOT")) {
    setup();
  }
    var storelace = document.getElementById("record");
  var storeRoot = window.localStorage.getItem('ROOT');
  if (storeRoot == "") {
    storelace.innerHTML = "<p class='javagen'>You haven't put anything yet</p>";
  }
  rootlist = String(localStorage.getItem("ROOT")).split(',,');
}

read();