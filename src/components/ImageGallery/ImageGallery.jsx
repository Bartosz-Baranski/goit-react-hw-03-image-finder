import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import css from './ImageGallery.module.css';

export default function ImageGallery({ termSearch, activePage }) {
  return (
    <ul className={css.imageGallery}>
      <ImageGalleryItem termSearch={termSearch} activePage={activePage} />
    </ul>
  );
}
