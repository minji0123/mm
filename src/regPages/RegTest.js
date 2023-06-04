/* eslint-disable*/

import { useEffect, useState } from 'react';
import { useCollectionDtl } from '../hooks/useCollectionDtl'

//my style
import './regstyle.sass';
import './regtest.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';

import RegTestInput from './RegTestInput';
import RegModal from './RegModals';

export default () => {
    const [modalSwitch,setModalSwitch] = useState(true);
    const [data, setData] = useState(true); // true: 페이지 켜질 때 모달 같이 켜짐
    const [strUserDN, setstrUserDN] = useState("");
    const [strUserID, setstrUserID] = useState("");

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
            {modalSwitch && <RegModal setData={setData} />}
            <div className='regtest pt80 pb80'>
                <div className='regtest-wrap  mt30 mb30'>
                <p>{strUserDN}</p> 
                    <p className='main-title'>선택지 입력하기</p>
                    <p className='pointer'
                        onClick={closeModal}
                    >예시를 보려면 요기를 클릭!</p>
                    <RegTestInput/>

                </div>
                
            </div>
        </>
    )
}
