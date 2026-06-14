const menu = document.getElementById("menu");
const botao = document.querySelector(".menu-btn");

botao.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});

document.addEventListener("click", (e) => {
    if (
        !menu.contains(e.target) &&
        !botao.contains(e.target)
    ) {
        menu.classList.remove("ativo");
    }
});


const imgeSecreta3 = document.getElementById("imagem-secreta-3");
const imgeSecreta4 = document.getElementById("imagem-secreta-4");
let timer;


// esconde img3
imgeSecreta3.addEventListener("pointerdown", () => {
    timer = setTimeout(() => {
        imgeSecreta3.classList.add("ativo");
    }, 1000);
});

function resetarImg3() {
    clearTimeout(timer);
    imgeSecreta3.classList.remove("ativo");
}

imgeSecreta3.addEventListener("pointerup", resetarImg3);
imgeSecreta3.addEventListener("pointerleave", resetarImg3);
imgeSecreta3.addEventListener("pointercancel", resetarImg3);


// esconde img4
imgeSecreta4.addEventListener("pointerdown", () => {
    timer = setTimeout(() => {
        imgeSecreta4.classList.add("ativo");
    }, 1000);
});

function resetarImg4() {
    clearTimeout(timer);
    imgeSecreta4.classList.remove("ativo");
}

imgeSecreta4.addEventListener("pointerup", resetarImg4);
imgeSecreta4.addEventListener("pointerleave", resetarImg4);
imgeSecreta4.addEventListener("pointercancel", resetarImg4);


// previne menu de contexto
imgeSecreta3.addEventListener("contextmenu", e => {
    e.preventDefault();
});

imgeSecreta4.addEventListener("contextmenu", e => {
    e.preventDefault();
});