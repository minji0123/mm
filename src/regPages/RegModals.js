import { useEffect, useState } from 'react';

//my style
import './regstyle.sass';
import '../marginpadding.sass';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export default (props) => {

    const [question,setQuestion] = useState("");
    const [answer1,setAnswer1] = useState("");
    const [answer2,setAnswer2] = useState("");
    const [modalSwitch,setModalSwitch] = useState(true);

    
    const handleData = (event) => {
        if (event.target.id === 'first') {
            setQuestion(event.target.value);
        }else if (event.target.id === 'second') {
            setAnswer1(event.target.value);
        }else if (event.target.id === 'third') {
            setAnswer2(event.target.value);
        }

    }

    const closeModal = () =>{
        console.log(modalSwitch);
        setModalSwitch(!modalSwitch);
        props.setData(false);
    }



    return(
        <>
        {modalSwitch &&
            <div className='regmodals'>
                <div className='regmodals-wrap'>

                    <div className="regmodals-inputs">
                        <div className='modal-close'>

                            <p className='pointer'
                                onClick={closeModal}
                            >x</p>
                        </div>
                        <textarea  type="text"

                                id="first" value={question} onChange={handleData}
                                placeholder="친구가 여행계획을 세워왔어요! 당신은 여행을 갈건가요??"
                        />
                        <input  type="text"
                                className='mt8'
                                id="second" value={answer1} onChange={handleData}
                                placeholder="네!!"
                        />
                        <input  type="text"
                                className='mt8'
                                id="third" value={answer2} onChange={handleData}
                                placeholder="아녀!!"
                        />

                    </div>

                    <p className='mt20'>이렇게 보일거에요</p>
                    <p>↓ ↓ ↓</p>

                    <div className='example-card'>
                        <div className='card-wrap'>
                            <p>{ question ? question : "친구가 여행계획을 세워왔어요! 당신은 여행을 갈건가요??"}</p>
                            <div className='btn-wrap'>
                                <button className='brown-btn-y mr5'>{answer1 ? answer1 : "네!"}</button>
                                <button className='brown-btn-y ml5'>{answer2 ? answer2 : "아녀!"}</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>}
        </>
    )

}
const SubTitle = styled.div`
    font-size: 18px;
    margin-top:20px;
    margin-bottom:20px;
    max-width: 80%;
`
const Content = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

`
const ButtonGroup = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    margin-bottom:20px;
    
`