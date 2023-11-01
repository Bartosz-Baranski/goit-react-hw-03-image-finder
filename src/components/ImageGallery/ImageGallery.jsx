import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ termSearch, activePage }) {
  return (
    <ul>
      <ImageGalleryItem termSearch={termSearch} activePage={activePage} />
    </ul>
  );
}
