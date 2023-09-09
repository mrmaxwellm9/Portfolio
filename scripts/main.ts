//https://www.w3schools.com/howto/howto_js_slideshow.asp
let slideIndex = [1,1,1,1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n: number, no: number): void {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n: number, no: number) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

// Show and hide the contact form popup
const contactButton = document.getElementById("contactButton") as HTMLButtonElement;
const contactHeader = document.getElementById("contactHeader") as HTMLButtonElement;
const contactPopup = document.getElementById("contactPopup") as HTMLDivElement;
const closePopup = document.getElementById("closePopup") as HTMLSpanElement;

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
const contactForm = document.getElementById("contactForm") as HTMLFormElement;

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
});


//Switch Active Sections
const aboutHeader = document.getElementById("aboutHeader") as HTMLButtonElement;
const projectsHeader = document.getElementById("projectsHeader") as HTMLButtonElement;
const resumeHeader = document.getElementById("resumeHeader") as HTMLButtonElement;

const aboutSection = document.getElementById("about") as HTMLDivElement;
const projectsSection = document.getElementById("projects") as HTMLDivElement;

aboutHeader.addEventListener("click", () => {
    projectsSection.style.display = "none";
    aboutSection.style.display = "block";
});

projectsHeader.addEventListener("click", () => {
    aboutSection.style.display = "none";
    projectsSection.style.display = "block";
});

//Lightbox code
const imageContainers: NodeListOf<HTMLDivElement> = document.querySelectorAll('.image-container');

const lightbox: HTMLElement | null = document.getElementById('lightbox');
const lightboxImage: HTMLImageElement | null = document.getElementById('lightbox-image') as HTMLImageElement;

imageContainers.forEach((container: HTMLDivElement) => {
  container.addEventListener('click', () => {
    const image: HTMLImageElement | null = container.querySelector('img');

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
const skillsList: string[] = ["Python", "C", "C++", "C#", "HTML", "CSS", "SCS", "JavaScript", "SQLite", "Java", "TypeScript", "Django", "ASP.NET"];
const iAmList: string[] = ["Innovative", "Detail-Oriented", "Adaptable", "A Quick Learner", "Critical Thinker", "Problem Solver", "A Self-Starter", "A Tech Enthusiast"];

async function typeWord(word: string, element: HTMLElement, delay: number) {
    
    const letters = word.split("");
    let i = 0;
    let letterDelay = delay/letters.length;
    while (i < letters.length){
        await new Promise(f => setTimeout(f, letterDelay));
        element.append(letters[i]);
        i++;
    }
    return;
}

async function deleteWord(element: HTMLElement, delay: number) {
    const letters = element.innerHTML.split("");
    let letterDelay = delay/letters.length;
    while (letters.length > 0){
        await new Promise(f => setTimeout(f, letterDelay));
        letters.pop();
        element.innerHTML = letters.join("");
    }
    return;
}

async function caroselCycle(caroselList: string[], element: HTMLElement){
    let i = 0;
    while(true){
        const word = caroselList[i];
        await typeWord(word, element, 1000);
        await new Promise(f => setTimeout(f, 1000));
        await deleteWord(element, 1000);
        await new Promise(f => setTimeout(f, 500));
        i++;
        if(i>=caroselList.length){i=0;}
    }
    return;
}

const workedInElement = document.querySelector("#workedIn");
const iAmElement = document.querySelector("#iAm");
if (workedInElement && iAmElement) {
    caroselCycle(skillsList, workedInElement as HTMLElement);
    caroselCycle(iAmList, iAmElement as HTMLElement);
}