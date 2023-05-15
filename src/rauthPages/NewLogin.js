/* eslint-disable */

import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import { useState } from 'react';


//my style
import './auth.sass'
import '../marginpadding.sass';
import '../margin.sass';
import '../padding.sass';

export default () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {error,isPending,login} = useLogin();

    const handleData = (event) => {
        if (event.target.id === "myEmail") {
            setEmail(event.target.value);
        } else if (event.target.id === "myPassWord") {
            setPassword(event.target.value);
        } 
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(email, password);
    }
    
    const authControlButton = (link) => {
        navigate(link);
    }


    return(
        <>
            <form className='auth' onSubmit={handleSubmit}>
                <fieldset className='auth-wrap'>

                <p className='auth-title mt40'>출근게이트</p>
                <div className='input-wrap'>
                    <div>
                        <label htmlFor="myEmail" className='mr4 mb20'>사원아이디</label>
                        <input type="text" id="myEmail" required onChange={handleData} value={email} />
                    </div>
                    <div>
                        <label htmlFor="myPassWord" className='mr16 mb20'>사원번호</label>
                        <input type="password" id="myPassWord" required onChange={handleData} value={password} />
                    </div>

                </div>


                <div className='btn-wrap'>
                    <button type="submit" className="btn">출근하기</button>
                    <p className='goback pointer' onClick={()=>{authControlButton('/')}}> 로비로 이동</p>
                </div>

                </fieldset>
                
            </form>

        </>
    )
}
