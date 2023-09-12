// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector(".gallery");

const galleryItemsHTML = galleryItems.map(image => `
  <li class="gallery__item">
    <a class="gallery__link" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
    </a>
  </li>
`).join("");

galleryList.insertAdjacentHTML("beforeend", galleryItemsHTML);

// Inicjalizacja SimpleLightbox z opcją wyświetlania podpisów
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// Uruchom galerię od razu przy załadowaniu strony (do wyboru)
// lightbox.open();

console.log(galleryItems);



