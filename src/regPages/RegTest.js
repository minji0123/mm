/* eslint-disable*/

import { useEffect, useState } from 'react';
import { useCollectionDtl } from '../hooks/useCollectionDtl'

//my style
import './regstyle.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';

import RegTestInput from './RegTestInput';
import RegModal from './RegModals';

export default (props) => {
    const [modalSwitch,setModalSwitch] = useState(false);
    const [data, setData] = useState(false);
    const [userDN, setUserDN] = useState("");
    const {documents,error} = useCollectionDtl("MainData",["user","==", props.userDN],"uqe");
    console.log('regtest: ',documents);
    console.log(props.userDN);

    const closeModal = () =>{
        setModalSwitch(!modalSwitch);
    }
    
    useEffect(()=>{
        setModalSwitch(data);
    },[data])

    return(
        <>
            {modalSwitch && <RegModal setData={setData} />}
            
            <div className='regtest pt80 pb80'>
                <div className='regtest-wrap  mt30 mb30'>
                    <p className='main-title'>테스트화면 만들기</p>

                    <p className='pointer'
                        onClick={closeModal}
                    >예시를 보려면 요기를 더블클릭!</p>

                    <RegTestInput
                    datas={documents} 
                    />

                </div>
                
            </div>
        </>
    )
}
