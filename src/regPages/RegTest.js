/* eslint-disable*/

import { useEffect, useState } from 'react';


//my style
import './regstyle.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';


import RegTestInput from './RegTestInput';
import RegModal from './RegModals';

export default () => {
    const [modalSwitch,setModalSwitch] = useState(false);
    const [data, setData] = useState(false);

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


                    <RegTestInput/>

                </div>
                
            </div>
        </>
    )
}
