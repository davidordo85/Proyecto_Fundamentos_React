import './App.css';

import AdvertisementsPage from './components/advertisements/AdvertisementsPage';
import Button from './components/shared/Button';

function App() {
  return (
    <div className="App">
      <Button variant="primary">Log in</Button>
      <AdvertisementsPage className="page" />
    </div>
  );
}

export default App;

