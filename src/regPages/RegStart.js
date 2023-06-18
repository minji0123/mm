/* eslint-disable */

import { useNavigate } from 'react-router-dom';
import TestList from './TestList';

import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout';
import { useCollection } from '../hooks/useCollection';
import { useEffect,useState } from 'react';

//my style
import './regstyle.sass';
import '../marginpadding.sass';
import '../margin.sass';
import '../padding.sass';

export default () => {
    // isAuthReady 를 쓸 일이 있을까??
    const {isAuthReady, user } = useAuthContext();
    const {documents,error} = useCollection("MainData");

    const [strUserDN, setstrUserDN] = useState("");
    useEffect(()=>{
        setstrUserDN(localStorage.getItem('userDN'))
    });
    
    const {logout} = useLogout();
    const navigate = useNavigate();

    const handleClickButton = () => {
        
        if(user === null){
            if(confirm('입사 한 사원들만 만들 수 있어요! TestMaker Factory 에 입사해보세요!')){
                authControlButton('/newsignup')
            }else{
                return false;
            }
        }else{
            navigate('/regmain');
        }
    }
    const handleClickButton2 = () => {
        alert('준비중이양...💨');
    }
    const authControlButton = (link) => {
        navigate(link);
    }

    return(
        <>
            {/* <div className='regpage-nav pt10'>
                <div className='regpage-wrap'>
                    {user?
                        <>
                        <div className='login-btn'>
                            <p>반가워요 {strUserDN} 사원님! </p>
                            <p onClick={logout}>퇴근하기</p>
                        </div>
                        </>
                        :
                        <>
                            <p 
                                onClick= {() => {
                                    authControlButton('/newsignup')
                                }}
                            >입사하기</p>
                            <p 
                            onClick= {() => {
                                authControlButton('/newlogin')
                            }}
                            >출근하기</p>
                        </>
                    }

                </div>
            </div> */}

            <div className='regpage pt80 pb80'>
                <div className='regpage-wrap mt30 mb30'>

                    <h1 className='main-title mt30'>TestMaker Factory</h1>
                    <p>나만의 테스트 만들기</p>

                    <button 
                        className='grey-btn mt40'
                        onClick={handleClickButton}
                    >
                        MBTI 테스트 메이커
                    </button>

                    <button 
                        className='brown-btn mt12'
                        onClick={handleClickButton2}
                    >
                        심리 테스트 만들기
                    </button>
                    
                </div>
            </div>

            <div className='regpage-bottom pt80 pb80'>
                <div className='bottom-wrap'>
                    <h3 className='mt30 mb30'>🤍 테스트 해보기 🤍</h3>

                    {/* TestList 재사용을 위해 부모 컴포넌트에서 데이터를 넘겨준다. */}
                    <TestList mbtiDatas={documents}/>
                </div>
            </div>

        </>
    )
}
