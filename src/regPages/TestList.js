/* eslint-disable*/

import MainImg from '../assets/img/0.jpg'
import { useNavigate } from 'react-router-dom';
import { useCollection } from '../hooks/useCollection';

//my style
import './regstyle.sass';
import '../marginpadding.sass';
import { useEffect } from 'react';

export default () => {
    const navigate = useNavigate();

    const handleClickButton = () => {
        navigate('/start');
        window.scrollTo({ top: 0, behavior: "smooth" });

    }

    const {documents,error} = useCollection("MainData");

    // console.log('dddd',documents);

    return(
        <>



            <div className='main-testlist pb50'>
            <div 
                onClick={handleClickButton}
            >
                <img src={MainImg} alt='#' />
                <h2 className='pt10 pb10'>나만의 겨울 휴양지 테스트</h2>
            </div>
                {
                    documents &&
                    documents.map((a,i)=>{
                        return(
                            <div 
                                key={i}
                                onClick={handleClickButton}
                            >
                                <img src={a.downloadURL} alt='#' />
                                <h2 className='pt10 pb10'>{a.mainTitle}</h2>
                            </div>
                        )

                    })
                }

            </div>

        </>
    )
}