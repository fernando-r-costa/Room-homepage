let slideDesktop = document.getElementById("image-slide");
let slideMobile = document.getElementById("image-mobile");
let titleSlide = document.getElementById("title-slide");
let descriptionSlide = document.getElementById("description-slide");
let numImagem = "1"
let previous = document.getElementById("icon-left");
let next = document.getElementById("icon-right");
let hamburger = document.getElementById("hamburger");
let dropdown =  document.getElementById("dropdown");
let closeOff = document.getElementById("close");

// trocar a foto em destaque
function trocaDestaque (numImagem) {
    slideDesktop.setAttribute('src', `./images/desktop-image-hero-${numImagem}.jpg`);
    slideMobile.setAttribute('src', `./images/mobile-image-hero-${numImagem}.jpg`);
    if(numImagem === 1) {
        titleSlide.innerText = `Discover innovative ways to decorate`;
        descriptionSlide.innerText = `We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love.`;
    } else if(numImagem === 2) {
        titleSlide.innerText = `We are available all across the globe`;
        descriptionSlide.innerText = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.`;
    } else if(numImagem === 3) {
        titleSlide.innerText = `Manufactured with the best materials`;
        descriptionSlide.innerText = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`;
    }
}

// passar foto anterior e próxima
function nextImagem() {
    if(numImagem < 3) {
        numImagem++;
        trocaDestaque(numImagem);
    } else if(numImagem === 3) {
        numImagem = 1;
        trocaDestaque(numImagem);
    }
}

function previousImagem() {
    if(numImagem > 1) {
        numImagem--;
        trocaDestaque(numImagem);
    } else if(numImagem === 1) {
        numImagem = 3;
        trocaDestaque(numImagem);
    }
}

// dropdown
function exibeDropdown() {
    dropdown.style.display = "block";
}

function fechaDropdown() {
    dropdown.style.display = "none";
}


previous.addEventListener ("click", function() {previousImagem()});
next.addEventListener ("click", function() {nextImagem()});
hamburger.addEventListener ("click", function() {exibeDropdown()});
closeOff.addEventListener ("click", function() {fechaDropdown()});