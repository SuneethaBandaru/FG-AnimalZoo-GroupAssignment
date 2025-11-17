// ---- Helpers ----
function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
}

function renderLayout(sidebarContent, mainContent) {
    const app = document.getElementById("app");
    app.innerHTML = "";
    const container = el("div", "container");
    const aside = el("aside");
    aside.appendChild(sidebarContent);
    const main = el("main");
    main.appendChild(mainContent);
    container.appendChild(aside);
    container.appendChild(main);
    app.appendChild(container);
}

function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
}

// ---- Reptiles page logic ----
let groupActive = null;
let expandedFull = false;

function renderReptiles() {
    const animals = ANIMALS.filter((a) => a.group === "reptiles");

    // Sidebar list
    const ul = el("ul", "item-list");
    animals.forEach((a) => {
        const li = el("li", null, a.name);
        li.dataset.id = a.id;
        if (groupActive === a.id) li.classList.add("active");

        li.addEventListener("click", () => {
            if (groupActive === a.id) {
                groupActive = null;
                expandedFull = false;
            } else {
                groupActive = a.id;
                expandedFull = false;
            }
            renderReptiles();
        });

        ul.appendChild(li);
    });

    // Main section
    const main = el("div");

    // ---- Intro text ----
    const desc = el("div");
    desc.innerHTML = `
    <p>This page features animals in the <strong>Reptiles</strong> group. 
    Click a reptile in the sidebar to view details.  
    Use <em>Read More</em> to expand full information.</p>
  `;
    main.appendChild(desc);

    // ---- Active reptile card ----
    if (groupActive) {
        const a = ANIMALS.find((x) => x.id === groupActive);

        const card = el("div", "card");

        // IMAGE
        const img = el("img");
        img.src = a.image; // your image field
        img.alt = a.name;

        // RIGHT SIDE
        const right = el("div", "card-info");

        const shortText = a.description.slice(0, 150) + "...";
        const fullText = expandedFull ? a.description : shortText;

        right.innerHTML = `
      <h2>${a.name}</h2>
      <p class="meta">${fullText}</p>
    `;

        // ---- Full info (inside card) ----
        if (expandedFull) {
            const full = el("div", "full-info");
            full.innerHTML = `
        <h3>Full Details</h3>
        <p><strong>Diet:</strong> ${a.food}</p>
        <p><strong>Lifespan:</strong> ${a.lifespan}</p>
        <p><strong>Length:</strong> ${a.length}</p>
        <p><strong>Weight:</strong> ${a.weight}</p>
        <p><strong>Found in:</strong> ${a.found}</p>
        <p><strong>ID:</strong> ${a.id}</p>
      `;
            right.appendChild(full);
        }

        // ---- Toggle button ----
        const toggleBtn = el("button", "btn", expandedFull ? "Read Less" : "Read More");
        toggleBtn.addEventListener("click", (e) => {
            e.preventDefault();
            expandedFull = !expandedFull;
            renderReptiles();
        });

        right.appendChild(toggleBtn);

        card.appendChild(img);
        card.appendChild(right);
        main.appendChild(card);
    }

    renderLayout(ul, main);
}

renderReptiles();
