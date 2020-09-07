import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { Grid } from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PostDetails from "./components/PostDetails/PostDetails";
function App() {
  return (
    
      <div className="social-buddy">
			<Router>
				<Header></Header>
        <Grid item xm={0} sm={2}></Grid>
        <Grid item xm={6} sm={12}>
				<Switch>
					<Route exact path="/" component={Body} />
					<Route exact path="/post" component={Body} />
					<Route path="/post/:postId" component={PostDetails} />
					</Switch>
        </Grid>
        <Grid item xm={0} sm={8}></Grid>
			</Router>
    
         </div>
  );
}

export default App;
