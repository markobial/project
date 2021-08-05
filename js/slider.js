var slider = document.getElementById("propPrice");
var output = document.getElementById("price");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

var slider = document.getElementById("propType");
var output = document.getElementById("type");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

var slider = document.getElementById("propArea");
var output = document.getElementById("area");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}