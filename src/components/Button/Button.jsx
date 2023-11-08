import React from 'react';

export default function ButtonLoadMore({ onLoadMore }) {
  function loadMore() {
    onLoadMore();
  }
  return <button onClick={loadMore}>Load More</button>;
}
