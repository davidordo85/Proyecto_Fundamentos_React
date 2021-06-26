import client from './client';

const advertisementsBaseUrl = '/api/v1';

export const getLatestAdvertisements = () => {
  const url = `${advertisementsBaseUrl}/adverts`;
  return client.get(url);
};

export const getAdvertisementDetail = advertId => {
  const url = `${advertisementsBaseUrl}/adverts/${advertId}`;
  return client.get(url);
};
