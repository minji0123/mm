/* eslint-disable */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignup} from '../hooks/useSignup';


//my style
import './auth.sass'
import '../marginpadding.sass';
import '../margin.sass';
import '../padding.sass';

export default () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const {error, isPending, signup} = useSignup();


    const handleData = (event) => {
        if (event.target.id === "myEmail") {
            setEmail(event.target.value);
        } else if (event.target.id === "myPassWord") {
            setPassword(event.target.value);
        } else if (event.target.id === "myNickName") {
            setDisplayName(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        // submit 은 기본적으로 페이지 리로딩을 불러일으키기 때문에... 그런 현상을 막기 위해 적어준다.
        event.preventDefault();
        
        if(password.length < 6){
            alert('6자리 비밀번호를 입력해주세요');
        }else if(isNaN(password)){
            alert('비밀번호는 숫자로 입력해주세요');
        }else{
            console.log('??',email,password,displayName);
            signup(email,password,displayName);
        }
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
                <fieldset className='auth-wrap '>
                <p className='auth-title mt40'> 회원가입 </p>

                <div className='input-wrap-new'>

                    <div className='email-wrap'>
                        <label htmlFor="myEmail" >이메일</label>
                        <input type="text"  id="myEmail" required onChange={handleData} value={email} />
                    </div>
                    <div className='password-wrap'>
                        <label htmlFor="myPassWord" >비밀번호</label>
                        <input type="password" id="myPassWord" maxLength={6} required onChange={handleData} value={password} />
                    </div>
                    <div className='nick-wrap'>
                        <label htmlFor="myNickName" >닉네임</label>
                        <input type="text" id="myNickName" required onChange={handleData} value={displayName} />
                    </div>
                    <div className='warn'>
                        <p style={{textAlign:'center'}} >회원가입 전 꼭 읽어주세요!!</p>
                        {/* <p> 꼭 기억해주세요! <br/>개인정보가 필요하지 않아요!🙂 <br/> 그래서 사원아이디와 사원번호는 잊어버리면 찾을 수 없어요!😨  </p> */}
                    </div>
                </div>


                <div className='btn-wrap'>
                    <button type="submit" className="btn grey-btn1">회원가입하기</button>
                    <p className='goback pointer' onClick={()=>{authControlButton('아직')}}>비밀번호 찾기</p>
                </div>

                </fieldset>
                
            </form>

        </>
    )
}
