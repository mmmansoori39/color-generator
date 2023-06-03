let btn = document.getElementById("btn");
let num = Math.floor(Math.random() * 16777215);
let hexNum = "#" + num.toString(16);
function intcolor() {
  document.body.style.backgroundColor = hexNum;
  document.getElementById("cona").innerText = hexNum;
}
intcolor();
function light() {
  num = Math.floor(Math.random() * 16777215);
  hexNum = "#" + num.toString(16);
  document.body.style.backgroundColor = hexNum;
  document.getElementById("cona").innerText = hexNum;
}
// function your(){
//     let btn1=document.getElementById('btn1')
//     let input= document.getElementById('input').value;
//     document.body.style.backgroundColor='#' + input;
//     // document.body.style.backgroundColor=input;
//     document.getElementById('cona').innerText='#' + input;
//     document.getElementById('input').value='';
// }
function your() {
  let btn1 = document.getElementById("btn1");
  let input = document.getElementById("input").value;
  // document.body.style.backgroundColor='#' + input;
  document.body.style.backgroundColor = input;
  document.getElementById("cona").innerText = input;
  document.getElementById("input").value = "";
}

let coloractive = document.getElementById("colorname");
coloractive.addEventListener("click", function () {
  let options = document.querySelectorAll("option");
  let value = coloractive.value;
  let text = coloractive.options[coloractive.selectedIndex].text;
  document.body.style.backgroundColor = value;
  document.getElementById("cona").innerText = text;
  console.log("Jasmine");
});
let codeactive = document.getElementById("codename");
codeactive.addEventListener("change", function () {
  let options = document.querySelectorAll("option");
  let value = codeactive.value;
  let text = codeactive.options[codeactive.selectedIndex].text;
  document.body.style.backgroundColor = value;
  document.getElementById("cona").innerText = text;
});
