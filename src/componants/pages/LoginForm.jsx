
import React from 'react';
import styled from 'styled-components';

function LoginForm() {
  return (
    <Wrapper className="container-fluid" > 
    <div className="login-container">
      <div className="login-form">
        <h2>Login Form</h2>
        <form>
          <div className="input-container">
            <input type="text" placeholder="Login" />
          </div>
          <div className="input-container">
            <input type="password" placeholder="Password" />
            <span className="password-eye">👁️</span>
          </div>
          <div className="remember-container">
            <input type="checkbox" />
            <label>Remember</label>
          </div>
          <button type="submit">Log in</button>
        </form>
        <div className="extra-links">
          <a href="#">Forget password? Click Here</a>
          <a href="#">Don’t have an account? Sign Up</a>
        </div>
      </div>
      <div className="box box-left box1"></div>
      <div className="box box-left box2"></div>
      <div className="box box-left box3"></div>
      <div className="box box-left box4"></div>
      <div className="box box-right box1"></div>
      <div className="box box-right box2"></div>
      <div className="box box-right box3"></div>
      <div className="box box-right box4"></div>
      <div className="box box-right box5"></div>
    </div>

    </Wrapper>
  );
}


const Wrapper = styled.section`
  background: rgba(255, 255, 255, 0.1);
//   padding: 40px;
//   border-radius: 10px;
//   backdrop-filter: blur(10px);
//   box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
//   color: white;
//   text-align: center;
//   position: relative;
//   z-index: 1;


.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #7037f9 0%, #9f57ec 100%);
  position: relative;
}

.login-form {
  background: rgba(255, 255, 255, 0.1);
  padding:40px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  color: white;
  text-align: center;
  position: relative;
  z-index: 1;
  
}

.login-form h2 {
  margin-bottom: 20px;
}

.input-container {
  position: relative;
  margin-bottom: 15px;
}

.input-container input {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 16px;
  outline: none;
}

.input-container input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.password-eye {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}

.remember-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.remember-container input {
  margin-right: 10px;
}

.remember-container label {
  color: white;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: #00C9FF;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #92FE9D;
}

.extra-links {
  margin-top: 20px;
}

.extra-links a {
  display: block;
  color: white;
  margin-bottom: 10px;
  text-decoration: none;
  transition: color 0.3s;
}

.extra-links a:hover {
  color: #00C9FF;
}

.box {
  position: absolute;
  width: 70px;
  height: 70px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.37);
}

.box-left {
  left: 5px;
}

.box-right {
  right: 5px;
}

.box1 { left: 30%; }
.box2 { top: 10%; }
.box3 { right: 30%; }
.box4 { top: 80%; }
.box5 { top: 50%; }

`;

export default LoginForm;