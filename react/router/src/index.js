import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Home } from './Home';
import { Navbar } from './Navbar';
import { Profile, ProfileParamWrapper, ProfileQueryWrapper } from './Profile';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Navbar />
        <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/profile/:name' component={ProfileParamWrapper} />
          <Route path='/profile' component={ProfileQueryWrapper} />
          {/* <Route path='/profile' render={() => <Profile name={'Alice'} />} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);