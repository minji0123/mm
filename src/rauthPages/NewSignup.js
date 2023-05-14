/* eslint-disable */

import { useNavigate } from 'react-router-dom';


//my style
import './auth.sass'
import '../marginpadding.sass';
import '../margin.sass';
import '../padding.sass';

export default () => {

    const navigate = useNavigate();


    return(
        <>
            <div className='auth'>
                <div className='auth-wrap'>

                <p>
                    이력서
                </p>
                <div>
                    <p>사원아이디</p>
                    <input />
                </div>
                <div>
                    <p>사원번호</p>
                    <input />
                </div>
                <div>
                    <p>닉네임</p>
                    <input />
                </div>

                <div>
                    <p>입사 전 꼭 읽어주세요!!</p>
                    <p>개인정보를 요구하지 않아요!</p>
                    <p>사원아이디와 사원번호는 잊어버리면 찾을 수 없어요!</p>

                </div>

                <div>
                    <button> 입사하기</button>
                    <button> 로비로 이동</button>
                </div>

                </div>
                
            </div>

        </>
    )
}
