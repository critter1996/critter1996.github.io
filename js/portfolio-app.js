//Wraps the page to force it to load last
document.addEventListener('DOMContentLoaded', () => {

////////////////////////////////////////MODAL GALLERY//////////////////////////////////////////////////////////////

const lightbox = document.getElementById('lightbox');
const images = document.querySelectorAll('.project-img');

images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
    // if (e.target !== e.currentTarget)
    lightbox.classList.remove('active')
})


//////////////////////////////////////////Prev/Next////////////////////////////////////////////////////////////////////
let lightboxPrev = document.getElementById('lightboxPrev');
let lightboxNext = document.getElementById('lightboxNext');
let imageIndex = 0;

// for (let i = 0, i < images.length, i++)

// if (index >= images.length) {
//   imageIndex = 0;
// } else if (index < 0) {
//   imageIndex = images.length - 1;
// }

// lightboxPrev.addEventListener('click', {
//   imageIndex++;
// })




/////////////


// function prevImage() {
//   sliderImage(-1);
// }

// function nextImage() {
//   sliderImage(1);
// }

// lightboxPrev.addEventListener('click', prevImage);
// lightboxNext.addEventListener('click', nextImage);



// //Next Slide Button
// btnNext.addEventListener("click", () => {
//   slideIndex++;
//   showSlide(slideIndex);
// });

// //Prev Slide Button
// btnPrev.addEventListener("click", () => {
//   slideIndex--;
//   showSlide(slideIndex);
// });
////////////////////////////////////////END MODAL GALLERY//////////////////////////////////////////////////////////////

//END OF JS FILE
})




