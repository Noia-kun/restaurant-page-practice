export function createHomePage() {
    const content = document.getElementById("content");

    const img = document.createElement("img");
    img.src = "https://images.unsplash.com/photo-1709201759685-459d11d53d93?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    img.alt = "Restaurant food";

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Noia's Restaurant";

    const text = document.createElement("p");
    text.textContent = "Come taste the finest ramen in town. Fresh ingredients, bold flavors, and a menu crafted with love.";

    content.appendChild(img);
    content.appendChild(heading);
    content.appendChild(text);
}