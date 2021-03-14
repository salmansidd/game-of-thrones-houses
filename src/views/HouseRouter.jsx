import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";
import HousesOverview from 'views/HousesOverview';
import HouseDetails from 'views/HouseDetails';

export default function HouseRouter(props) {
  return (
    <Router>
      <HouseRouteInfo {...props} />
    </Router>
  );
}

function HouseRouteInfo(props) {
  let location = useLocation();
  let history = useHistory();
  let background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        <Route exact path="/" children={<HousesOverview {...props}/>} />
        <Route path={history.location.pathname} children={<HouseDetails house={history.location} />} />
      </Switch>
    </>
  );
}