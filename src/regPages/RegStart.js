/* eslint-disable */

import { useNavigate } from 'react-router-dom';
import TestList from './TestList';

//my style
import './regstyle.sass';
import '../marginpadding.sass';
import '../margin.sass';
import '../padding.sass';

export default () => {

    const navigate = useNavigate();

    const handleClickButton = () => {
        navigate('/regmain');
    }
    const handleClickButton2 = () => {
        alert('준비중이양...💨');
    }

    return(
        <>
            <div className='regpage pt80 pb80'>
                <div className='regpage-wrap'>
                    <h1 className='main-title'>TestMaker Factory</h1>
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
                    <h3>🤍 테스트 해보기 🤍</h3>
                    <TestList/>
                </div>
            </div>

        </>
    )
}
