var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//https://www.w3schools.com/howto/howto_js_slideshow.asp
var slideIndex = [1, 1, 1, 1];
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}
function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
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
var contactButton = document.getElementById("contactButton");
var contactHeader = document.getElementById("contactHeader");
var contactPopup = document.getElementById("contactPopup");
var closePopup = document.getElementById("closePopup");
contactButton.addEventListener("click", function () {
    contactPopup.style.display = "block";
});
contactHeader.addEventListener("click", function () {
    contactPopup.style.display = "block";
});
closePopup.addEventListener("click", function () {
    contactPopup.style.display = "none";
});
// Handle form submission 
var contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
});
//Switch Active Sections
var aboutHeader = document.getElementById("aboutHeader");
var projectsHeader = document.getElementById("projectsHeader");
var resumeHeader = document.getElementById("resumeHeader");
var aboutSection = document.getElementById("about");
var projectsSection = document.getElementById("projects");
aboutHeader.addEventListener("click", function () {
    projectsSection.style.display = "none";
    aboutSection.style.display = "block";
});
projectsHeader.addEventListener("click", function () {
    aboutSection.style.display = "none";
    projectsSection.style.display = "block";
});
//Lightbox code
var imageContainers = document.querySelectorAll('.image-container');
var lightbox = document.getElementById('lightbox');
var lightboxImage = document.getElementById('lightbox-image');
imageContainers.forEach(function (container) {
    container.addEventListener('click', function () {
        var image = container.querySelector('img');
        if (lightbox && lightboxImage && image) {
            // Set the source of the lightbox image
            lightboxImage.src = image.src;
            // Show the lightbox
            lightbox.style.display = 'block';
        }
    });
});
if (lightbox) {
    lightbox.addEventListener('click', function () {
        // Hide the lightbox when clicked
        lightbox.style.display = 'none';
    });
}
//Code for typewriter functionality
//https://medium.com/front-end-weekly/how-to-create-typing-effect-in-css-and-js-3252dd807f0a
var skillsList = ["Python", "C", "C++", "C#", "HTML", "CSS", "SCS", "JavaScript", "SQLite", "Java", "TypeScript", "Django", "ASP.NET"];
var iAmList = ["Innovative", "Detail-Oriented", "Adaptable", "A Quick Learner", "Critical Thinker", "Problem Solver", "A Self-Starter", "A Tech Enthusiast"];
function typeWord(word, element, delay) {
    return __awaiter(this, void 0, void 0, function () {
        var letters, i, letterDelay;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    letters = word.split("");
                    i = 0;
                    letterDelay = delay / letters.length;
                    _a.label = 1;
                case 1:
                    if (!(i < letters.length)) return [3 /*break*/, 3];
                    return [4 /*yield*/, new Promise(function (f) { return setTimeout(f, letterDelay); })];
                case 2:
                    _a.sent();
                    element.append(letters[i]);
                    i++;
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function deleteWord(element, delay) {
    return __awaiter(this, void 0, void 0, function () {
        var letters, letterDelay;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    letters = element.innerHTML.split("");
                    letterDelay = delay / letters.length;
                    _a.label = 1;
                case 1:
                    if (!(letters.length > 0)) return [3 /*break*/, 3];
                    return [4 /*yield*/, new Promise(function (f) { return setTimeout(f, letterDelay); })];
                case 2:
                    _a.sent();
                    letters.pop();
                    element.innerHTML = letters.join("");
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function caroselCycle(caroselList, element) {
    return __awaiter(this, void 0, void 0, function () {
        var i, word;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 6];
                    word = caroselList[i];
                    return [4 /*yield*/, typeWord(word, element, 1000)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, new Promise(function (f) { return setTimeout(f, 1000); })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, deleteWord(element, 1000)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, new Promise(function (f) { return setTimeout(f, 500); })];
                case 5:
                    _a.sent();
                    i++;
                    if (i >= caroselList.length) {
                        i = 0;
                    }
                    return [3 /*break*/, 1];
                case 6: return [2 /*return*/];
            }
        });
    });
}
var workedInElement = document.querySelector("#workedIn");
var iAmElement = document.querySelector("#iAm");
if (workedInElement && iAmElement) {
    caroselCycle(skillsList, workedInElement);
    caroselCycle(iAmList, iAmElement);
}
