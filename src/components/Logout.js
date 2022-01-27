import React, { div } from 'react';
import { GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';

require('dotenv').config();

const clientID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
// console.log('From logOUT');

//  for logging out
// eslint-disable-next-line react/prop-types
function Logout({ setLoggedIn }) { // FIX ESLINT LATER
  const history = useHistory();
  function onSuccess() {
    window.console.log('Successfully logged out!');
    const loginfalse = false;
    setLoggedIn(loginfalse);
    history.push('/login');
  }

  return (
    <div>
      <GoogleLogout
        clientId={clientID}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}
Logout.defaultProps = {
  setLoggedIn: () => {},
};
Logout.propTypes = {
  setLoggedIn: Function,
};
export default Logout;