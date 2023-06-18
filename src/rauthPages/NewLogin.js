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
        if(link === '아직'){
            alert('아직...')

        }else{
            navigate(link);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }


    return(
        <>
            <form className='auth' onSubmit={handleSubmit}>
                <fieldset className='auth-wrap'>

                <p className='auth-title'>로그인</p>
                <div className='input-wrap'>
                    <div className='email-wrap'>
                        <label htmlFor="myEmail">이메일</label>
                        <input type="text" id="myEmail" required onChange={handleData} value={email} />
                    </div>
                    <div className='password-wrap'>
                        <label htmlFor="myPassWord" >비밀번호</label>
                        <input type="password" id="myPassWord" required onChange={handleData} value={password} />
                    </div>

                </div>


                <div className='btn-wrap'>
                    <button type="submit" className="btn grey-btn1">로그인하기</button>
                    <p className='goback pointer' onClick={()=>{authControlButton('아직')}}>비밀번호 찾기</p>
                </div>

                </fieldset>
                
            </form>

        </>
    )
}
