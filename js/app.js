import { members, frases, modos } from './data.js';
import { setDisponible, confirmar } from './storage.js';

/* RANDOM FRASE */
const phrase = document.getElementById("randomPhrase");
phrase.textContent = frases[Math.floor(Math.random() * frases.length)];

/* SQUAD */
const squadContainer = document.getElementById("squadContainer");

members.forEach(m => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
        <img src="${m.img}">
        <h4>${m.name}</h4>
        <p>${m.role}</p>
        <span>${m.status}</span>
    `;

    squadContainer.appendChild(div);
});

/* BOTON RANDOM GAME */
document.getElementById("btnPlay").addEventListener("click", () => {
    const result = modos[Math.floor(Math.random() * modos.length)];
    document.getElementById("gameResult").textContent = result;
});

/* DISPONIBLE */
document.getElementById("btnDisponible").addEventListener("click", () => {
    setDisponible();
    alert("Estado actualizado: disponible 🔥");
});

/* CONFIRMAR */
document.getElementById("btnConfirm").addEventListener("click", () => {
    confirmar();
    document.getElementById("confirmMsg").textContent = "Asistencia confirmada ✅";
});

/* DISCORD */
document.getElementById("btnDiscord").addEventListener("click", () => {
    window.open("https://discord.com/channels/729447565535346730/729447565984268319", "_blank");
});