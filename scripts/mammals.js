

const mammals = ["Echidna", "Tasmanian Devil ", "quokka"];

// Add welcome message
const mammal_description = () => {
    document.getElementById("welcomeMsg").textContent = "Welcome to the Mammals Page!"

   const contentDiv = document.getElementById("mammal_content");

    const img = document.createElement("img"); // Create an image element
    img.src = "../images/mammals/quokka1.jpg";   
    img.alt = "Mammal Image";
    img.style.width = "300px";
    img.style.borderRadius = "12px";
    contentDiv.appendChild(img);
}



// Sidebar reference
const sidebar = document.getElementById("sidebar");

// Build sidebar title
const title = document.createElement("h2");
title.textContent = "Mammals";
sidebar.appendChild(title);

// Create list of mammals in the sidebar
mammals.forEach(animal => {
    const item = document.createElement("div");
    item.className = "animal-item";
    item.textContent = animal;

    //click event for each animal
    item.addEventListener("click", () => {
        alert("You clicked on: " + animal);
        mammal_description()
    });

    sidebar.appendChild(item);
});

