import React, { useState } from 'react';

import SeerLogo from './seer.svg';
import { Search } from '../../search';
import { ArticleList } from '../../articleList';
import { CircularLoading } from '../../progress';

export function Home() {
  const [articles, setArticle] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const submitSearch = async (query) => {
    setIsLoading(true)
    const res = await fetch(`/api/search?${query}`)
    const data = await res.json()
    setIsLoading(false)
    setArticle(data)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={SeerLogo} alt="Seer logo" className="logo" />
      </header>
      <Search submitSearch={submitSearch} />
      {isLoading && <CircularLoading />}
      <ArticleList articles={articles} />
    </div>
  );
}
