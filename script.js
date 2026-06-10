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
        document.querySelector(".encabezado").style.backgroundColor = "#ffffff";
        document.querySelector(".encabezado").style.color= "#222222";
        document.querySelectorAll(".tarjeta").forEach(function(tarjeta){
            tarjeta.style.backgroundColor ="#ffffff";
        });
        document.querySelectorAll (".tarjeta p").forEach(function(p){
            p.style.color = "#333333";
        });
        document.querySelectorAll("section > p").forEach(function(p){
            p.style.color ="#ffffff";
        });
        document.querySelectorAll("h3").forEach(function(h3){
            h3.style.color = "#222222";
        });
        document.querySelectorAll("h2").forEach(function(titulo){
            titulo.style.color = "#ffffff";
        });

        temaoscuro= true;
    }   else {
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#222222";
        document.querySelector (".encabezado").style.backgroundColor = "#222222";
        document.querySelector (".encabezado").style.color= "#ffffff";
        document.querySelectorAll(".tarjeta").forEach(function(tarjeta){
            tarjeta.style.backgroundColor = "#222222";
        });
        document.querySelectorAll (".tarjeta p").forEach(function(p){
            p.style.color = "#ffffff";
        });
        document.querySelectorAll("section > p").forEach(function(p){
            p.style.color ="#222222";
        });
        document.querySelectorAll("h3").forEach(function(h3){
            h3.style.color = "#ffffff";
        });
        document.querySelectorAll("h2").forEach(function(titulo) {
            titulo.style.color ="#222222";
        });
        temaoscuro= false;
    }
});