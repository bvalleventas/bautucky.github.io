let boton = document.getElementById("mi-boton");

boton.addEventListener("click", function() {
   boton.textContent= "clickeado";
   boton.style.background = "#10fb14";
   boton.style.color = "#222222";
});

let temaoscuro = false;

let botontema = document.getElementById("tema-oscuro");

botontema.addEventListener ("click", function() {
    if (temaoscuro === false) {
        document.body.style.backgroundColor= "#222222";
        document.body.style.color = "#ffffff";
        temaoscuro= true;
    } else {
        document.body.style.backgroundColor = "#f0f0f0";
        document.body.style.color = "#222222";
        temaoscuro= false;
    }
});