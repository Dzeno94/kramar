var cards = [{
    img:"https://www.askramar.com/GetThumb.cshtml?img=/Files/Foto/Vozila/2021/12/461224.JPG&w=436&h=0",
    name:"Mercedes-Benz S 400 D Long 4Matic AMG Line -Novi model-" ,price:"222,990",
    year:2021,
    milage:"26 872",

},{
    img:"https://www.askramar.com/GetThumb.cshtml?img=/Files/Foto/Vozila/2021/12/461224.JPG&w=436&h=0",
    name:"Mercedes-Benz S 400 D Long 4Matic AMG Line -Novi model-" ,price:"222,990",
    year:2021,
    milage:"26 872"

},{
    img:"https://www.askramar.com/GetThumb.cshtml?img=/Files/Foto/Vozila/2021/12/461224.JPG&w=436&h=0",
    name:"Mercedes-Benz S 400 D Long 4Matic AMG Line -Novi model-" ,price:"222,990",
    year:2021,
    milage:"26 872"

},{
    img:"https://www.askramar.com/GetThumb.cshtml?img=/Files/Foto/Vozila/2021/12/461224.JPG&w=436&h=0",
    name:"Mercedes-Benz S 400 D Long 4Matic AMG Line -Novi model-" ,price:"222,990",
    year:2021,
    milage:"26 872"

},{
    img:"https://www.askramar.com/GetThumb.cshtml?img=/Files/Foto/Vozila/2021/12/461224.JPG&w=436&h=0",
    name:"Mercedes-Benz S 400 D Long 4Matic AMG Line -Novi model-" ,price:"222,990",
    year:2021,
    milage:"26 872"

},




]





    
    
    
    

for (let i = 0; i < cards.length; i++) {
    var card = cards[i];
    var div = document.createElement("div");
    div.className="kartica"
document.body.appendChild(div);
    var img = document.createElement("img");
    img.className="Slika"
    div.appendChild(img);
    var ime = document.createElement("h3");
    ime.className="ime";
    div.appendChild(ime);
    var cijena= document.createElement("span");
    cijena.className="cijena";
    div.appendChild(cijena);
    var godina= document.createElement("span");
    godina.className="godina";
    div.appendChild(godina);
    var kilometraza= document.createElement("span");
    kilometraza.className="kilometraza";
    div.appendChild(kilometraza);
    
    img.src=card.img;
   
    ime.innerHTML = `${card.name}<hr>`;
    
    cijena.innerHTML= `CIJENA KM: ${card.price}<br><hr>`;
    
    godina.innerHTML=`GODINA:${card.year}`;
   
    kilometraza.innerHTML=`KILOMETRI:${card.milage}`;




    
    
    
    
    
}






