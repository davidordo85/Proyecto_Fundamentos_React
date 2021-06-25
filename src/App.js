import React from 'react';
import T from 'prop-types';
import './App.css';

import { LoginPage } from './components/auth';
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
        <Route exact path="/advert/new" component={NewAdvertisementPage} />
        <Route exact path="/advert/:id" component={AdvertisementDetailPage} />
        <Route exact path="/adverts" component={AdvertisementsPage}>
          <AdvertisementsPage isLogged={isLogged} onLogout={handleLogout} />
        </Route>
        <Route exact path="/login" component={LoginPage}>
          {({ history }) => (
            <LoginPage onLogin={handleLogin} history={history} />
          )}
        </Route>
        <Route exact path="/">
          <Redirect to="/adverts" />
        </Route>
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
