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
    const {error, isPending, signup} = useSignup();// 만든 js 파일을 훅처럼 사용할 수 있음

    const handleData = (event) => {
        if (event.target.id === "myEmail") {
            setEmail(event.target.value);
        } else if (event.target.id === "myPassWord") {
            setPassword(event.target.value);
            // console.log(password);

        } else if (event.target.id === "myNickName") {
            setDisplayName(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        // submit 은 기본적으로 페이지 리로딩을 불러일으키기 때문에... 그런 현상을 막기 위해 적어준다.
        event.preventDefault();
        
        if(password.length < 6){
            alert('6자리 사원번호를 입력해주세요');
        }else if(isNaN(password)){
            alert('비밀번호는 숫자로 입력해주세요');
            // location.reload();
        }else{

            signup(email,password,displayName);
            
        }
        
    }

    return(
        <>
            <form className='auth'>
                <fieldset className='auth-wrap'>
                <p> 이력서 </p>
                <div>
                    <label htmlFor="myEmail">사원이메일</label>
                    <input type="email" id="myEmail" required onChange={handleData} value={email} />
                </div>
                <div>
                    <label htmlFor="myPassWord">사원번호</label>
                    <input type="text" id="myPassWord" required onChange={handleData} value={password} />
                </div>
                <div>
                    <label htmlFor="myNickName">닉네임</label>
                    <input type="text" id="myNickName" required onChange={handleData} value={displayName} />
                </div>

                <div>
                    <p>입사 전 꼭 읽어주세요!!</p>
                    <p>개인정보를 요구하지 않아요!</p>
                    <p>사원아이디와 사원번호는 잊어버리면 찾을 수 없어요!</p>

                </div>

                <div className='btn-wrap'>
                    <button type="submit" className="btn"> 입사하기</button>
                    <p className='goback pointer'> 로비로 이동</p>
                </div>

                </fieldset>
                
            </form>

        </>
    )
}
