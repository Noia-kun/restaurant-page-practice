export function createMenuPage() {
    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "Our Menu";

    const list = document.createElement("ul");
    ["Rich Taste Ramen - $15", "Spicy Ramen - $16", "Plain Rmaen - $12"].forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });

    content.appendChild(heading);
    content.appendChild(list);
}