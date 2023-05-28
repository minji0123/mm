
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCollectionDtl } from '../hooks/useCollectionDtl';

//my style
import './pages.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';

//data
import MainImg from '../assets/img/0.jpg'
import MainData from '../assets/data/title.json'

export default function Start(){
    let [title,setTitle] = useState('');
    let [mainImg,setMainImg] = useState('');
    let [contUID,setContUID] = useState('');

    const navigate = useNavigate();

    const handleClickButton = (id) => {
        navigate(`/Test/${id}`)

    }

    // 상세 페이지 만들듯이 해야하나??
    let {id} = useParams();
    const {documents,error} = useCollectionDtl("MainData",["contUID","==",id]);
    console.log(documents);

    useEffect(()=>{
        if(documents){
            documents.map((a,i) => {
                console.log('sss',a);
                setTitle(a.mainTitle);
                setMainImg(a.downloadURL);
                setContUID(a.contUID);
            })
        }
    },[documents]);

    return(
        <>
        {
            documents ? 
            <div className='page-style'>
                <div className='page-wrap'>
                <p className='main-title mt30'> {title} </p>
                <img className='start-img mt30' src={mainImg} alt="메인사진" ></img>
                
                <button
                    className='start-btn mt30'
                    onClick={() => handleClickButton(contUID)}
                    >start</button>
                </div>
            </div>
            :
            // <img src='../assets/img/spinner.gif' alt='#'/>
            <p>loading...</p>
        }
        </>
    )
    
}