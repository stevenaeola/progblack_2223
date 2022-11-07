let primaries = document.querySelectorAll(".text-primary");

for(let primary of primaries){
    primary.addEventListener("mouseover", () => alert("Ooh I love pasta me"))
}

let h1 = document.querySelector("h1");
h1.innerHTML="PASTA PASTA PASTA"

let dictionary = document.getElementById("pasta_dictionary");
let newDictElt = document.createElement("li");
dictionary.appendChild(newDictElt);
newDictElt.innerHTML = "Pasta was originally made in China"

let dElts = document.querySelectorAll("#pasta_dictionary > li")

for(let dElt of dElts){
    dElt.addEventListener("click", () => dElt.classList.add("text-danger"))
}
