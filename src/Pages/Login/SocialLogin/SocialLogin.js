import React from 'react';
import Google from '../../../images/social icon/google.png'
import Facebook from '../../../images/social icon/facebook.png'
import Github from '../../../images/social icon/github.png'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [signInWithFacebook, fbUser, fbLoading, fbError] = useSignInWithFacebook(auth);
    let errorElement;
    if (error||error1||fbError) {
       errorElement=(
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }

      if(user || user1||fbUser){
          navigate('/home')
      }
    return (
        <div>
             <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <p className='text-danger'>{errorElement}</p>
            <button onClick={()=>signInWithGoogle()} className='btn btn-primary d-block mx-auto w-50 my-2'>
                <img src={Google} alt="" />
                <span className='px-2'>Google Sign In</span></button>
            <button
            onClick={()=>signInWithFacebook()}
            className='btn btn-primary d-block mx-auto w-50 my-2'>
                <img style={{ height:'30px', padding:'5px'}} src={Facebook} alt="" />
                <span className='px-2'>Facebook Sign In</span></button>
            <button 
            onClick={()=>signInWithGithub()}
            className='btn btn-primary d-block mx-auto w-50'>
                <img  src={Github} alt="" />
                <span className='px-2'>Github Sign In</span></button>
        </div>
    );
};

export default SocialLogin;