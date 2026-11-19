
const slides = document.querySelectorAll(".slide");
const anterior = document.getElementById("anterior");
const proximo = document.getElementById("proximo");

let indiceAtual = 0;

function mostrarSlide(indice) {
    slides.forEach(slide => {
        slide.classList.remove("ativo");
    });

    slides[indice].classList.add("ativo");
}

function proximaFoto() {
    indiceAtual++;

    if (indiceAtual >= slides.length) {
        indiceAtual = 0;
    }

    mostrarSlide(indiceAtual);
}

function fotoAnterior() {
    indiceAtual--;

    if (indiceAtual < 0) {
        indiceAtual = slides.length - 1;
    }

    mostrarSlide(indiceAtual);
}

if (slides.length > 0) {
    mostrarSlide(indiceAtual);

    if (proximo) {
        proximo.addEventListener("click", proximaFoto);
    }

    if (anterior) {
        anterior.addEventListener("click", fotoAnterior);
    }

    setInterval(proximaFoto, 3000);
}


const planeta = document.getElementById("planeta");
const mensagem = document.getElementById("mensagem-planeta");

if (planeta && mensagem) {

    planeta.addEventListener("click", () => {

        planeta.classList.toggle("girando");

        if (planeta.classList.contains("girando")) {
            mensagem.textContent = "Explorando meu mundo! 🌎";
        } else {
            mensagem.textContent = "Clique para explorar meu mundo!";
        }

    });

}