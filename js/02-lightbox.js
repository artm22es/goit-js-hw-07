import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery')

galleryList.insertAdjacentHTML('beforeend', createMarkup(galleryItems))
galleryList.addEventListener('click', handlerImgClick)

function createMarkup(arr) {
    return arr.map(({ preview, original, description}) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`).join('')
}


function handlerImgClick(event) {
  event.preventDefault()
  if (event.target === event.currentTarget) {
    return;
  }

let lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt',captionDelay: 250 });
}

