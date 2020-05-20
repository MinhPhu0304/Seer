import React, { useState } from 'react';

import seer from './seer.svg';
import './App.css';
import {Search} from './components/search';
import { ArticleList } from './components/articleList';
import { convertSearchValueToURLParam } from './utils'

function App() {

  const [articles, setArticle] = useState([])

  const submitSearch = async (searchValue) => {
    const queryParam = convertSearchValueToURLParam(searchValue)
    const res = await fetch(`/search?${queryParam}`)
    const data = await res.json()
    setArticle(data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={seer} alt="Seer logo" className="logo"/>
      </header>
      <Search submitSearch={submitSearch}/>
      <ArticleList articles={articles}/>
    </div>

  );
}

export default App;
