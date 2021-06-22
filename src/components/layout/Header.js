import React from 'react';
import classNames from 'classnames';

import { ReactComponent as Icon } from './../../assets/nodelogo.svg';
import './Header.css';
import Button from '../shared/Button';
import AuthButton from '../auth/AuthButton';

const Header = ({ className, isLogged, onLogout, ...props }) => {
  return (
    <header className={classNames('header', className)} {...props}>
      {/* <Link to="/"> */}
      <div className="header-logo">
        <Icon width="32" height="32" />
      </div>
      {/* </Link> */}
      <nav className="header-nav">
        <Button
          //   as={Link}
          to="/NewAdvertisement"
          variant="primary"
          className="header-button"
        >
          New advertisement
        </Button>
        <AuthButton
          className="header-button"
          isLogged={isLogged}
          onLogout={onLogout}
        />
      </nav>
    </header>
  );
};

export default Header;
