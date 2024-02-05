console.log("Array esimerkki");

const bookArray=[
    {'id_book':1, 'name':"Tietokannat", 'author':"Mikko Virtanen",'isbn':"12345678" },
    {'id_book':2, 'name':"C++", 'author':"Liisa Virtanen",'isbn':"333333333" },
    {'id_book':3, 'name':"JavaScript", 'author':"Matti Mainio",'isbn':"888888888" }
];

console.log(bookArray);
console.log(typeof(bookArray));
console.log("bookArrayn eka rivi");
console.log(bookArray[0]);
console.log("Ensimmäisen kirjan nimi");
console.log(bookArray[0]["name"]);
console.log("bookArrayn rivien määrä");
console.log("kaikkien kirjojen nimet");
for(let x=0; x<bookArray.length; x++){
    console.log(bookArray[x]["name"]);
}
