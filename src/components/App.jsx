import { useState } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export function App() {
  const [termSearch, setTermSearch] = useState('bike');
  const [activePage, setActivePage] = useState(1);

  const handleSearch = term => {
    setTermSearch(term);
    setActivePage(1);
  };
  return (
    <>
      <Searchbar onSearch={handleSearch} />
      <ImageGallery termSearch={termSearch} activePage={activePage} />
    </>
  );
}
