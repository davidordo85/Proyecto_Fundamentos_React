import React from 'react';
import { Link } from 'react-router-dom';
import { getLatestAdvertisements } from '../../../api/advertisements';
import classnames from 'classnames';
import './AdvertisementsPage.css';
import scopedStyles from './AdvertisementsPage.module.css';
import Layout from '../../layout/Layout';
import AdvertisementList from './AdvertisementsList';
import { Button } from '../../shared/';

const EmptyList = () => (
  <div style={{ textAlign: 'center' }}>
    <p>Be the first Advertisement!</p>
    <Button as={Link} to="/advert/new" variant="primary">
      New Advertisement
    </Button>
  </div>
);

const AdvertisementsPage = ({ className, history, ...props }) => {
  const [advertisements, setAdvertisements] = React.useState([]);

  React.useEffect(() => {
    getLatestAdvertisements().then(setAdvertisements);
  }, []);

  return (
    <Layout title="What's going on..." {...props}>
      <div className={classnames(scopedStyles.advertisementsPage, className)}>
        {advertisements.length ? (
          <AdvertisementList
            advertisements={advertisements}
            history={history}
          />
        ) : (
          <EmptyList />
        )}
      </div>
    </Layout>
  );
};

export default AdvertisementsPage;
