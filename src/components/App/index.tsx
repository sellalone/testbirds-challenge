import { Provider } from 'mobx-react';
import * as React from 'react';
import { SFC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
// Store
import stores from '../../stores';
// Components
import { Header } from '../Header';
import { PageNotFound } from '../PageNotFound';
import { Team } from '../Team';

import { PUBLIC_URL } from '../../utils/constants';

const App: SFC = () => {
  return (
    <Provider {...stores}>
      <Container>
        <Header />
        <Router basename={PUBLIC_URL}>
          <Switch>
            <Route
              path="/"
              exact={true}
              component={() => {
                return <Team />;
              }}
            />

            <Route path="*" component={() => <PageNotFound />} />
          </Switch>
        </Router>
      </Container>
    </Provider>
  );
};

export { App };
