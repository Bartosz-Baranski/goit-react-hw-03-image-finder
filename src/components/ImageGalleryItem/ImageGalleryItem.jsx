import axios from 'axios';
import { useEffect, useState } from 'react';

import Modal from 'components/Modal/Modal';
import Spinner from 'components/Loader/Loader';

export default function ImageGalleryItem(termSearch, activePage) {
  const apiKey = '39442093-f355f33fb27509f62e93d1955';
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          `https://pixabay.com/api/?q=${termSearch}&page=${activePage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(response => {
          setImages(prevImages => {
            if (!isLoading) {
              setIsLoading(true);
              return [...response.data.hits];
            }
            return [...prevImages, ...response.data.hits];
          });
        })
        .catch(error => {
          console.error('Error', error);
        });
    };

    fetchData();
  }, [termSearch, activePage, isLoading]);

  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

  const handleClickImg = imageUrl => {
    setSelectedImageUrl(imageUrl);
  };

  return (
    <>
      {images.map(img => (
        <li key={img.id}>
          <a
            href={img.largeImageURL}
            onClick={() => handleClickImg(img.largeImageURL)}
          >
            <img
              src={img.webformatURL}
              alt={img.tags}
              onClick={() => handleClickImg(img.largeImageURL)}
            />
          </a>
        </li>
      ))}
      {isLoading && <Spinner />}
      {selectedImageUrl && (
        <Modal
          imageUrl={selectedImageUrl}
          onClose={() => setSelectedImageUrl(null)}
        />
      )}
    </>
  );
}
