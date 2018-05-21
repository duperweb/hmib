// global variable
var ext = ".jpg";
"use strict";
import artistListImg from "./art.js";
console.log(artistListImg);

// targetting element to use;
let myInputImgages = document.getElementById("myInputImgages");
var datalist = document.getElementById('selectedImages');
var dataChild = datalist.children;
const searchButton = document.getElementById("search");
let id_photo = document.getElementById("id_photo");
var beginning = document.getElementsByClassName("beginning-life")[0];

// event for these element
//myInputImgages.addEventListener("change", changeData)
searchButton.addEventListener("click", changeData);

const text = `li fet nan port-salut yon zon an sid ayiti, li komanse chante ak yon group ,li soti mizk`

// the function run or execute
function changeData() {
    if (myInputImgages.value) {
        if (ext != "jpg") {
            ext = ".jpeg";
            id_photo.src = "./img/art/" + myInputImgages.value + ext;
        }
    }
}