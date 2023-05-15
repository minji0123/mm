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
            alert('6자리 사원번호를 입력해주세요');
        }else if(isNaN(password)){
            alert('비밀번호는 숫자로 입력해주세요');
        }else{
            console.log('??',email,password,displayName);
            signup(email,password,displayName);
        }
    }

    const authControlButton = (link) => {
        navigate(link);
    }

    return(
        <>
            <form className='auth' onSubmit={handleSubmit}>
                <fieldset className='auth-wrap '>
                <p className='auth-title mt40'> 이력서 </p>

                <div className='input-wrap'>

                    <div>
                        <label htmlFor="myEmail" className='mr4 mb20'>사원아이디</label>
                        <input type="text"  id="myEmail" required onChange={handleData} value={email} />
                    </div>
                    <div>
                        <label htmlFor="myPassWord" className='mr16 mb20'>사원번호</label>
                        <input type="password" id="myPassWord" required onChange={handleData} value={password} />
                    </div>
                    <div>
                        <label htmlFor="myNickName" className='mr30 mb20'>닉네임</label>
                        <input type="text" id="myNickName" required onChange={handleData} value={displayName} />
                    </div>
                    <div className='warn'>
                        <p style={{textAlign:'center'}} >입사 전 꼭 읽어주세요!!</p>
                        <p> 개인정보가 필요하지 않아요!🙂 그래서 사원아이디와 사원번호는 잊어버리면 찾을 수 없어요!😨  꼭 기억해주세요!</p>
                    </div>
                </div>


                <div className='btn-wrap'>
                    <button type="submit" className="btn"> 입사하기</button>
                    <p className='goback pointer' onClick={()=>{authControlButton('/')}}> 로비로 이동</p>
                </div>

                </fieldset>
                
            </form>

        </>
    )
}
