function SetEntry() {
  var t = new Date();
  var content = document.getElementById("inputarea").innerHTML;
  var timething = t.getMonth() + 1 + "." + t.getDate(); + "." + t.getFullYear();
  window.localStorage.setItem(timething, content);
  root = window.localStorage.getItem("ROOT");
  window.localStorage.setItem("ROOT",",,"+timething+ root);
  read();
}
function setup() {
  window.localStorage.clear();
  window.localStorage.setItem("ROOT", "");
}
function read() {
  if (!window.localStorage.getItem("ROOT")) {
    setup();
  }
  var storelace = document.getElementById("record");
  var storeRoot = window.localStorage.getItem('ROOT');
  if (storeRoot == "") {
    storelace.innerHTML = "<p class='javagen'>You haven't put anything yet</p>";
  }
    var rootlist = String(localStorage.getItem("ROOT"));
    var x;
    for (x = 0; x < rootlist.length; x++) {
      var litem = rootlist[x];
      var storItem = window.localStorage.getItem(litem)
      var temp = storelace.innerHTML;
      storelace.innerHTML =  temp + "<h3>" + litem + '</h3> <p>' + storItem + "</p>"
    }


}

read();