var el = document.getElementById("table");
var el2 = document.getElementById("table2");
var el3 = document.getElementById("table3");
el2.style.display = "none";
el3.style.display = "none";

function HideTable() {
  el.style.display = "none";
  el2.style.display = "none";
  el3.style.display = "table";
}
function HideTable2() {
  el.style.display = "none";
  el3.style.display = "none";
  el2.style.display = "table";
}
function HideTable3() {
  el2.style.display = "none";
  el3.style.display = "none";
  el.style.display = "table";
}
