import React from 'react';
import ReactDOM from 'react-dom';

import Tab from '../src/Tab';

const App = () => {
  return (
    <div>
      Hello from app. Below is the tab details
      <Tab />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('body'));
