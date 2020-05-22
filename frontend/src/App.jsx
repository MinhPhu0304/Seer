import React, { useState } from 'react';

import SeerLogo from './seer.svg';
import './App.css';
import { Theme } from './theme'
import { Search } from './components/search';
import { ArticleList } from './components/articleList';
import { CircularLoading } from './components/progress'

function App() {
  const [articles, setArticle] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const submitSearch = async (query) => {
    setIsLoading(true)
    const res = await fetch(`/search?${query}`)
    const data = await res.json()
    setIsLoading(false)
    setArticle(data)
  }

  return (
    <Theme>
      <div className="App">
        <header className="App-header">
          <img src={SeerLogo} alt="Seer logo" className="logo" />
        </header>
        <Search submitSearch={submitSearch} />
        { isLoading && <CircularLoading />}
        <ArticleList articles={articles} />
      </div>
    </Theme>
  );
}

export default App;
