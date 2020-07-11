import React, { FormEvent, useState } from 'react';
import gql from 'graphql-tag';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

const LOGIN_USER = gql`
  mutation loginUser($email: String! $passcode: String!){
    login(email: $email passcode: $passcode)
  }
`

export function Login() {
  // react hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // router hooks
  const history = useHistory();
  // apollo hooks
  const [login] = useMutation(
    LOGIN_USER,
    {
      onCompleted(result) {
        localStorage.setItem('authorization_token', result.login);

        history.push('/');
      }
    }
  );

  const handleEmailChange = (event: FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  }

  const handlePasswordChange = (event: FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  }

  const handleSubmission = async (event: FormEvent) => {
    event.preventDefault();

    return login({ variables: { email, passcode: password } })
  }

  return (
    <div className="row h-100 align-items-center">
      <div className="col">
        <form action="" method="" onSubmit={handleSubmission}>
          <div className="form-group">
            <label htmlFor="emailInput">Email Address</label>
            <input
              className="form-control"
              id="emailInput"
              type="email"
              onChange={handleEmailChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordInput">Password</label>
            <input
              className="form-control"
              id="passwordInput"
              type="password"
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
          <button className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
