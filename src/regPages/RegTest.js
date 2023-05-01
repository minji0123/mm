/* eslint-disable*/

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


//my style
import './regstyle.sass';
import '../marginpadding.sass';


import RegTestInput from './RegTestInput';
import RegModal from './RegModals';

export default () => {
    const [modalSwitch,setModalSwitch] = useState(true);
    const [data, setData] = useState(true);

    const closeModal = () =>{
        console.log('뭐야!' ,modalSwitch);
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
                    >예시입니당 클릭!</p>
                        {modalSwitch && <RegModal setData={setData} />}

                    {/* <p>❕ </p> */}

                    <RegTestInput/>


                </div>
                
            </div>
        </>
    )
}
