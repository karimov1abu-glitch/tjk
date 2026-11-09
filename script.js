
// ===============================
// NAVIGATION
// ===============================

const shell = document.getElementById("shell");
const menuBtn = document.getElementById("menuBtn");
const panelContent = document.getElementById("panelContent");

const tabs = document.querySelectorAll(".nav-links button");

const panels = {

    home: `
        <h3>Хуш омадед ба Тоҷикистон!</h3>
        <p>Сарзамини кӯҳҳои баланд, кӯлҳои зебо ва таърихи қадима.</p>
    `,

    places: `
        <h3>Ҷойҳои сайёҳии Тоҷикистон</h3>
        <p>Искандаркӯл • Помир • Ҳафтрӯд • Душанбе • Кӯҳҳои Фон</p>
    `,

    culture: `
        <h3>Фарҳанги тоҷикон</h3>
        <p>Забон, мусиқӣ, либосҳои миллӣ, таомҳои тоҷикӣ ва анъанаҳои қадима.</p>
    `

};


// ===============================
// OPEN / CLOSE MENU
// ===============================

menuBtn.addEventListener("click", () => {

    shell.classList.toggle("open");

    menuBtn.textContent = shell.classList.contains("open")
        ? "Пӯшидан ×"
        : "Меню +";

});


// ===============================
// NAVIGATION TABS
// ===============================

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const name = tab.dataset.panel;

        tabs.forEach(button => {
            button.classList.remove("active");
        });

        tab.classList.add("active");

        if (
            shell.classList.contains("open") &&
            panelContent.innerHTML.trim() === panels[name].trim()
        ) {

            shell.classList.remove("open");
            menuBtn.textContent = "Меню +";

            return;
        }

        shell.classList.remove("open");

        setTimeout(() => {

            panelContent.innerHTML = panels[name];

            shell.classList.add("open");

            menuBtn.textContent = "Пӯшидан ×";

        }, 200);

    });

});


// ===============================
// IMAGE GALLERY
// ===============================

function selectSlide(element) {

    const slides = document.querySelectorAll(".slide");

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    element.classList.add("active");

}


// ===============================
// ACCORDION
// ===============================

function toggleAccordion(element) {

    const item = element.parentElement;

    const accordionItems = document.querySelectorAll(
        ".accordion-item"
    );

    accordionItems.forEach(card => {

        if (card !== item) {

            card.classList.remove("active");

        }

    });

    item.classList.toggle("active");

}

const revealElements = document.querySelectorAll(
    '.card, .slide, .accordion-item, section h2'
);

revealElements.forEach(element => {
    element.classList.add('reveal');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    observer.observe(element);
});
