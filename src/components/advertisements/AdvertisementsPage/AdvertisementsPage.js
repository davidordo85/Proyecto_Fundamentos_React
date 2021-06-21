import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import { getLatestAdvertisements } from '../../../api/advertisements';
import classnames from 'classnames';
import './AdvertisementsPage.css';
import scopedStyles from './AdvertisementsPage.module.css';
import Layout from '../../layout/Layout';

const AdvertisementsPage = ({ className, ...props }) => {
  const [advertisements, setAdvertisements] = React.useState([]);

  React.useEffect(() => {
    getLatestAdvertisements().then(setAdvertisements);
  }, []);

  const handleClick = () => {
    alert('Construyendo un enlace al detalle...');
  };

  const items = advertisements.map(advertisement => (
    <li onClick={handleClick} key={advertisement.id}>
      <p>{advertisement.name}</p>
      <p>{advertisement.price}</p>
      <p>{advertisement.sale ? 'Sell' : 'Buy'}</p>
      <p>{advertisement.tags}</p>
      <time dateTime={advertisement.createdAt}>
        {formatDistanceToNow(new Date(advertisement.createdAt))}
      </time>
    </li>
  ));

  const styles = { color: advertisements.length > 1 ? 'red' : 'green' };
  return (
    <Layout title="What's going on..." {...props}>
      <div className={classnames(scopedStyles.advertisementsPage, className)}>
        <ul style={styles}>{items}</ul>
      </div>
    </Layout>
  );
};

export default AdvertisementsPage;
