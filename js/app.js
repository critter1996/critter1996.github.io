///////////////////////////To-Do List/////////////////////////////////
// 1. Ability to push new project
// 2. Search Function
// Circle photo?




//Wraps the page to force it to load last
    document.addEventListener('DOMContentLoaded', () => {



// IMAGE SLIDER

const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalId = null;
const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');


initializeSlider();
function initializeSlider() {

  if(slides.length > 0){
    slides[slideIndex].classList.add('displaySlide');
    intervalId = setInterval(nextSlide, 5000);
  }

}


function showSlide(index) {

  if(index >= slides.length){
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach(slide => {
    slide.classList.remove('displaySlide');
  });
  slides[slideIndex].classList.add('displaySlide');
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex)
}


//Next Slide Button
btnNext.addEventListener("click", () => {
  slideIndex++;
  showSlide(slideIndex);
});

//Prev Slide Button
btnPrev.addEventListener("click", () => {
  slideIndex--;
  showSlide(slideIndex);
});
        



//END
    })