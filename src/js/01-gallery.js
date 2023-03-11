import Simplelightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryList= document.querySelector('.gallery');
console.log(galleryList);

const galleryCards = galleryMarkup (galleryItems);

function galleryMarkup (galleryItems) {
    return galleryItems.map(({ preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}".jpg" alt="${description}" />
      </a>`
    })
    .join("");
}

console.log(galleryCards);

galleryList.insertAdjacentHTML ('beforeend', galleryCards);

const lightbox = new SimpleLightbox('.gallery a', {'captionsData': 'alt', 'captionDelay': '250' });


    
