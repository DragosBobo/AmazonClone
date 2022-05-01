import React,{useState} from 'react';
import "./Login.css";
import {Link} from 'react-router-dom';

function Login() {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const signIn=e=>{
        e.preventDefault();


    }
    const register=e=>{
        e.preventDefault();

        
    }
  return (
    <div className='login' >
        <Link to="/">

        

        <img 
        className='login__logo'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
        </Link>

        <div className="login__container">
            <h1>Sign-in</h1>
            <form action="">
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
                <h5>password</h5>
                <input type="password" value={password} onChange={e=>setPassword(e.target.password)} />
                <button type='submit'onClick={signIn}className='login__signInButton'>Sign In</button>
            </form>
            <p>
                By signing-in you agree to the AMAZON Clone Conditions of Use & Sale .Please see our 
                Privacy Notice. 
            </p>
            <button onClick={register}className='login__registerButton'>Create your Account</button>
        </div>
    </div>
  )
}

export default Login