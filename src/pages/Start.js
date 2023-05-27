
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

//my style
import './pages.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';

//data
import MainImg from '../assets/img/0.jpg'
import MainData from '../assets/data/title.json'

export default function Start(){
    let [title,setTitle] = useState(MainData.title);
    let [mainImg,setMainImg] = useState(MainImg);
    console.log(title);

    const navigate = useNavigate();

    const handleClickButton = () => {
        navigate('/Test');
    }

    // 상세 페이지 만들듯이 해야하나??
    let {id} = useParams();
    

    return(
        <>
            <div className='page-style'>
                <div className='page-wrap'>
                <p className='main-title mt30'> {title} </p>
                <img className='start-img mt30' src={mainImg} alt="메인사진" ></img>
                
                <button
                    className='start-btn mt30'
                    onClick={handleClickButton}
                    >start</button>
                </div>
            </div>
        </>
    )
    
}