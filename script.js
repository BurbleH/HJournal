function SetEntry(){
  var t = new Date()
  var content = document.getElementById("inputarea").innerHTML();
  var timething = t.getMonth()+1+"."+t.getDate()+"."+t.getFullYear();
  document.localStorage.setItem(timething,content);
}
function setup(){
  document.localStorage.clear();
  document.localStorage.setItem("ROOT","");
}
function read() {
  if (!document.localStorage.getItem("ROOT")){
    setup();
  }
  var storeRoot = window.localStorage.getItem('ROOT');
  if (storeRoot==""){
    var storelace =document.getElementById("record");
    storelace.appendChild()
  }
}
