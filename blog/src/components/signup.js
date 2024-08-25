import React, { useState } from 'react';
// import './signup.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email, 'Password:', password);
  };

  return (
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
  );
};

export default SignUp;


// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { FaEnvelope, FaLock } from 'react-icons/fa';

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   background: linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b);
//   color: white;
// `;

// const Form = styled.form`
//   background: rgba(0, 0, 0, 0.75);
//   padding: 2rem;
//   border-radius: 15px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   max-width: 400px;
//   width: 100%;
//   text-align: center;
// `;

// const Title = styled.h2`
//   margin-bottom: 1rem;
// `;

// const Text = styled.p`
//   margin-bottom: 1rem;
// `;

// const InputGroup = styled.div`
//   margin-bottom: 1rem;
//   position: relative;
// `;

// const InputIcon = styled.span`
//   position: absolute;
//   top: 50%;
//   left: 10px;
//   transform: translateY(-50%);
//   color: #ffaf7b;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem 0.75rem 0.75rem 2.5rem;
//   border: none;
//   border-radius: 4px;
//   font-size: 1rem;
//   background: #111;
//   color: white;

//   &:focus {
//     outline: none;
//     background: #222;
//   }
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 0.75rem;
//   border: none;
//   border-radius: 4px;
//   background: linear-gradient(135deg, #ffaf7b, #d76d77, #3a1c71);
//   color: white;
//   font-size: 1rem;
//   cursor: pointer;
//   transition: background 0.3s;

//   &:hover {
//     background: linear-gradient(135deg, #d76d77, #ffaf7b, #3a1c71);
//   }
// `;

// const Link = styled.a`
//   color: #ffaf7b;
//   text-decoration: none;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Email:', email, 'Password:', password);
//   };

//   return (
//     <Container>
//       <Form onSubmit={handleSubmit}>
//         <Title>Sign Up</Title>
//         <Text>Access to 300+ hours of courses, tutorials and source files</Text>
//         <InputGroup>
//           <InputIcon><FaEnvelope /></InputIcon>
//           <Input
//             type="email"
//             placeholder="Email address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </InputGroup>
//         <InputGroup>
//           <InputIcon><FaLock /></InputIcon>
//           <Input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </InputGroup>
//         <Button type="submit">Sign Up</Button>
//         <Text>
//           By clicking on Sign up, you agree to our <Link href="/terms">Terms of service</Link> and <Link href="/privacy">Privacy policy</Link>.
//         </Text>
//         <Text>
//           Already have an account? <Link href="/signin">Sign in</Link>
//         </Text>
//       </Form>
//     </Container>
//   );
// };

// export default SignUp;