/* eslint-disable*/

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TestList from './TestList';
import { useAuthContext } from '../hooks/useAuthContext'
import { useCollectionDtl } from '../hooks/useCollectionDtl'
import  AdminBtn  from '../admin/AdminBtn'

//my style
import './regstyle.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';

import { useFirestore } from '../hooks/useFirestore';

export default (props) => {
    const [userDN, setUserDN] = useState("");
    let [contUID, setContUID] = useState('');
    let [datas, setDatas] = useState('');

    const {isAuthReady, user } = useAuthContext();
    const {documents,error} = useCollectionDtl("MainData",["user","==", props.userDN ? props.userDN :'' ],"uqe");

    const navigate = useNavigate();
    
    console.log('sssss',documents);
    useEffect(() => {
        console.log('유저정보',user);
        if(user){
            setUserDN(user.displayName)
            const {documents,error} = useCollectionDtl("MainData",["user","==", props.userDN ? props.userDN :user.displayName ],"uqe");
            setDatas(documents)
        }
    },[])
    
    // navigation 이벤트
    const handleClickButton = (link) => {
        navigate(link);
    }

    return(

        <>

            {user?.displayName === "admin" ? <AdminBtn link='/regfinish'/> : '' }

        <div className='regmain pt80 pb80'>
            <div className='regpage-wrap mt30 mb30'>
                {user ? <p>{user.displayName}</p> : <p>{isAuthReady}</p>}

                <p className='main-title'>테스트 제작 완료!</p>
                {
            documents && 
                <TestList 
                mbtiDatas={documents}
                />
        }

                <div className='btn-group mt40'>
                    <button type='button' 
                            onClick={() => 
                                {
                                    if(confirm('입력하신 데이터가 사라집니다. 이동하시겠습니까?')){
                                        handleClickButton('/regresult')
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }else{
                                        return false;
                                    }
                                }
                            }
                    
                    >이전</button>
                    <button className='ml3'
                    type='submit'>다음</button>
                </div>

            </div>
            
        </div>
        </>
    )
}

