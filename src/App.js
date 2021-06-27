import React from 'react';
import T from 'prop-types';
import './App.css';

import { LoginPage, PrivateRoute } from './components/auth';
import {
  AdvertisementsPage,
  NewAdvertisementPage,
  AdvertisementDetailPage,
} from './components/advertisements';
import { Switch, Route, Redirect } from 'react-router';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);

  const handleLogout = () => setIsLogged(false);

  return (
    <div className="App">
      <Switch>
        <PrivateRoute
          isLogged={isLogged}
          exact
          path="/advert/new"
          component={NewAdvertisementPage}
        >
          {({ location }) => (
            <NewAdvertisementPage
              location={location}
              isLogged={isLogged}
              onLogout={handleLogout}
            />
          )}
        </PrivateRoute>

        <PrivateRoute
          isLogged={isLogged}
          onLogout={handleLogout}
          exact
          path="/advert/:id"
          component={AdvertisementDetailPage}
        />
        <PrivateRoute
          isLogged={isLogged}
          exact
          path="/adverts"
          component={AdvertisementsPage}
        >
          {({ history }) => (
            <AdvertisementsPage
              isLogged={isLogged}
              onLogout={handleLogout}
              history={history}
            />
          )}
        </PrivateRoute>
        <Route exact path="/login" component={LoginPage}>
          {({ history, location }) => (
            <LoginPage
              onLogin={handleLogin}
              history={history}
              location={location}
            />
          )}
        </Route>
        <PrivateRoute isLogged={isLogged} exact path="/">
          <Redirect to="/adverts" />
        </PrivateRoute>
        <Route path="/404">
          <div
            style={{
              textAlign: 'center',
              fontSize: 48,
              fontWeight: 'bold',
            }}
          >
            404 | Not found page
          </div>
        </Route>
        <Route>
          <Redirect to="/404" />
        </Route>
      </Switch>
      {/*       {isLogged ? (
        <AdvertisementsPage isLogged={isLogged} onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
      {/*<AdvertisementsPage/>
      <NewAdvertisementPage/>
      <AdvertisementDetailPage/>*/}
    </div>
  );
}

App.propTypes = {
  isInitiallyLogged: T.bool.isRequired,
};

export default App;
