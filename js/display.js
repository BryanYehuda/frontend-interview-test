const preview = document.getElementById('showLogo');
const editor = document.getElementById('showEditor');

editor.addEventListener('input', (event) => {
  console.log(event);
  preview.textContent = event.target.value;
})

 function displayDefault(){
    logoName = "LogoMaker";
    document.getElementById("showLogo").innerHTML = logoName;
 }