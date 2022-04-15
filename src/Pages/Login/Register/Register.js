import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'


const Register = () => {
        const navigate= useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      if(user){
          navigate('/home')
      }
    const handleSubmit = event=>{
        event.preventDefault()
        const name = event.target.name.value
        const email= event.target.email.value
        const password = event.target.password.value
       console.log(email, password)
    }
    return (
        <div className='register-from'>
            <h3>Please Register</h3>
            <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="" placeholder='Your Name' />
            <input type="email" name="email" id="" placeholder='Your Email' required />
            <input type="password" name="Password" id="" placeholder='Password' required/>
            <input type="submit" value="Registar" />
            </form>
            <p>You are New Genius car ? <Link to='/login' className='text-warning pe-auto text-decoration-none' >Please Register</Link></p>

        </div>
    );
};

export default Register;