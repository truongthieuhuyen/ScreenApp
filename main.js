
const onboardingContainer = document.querySelector(".onboarding-container");
const steps = document.querySelectorAll(".onboarding-container .step");
const stepsContainer = document.querySelector(".onboarding-container .steps");
const nextBtn = document.querySelector(".onboarding-container .next-btn");
const dots = document.querySelectorAll(".onboarding-container .dot");
const skipBtn = document.querySelector(".onboarding-container .skip-btn");
const onboard = document.getElementById("onboard-sec");
const menu = document.getElementById("menu-sec");

let stepPosition = 0;
let currentStep = 0;

const init = () => {
    stepsContainer.style.transition = "unset";
    onboardingContainer.classList.add("active");
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
    menu.classList.remove("none");
    menu.classList.add("flex");
});

nextBtn.addEventListener("click", () => {
    stepsContainer.style.transition = "all 400ms ease";
    currentStep++;

    // if(currentStep >= steps.length ){
    //     stepsContainer.style.transition = "unset";
    //     onboardingContainer.classList.remove("active");
    //     currentStep = 0;
    // }

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
