// targetting element to use;
let myInputImgages = document.getElementById("myInputImgages");
const searchButton = document.getElementById("search");
let id_photo = document.getElementById("id_photo");

// event for these element
searchButton.addEventListener("click", changeData);

// the function run or execute
function changeData() {
    let ext = ".jpg" ? ".jpg" : ".jpeg"
    if (myInputImgages.value) {
        if (ext != "jpg") {
            ext = ".jpeg";
            id_photo.src = "./img/art/" + myInputImgages.value + ext;
        }
    }
}

const subHeading = document.getElementsByClassName("subHeading");
for (let i = 0; i < subHeading.length; i++) {
    subHeading[i].addEventListener("click", showOn);
}

function showOn() {
    // this refer to the subheading clicked
    if (this.nextElementSibling.className == "") {
        this.nextElementSibling.className = "hide";
    } else {
        this.nextElementSibling.className = "";
    }

}


    function openSlideMenu(){
      document.getElementById('side-menu').style.width = '250px';
     // document.getElementById('main').style.marginLeft = '250px';
    }

    function closeSlideMenu(){
      document.getElementById('side-menu').style.width = '0';
      //document.getElementById('main').style.marginLeft = '0';
    }