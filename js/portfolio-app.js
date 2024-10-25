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


////////////////////////////////////////END MODAL GALLERY//////////////////////////////////////////////////////////////

//END OF JS FILE
})




