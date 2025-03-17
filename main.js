console.log('bonjour');

// Attendre 3 secondes avant d'afficher le contenu
setTimeout(() => {
    document.querySelector(".loader").classList.add("hidden"); // Cache le loader après 1s
}, 1000);

window.addEventListener('scroll', function(){
    console.log("L'utilisateur fait défiler la page !");
});


let presentation = document.querySelector("#presentation");

window.addEventListener("scroll", function() {
    let position = presentation.getBoundingClientRect().top; // Position par rapport à l'écran
    let windowHeight = window.innerHeight; // Hauteur de l'écran

    if (position < windowHeight) { 
        presentation.classList.add("visible"); // Ajoute la classe pour afficher
    }
});

let ressourceImgs = document.querySelectorAll("#ressource img");  // Sélectionne toutes les images dans #ressource
console.log(ressourceImgs);

ressourceImgs.forEach(img => {
    img.addEventListener("click", function() {
        img.classList.toggle('visible');  // Ajoute ou enlève la classe 'visible' sur l'image cliquée
    });
});

let aboutSection = document.querySelector("#about");

window.addEventListener("scroll", function() {
    let position = aboutSection.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (position < windowHeight - 100) { // 100px avant que ça apparaisse
        aboutSection.classList.add("visible");
    }
});

const menu = document.querySelector('.fa-bars');
console.log(menu);

menu.addEventListener('click', function() {
    let navbar = document.querySelector('nav ul');
    let header = document.querySelector('header');

    // Ajoute ou enlève la classe "visible"
    navbar.classList.toggle('visible');
    header.classList.toggle('visible');
});

let menuItems = document.querySelectorAll('nav ul li');

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        let navbar = document.querySelector('nav ul');
        let header = document.querySelector('header');
        
        // Enlève la classe "visible" après le clic sur un élément li
        navbar.classList.remove('visible');
        header.classList.remove('visible');
    });
});

const toogle = document.getElementById('toogle');
console.log('L\'élément de toggle a été chargé :', toogle);

const ps = document.querySelectorAll('p');  // Récupère tous les éléments <p> dans le document
const titles = document.querySelectorAll('h1, h2, h3, h4');
const sections = document.querySelectorAll('section');
const footer = document.querySelector('footer');
const header = document.querySelector('header');
const lists = document.querySelectorAll('li');

toogle.addEventListener('click', function() {
    toogle.classList.toggle('active');
    
    // Lorsque la classe "active" est présente
    if (toogle.classList.contains('active')) {
        document.body.style.backgroundColor = '#333'; // Le fond devient gris foncé
        
        header.style.background = '#333';
        menu.style.color = 'white';
        
        lists.forEach(list => {
        list.style.color = 'white';
        });

        titles.forEach(title => {
            title.style.color = 'white';
        });  
        
        sections.forEach(section => {
            section.style.backgroundColor = 'black';
        });

        // Applique la couleur blanche à chaque élément <p>
        ps.forEach(function(p) {
            p.style.color = 'white'; 
        });

        footer.style.background = 'black';
        
    } else {
        document.body.style.backgroundColor = ''; // Réinitialise la couleur de fond
       
        header.style.background = '';
        menu.style.color = '';

        lists.forEach(list => {
            list.style.color = '';
            });

        titles.forEach(title => {
            title.style.color = '';
        });

        sections.forEach(section => {
            section.style.backgroundColor = '';
        });

        ps.forEach(function(p) {
            p.style.color = ''; // Réinitialise la couleur de texte pour chaque <p>
        
        });

        footer.style.background = '';
    }
    
    // Vérification de l'état dans la console
    console.log('L\'état du toggle après le clic :', toogle.classList.contains('active'));
});

// Sélectionner la div avec la classe "contains"
const container = document.querySelector('.contains');

window.addEventListener("scroll", function() {
    let position = container.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (position < windowHeight - 100) { // 100px avant que ça apparaisse
        container.classList.add("visible");
    }
});


// carrousel 

function createCarousel(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) {
        console.error("Carousel container not found.");
        return;
    }

    const slides = container.querySelector(".carousel-slide");
    const dotsContainer = container.querySelector(".carousel-dots");
    const arrowLeft = container.querySelector(".carousel-arrow-left");
    const arrowRight = container.querySelector(".carousel-arrow-right");

    if (!slides || !dotsContainer || !arrowLeft || !arrowRight) {
        console.error("Carousel elements not found.");
        return;
    }

    const images = slides.querySelectorAll("img");
    let slideIndex = 0;
    let dots = [];

    // Initialize slides
    images.forEach((img, index) => {
        img.style.display = index === 0 ? "block" : "none";
    });

    // Initialize dots (always 3)
    for (let i = 0; i < 3; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === 0) {
            dot.classList.add("active");
        }
        dotsContainer.appendChild(dot);
        dots.push(dot);

        dot.addEventListener("click", () => {
            showSlide(i); // Use the dot index directly
        });
    }

    // Show slide function
    function showSlide(index) {
        if (index < 0) {
            slideIndex = images.length - 1;
        } else if (index >= images.length) {
            slideIndex = 0;
        } else {
            slideIndex = index;
        }

        images.forEach((img, i) => {
            img.style.display = i === slideIndex ? "block" : "none";
        });

        dots.forEach((dot, i) => {
            dot.classList.remove("active");
            if (i === slideIndex % 3) {
                dot.classList.add("active");
            }
        });
    }

    // Arrow event listeners
    arrowLeft.addEventListener("click", () => {
        showSlide(slideIndex - 1);
    });

    arrowRight.addEventListener("click", () => {
        showSlide(slideIndex + 1);
    });
}

// Initialize the carousel
createCarousel(".carousel-container");