import { useEffect } from 'react';

import css from './Modal.module.css';

export default function Modal({ largeImageURL, onClose }) {
  useEffect(() => {
    const handleKeyClose = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyClose);

    return () => {
      window.removeEventListener('keydown', handleKeyClose);
    };
  }, [onClose]);
  return (
    <>
      <div className={css.overlay} onClick={onClose}>
        <div className={css.modal}>
          <img src={largeImageURL} alt="" className={css.modal_open} />
        </div>
      </div>
    </>
  );
}
