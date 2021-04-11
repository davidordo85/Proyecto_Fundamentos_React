import React from 'react';
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
      {advertisement.name}<br/>
      {advertisement.price}<br/>
      {advertisement.tags}<br/>
      {advertisement.createdAt}<br/>
      {advertisement.photo}
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

