import React, { useState } from "react";
import { Link } from "react-router-dom";

function SigninScreen() {
  const submitHandler = (e) => {
    e.preventDefault();
    //Todo: Sign In Action
  };
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  return (
    <div>
      <form className="form" onSubmit={submitHandler} action="">
        <div>
          <h1>Sign In</h1>
        </div>
        <div>
          <label htmlFor="email">Email Adress</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="" />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            New Customer ? <Link to="/register">Create your account</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SigninScreen;
