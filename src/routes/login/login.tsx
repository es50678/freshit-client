import React, { FormEvent, useState } from 'react';

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  }

  const handlePasswordChange = (event: FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
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
          <button type="button" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
}
