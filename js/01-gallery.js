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
      data-source="${original}"
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
  const largeImg = event.target.dataset.source
  const instance = basicLightbox.create(`
	<div class="modal">
  <img src="${largeImg}" width="800" height="600"/>
  </div>
`, {
    onShow: () => {
      document.addEventListener('keydown', onEscKeyPress)
    },
    onClose: () => {
      document.removeEventListener('keydown', onEscKeyPress)
    }
  })
  instance.show()

  function onEscKeyPress(evt) {
    if (evt.key === 'Escape') {
      instance.close()
    }
  }
}
