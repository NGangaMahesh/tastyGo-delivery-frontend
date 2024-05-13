import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios'

const LoginPopup = ({setShowLogin}) => {
    const [currState, setCurrState] = useState('Login');
    const [data, setData] = useState({
      name: '',
      email: '',
      password: ''
    })
    const {url, setToken} = useContext(StoreContext)

    const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(data => ({...data, [name]: value}))
    }

    const onLogin = async(event) => {
      event.preventDefault()
      let newUrl = url;
      if (currState === 'Login'){
        newUrl += '/api/user/login'
      }
      else{
        newUrl += '/api/user/register'
      }

      const response = await axios.post(newUrl,data)
      if (response.data.success){
        setToken(response.data.token)
        localStorage.setItem('token', response.data.token);
        setShowLogin(false)
      }
      else{
        alert(response.data.message)
      }
    }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
            <h1>{currState}</h1>
            <img src={assets.cross_icon} onClick={() => setShowLogin(false)} alt='' />
        </div>
        <div className="login-popup-inputs">
            {currState === 'Login'? <></>: <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required/>}
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required/>
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Enter your password' required/>
        </div>
        <button type='submit' className='login-popup-btn'>{currState === "Sign Up" ? 'Create Account': 'Login'}</button>
        <div className="login-popup-condition">
            <input type='checkbox' id='condition' required/>
            <label htmlFor='condition'>By Continuing, I agree to terms and condition of use & policy.</label>
        </div>
        {currState === 'Login'? <p>Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span></p>: <p>Alardy have an account <span onClick={ ()=>setCurrState('Login')}>Login here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopup
