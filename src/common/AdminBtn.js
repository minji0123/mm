/* eslint-disable*/
//my style
import './common.sass';


import { useNavigate } from 'react-router-dom';


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
            <button className='admin-btn'
            onClick={() =>{
                handleClickButton(props.link)
            }}
            >
                admin
            </button>
        </>
    )
}