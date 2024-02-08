var slider = document.getElementById("fontSize");
var output = document.getElementById("fontSizePreview");
var preview1 = document.getElementById("textPreview1");
var preview2 = document.getElementById("textPreview2");
var preview3 = document.getElementById("textPreview3");
var preview4 = document.getElementById("textPreview4");
var kerning = document.getElementById("fontKerning");

output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
  preview1.style.fontSize = this.value + "px";
  preview2.style.fontSize = this.value + "px";
  preview3.style.fontSize = this.value + "px";
  preview4.style.fontSize = this.value + "px";

};

function changeFontSize(number) {
  output.innerHTML = number;
  slider.value = number;
  preview1.style.fontSize = number + "px";
  preview2.style.fontSize = number + "px";
  preview3.style.fontSize = number + "px";
  preview4.style.fontSize = number + "px";
}

function toggleKerning() {
  if (kerning.checked == true){
    preview1.style.fontKerning = "normal";
    preview2.style.fontKerning = "normal";
    preview3.style.fontKerning = "normal";
    preview4.style.fontKerning = "normal";
    } else {
    preview1.style.fontKerning = "none";
    preview2.style.fontKerning = "none";
    preview3.style.fontKerning = "none";
    preview4.style.fontKerning = "none";
    }
}
