let intentos = 0;
let tamaño = 1;

function confirmar() {
     document.getElementById("carta").classList.add("hidden");
     const overlay = document.getElementById("overlay");
    const img = overlay.querySelector("img");

    overlay.classList.remove("hidden");

    // Reinicia animación
    img.style.animation = "none";
    img.offsetHeight; // hack para reiniciar
    img.style.animation = "popUp 0.6s ease";

    setTimeout(() => {
        let numero = "5491126536068";
        let mensaje = encodeURIComponent("dejame ver mi agenda y vamos hablando primi");

        window.open(`https://wa.me/${numero}?text=${mensaje}`, '_blank');
    }, 3000);
}


function escapar() {
    const btn = document.getElementById("btnNo");

    // Movimiento random
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);

    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = y + "px";

    // Se achica
    tamaño -= 0.1;
    if (tamaño < 0.4) tamaño = 0.4;

    btn.style.transform = `scale(${tamaño})`;

    intentos++;

    // Si insiste mucho → error automático 😈
    if (intentos > 5) {
        rechazar();
    }
}

// ERROR
function rechazar() {
     document.getElementById("carta").classList.add("hidden");
    document.getElementById("errorBox").classList.remove("hidden");
}

function cerrarError() {

    location.reload();
}