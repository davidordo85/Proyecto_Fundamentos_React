import './App.css';

import {AdvertisementsPage, NewAdvertisementPage, AdvertisementDetailPage} from './components/advertisements';
import Button from './components/shared/Button';

function App() {
  return (
    <div className="App">
      <AdvertisementsPage/>
      <NewAdvertisementPage/>
      <AdvertisementDetailPage/>
    </div>
  );
}

export default App;