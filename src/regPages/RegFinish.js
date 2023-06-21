/* eslint-disable*/

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TestList from './TestList';
import { useAuthContext } from '../hooks/useAuthContext'
import { useCollectionDtl } from '../hooks/useCollectionDtl'
import  AdminBtn  from '../common/AdminBtn'
import KakaoShareBtn from '../kakao/KakaoShareBtn';

//my style
import './regstyle.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';

import { useFirestore } from '../hooks/useFirestore';

export default () => {

    const [strUserDN, setstrUserDN] = useState("");
    const [strUserID, setstrUserID] = useState("");
    const [strContUID, setstrcontUID] = useState("");
    const [mainImg,setMainImg] = useState("");
    
    const navigate = useNavigate();
    const {documents,error} = useCollectionDtl("MainData",["contUID","==", localStorage.getItem('contUID') ],"dn");
    console.log(documents);
    const { editDocument } = useFirestore("MainData");

    // navigation 이벤트
    const handleClickButton = (link) => {
        if(link==='ㄴㅇㄹㄴㅇㄹ'){
            let mainShow = true;
            editDocument({mainShow},strContUID);

        }else{

            navigate(link);
            localStorage.removeItem('contUID');
            localStorage.removeItem('mainTitle');
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    useEffect(()=>{
        setstrUserDN(localStorage.getItem('userDN'))
        setstrUserID(localStorage.getItem('userID'))
        setstrcontUID(localStorage.getItem('contUID'))
        console.log(strContUID);
    });

    useEffect(()=>{
        if(documents){
            documents.map((data,i) => {
                console.log('서버에서 받아온 데이터',data);
                setMainImg(data.downloadURL);
            })
        }
    },[documents]);

    return(

        <>

            {strUserDN === "admin" ? <AdminBtn link='/regfinish'/> : '' }
        <div className='regfinish pt80 pb80'>
            <div className='regpage-wrap mt30 mb30'>
                {/* {user ? <p>{user.displayName}</p> : <p>{isAuthReady}</p>} */}

                <p className='main-title mb20'>테스트 제작 완료!</p>
                {
                documents && 
                    <TestList
                    mbtiDatas={documents}
                    />
                }

                <div className='btn-group mt10'>
                    <KakaoShareBtn
                            title={ localStorage.getItem('mainTitle')}
                            img={mainImg ? mainImg : '#' } 
                            contUID={localStorage.getItem('contUID')}
                            strValue={'내가 만든 테스트 공유하기'}
                        />

                    <button className='mt10'
                    onClick={()=>{handleClickButton('/')}}
                    type='button'>메인으로 돌아가기</button>
                    {/* <button className='mt10'
                    onClick={()=>{handleClickButton('ㄴㅇㄹㄴㅇㄹ')}}
                    type='button'>임시</button> */}
                </div>

            </div>
            
        </div>
        </>
    )
}

