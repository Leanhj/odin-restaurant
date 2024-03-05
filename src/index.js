import renderHome from "./home";
import renderMenu from "./menu";
import renderRecipes from "./recipes";

renderHome();

const buttonHome = document.querySelector(".home");
const buttonMenu = document.querySelector(".menu");
const buttonRecipes = document.querySelector(".recipes");

buttonHome.addEventListener("click", () => {
    renderHome();
});

buttonMenu.addEventListener("click", () => {
    renderMenu();
});

buttonRecipes.addEventListener("click", () => {
    renderRecipes();
});