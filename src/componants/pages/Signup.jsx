import React, { useState } from 'react';
// import './signup.css';
import styled from 'styled-components';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <Wrapper>
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>
        <p>Access to 300+ hours of courses, tutorials and source files</p>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signup-button">Sign up</button>
        <p>
          By clicking on Sign up, you agree to our <a href="/terms">Terms of service</a> and <a href="/privacy">Privacy policy</a>.
        </p>
        <p>
          Already have an account? <a href="/signin">Sign in</a>
        </p>
      </form>
    </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1f1f1f, #3b3b3b);
  color: white;
}

.signup-form {
  background: rgba(0, 0, 0, 0.75);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.signup-form h2 {
  margin-bottom: 1rem;
}

.signup-form p {
  margin-bottom: 1rem;
}

.input-group {
  margin-bottom: 1rem;
}

.input-group input {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
}

.signup-button {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background: linear-gradient(135deg, #36d1dc, #5b86e5);
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.signup-button:hover {
  background: linear-gradient(135deg, #5b86e5, #36d1dc);
}

.signup-form a {
  color: #36d1dc;
  text-decoration: none;
}

.signup-form a:hover {
  text-decoration: underline;
}

`;
export default SignUp;