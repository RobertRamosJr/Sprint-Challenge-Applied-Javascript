// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
let headerDiv = document.createElement("div");
headerDiv.classList.add("header");
let headerSpan1 = document.createElement("span");
headerSpan1.classList.add("date");
headerSpan1.textContent = "SMARCH 28, 2019";
let headerH1 = document.createElement("h1");
headerH1.textContent = "Lambda Times";
let headerSpan2 = document.createElement("span");
headerSpan2.classList.add("temp");
headerSpan2.textContent = "98°";

headerDiv.appendChild(headerSpan1);
headerDiv.appendChild(headerH1);
headerDiv.appendChild(headerSpan2);

return headerDiv;
}

let headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(Header());
console.log(Header());
