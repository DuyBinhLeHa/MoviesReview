/* eslint-disable */
import React, { useRef, useState, useEffect } from 'react';
import ToolBar from './Toolbar';
import NavigationMenu from './NavigationMenu';
import { useNavigate } from 'react-router-dom';

function Settings() {
  const args = JSON.parse(document.getElementById('data').text);
  const textPassword = useRef(null);
  const textPasswordVerify = useRef(null);
  const [textUsername, setTextUsername] = useState(args.username);
  const navigate = useNavigate();

  function changeSettings() {
    const username = textUsername;
    const password = textPassword.current.value;
    const passwordVerify = textPasswordVerify.current.value;

    if (username === '') {
      username = args.username;
    }

    if (password === passwordVerify) {
      fetch('/change_settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ new_username: username, new_password: password }),
      }).then((response) => response.json()).then((data) => {
        setTextUsername(data.change);
        textPassword.current.value = '';
        textPasswordVerify.current.value = '';
        alert('Data has been updated successfully.');
        navigate(`/index`, { state: data.change });
      });
    } else {
      alert('Passwords do not match!');
    }
  }

  return (
    <div className="TopRated">
      <div className="container p-0">
        <ToolBar />
        <div className="container-fluid">
          <div className="row">
            <NavigationMenu />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 movie_list">
              <div className="pt-8 pb-2 mb-3 border-bottom">
                <div className="row">
                  <h1>Settings</h1>
                </div>
                <div className="iq-card-body">

                  <div className="form-group">
                    <div>Full Name: </div>
                    <input type="text" className="form-control" onChange={event => setTextUsername(event.target.value)} placeholder={textUsername} />
                  </div>
                  <div className="form-group">
                    <div>New Password: </div>
                    <input type="password" className="form-control" ref={textPassword} />
                  </div>
                  <div className="form-group">
                    <div>Verify Password: </div>
                    <input type="password" className="form-control" ref={textPasswordVerify} />
                  </div>
                  <button className="btn btn-primary mr-2" onClick={changeSettings}>Submit</button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
