import React from 'react';

const Login = () => {
    return (
        <div>
            <div>
            <h1>Please Login form!</h1>
            <form action="">
                <div>
                    <label htmlFor="">Email</label> <br/>
                    <input name="email" type="text" placeholder='Enter your email' />
                </div>

                <div>
                    <label htmlFor="">Password</label><br/>
                    <input name='password' type="password" placeholder='Enter your email' />
                </div>
                <button className='btn btn-primary mt-4'>Login</button>
            </form>
        </div>
        </div>
    );
};

export default Login;