import { Typography } from '@material-ui/core';
import React from 'react';

import seer from './seer.svg';
import './App.css';
import {Search} from './components/search';
import { ArticleList } from './components/articleList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h4" style={{ color: 'black'}}>Welcome to SEER Database</Typography>
        <img src={seer} alt="Seer logo" className="logo"/>
      </header>
      <Search />
      <ArticleList />
    </div>

  );
  }

export default App;
