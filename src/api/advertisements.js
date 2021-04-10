import client from './client';

const advertisementsBaseUrl = '/api/v1';

export const getLatestAdvertisements = () => {
    const url = `${advertisementsBaseUrl}/adverts`;
    return client.get(url);
};