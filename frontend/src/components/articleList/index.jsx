import React from 'react';
import { Card, Typography, CardContent, CardActions, Button } from '@material-ui/core';

import './ArticleList.css';

export function ArticleList({ articles }) {
  return (
    <div className="ArticleList">
      {articles.length > 0 && <h1>Result</h1>}
      <div className="result__container">
        {
          articles.map((article, index) => <Article key={index} article={article} />)
        }
      </div>
    </div>
  );
}

function Article({ article }) {
  return (
    <Card style={{ width: '50vw', marginBottom: 16 }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {article.title}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography align="left">Cite key: {article.citeKey}</Typography>
        <Typography variant="body1" align="left">Author: {article.author}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">More</Button>
      </CardActions>
    </Card>
  )
}
