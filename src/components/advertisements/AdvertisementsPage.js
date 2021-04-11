import React from 'react';
import {getLatestAdvertisements} from '../../api/advertisements';
import './AdvertisementsPage.css';

const AdvertisementsPage = ({className}) => {
  const [advertisements, setAdvertisements] = React.useState([]);

  React.useEffect(() => {
    getLatestAdvertisements().then(setAdvertisements);
  }, []);

  const items = advertisements.map(advertisement => <li key={advertisement.id}>{advertisements.content}</li>);

  
  return (
    <div className="advertisementsPage">
      <ul>{items}</ul>
    </div>
  );
};


export default AdvertisementsPage;
