"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//https://www.w3schools.com/howto/howto_js_slideshow.asp
let slideIndex = [1, 1, 1, 1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}
function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {
        slideIndex[no] = 1;
    }
    if (n < 1) {
        slideIndex[no] = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}
// Show and hide the contact form popup
const contactButton = document.getElementById("contactButton");
const contactHeader = document.getElementById("contactHeader");
const contactPopup = document.getElementById("contactPopup");
const closePopup = document.getElementById("closePopup");
contactButton.addEventListener("click", () => {
    contactPopup.style.display = "block";
});
contactHeader.addEventListener("click", () => {
    contactPopup.style.display = "block";
});
closePopup.addEventListener("click", () => {
    contactPopup.style.display = "none";
});
// Handle form submission 
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
});
//Switch Active Sections
const aboutHeader = document.getElementById("aboutHeader");
const projectsHeader = document.getElementById("projectsHeader");
const resumeHeader = document.getElementById("resumeHeader");
const aboutSection = document.getElementById("about");
const projectsSection = document.getElementById("projects");
aboutHeader.addEventListener("click", () => {
    projectsSection.style.display = "none";
    aboutSection.style.display = "block";
});
projectsHeader.addEventListener("click", () => {
    aboutSection.style.display = "none";
    projectsSection.style.display = "block";
});
//Lightbox code
const imageContainers = document.querySelectorAll('.image-container');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
imageContainers.forEach((container) => {
    container.addEventListener('click', () => {
        const image = container.querySelector('img');
        if (lightbox && lightboxImage && image) {
            // Set the source of the lightbox image
            lightboxImage.src = image.src;
            // Show the lightbox
            lightbox.style.display = 'block';
        }
    });
});
if (lightbox) {
    lightbox.addEventListener('click', () => {
        // Hide the lightbox when clicked
        lightbox.style.display = 'none';
    });
}
//Code for typewriter functionality
//https://medium.com/front-end-weekly/how-to-create-typing-effect-in-css-and-js-3252dd807f0a
const skillsList = ["Python", "C", "C++"];
function typeWord(word, element) {
    return __awaiter(this, void 0, void 0, function* () {
        const letters = [...word];
        let i = 0;
        while (i < letters.length) {
            yield new Promise(f => setTimeout(f, 100));
            element.append(letters[i]);
            i++;
        }
        return;
    });
}
function deleteWord(element) {
    return __awaiter(this, void 0, void 0, function* () {
        const letters = element.innerHTML.split("");
        while (letters.length > 0) {
            yield new Promise(f => setTimeout(f, 100));
            letters.pop();
            element.innerHTML = letters.join("");
        }
        return;
    });
}
function caroselCycle(caroselList, element) {
    return __awaiter(this, void 0, void 0, function* () {
        let i = 0;
        while (true) {
            console.log(caroselList);
            const word = caroselList[i];
            console.log("Word to type:", word);
            yield typeWord(word, element);
            yield new Promise(f => setTimeout(f, 100));
            yield deleteWord(element);
            yield new Promise(f => setTimeout(f, 100));
            i++;
            if (i >= caroselList.length) {
                i = 0;
            }
        }
        return;
    });
}
const workedInElement = document.querySelector("#workedIn");
if (workedInElement) {
    console.log(skillsList);
    caroselCycle(skillsList, workedInElement);
}
