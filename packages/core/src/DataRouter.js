import React from 'react';

import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

import {
  Schema,
  RunSQL,
} from '.';

const DataRouter = () => {
  return (
    <div>
      Welcome to Data
      <Router>
        <Link to="/data/schema">
          Schema
        </Link>
        <Link to="/data/run-sql">
          Run SQL
        </Link>
        <Route path="/data/schema"
          component={Schema}
        />
        <Route path="/data/run-sql"
          component={RunSQL}
        />
      </Router>
    </div>
  );
};

export default DataRouter;
