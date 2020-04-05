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

const App: SFC = () => {
  console.log('====================================');
  console.log(process.env.PUBLIC_URL);
  console.log('====================================');
  return (
    <Provider {...stores}>
      <Container>
        <Header />
        <Router basename={`${process.env.PUBLIC_URL}/testbirds-challenge/`}>
          <Switch>
            <Route
              path="/"
              exact={true}
              component={() => {
                return <Team />;
              }}
            />

            <Route component={() => <PageNotFound />} />
          </Switch>
        </Router>
      </Container>
    </Provider>
  );
};

export { App };
