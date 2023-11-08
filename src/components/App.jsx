import { useState } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ButtonLoadMore from './Button/Button';

import css from './App.module.css';

export function App() {
  const [termSearch, setTermSearch] = useState('cat');
  const [activePage, setActivePage] = useState(1);

  const handleSearch = term => {
    setTermSearch(term);
    setActivePage(1);
  };

  const handleLoadMore = () => {
    setActivePage(activePage + 1);
  };

  return (
    <>
      <div className={css.App}>
        <Searchbar onSearch={handleSearch} />
        <ImageGallery termSearch={termSearch} activePage={activePage} />
        <ButtonLoadMore onLoadMore={handleLoadMore} />
      </div>
    </>
  );
}
