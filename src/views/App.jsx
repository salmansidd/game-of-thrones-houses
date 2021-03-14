import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Loader from '@material-ui/core/CircularProgress';
import api from 'api/baseApi.js';
import AppBar from 'views/AppBar'
import HouseRouter from 'views/HouseRouter'
import theme from 'theme/muiTheme.js';

const styles = makeStyles(({
  root: {
    flexGrow: 1,
    margin: 'auto',
  },
  app: {
    textAlign: 'center',
  },
  appHeader: {
    backgroundColor: theme.palette.primary.main,
    minHeight: '94vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    color: theme.palette.secondary.main,
  }
}));

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [houses, setHouses] = useState([]);
  const classes = styles();
  
  useEffect(() => {
    fetchData();
  }, []);
  
  // Fetch details of all the houses of Game of Thrones
  async function fetchData () {
    try {
      setIsLoading(true);
      await api.getHouses().then((data) => {
        setHouses(data);
      })
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false)
  }

  return (
    <div className={classes.app}>
      <AppBar />
      <header className={classes.appHeader}>
        {isLoading && <Loader className={classes.loader} />}
        {!isLoading && <HouseRouter houses={houses} />}
      </header>
    </div>
  );
}