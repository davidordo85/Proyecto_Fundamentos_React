import React from 'react';
import './App.css';

import { LoginPage } from './components/auth';
import {AdvertisementsPage, NewAdvertisementPage, AdvertisementDetailPage} from './components/advertisements';


function App() {
  const [isLogged, setIsLogged] = React.useState(false);

  const handleLogin = () => setIsLogged(true);
  return (
    <div className="App">
      {isLogged ? <AdvertisementsPage /> : <LoginPage onLogin={handleLogin} />}
      {/*<AdvertisementsPage/>
      <NewAdvertisementPage/>
      <AdvertisementDetailPage/>*/}
    </div>
  );
}

export default App;