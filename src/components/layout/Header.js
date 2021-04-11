 
import React from 'react';
import classNames from 'classnames';

import { ReactComponent as Icon } from './../../assets/nodelogo.svg';
import './Header.css';
import Button from '../shared/Button';
import { logout } from '../../api/auth';

const Header = ({ className, isLogged, onLogout, ...props }) => {
  const handleLogoutClick = () => {
    logout().then(onLogout);
  };

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
          to="/tweet"
          variant="primary"
          className="header-button"
        >
          Tweet
        </Button>
        {isLogged ? (
          <Button className="header-button" onClick={handleLogoutClick}>
            Log out
          </Button>
        ) : (
          <Button
            // as={Link}
            to="/login"
            className="header-button"
          >
            Login
          </Button>
        )}
      </nav>
    </header>
  );
};

export default Header;

