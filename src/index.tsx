import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';

import { CoreApp } from './core/CoreApp';

import { Posts } from './generator-posts/';


const App = () => {
  return (
    <CoreApp>
      <Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/wallpapers" component={() => (
          <div>
            Hello world
          </div>
         )} />
      </Switch>
    </CoreApp>
  );
}


ReactDOM.render(
  <App />,
  document.getElementById("root")
);
