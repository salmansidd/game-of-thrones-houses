import React from 'react';
import {Link, useHistory} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import theme from 'theme/muiTheme.js';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '1225px',
    padding: '20px 0 0 30px',
  },
  cardRoot: {
    width: '360px',
    float: 'left',
    marginRight: '30px',
    marginBottom: '40px',
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.highlight.main,
    }
  },
  link: {
    textDecoration: 'none',
  },
  card: {
    color: theme.palette.background.header,
  },
}));

export default function HousesOverview({houses}) {
  const classes = useStyles();
  let history = useHistory();

  // Update history for react router
  function handleHouseClick(house) {
    history.push(house);
  }

  return (
    <Container className={classes.root} data-hook='houses-container'>
      {houses.map((house, i) =>
        <Card key={i} data-hook='house-overview' className={classes.cardRoot} onClick={() => handleHouseClick(house)}>
          <Link className={classes.link} to={`/houses/${i + 1}`}>
            <CardActionArea>
              <CardContent className={classes.card}>
                <Typography gutterBottom variant="h6" component="h2">
                  {house.name}
                </Typography>
                <Typography variant="body2" component="p">
                  {house.region ? house.region : '-'}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>)}
    </Container>
  );
};
