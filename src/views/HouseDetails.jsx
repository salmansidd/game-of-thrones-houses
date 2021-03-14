import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Loader from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import api from 'api/baseApi.js';
import theme from 'theme/muiTheme.js';

const useStyles = makeStyles({
  root: {
    minWidth: '275px',
    textAlign: 'left',
  },
  loader: {
    color: theme.palette.secondary.main,
  }
});

export default function HouseDetails({house}) {
  const [isLoading, setIsLoading] = useState(false);
  const [houseData, setHouseData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch details of the selected house of Game of Thrones
  async function fetchData () {
    try {
      setIsLoading(true);
      await api.getHouse(house.pathname).then((data) => {
        setHouseData(data);
      })
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <Loader className={classes.loader} />}
      {!isLoading && <Card className={classes.root} variant="outlined" data-hook='house-details'>
        <CardContent className={classes.rootCard}>
          <Typography variant="h3" component="h3" gutterBottom>
            {houseData.name}
          </Typography>
          <Typography variant="h6" component="h2">
            Region: {houseData.region}
          </Typography>
          <Typography variant="h6" component="h2">
            Coat of Arms: {houseData.coatOfArms}
          </Typography>
          <Typography variant="h6" component="h2">
            Words: {houseData.words}
          </Typography>
          <Typography variant="h6" component="h2">
            Titles: {houseData.titles && houseData.titles.join(', ')}
          </Typography>
          <Typography variant="h6" component="h2">
            Seats: {houseData.seats && houseData.seats.join(', ')}
          </Typography>
          <Typography variant="h6" component="h2">
            Current Lord: {houseData.currentLord}
          </Typography>
          <Typography variant="h6" component="h2">
            Heir: {houseData.heir}
          </Typography>
          <Typography variant="h6" component="h2">
            Founder: {houseData.founder}
          </Typography>
        </CardContent>
      </Card>}
    </>
  );
}