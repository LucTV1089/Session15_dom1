/// bai tap 1
// document.body.innerHTML = `
//     <li>List item 1</li>
//     <li>List item 2</li>
//     <li>List item 3d</li>    
// `;

// bai tap 2
// let btn = document.getElementById("btn");

// btn.onclick = () => {
//     alert("Xin chao ")
// };
//bai tap 3
// let btn = document.getElementById("btn");
// btn.onclick = () => {
//     document.querySelector("h1").innerText = "text After change";
// };

//bai tap 4
// let btn = document.getElementById("btn");
// btn.onclick = () => {
//     document.querySelector("h1").style.backgroundColor= "yellow";
// };

// bai tap 5

let arr = ["Nguyen Van A","Nguyen Van b","Nguyen Van c"];
let tmp = [];
for (let value of arr){
  tmp.push(`
  <li>${value}</li>
  `);
}