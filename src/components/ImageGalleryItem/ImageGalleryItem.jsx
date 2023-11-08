import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';

import Modal from 'components/Modal/Modal';
import Spinner from 'components/Loader/Loader';

import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ termSearch, activePage }) {
  const apiKey = '39442093-f355f33fb27509f62e93d1955';
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${termSearch}&page=${activePage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      );
      if (!isLoading) {
        setIsLoading(true);
      }

      setImages(response.data.hits);
    } catch (error) {
      console.error('Error', error);
    }
  }, [termSearch, activePage, isLoading]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

  const handleClickImg = imageUrl => {
    setSelectedImageUrl(imageUrl);
  };

  return (
    <>
      {images.length === 0 && <Spinner />}
      {images.map(img => (
        <li className={css.imageGalleryItem} key={img.id}>
          <img
            className={css.imageGalleryItem_image}
            src={img.webformatURL}
            alt={img.tags}
            onClick={() => handleClickImg(img.largeImageURL)}
          />
        </li>
      ))}

      {selectedImageUrl && (
        <Modal
          largeImageURL={selectedImageUrl}
          onClose={() => setSelectedImageUrl(null)}
        />
      )}
    </>
  );
}
