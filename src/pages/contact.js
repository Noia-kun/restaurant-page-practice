export function createContactPage() {
    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";

    const text = document.createElement("p");
    text.textContent = "123 Main Street, Tokyo City. Call us at (123) 123-4567.";

    content.appendChild(heading);
    content.appendChild(text);
}