//Wraps the page to force it to load last
document.addEventListener('DOMContentLoaded', () => {

////////////////////////////////////////MODAL GALLERY//////////////////////////////////////////////////////////////
// const lightbox = document.createElement('div')
// lightbox.id = 'lightbox'
// document.body.appendChild(lightbox)

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
let arrowBack = document.getElementById('arrow_back');
let arrowNext = document.getElementById('arrow_next');



//////Hides the arrow back at the begining////

hideArrows();
function hideArrows() {

  if(images(index) === 0){
    arrowBack.classList.add('hidden');
    arrowBack.disabled = false;
  }

}
///////Moves to the next slide///////////
    arrowNext.addEventListener('click', e => {
        displayModal(parseInt(index)+1);
    });
/////Moves to the previous slide/////////
    arrowBack.addEventListener('click', e => {
        displayModal(parseInt(index)-1);
    });
/////Hides the arrow forward/////////
    if (parseInt(index) === 11) {
        arrowNext.classList.add('hidden');
        arrowNext.disabled = true;
    }

////////////////////////////////////////END MODAL GALLERY//////////////////////////////////////////////////////////////

//END OF JS FILE
})