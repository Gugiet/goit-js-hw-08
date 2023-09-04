import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

// const gallery = document.querySelector('.gallery');

const gallery = document.querySelector('.gallery');

const galleryItemsMarkup = galleryItems
  .map(item => {
    return `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`;
  })
  .join('');

const galleryEl = document.querySelector('div.gallery');
galleryEl.innerHTML = galleryItemsMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
// update to check if github works properly
