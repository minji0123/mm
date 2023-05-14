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
                    출근게이트
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
                    <button>출근하기</button>
                    <button> 로비로 이동</button>

                </div>

                </div>
                
            </div>

        </>
    )
}
