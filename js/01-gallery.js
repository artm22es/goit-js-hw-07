import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery')

galleryList.insertAdjacentHTML('beforeend', createMarkup(galleryItems))
galleryList.addEventListener('click', handlerImgClick)

function createMarkup(arr) {
    return arr.map(({ preview, original, description}) => `<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      width="300"
    />
  </a>
</li>`).join('')
}

function handlerImgClick(event) {
  if (event.target === event.currentTarget) {
    return
  }
  
  const currentTarget = event.target.closest('.gallery-item')
  const maxSizeImg = currentTarget.dataset.source
 


}
