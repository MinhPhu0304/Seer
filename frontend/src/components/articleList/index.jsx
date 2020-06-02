import React from 'react';

import './ArticleList.css';
import ArticleTable from './articleTable'
import { Typography } from '@material-ui/core';

export function ArticleList({ articles }) {
  if (articles == null) return null
  return (
    <div className="ArticleList">
      {articles.length > 0 && <h1>Result</h1>}
      {articles.length > 0 && <ArticleTable articles={articles} />}
      {articles.length === 0 && <Typography>No result found</Typography>}
    </div>
  );
}
