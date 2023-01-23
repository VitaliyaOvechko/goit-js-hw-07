import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

function createGallery(gallery) {
    return gallery.map(({ preview, original, description }) => 
        `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    ).join("");
}

let gallery = new SimpleLightbox('.gallery a', {aptionsData: "alt", captionDelay: 250,});

// let gallery = new SimpleLightbox('.gallery a', {nav:true, captionsData: "alt", captionDelay: 250, captionPosition:top, });
