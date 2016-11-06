import App from './app';
import Home from './page/home';
import NotFound from './page/404';

import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, useRouterHistory } from 'react-router';
import React, { Component } from 'react';

import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

class Routes extends Component{
  /**

  	NOTES:
  	1. 	change <Router history={}> to 'browserHistory' to get pretty URL like this http://localhost/about, but...
  		- when you enter the route manually via browser address bar, or refresh browser, you'll get "Cannot GET /address"
  		- BAD for SEO
  		+ Pretty URL
  	2.	change <Router history={}> to 'appHistory' to get address bar or refresh working.
  		the URL will be like http://localhost/#/about, but...
  		- not very pretty URL

   */
  render () {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
        	<IndexRoute component={Home}/>
          <Route path="*" component={NotFound}/>
        </Route>
      </Router>
    )
  }
}

export default Routes;
