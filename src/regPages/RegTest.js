/* eslint-disable*/

import { useEffect, useState } from 'react';
import { useCollectionDtl } from '../hooks/useCollectionDtl'
import { useAuthContext } from '../hooks/useAuthContext'

//my style
import './regstyle.sass';
import './regtest.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';

import RegTestInput from './RegTestInput';
import RegModal from './RegModals';

export default (props) => {
    const [modalSwitch,setModalSwitch] = useState(true);
    const [data, setData] = useState(true); // true: 페이지 켜질 때 모달 같이 켜짐
    const [userDN, setUserDN] = useState("");
    const {documents,error} = useCollectionDtl("MainData",["user","==", props.userDN ? props.userDN :userDN ],"uqe");
    const {isAuthReady, user } = useAuthContext();

    // console.log('regtest: ',documents);
    // console.log(props.userDN);

    const closeModal = () =>{
        setModalSwitch(!modalSwitch);
    }
    useEffect(() => {
        console.log('유저정보',user);
        if(user){
            setUserDN(user.displayName)
        }
    },[])

    useEffect(()=>{
        setModalSwitch(data);
    },[data])

    return(
        <>
            {modalSwitch && <RegModal setData={setData} />}
            
            <div className='regtest pt80 pb80'>
                <div className='regtest-wrap  mt30 mb30'>
                {user ? <p>{user.displayName}</p> : <p>{isAuthReady}</p>}
                    <p className='main-title'>선택지 입력하기</p>

                    <p className='pointer'
                        onClick={closeModal}
                    >예시를 보려면 요기를 클릭!</p>

                    <RegTestInput
                    datas={documents} 
                    />

                </div>
                
            </div>
        </>
    )
}
