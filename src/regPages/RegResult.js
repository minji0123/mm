/* eslint-disable */

import { useEffect,useState } from 'react';
import { useCollectionDtl } from '../hooks/useCollectionDtl'
import { useAuthContext } from '../hooks/useAuthContext'

//my style
import './regstyle.sass';
import './regresult.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';

import RegResultInput from './RegResultInput';
import RegModalsResult from './RegModalsResult';


export default () => {
    const [modalSwitch,setModalSwitch] = useState(true);
    const [data, setData] = useState(true); // true: 페이지 켜질 때 모달 같이 켜짐
    const [strUserDN, setstrUserDN] = useState("");
    const [strUserID, setstrUserID] = useState("");
    const {documents,error} = useCollectionDtl("MainData",["user","==",strUserDN],"uqe");

    const closeModal = () =>{
        setModalSwitch(!modalSwitch);
    }
    
    useEffect(()=>{
        setstrUserDN(localStorage.getItem('userDN'))
        setstrUserID(localStorage.getItem('userID'))
    });

    useEffect(()=>{
        setModalSwitch(data);
    },[data])

    return(
        <>
            {modalSwitch && <RegModalsResult setData={setData} />}
            <div className='regresult'>
                <div className='regresult-wrap'>
                    <p className='main-title'>결과화면 만들기</p>
                    <p className='pointer'
                            onClick={closeModal}
                        >예시를 보려면 요기를 클릭!</p>
                    <RegResultInput
                    datas={documents} 
                    />
                </div>
                
            </div>
        </>
    )
}
