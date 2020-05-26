import React, { useState } from 'react';
import { Card, Typography, CardContent, CardActions, Button, Collapse } from '@material-ui/core';

import './ArticleList.css';

export function ArticleList({ articles }) {
  return (
    <div className="ArticleList">
      {articles.length > 0 && <h1>Result</h1>}
      <div className="result__container">
        {
          articles.map(((article) => <Article key={article._id} article={article} />))
        }
      </div>
    </div>
  );
}

const defaultShownField = ['citeKey', 'title', 'author', 'benefit', 'participants', 'methodlogy', 'method']
function Article({ article }) {
  const [showExtraContent, setShowExtraContent] = useState(false)

  const toggleExpand = () => {
    setShowExtraContent(!showExtraContent)
  }
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
        <Button size="small" onClick={toggleExpand}>More</Button>
      </CardActions>
      <Collapse in={showExtraContent} timeout="auto" unmountOnExit>
        <CardContent>
          {
            Object.keys(article).map((field, key) => 
              shouldShow(article, field) && <Typography paragraph key={`${article._id}${key}`} align="left">{field}: {article[field]}</Typography>)
          }
        </CardContent>
      </Collapse>
    </Card>
  )
}

function shouldShow(article, field) {
  return article[field] !== '' && field !== '_id' && field !== '__v' && !defaultShownField.includes(field)
}
