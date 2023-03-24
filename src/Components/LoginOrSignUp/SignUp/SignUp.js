import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../UserContext/UserContext';

const SignUp = () => {
    const [error, setError] = useState('');
    const {createUser, providerLogin, updateUserProfile} = useContext(AuthContext);
    const nevigate = useNavigate();

    const googleProviderLogin = new GoogleAuthProvider();
    const githubProviderLogin = new GithubAuthProvider();

    const handleGoogleLogin = ()=>{
        providerLogin(googleProviderLogin)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const handleGithubLogin= () =>{
        providerLogin(githubProviderLogin)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error(error));
    }

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        console.log(name, email, password, confirmPassword);
        if(password !== confirmPassword){
            setError('Password do not match')
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError();
                nevigate('/');
                handleUpdateUserProfile(name, photoURL)
            })
            .catch(e => setError(e.message));
    }
    const handleUpdateUserProfile =(name, photoURL)=>{
        const profile ={
            displayName:name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(()=>{})
        .catch(error => console.error(error));
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit} action="">
                    <div>
                        <label htmlFor="">Name</label><br />
                        <input name='name' type="text" placeholder='Write your name' required />
                    </div>
                    <div>
                        <label htmlFor="">PhotoURL</label><br />
                        <input name='photoURL' type="text" placeholder='PhotoURL'  />
                    </div>
                    <div>
                        <label htmlFor="">Email</label> <br />
                        <input name='email' type="text" placeholder='Enter your email' required />
                    </div>

                    <div>
                        <label htmlFor="">Password</label><br />
                        <input name='password' type="password" placeholder='password' required />
                    </div>

                    <div>
                        <label htmlFor="">Confirm password</label><br />
                        <input name='confirmPassword' type="password" placeholder='confirm password' required />
                    </div>

                    <div>
                        <p><small>already have an account </small><Link to='/login'>Login</Link></p>
                    </div>

                    <button onClick={handleGoogleLogin} className='btn btn-light border mt-4'> <FaGoogle /> google sign-up</button> <br />

                    <button onClick={handleGithubLogin} className='btn btn-light border mt-4'> <FaGoogle /> github sign-up</button> <br />

                    <button className='btn btn-primary mt-4'>
                        Sign Up
                    </button>
                    <p className="text-danger">{error}</p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;