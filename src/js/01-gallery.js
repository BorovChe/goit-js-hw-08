// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const newListImg = galleryItems.map((img) => {
  return `<li class="gallery__item">
   <a class="gallery__link" href="${img.original}">
      <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
   </a>
</li>`;
});

const galleryListEl = document.querySelector(".gallery");
const newListImgLine = newListImg.join("");
galleryListEl.insertAdjacentHTML("afterbegin", newListImgLine);

galleryListEl.addEventListener("click", openModalImg);

function openModalImg(even) {
  even.preventDefault();
};

var lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionSelector: "img",
  captionsData: "alt",
});