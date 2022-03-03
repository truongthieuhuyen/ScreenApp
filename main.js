/* Loading effect */

const loader = document.querySelector(".loader");
window.onload = function () {
    setTimeout(function () {
        loader.style.opacity = "0";
        setTimeout(function () {
            loader.style.display = "none";
        }, 500);
    }, 1500);
}

/* Show section */
function loadSection(id) {
    var myVar = setTimeout(showSection(id), 3000);
}

function showSection(id) {
    document.querySelector(".flex").classList.add("none");
    document.querySelector(".flex").classList.remove("flex");

    document.getElementById(id + '-sec').classList.remove("none");
    document.getElementById(id + '-sec').classList.add("flex");
}

/* Handle onboarding screen */
const steps = document.querySelectorAll(".onboarding-container .step");
const stepsContainer = document.querySelector(".onboarding-container .steps");
const nextBtn = document.querySelector(".onboarding-container .next-btn");
const dots = document.querySelectorAll(".onboarding-container .dot");
const skipBtn = document.querySelector(".onboarding-container .skip-btn");
const onboard = document.getElementById("onboard-sec");
const login = document.getElementById("login-sec");

let stepPosition = 0;
let currentStep = 0;

const init = () => {
    stepsContainer.style.transition = "unset";
    currentStep = 0;
    stepPosition = 0;
    stepsContainer.style.transform = `translateX(-${stepPosition}px)`;

    dots.forEach((d) => {
        d.classList.remove("active");
    });

    dots[currentStep].classList.add("active");

    nextBtn.innerHTML = "Next";
}

skipBtn.addEventListener("click", () => {
    onboard.classList.add("none");
    onboard.classList.remove("flex");
    login.classList.remove("none");
    login.classList.add("flex");
});

nextBtn.addEventListener("click", () => {
    stepsContainer.style.transition = "all 400ms ease";
    currentStep++;

    if (currentStep >= steps.length) {
        stepsContainer.style.transition = "unset";
        onboard.classList.add("none");
        onboard.classList.remove("flex");
        login.classList.remove("none");
        login.classList.add("flex");
    }

    stepPosition += steps[0].offsetWidth + 21;
    stepsContainer.style.transform = `translateX(-${stepPosition}px)`;

    dots.forEach((d) => {
        d.classList.remove("active");
    })
    dots[currentStep].classList.add("active");

    if (currentStep == steps.length - 1) {
        nextBtn.innerHTML = "Continue";
    }
});

/* Nav-bar effect */
navs = document.getElementsByClassName('nav-item')


/* Sign out button */
var signOut = document.getElementById('signout');
signOut.addEventListener("click", function () {
    document.getElementById("profile-sec").classList.add("none");
    document.getElementById("profile-sec").classList.remove("flex");

    document.getElementById('login-sec').classList.remove("none");
    document.getElementById('login-sec').classList.add("flex");
})