import React from 'react';
import T from 'prop-types';
import './App.css';

import { LoginPage } from './components/auth';
import {
  AdvertisementsPage,
  NewAdvertisementPage,
  AdvertisementDetailPage,
} from './components/advertisements';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);

  const handleLogout = () => setIsLogged(false);

  return (
    <div className="App">
      {isLogged ? (
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
