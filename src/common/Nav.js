/* eslint-disable*/
import { useEffect,useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout';
import { useNavigate } from 'react-router-dom';

//my style
import './common.sass';

import logoimg from '../assets/img/IMG_3925.PNG';

export default () => {
    const {isAuthReady, user } = useAuthContext();
    
    const {logout} = useLogout();
    const navigate = useNavigate();
    const [strUserDN, setstrUserDN] = useState("");

    useEffect(()=>{
        setstrUserDN(localStorage.getItem('userDN'))
    });
    const authControlButton = (link) => {
        if(link === '아직'){
            alert('아직...')
        }
        else if(link === 'default'){
            // window.location.href='www.naver.com'
            // window.open('www.naver.com')
            
        }
        else if(link === 'logout'){
            logout();
            navigate('/');
            window.scrollTo({ top: 0, behavior: "smooth" });
            
        }
        else{
            navigate(link);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        
    }

    return(
        <>
        <nav>
            <img src={logoimg} alt='#' onClick={()=>authControlButton('/')} />
            <ul>
                <li onClick={() => authControlButton('아직')}>mbti 테스트</li>
                <li onClick={() => authControlButton('아직')}>ai 얼굴인식</li>
            </ul>

            <div className=''>
                    {user?
                        <>
                        <div className='login-btn'>
                            <p onClick={() => authControlButton('mypage')}> {strUserDN} 님 </p>
                            {/* <p onClick={logout}>로그아웃</p> */}
                            <p onClick={() => authControlButton('logout')}>로그아웃</p>
                        </div>
                        </>
                        :
                        <>
                            <div className='login-btn'>
                                <p 
                                onClick= {() => {
                                    authControlButton('/newlogin')
                                }}
                                >로그인</p>
                                <p 
                                    onClick= {() => {
                                        authControlButton('/newsignup')
                                    }}
                                >회원가입</p>
                            </div>
                        </>
                    }

            </div>

        </nav>
        </>
    )
}