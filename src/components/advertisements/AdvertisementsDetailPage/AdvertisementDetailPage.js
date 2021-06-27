import React from 'react';
import './AdvertisementDetailPage.css';
import Layout from '../../layout/Layout';
import { getAdvertisementDetail } from '../../../api/advertisements';

const AdvertisementDetailPage = ({ history, error, ...props }) => {
  const [advert, setAdvert] = React.useState([]);

  React.useEffect(() => {
    getAdvertisementDetail(props.match.params.id).then(setAdvert);
  }, []);

  return (
    <Layout title="Advertisement Detail">
      <section>
        <p>{advert.name}</p>
        <p>{advert.price}</p>
        <p>{advert.sale ? 'Sell' : 'Buy'}</p>
        <p>{advert.tags}</p>
        <image>{!advert.photo === 'null'}</image>
      </section>
    </Layout>
  );
};

export default AdvertisementDetailPage;
