import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {
    const [agree, setAgree] = useState(false)
        const navigate= useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      if(user){
         console.log(user, 'user')
      }
    const handleSubmit = async (event)=>{
        event.preventDefault()
        const name = event.target.name.value;
        const email= event.target.email.value;
        const password = event.target.password.value;
       
      await createUserWithEmailAndPassword(email, password)
      await updateProfile({ displayName: name });
      alert('Updated profile');
      navigate('/home')
    }
    return (
        <div className='register-from'>
            <h3>Please Register</h3>
            <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="" placeholder='Your Name' />
            <input type="email" name="email" id="" placeholder='Your Email' required />
            <input type="password" name="password" id="" placeholder='Password' required/>
            
            <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
           
            <label className={`ps-2 ${agree ? 'text-primary': 'text-danger'}`} htmlFor="terms"> Car Genius Terms and Condition</label>
            <input disabled={!agree}
             className='btn btn-primary d-block w-50 mx-auto' type="submit" value="Registar" />
            </form>
            <p>You are New Genius car ? <Link to='/login' className='text-warning pe-auto text-decoration-none' >Please Register</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;