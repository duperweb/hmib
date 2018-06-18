
var artistListImg = [
    {
        alancave: "./img/art/alan.jpeg",
        arly: "./img/art/arly.jpg",
        brutus: "./img/art/brutus.jpg",
        cange: "./img/art/cange.jpg",
        eud: "./img/art/arly.jpeg",
        fantom: "./img/art/arly.jpg",
        frero: "./img/art/frero.jpg",
        izolan: "./img/art/izolan.jpeg",
        jperry:"./img/art/jperry.jpg",
        kenny: "./img/art/kenny.jpg",
        kondagana: "./img/art/kondagana.jpg",
        macd: "./img/art/macd.jpg",
        martelly: "./img/art/martelly",
        michaelguirand: "./img/art/michaelguirand.jpg",
        nickenson: "./img/art/nickenson.jpeg",
        pouchon: "./img/art/pouchon.jpg",
        richie: "./img/art/ritchie.jpg",
        robert_martino: "./img/art/robert_martino.jpg",
    }

];

/* class ArtistList {
    constructor(name, aka, birthday, band, img, city) {
        this.name = name;
        this.aka = aka;
        this.birthday = birthday;
        this.band = band;
        this.city = city;
    }
} */


function Artist(name, aka, birthday, band, img, city) {
    this.name = name;
    this.aka = aka;
    this.birthday = birthday;
    this.band = band;
    this.img = img;
    this.city = city;
}

//export default artistListImg;
var reginald = new Artist("reginald cange", "Pè las");
console.log(reginald);