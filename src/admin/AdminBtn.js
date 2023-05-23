/* eslint-disable*/
//my style
import './admin.sass';


import { useNavigate } from 'react-router-dom';


export default (props) => {

    const navigate = useNavigate();

    // navigation 이벤트
    const handleClickButton = (link) => {
        console.log(link);
        navigate(link);
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