document.addEventListener("DOMContentLoaded", () => {
    console.log("Uncinetto!");

    // Funzione per aggiungere un'animazione al passaggio del mouse su una card prodotto
    const productCards = document.querySelectorAll(".product-card");
    productCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "rotate(2deg) scale(1.03)";
        });

        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
        });

        dinosauro.addEventListener("mouseover", () => {
            card.style.transform = "rotate(4deg) scale(1.03)";
        });
    });

    // Carrello
    const cart = [];
    productCards.forEach(card => {
        card.addEventListener("click", () => {
            const productName = card.querySelector("h3").innerText;
            const productPrice = card.querySelector(".price").innerText;
            cart.push({ name: productName, price: productPrice });
            console.log("Carrello attuale:", cart);
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        const dinosauro = document.getElementById("dinosauro");
    
        dinosauro.addEventListener("mouseenter", function() {
            dinosauro.classList.add("dinosauro-animate"); // Aggiunge la classe per l'animazione
        });
    
        dinosauro.addEventListener("mouseleave", function() {
            dinosauro.classList.remove("dinosauro-animate"); // Rimuove l'animazione quando il mouse esce
        });
    });
    
});