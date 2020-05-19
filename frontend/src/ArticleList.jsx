import React from 'react';
import { Card, Typography, CardContent, CardActions, Button } from '@material-ui/core';

import './ArticleList.css';

export function ArticleList() {
  return (
    <div className="ArticleList">
      <h1>List of Articles</h1>
      <hr />
      <br />
      <div className="result__container">
        <Card style={{ width: 274 }}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Word of the Day
        </Typography>
            <Typography variant="h5" component="h2">
              HEY HEY
        </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <br />
        <Card style={{ width: 274 }}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Word of the Day
        </Typography>

            <Typography variant="h5" component="h2">
              HEY HEY
        </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

      </div>

    </div>
  );
}
