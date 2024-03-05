const content = document.querySelector("#content");
const recipesDiv = document.createElement("div");

let names = ["Hashbrowns", "Omelet", "Pancakes", "Bread", "Tortilla", "Pizza", "Maki Roll", 
            "Triple Shot Espresso", "Cookie"];
let prices = [50, 100, 100, 100, 100, 150, 300, 5000, 300];
for (let i = 0; i < names.length; i++) {
    const itemDiv = document.createElement("div");
    const itemName = document.createElement("div");
    const itemPrice = document.createElement("div");

    itemName.textContent = names[i];
    itemPrice.textContent = prices[i];

    itemDiv.appendChild(itemName);
    itemDiv.appendChild(itemPrice);

    recipesDiv.appendChild(itemDiv);
}

function renderRecipes() {
    content.replaceChildren();
    content.appendChild(recipesDiv);
}

export default renderRecipes;