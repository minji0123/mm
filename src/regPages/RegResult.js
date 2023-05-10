/* eslint-disable */

import { useEffect,useState } from 'react';

import styled from 'styled-components';
import RegResultInput from './RegResultInput';
import RegModalsResult from './RegModalsResult';

//my style
import './regstyle.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';

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
                <p>결과화면 만들기</p>
                <p className='pointer'
                        onClick={closeModal}
                    >예시를 보려면 요기를 클릭!</p>
                <RegResultInput/>
            </div>
            
        </div>
    </>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    width:100%;
    font-family: "Jua";
    padding:25px;

`
const Header = styled.div`
    font-size: 20pt;
    display: flex;
    justify-content:center;
    align-items:center;
`

const Title = styled.div`
    font-size: 30px;
    margin-top:40px;
    display: flex;
    justify-content:center;
    align-items:center;
`
const SubTitle = styled.div`
    font-size: 18px;
    margin-top:20px;
    display: flex;
    justify-content:center;
    align-items:center;
`
const LogoImage = styled.div`
    margin-top:10px;
`
const Content = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

`
const Desc = styled.div`
    font-size: 12pt;
    margin-top:20px;
    margin-bottom:20px;
    max-width: 80%;

`
const More = styled.div`
    font-size: 12pt;
    margin-bottom:20px;
    max-width: 80%;
`
