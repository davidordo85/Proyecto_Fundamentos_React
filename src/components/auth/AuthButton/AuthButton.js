import T from 'prop-types';
import { Button } from '../../shared';
import { logout } from '../../../api/auth';

const AuthButton = ({ className, isLogged, onLogout }) => {
  const handleLogoutClick = () => {
    logout().then(onLogout);
  };

  const props = isLogged
    ? { onClick: handleLogoutClick, children: 'Log out' }
    : {
        // as: Link,
        //  to: '/login',
        children: 'Log in',
      };

  return <Button className={className} {...props} />;
};

AuthButton.propTypes = {
  className: T.string,
  isLogged: T.bool,
  onLogout: T.func.isRequired,
};

AuthButton.defaultProps = {
  isLogged: false,
};

export default AuthButton;
