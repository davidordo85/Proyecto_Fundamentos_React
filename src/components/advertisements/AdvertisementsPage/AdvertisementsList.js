import React from 'react';
import Advertisement from './Advertisement';

const renderAdvertisement = history => advertisement =>
  <Advertisement key={advertisement.id} {...advertisement} history={history} />;

const AdvertisementList = ({ advertisements, history }) => {
  return <ul>{advertisements.map(renderAdvertisement(history))}</ul>;
};

export default AdvertisementList;
