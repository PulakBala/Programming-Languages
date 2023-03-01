import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const SignUp = () => {
    return (
        <div>
            <div>
            <form action="">
                <div>
                    <label htmlFor="">Name</label><br />
                    <input name='name' type="text" placeholder='Write your name' required/>
                </div>
                <div>
                    <label htmlFor="">Email</label> <br />
                    <input name='email' type="text" placeholder='Enter your email' required/>
                </div>

                <div>
                    <label htmlFor="">Password</label><br />
                    <input name='password' type="password" placeholder='Enter your email' required/>
                </div>

                <button className='btn btn-light border mt-4'> <FaGoogle/> google sign-up</button> <br />

                <button className='btn btn-primary mt-4'>


                         Sign Up

                </button>
            </form>
        </div>
        </div>
    );
};

export default SignUp;