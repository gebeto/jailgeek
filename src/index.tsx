import React from 'react';
import ReactDOM from 'react-dom';

import { CoreApp } from './core/CoreApp';
import { Posts } from './generator-posts/react';


const App = () => {
  return (
    <CoreApp>
      <Posts />
    </CoreApp>
  );
}


ReactDOM.render(
  <App />,
  document.getElementById("root")
);
