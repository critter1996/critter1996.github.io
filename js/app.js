///////////////////////////To-Do List/////////////////////////////////
// 1. Ability to push new project
// 2. Search Function
// 3. Gallery widget carusel

//4. Create Grid Design?
//5. Circle photo?
//<!-- Add Scroll to top to both pages -->




//Wraps the page to force it to load last
    document.addEventListener('DOMContentLoaded', () => {



// IMAGE SLIDER

const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalId = null;


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


// //Next Slide Button
// addEventListener() {

// }

// //Prev Slide Button
// addEventListener() {

// }
        
    })