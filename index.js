const preview = document.getElementById('showLogo');
const editor = document.getElementById('showEditor');
const size = document.getElementById("showSize");
const slider = document.getElementById('slider');
const color = document.getElementById('colorEditor');
const background = document.getElementById('backgroundEditor');

editor.addEventListener('input', (event) => {
  preview.textContent = event.target.value;
})

function changeSizeBySlider() {
  var fontValue = slider.value;
  var px = "px";
  preview.style.fontSize = fontValue.concat(px);
  size.innerHTML = "Logo Size is " + String(preview.style.fontSize);
}

color.addEventListener('input', (event) => {
  preview.style.color = event.target.value;
})

background.addEventListener('input', (event) => {
  preview.style.backgroundColor = event.target.value;
})

 function displayDefault(){
  logoName = "LogoMaker";
  logoSize = "25px";
  preview.innerHTML = logoName;
  size.innerHTML = "Logo Size is " + logoSize;
}

function downloadimage() {
  html2canvas(preview, { allowTaint: true }).then(function (canvas) {
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = "logo.jpg";
      link.href = canvas.toDataURL();
      link.target = '_blank';
      link.click();
  });
}

