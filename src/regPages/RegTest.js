/* eslint-disable*/

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


//my style
import './regstyle.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';


import RegTestInput from './RegTestInput';
import RegModal from './RegModals';

export default () => {
    const [modalSwitch,setModalSwitch] = useState(true);
    const [data, setData] = useState(true);

    const closeModal = () =>{
        setModalSwitch(!modalSwitch);
    }

    const navigate = useNavigate();


    useEffect(()=>{
        setModalSwitch(data);
    },[data])



    return(
        <>
            <div className='regtest pt80 pb80'>
                <div className='regtest-wrap'>
                    <p className='main-title'>테스트화면 만들기</p>

                    <p className='pointer'
                        onClick={closeModal}
                    >예시를 보려면 요기를 클릭!</p>
                        {modalSwitch && <RegModal setData={setData} />}

                    {/* <p>❕ </p> */}

                    <RegTestInput/>

                </div>
                
            </div>
        </>
    )
}
