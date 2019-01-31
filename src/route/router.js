import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from 'containers/page/index';
const PublicRoutes = ({ history, }) => {
  return (
    <Router history={history}>
        <div>
          <Route
            exact
            path={'/'}
            component={App}
          />
        </div>
    </Router>
  );
};

export default PublicRoutes;
