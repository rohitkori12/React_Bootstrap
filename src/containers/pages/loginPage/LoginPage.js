import React from 'react';
import intl from 'react-intl-universal';
import $ from 'jquery';
//import { browserHistory } from 'react-router';
import { history } from '../../../router/router';

const LoginPage = ({ authToken, validateAuth, auth, context: { queries } }) => (
  <div className={'row justify-content-center mt-4'}>
    {authToken && validateAuth({ redirectToHome: true }) && <h4> {intl.get('app.loading')}</h4>}
    {!authToken && validateAuth({ redirectToHome: true }) && (
      // Login Page HTML starts here
      <div className="col-md-6 text-center">
        <div className="form-group row">
          <label className="col-md-4 col-form-label">Username</label>
          <div className="col-md-8">
            <input className="form-control" type="text" id="username" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-md-4 col-form-label">Password</label>
          <div className="col-md-8">
            <input className="form-control" type="password" id="password" />
          </div>
        </div>
        <button type="submit" className="btn btn-success" onClick={handleClick}>
          Submit
        </button>
      </div>
    )}
  </div>
);

function handleClick() {
  const username = $('#username').val();
  const password = $('#password').val();

  // Saga dispatching an action and redirecting to homepage
  history.push('/homePage');
}

export default LoginPage;
