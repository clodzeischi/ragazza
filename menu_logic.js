console.log("menu logic loaded");

const menuItems = [
    {
        image: "public/food1.png",
        title: "Pane Cunzato",
        description: "Rigatoni with fried eggplant, tomato sauce, basil, and ricotta salata",
        price: 29.95
    }, {
        image: "public/food2.png",
        title: "Alici Marinate",
        description: "Fresh anchovies marinated in lemon, garlic, parsley, and olive oil",
        price: 24.95
    }, {
        image: "public/food3.png",
        title: "Pasta alla Norma",
        description: "Country bread with tomatoes, anchovies, olive oil, aged cheese, and oregano",
        price: 27.95
    }, {
        image: "public/food4.png",
        title: "Caciocavallo alla Brace",
        description: "Grilled aged cheese with olive oil and herbs",
        price: 18.95
    }, {
        image: "public/food5.png",
        title: "Polpette di Melanzane",
        description: "Eggplant fritters with pecorino, garlic, and mint",
        price: 22.95
    }
];

function updateMenuCard(index) {
    const item = menuItems[index];

    const currencyStyler = new Intl.NumberFormat('en-US', {style: "currency", currency: "USD"});
    const price = currencyStyler.format(item.price);

    document.getElementById("menu-title").innerText = item.title;
    document.getElementById("menu-description").innerText = item.description;
    document.getElementById("menu-price").innerHTML = `<small class="text-muted">${price}</small>`;
    const image = document.getElementById("menu-image");
    image.src = item.image;
    image.alt = item.alt;
}

let currentIndex = 0;

document.getElementById("prev").addEventListener("click", () => {
    console.log('fired prev');

    currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
    updateMenuCard(currentIndex);
});

document.getElementById("next").addEventListener("click", () => {
    console.log('fired next');

    currentIndex = (currentIndex + 1) % menuItems.length;
    updateMenuCard(currentIndex);
});

window.onload = () => updateMenuCard;