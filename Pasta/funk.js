let primaries = document.querySelectorAll(".text-primary")
let h1 = document.querySelector("h1")
h1.innerHTML = "PASTA PASTA PASTA"

// let dictionary = document.getElementById()


for(let primary of primaries){
    primary.addEventListener("mouseover", () => alert("Ooh I love pasta me"))
}