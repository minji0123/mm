/* eslint-disable */

import { useEffect,useState } from 'react';
import { useCollectionDtl } from '../hooks/useCollectionDtl'
import { useAuthContext } from '../hooks/useAuthContext'

//my style
import './regstyle.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';

import RegResultInput from './RegResultInput';
import RegModalsResult from './RegModalsResult';


export default (props) => {
    const [modalSwitch,setModalSwitch] = useState(false);
    const [data, setData] = useState(false);
    const {isAuthReady, user } = useAuthContext();
    const {documents,error} = useCollectionDtl("MainData",["user","==",props.userDN],"uqe");
    // console.log(documents&& documents[0]);

    const closeModal = () =>{
        setModalSwitch(!modalSwitch);
    }

    useEffect(()=>{
        setModalSwitch(data);
    },[data])

    return(
        <>
            {modalSwitch && <RegModalsResult setData={setData} />}
        
            <div className='regresult pt80 pb60'>
                <div className='regresult-wrap mt30 mb30'>
                    <p className='main-title'>결과화면 만들기</p>
                    <p className='pointer'
                            onClick={closeModal}
                        >예시를 보려면 요기를 더블클릭!</p>
                    <RegResultInput
                    datas={documents} 
                    />
                </div>
                
            </div>
        </>
    )
}
