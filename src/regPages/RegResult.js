/* eslint-disable */

import { useEffect,useState } from 'react';

//my style
import './regstyle.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';

import RegResultInput from './RegResultInput';
import RegModalsResult from './RegModalsResult';


export default () => {
    const [modalSwitch,setModalSwitch] = useState(true);
    const [data, setData] = useState(true);

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
            <div className='regresult-wrap'>
                <p className='main-title'>결과화면 만들기</p>
                <p className='pointer'
                        onClick={closeModal}
                    >예시를 보려면 요기를 클릭!</p>
                <RegResultInput/>
            </div>
            
        </div>
    </>
    )
}
