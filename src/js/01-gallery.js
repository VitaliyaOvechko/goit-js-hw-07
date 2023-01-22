import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

function createGallery(gallery) {
    return gallery.map(({ preview, original, description }) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`
    ).join("");
}

gallery.addEventListener('click', onGalleryImgClick);

function onGalleryImgClick(evt) {
    if (evt.target.classList.contains('gallery__image')) {

        const originalImg = evt.target.dataset.source;
        
        evt.preventDefault();
        
        const instance = basicLightbox.create(`
    <img src="${originalImg}" width="800" height="600">
`,
            {
                onShow: (instance) => { window.addEventListener('keydown', onCloseModal) },
                onClose: (instance) => { window.addEventListener('keydown', onCloseModal) },
            });
        instance.show();

        function onCloseModal(evt) {
            if (evt.code === "Escape") {
                instance.close();
            }
        }
    }
}
