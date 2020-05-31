import React from 'react';

import './ArticleList.css';
import ArticleTable from './articleTable'

export function ArticleList({ articles }) {
  return (
    <div className="ArticleList">
      {articles.length > 0 && <h1>Result</h1>}
      {articles.length > 0 && <ArticleTable articles={articles} />}
    </div>
  );
}
