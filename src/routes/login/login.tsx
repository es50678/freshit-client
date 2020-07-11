import React, { FormEvent, useState } from 'react';
import gql from 'graphql-tag';
import { useApolloClient, useMutation } from '@apollo/react-hooks';

const LOGIN_USER = gql`
  mutation loginUser($email: String! $passcode: String!){
    login(email: $email passcode: $passcode)
  }
`

export function Login() {
  const client = useApolloClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, test] = useMutation(
    LOGIN_USER,
    {
      onCompleted(result) {
        localStorage.setItem('authorization_token', 'abc');
        console.log('client', client);
        console.log('result', result);
      }
    }
  );

  console.log(test);

  const handleEmailChange = (event: FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  }

  const handlePasswordChange = (event: FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  }

  const handleLoginClick = async () => {
    return login({ variables: { email, passcode: password } })
  }

  return (
    <div className="row h-100 align-items-center">
      <div className="col">
        <form action="" method="">
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
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
