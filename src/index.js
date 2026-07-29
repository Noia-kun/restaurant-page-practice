import { createHomePage } from "./pages/home.js";
import { createMenuPage } from "./pages/menu.js";
import { createContactPage } from "./pages/contact.js";
import "./styles.css";

function clearContent() {
    const content = document.getElementById("content");
    content.innerHTML = "";
}
document.getElementById("home-btn").addEventListener("click", () => {
    clearContent();
    createHomePage();
});

document.getElementById("menu-btn").addEventListener("click", () => {
    clearContent();
    createMenuPage();
});

document.getElementById("contact-btn").addEventListener("click", () => {
    clearContent();
    createContactPage();
});

createHomePage();

console.log("Webpack is running!");