import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 20
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  var articleNum = 1;
  var articleTitle = "Placeholder Title";
  var author = "Placeholder Author";
  var articleDetails = [
    "foo: bar",
    "foo: bar",
    "foo: bar",
    "foo: bar",
    "foo: bar",
    "foo: bar"
  ];

  return (
    <div>
      <h1>Submissions</h1>
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Submission {articleNum}
        </Typography>
        <Typography variant="h5" component="h2">
          {articleTitle}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {author}
        </Typography>
        <Typography variant="body2" component="p">
          {articleDetails[0]}
          <br />
          {articleDetails[1]}
          <br />
          {articleDetails[2]}
          <br />
          {articleDetails[3]}
          <br />
          {articleDetails[4]}
          <br />
          {articleDetails[5]}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Manage Article</Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
    <CardContent>
      <Typography
        className={classes.title}
        color="textSecondary"
        gutterBottom
      >
        Submission {articleNum}
      </Typography>
      <Typography variant="h5" component="h2">
        {articleTitle}
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        {author}
      </Typography>
      <Typography variant="body2" component="p">
        {articleDetails[0]}
        <br />
        {articleDetails[1]}
        <br />
        {articleDetails[2]}
        <br />
        {articleDetails[3]}
        <br />
        {articleDetails[4]}
        <br />
        {articleDetails[5]}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Manage Article</Button>
    </CardActions>
  </Card>
    </div>
  );
}
