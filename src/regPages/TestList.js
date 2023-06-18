/* eslint-disable*/

import MainImg from '../assets/img/0.jpg'
import { useNavigate } from 'react-router-dom';

//my style
import './regstyle.sass';
import '../marginpadding.sass';
import { useEffect } from 'react';

export default ({mbtiDatas}) => {

    const navigate = useNavigate();

    let ClickToMoveDetail = (id) => {
        // if(like === true){
        if(mbtiDatas[0].mainShow === true){
            navigate(`/start/${id}`);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }else if(mbtiDatas[0].mainShow === false){
            alert('테스트 수정 페이지로 이동');
            // navigate(`/regmain/${id}`);
            // window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    return(
        <>
            <div className='main-testlist pb50'>
            {
                mbtiDatas &&
                mbtiDatas.map((a,i)=>{
                    return(
                        <div 
                            key={i}
                            onClick={() => ClickToMoveDetail(a.contUID)}
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