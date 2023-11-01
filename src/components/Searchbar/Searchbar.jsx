import { useState } from 'react';

import css from './Searchbar.module.css';

export default function Searchbar({ manuallySearch }) {
  const [termSearch] = useState('');
  function search(e) {
    e.preventDeafault();
    manuallySearch(termSearch);
  }

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={search}>
        <button type="submit" className={css.button_search}>
          <span className={css.button_label}>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          value={termSearch}
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
