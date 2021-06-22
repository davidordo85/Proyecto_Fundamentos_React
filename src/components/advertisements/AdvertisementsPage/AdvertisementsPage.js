import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { getLatestAdvertisements } from '../../../api/advertisements';
import classnames from 'classnames';
import { Button } from '../../shared/';
import './AdvertisementsPage.css';
import scopedStyles from './AdvertisementsPage.module.css';
import Layout from '../../layout/Layout';

const EmptyList = ({ ...props }) => (
  <div style={{ textAlign: 'center' }}>
    <p>Be the first Advertisement!</p>
    <Button variant="primary"> New Advertisement </Button>
  </div>
);

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

  return (
    <Layout title="What's going on..." {...props}>
      <div className={classnames(scopedStyles.advertisementsPage, className)}>
        {items.length ? <ul>{items}</ul> : <EmptyList {...props} />}
      </div>
    </Layout>
  );
};

export default AdvertisementsPage;
