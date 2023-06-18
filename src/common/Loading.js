/* eslint-disable*/
//my style
import './common.sass';


import { useNavigate } from 'react-router-dom';
import gifff from '../assets/img/IMG_3948.GIF';


export default (props) => {

    const navigate = useNavigate();

    // navigation 이벤트
    const handleClickButton = (link) => {
        console.log(link);
        navigate(link);
        window.scrollTo({ top: 0, behavior: "smooth" });

    }

    return(
        <>
        <div className='loading-img'>
            <p>데이터 저장중이에요! 😀</p>
            <img src={gifff} alt='#' />
        </div>
        </>
    )
}