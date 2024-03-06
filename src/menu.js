const content = document.querySelector("#content");
const permanentDiv = document.createElement("div");
// const rotatingDiv = document.createElement("div");

permanentDiv.classList = "permanent";

let perNames = ["Beer", "Salad", "Bread", "Spaghetti", "Pizza", "Coffee"];
let perPrices = [400, 220, 120, 240, 600, 300];
for (let i = 0; i < perNames.length; i++) {
    const itemDiv = document.createElement("div");
    const itemName = document.createElement("div");
    const itemPrice = document.createElement("div");

    itemDiv.classList = "item";
    itemName.classList = "item-name";
    itemPrice.classList = "item-price";

    itemName.textContent = perNames[i];
    itemPrice.textContent = perPrices[i];

    itemDiv.appendChild(itemName);
    itemDiv.appendChild(itemPrice);

    permanentDiv.appendChild(itemDiv);
}

function renderMenu() {
    content.replaceChildren();
    content.appendChild(permanentDiv);
    // content.appendChild(rotatingDiv);
}

export default renderMenu;