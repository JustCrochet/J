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
    });

    // Carrello
    const cart = [];
    productCards.forEach(card => {
        card.addEventListener("click", () => {
            const productName = card.querySelector("h3").innerText;
            const productPrice = card.querySelector(".price").innerText;
            cart.push({ name: productName, price: productPrice });
            alert(`Hai aggiunto ${productName} al carrello!`);
            console.log("Carrello attuale:", cart);
        });
    });
});
