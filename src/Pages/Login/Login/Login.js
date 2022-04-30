import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import Pagetitle from '../../Shared/Pagetitle/Pagetitle';
import axios from 'axios';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef=useRef('')
    const navigate = useNavigate()
    const location = useLocation()
   const from = location.state?.from?.pathname || "/";
   const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {
      // navigate(from, { replace: true });
  }
    const handleSubmit=async event=>{
        event.preventDefault()
        const email = emailRef.current.value 
        const password = passwordRef.current.value 
      await  signInWithEmailAndPassword(email, password)
      const {data}= await axios.post('http://localhost:5000/login', {email})
      localStorage.setItem('accessToken', data.accessToken);
      navigate(from, { replace: true });
    }
    const registerNavigate= event=>{
        navigate('/register')
    }
    const handleResetPasword = async()=>{
      const email = emailRef.current.value 
      if(email)
       {await sendPasswordResetEmail(email);
      toast('Sent email');}
      else{
        toast('Please enter your email')
      }
    }
    return (
        <div className='container w-50 mx-auto'>
          <Pagetitle title="Login"></Pagetitle>
            <h3 className='text-center text-primary mt-4'>Please Login</h3>
            <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="Login">
    Submit
  </Button>
  <p>You are New Genius car ? <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={registerNavigate}>Please Register</Link></p>
  <p>Forget your password ? <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={handleResetPasword}>Forget password</Link></p>
</Form>
<ToastContainer />
<SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;