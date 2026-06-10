let boton = document.getElementById("mi-boton");

boton.addEventListener("click", function() {
   boton.textContent= "clickeado";
   boton.style.background = "#10fb14";
   boton.style.color = "#222222";
});

let temaoscuro = false;

let botontema = document.getElementById("tema-oscuro");

botontema.addEventListener ("click", function() {
    document.body.classList.toggle("oscuro");
});