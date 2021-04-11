import './App.css';

import { LoginPage } from './components/auth';
import {AdvertisementsPage, NewAdvertisementPage, AdvertisementDetailPage} from './components/advertisements';


function App() {
  return (
    <div className="App">
      <LoginPage />
      {/*<AdvertisementsPage/>
      <NewAdvertisementPage/>
      <AdvertisementDetailPage/>*/}
    </div>
  );
}

export default App;