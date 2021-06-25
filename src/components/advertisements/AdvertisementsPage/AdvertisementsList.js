import React from 'react';
import Advertisement from './Advertisement';

const renderAdvertisement = advertisement => (
  <Advertisement key={advertisement.id} {...advertisement} />
);

const AdvertisementList = ({ advertisements }) => {
  return <ul>{advertisements.map(renderAdvertisement)}</ul>;
};

export default AdvertisementList;
