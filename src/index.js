import renderHome from "./home";
import renderMenu from "./menu";
import renderRecipes from "./recipes";

renderHome();

const buttonHome = document.querySelector(".button-home");
const buttonMenu = document.querySelector(".button-menu");
const buttonRecipes = document.querySelector(".button-recipes");

buttonHome.addEventListener("click", () => {
    renderHome();
    buttonHome.classList = "button-home button-selected";
    buttonMenu.classList = "button-menu";
    buttonRecipes.classList = "button-recipes";
});

buttonMenu.addEventListener("click", () => {
    renderMenu();
    buttonHome.classList = "button-home";
    buttonMenu.classList = "button-menu button-selected";
    buttonRecipes.classList = "button-recipes";
});

buttonRecipes.addEventListener("click", () => {
    renderRecipes();
    buttonHome.classList = "button-home";
    buttonMenu.classList = "button-menu";
    buttonRecipes.classList = "button-recipes button-selected";
});