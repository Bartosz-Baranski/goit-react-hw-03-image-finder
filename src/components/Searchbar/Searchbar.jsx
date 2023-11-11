import { useState } from 'react';

import css from './Searchbar.module.css';

export default function Searchbar({ onSearch }) {
  const [termSearch, setTermSearch] = useState('');

  function search(e) {
    e.preventDefault();
    onSearch(termSearch);
  }

  function handleChange(event) {
    event.preventDefault();
    setTermSearch(event.target.value);
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
          onChange={handleChange}
        />
      </form>
    </header>
  );
}
