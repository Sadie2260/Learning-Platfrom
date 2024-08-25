// import React, { useState } from 'react';
// import styled from 'styled-components';

// const LoginForm = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   return (
//     <Container>
//       <Form>
//         <Title>LOGIN FORM</Title>
//         <InputContainer>
//           <Label htmlFor="login">Login</Label>
//           <Input type="text" id="login" name="login" required />
//         </InputContainer>
//         <InputContainer>
//           <Label htmlFor="password">Password</Label>
//           <Input
//             type={passwordVisible ? "text" : "password"}
//             id="password"
//             name="password"
//             required
//           />
//           <TogglePassword onClick={togglePasswordVisibility}>
//             👁️
//           </TogglePassword>
//         </InputContainer>
//         <RememberContainer>
//           <Checkbox type="checkbox" id="remember" name="remember" />
//           <CheckboxLabel htmlFor="remember">Remember</CheckboxLabel>
//         </RememberContainer>
//         <Button type="submit">Log in</Button>
//         <Links>
//           <StyledLink href="#">Forget password? Click Here</StyledLink><br />
//           <StyledLink href="#">Don't have an account? Sign Up</StyledLink>
//         </Links>
//       </Form>
//       <div className="box box-left box1"></div>
//       <div className="box box-left box2"></div>
//       <div className="box box-left box3"></div>
//       <div className="box box-left box4"></div>
//       <div className="box box-right box1"></div>
//       <div className="box box-right box2"></div>
//       <div className="box box-right box3"></div>
//       <div className="box box-right box4"></div>
//       <div className="box box-right box5"></div>
//     </Container>
//   );
// };

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background: linear-gradient(135deg, #7037f9 0%, #9f57ec 100%);
//   position: relative;
// `;

// const Form = styled.form`
//    background: rgba(255, 255, 255, 0.1);
//   padding:40px;
//   border-radius: 10px;
//   backdrop-filter: blur(10px);
//   box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
//   color: white;
//   text-align: center;
//   position: relative;
//   z-index: 1;
// `;

// const Title = styled.h2`
  
//   margin-bottom: 20px;
// `;

// const InputContainer = styled.div`
  
//   position: relative;
//   margin-bottom: 15px;
  
// `;

// const Label = styled.label`
  
//   width: 100%;
//   padding: 10px;
//   border: none;
//   border-radius: 5px;
//   background: rgba(255, 255, 255, 0.2);
//   color: white;
//   font-size: 16px;
//   outline: none;
// `;

// const Input = styled.input`

//   width: 100%;
//   padding: 10px;
//   border: none;
//   border-radius: 5px;
//   background: rgba(255, 255, 255, 0.2);
//   color: white;
//   font-size: 16px;
//   outline: none;
// `;


// const TogglePassword = styled.span`
//   // position: absolute;
//   // right: 50px;
//   // top: 40px;
//   // cursor: pointer;
//   // color: #ffffff;
//   position: absolute;
//   top: 20%;
//   right: 3px;
//   transform: translateY(-50%);
//   cursor: pointer;
// `;

// const RememberContainer = styled.div`
//   // display: flex;
//   // align-items: center;
//   // margin-bottom: 20px;
//   // color: #ffffff;
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// `;
 


// const Checkbox = styled.input`
//   // margin-right: 10px;
//   margin-right: 10px;
// `;

// const CheckboxLabel = styled.label``;

// const Button = styled.button`
//   // padding: 10px 20px;
//   // border: none;
//   // border-radius: 5px;
//   // background: #ffffff;
//   // color: #43A6DD;
//   // font-size: 16px;
//   // cursor: pointer;
//    padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   background: #00C9FF;
//   color: white;
//   font-size: 16px;
//   cursor: pointer;
//   transition: background 0.3s;

//   &:hover {
//     // background: #ffffff;
//     // opacity: 0.8;
//     background: #92FE9D;
//   }
// `;

// const Links = styled.div``

// ;


// const StyledLink = styled.a`
//   // color: #ffffff;
//   // text-decoration: none;
//   // font-size: 14px;

//   margin-top: px;
//   display: block;
//   color: white;
//   margin-bottom: 10px;
//   text-decoration: none;
//   transition: color 0.3s;

//   &:hover {
//     color: #00C9FF;
//   }
// `;

 

 

 
// export default LoginForm;




// import React from 'react';
// import styled from 'styled-components';

// const LoginContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background: linear-gradient(135deg, #7037f9 0%, #9f57ec 100%);
//   position: relative;
// `;

// const LoginFormWrapper = styled.div`
//   background: rgba(255, 255, 255, 0.1);
//   padding: 40px;
//   border-radius: 10px;
//   backdrop-filter: blur(10px);
//   box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
//   color: white;
//   text-align: center;
//   position: relative;
//   z-index: 1;
// `;

// const Title = styled.h2`
//   margin-bottom: 20px;
// `;

// const InputContainer = styled.div`
//   position: relative;
//   margin-bottom: 15px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   border: none;
//   border-radius: 5px;
//   background: rgba(255, 255, 255, 0.2);
//   color: white;
//   font-size: 16px;
//   outline: none;

//   ::placeholder {
//     color: rgba(255, 255, 255, 0.7);
//   }
// `;

// const PasswordEye = styled.span`
//   position: absolute;
//   top: 50%;
//   right: 10px;
//   transform: translateY(-50%);
//   cursor: pointer;
// `;

// const RememberContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const Checkbox = styled.input`
//   margin-right: 10px;
// `;

// const Label = styled.label`
//   color: white;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   background: #00c9ff;
//   color: white;
//   font-size: 16px;
//   cursor: pointer;
//   transition: background 0.3s;

//   &:hover {
//     background: #92fe9d;
//   }
// `;

// const ExtraLinks = styled.div`
//   margin-top: 20px;
// `;

// const Link = styled.a`
//   display: block;
//   color: white;
//   margin-bottom: 10px;
//   text-decoration: none;
//   transition: color 0.3s;

//   &:hover {
//     color: #00c9ff;
//   }
// `;

// const Box = styled.div`
//   position: absolute;
//   width: 70px;
//   height: 70px;
//   background: rgba(255, 255, 255, 0.2);
//   border-radius: 5px;
//   box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.37);
// `;

// const BoxLeft = styled(Box)`
//   left: 5px;
// `;


// const BoxRight = styled(Box)`
//   right: 5px;
// `;

// const Box1 = styled(Box)`
//   left: 30%;
// `;

// const Box2 = styled(Box)`
//   top: 10%;
// `;

// const Box3 = styled(Box)`
//   right: 30%;
// `;

// const Box4 = styled(Box)`
//   top: 80%;
// `;

// const Box5 = styled(Box)`
//   top: 50%;
// `;

// function LoginForm() {
//   return (
//     <LoginContainer>
//       <LoginFormWrapper>
//         <Title>Login Form</Title>
//         <form>
//           <InputContainer>
//             <Input type="text" placeholder="Login" />
//           </InputContainer>
//           <InputContainer>
//             <Input type="password" placeholder="Password" />
//             <PasswordEye>👁️</PasswordEye>
//           </InputContainer>
//           <RememberContainer>
//             <Checkbox type="checkbox" />
//             <Label>Remember</Label>
//           </RememberContainer>
//           <Button type="submit">Log in</Button>
//         </form>
//         <ExtraLinks>
//           <Link href="#">Forget password? Click Here</Link>
//           <Link href="#">Don’t have an account? Sign Up</Link>
//         </ExtraLinks>
//       </LoginFormWrapper>
//       <BoxLeft className="box1" />
//       <BoxLeft className="box2" />
//       <BoxLeft className="box3" />
//       <BoxLeft className="box4" />
//       <BoxRight className="box1" />
//       <BoxRight className="box2" />
//       <BoxRight className="box3" />
//       <BoxRight className="box4" />
//       <BoxRight className="box5" />
//     </LoginContainer>
//   );
// }

// export default LoginForm;


// src/LoginForm.js
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