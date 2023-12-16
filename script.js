function addPartyInfo(){
    document.getElementById("HamContent").style.display = "block";
}

// hide and show content
function hideContent1(){
    document.getElementById("content1").style.display = "none";
    document.getElementById("arrowUp1").style.display = "none";
    document.getElementById("arrowDown1").style.display = "block";
}
function showContent1(){
    document.getElementById("content1").style.display = "block";
    document.getElementById("arrowUp1").style.display = "block";
    document.getElementById("arrowDown1").style.display = "none";
}
function hideContent2(){
    document.getElementById("content2").style.display = "none";
    document.getElementById("arrowUp2").style.display = "none";
    document.getElementById("arrowDown2").style.display = "block";
}
function showContent2(){
    document.getElementById("content2").style.display = "block";
    document.getElementById("arrowUp2").style.display = "block";
    document.getElementById("arrowDown2").style.display = "none";
}
function hideContent3(){
    document.getElementById("content3").style.display = "none";
    document.getElementById("arrowUp3").style.display = "none";
    document.getElementById("arrowDown3").style.display = "block";
}
function showContent3(){
    document.getElementById("content3").style.display = "block";
    document.getElementById("arrowUp3").style.display = "block";
    document.getElementById("arrowDown3").style.display = "none";
}
function hideContent4(){
    document.getElementById("content4").style.display = "none";
    document.getElementById("arrowUp4").style.display = "none";
    document.getElementById("arrowDown4").style.display = "block";
}
function showContent4(){
    document.getElementById("content4").style.display = "block";
    document.getElementById("arrowUp4").style.display = "block";
    document.getElementById("arrowDown4").style.display = "none";
}
function hideContent5(){
    document.getElementById("content5").style.display = "none";
    document.getElementById("arrowUp5").style.display = "none";
    document.getElementById("arrowDown5").style.display = "block";
}
function showContent5(){
    document.getElementById("content5").style.display = "block";
    document.getElementById("arrowUp5").style.display = "block";
    document.getElementById("arrowDown5").style.display = "none";
}
function hideContent6(){
    document.getElementById("content6").style.display = "none";
    document.getElementById("arrowUp6").style.display = "none";
    document.getElementById("arrowDown6").style.display = "block";
}
function showContent6(){
    document.getElementById("content6").style.display = "block";
    document.getElementById("arrowUp6").style.display = "block";
    document.getElementById("arrowDown6").style.display = "none";
}

// for go to next or previous section
function next1(){
    document.getElementById("active-step").style.display = "none";
    document.getElementById("form-step1").style.display = "block";
}
function next2(){
    document.getElementById("form-step1").style.display = "none";
    document.getElementById("form-step2").style.display = "block";
}
function prev1(){
    document.getElementById("form-step1").style.display = "none";
    document.getElementById("active-step").style.display = "block";
}
function prev2(){
    document.getElementById("form-step2").style.display = "none";
    document.getElementById("form-step1").style.display = "block";
}

// progress
const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step-progress");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("active-step") &&
      formStep.classList.remove("active-step");
  });

  formSteps[formStepsNum].classList.add("active-step");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}