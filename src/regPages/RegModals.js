/* eslint-disable */

import { useState,useRef,useEffect } from 'react';

//my style
import './regstyle.sass';
import './regtest.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';

export default (props) => {

    const [question,setQuestion] = useState("");
    const [answer1,setAnswer1] = useState("");
    const [answer2,setAnswer2] = useState("");
    const [modalSwitch,setModalSwitch] = useState(true);
    const [nextSwitch,setNextSwitch] = useState(true);

    
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

    const moveToNext = () =>{
        setNextSwitch(!nextSwitch);
    }
    // const targetRef = useRef("");  
    // const handleScroll = () => {
    //     console.log("scrolling");
        
    //     if (window.scrollY > 0) {
    //         if(modalSwitch){
    //             setModalSwitch(false)
    //         }
    //     }
    // };


    return(
        <div>
        {
        modalSwitch &&
        <div className='regmodals-all'>
            <div className='regmodals'>
                {/* 닫기 버튼 */}
                <div className='modal-close mb10'>
                    <p className='pointer' onClick={closeModal}>x</p>
                </div>
                {/* 본문 */}
                <div className='regmodals-wrap'>
                    { !nextSwitch &&
                    <>
                    {/* 모달 상단 */}
                    <div className="regmodals-inputs">
                        <h3 className='modal-title' >작성한 질문은 이렇게 보일거에요</h3>
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
                        <p className='mt10 mb10'>↓ ↓ ↓</p>
                    </div>

                    {/* 모달 하단 */}
                    <div className='example-card'>
                        <div className='card-wrap'>
                            <p>{ question ? question : "친구가 여행계획을 세워왔어요! 당신은 여행을 갈건가요??"}</p>
                            <div className='btn-wrap mt20'>
                                <button className='brown-btn-y mr5'>{answer1 ? answer1 : "네!"}</button>
                                <button className='brown-btn-y ml5'>{answer2 ? answer2 : "아녀!"}</button>
                            </div>
                        </div>
                    </div>
                    </>
                    }

                    {/* 선택지 입력 */}
                    { nextSwitch &&
                        <div className='option-input' >
                            <h3>선택지를 입력할 순서에요.</h3>
                            <p>mbti 별 질문과 답변을 입력해주세요.</p>
                            <p>선택지 개수가 많을수록 더 정확한 결과를 얻을 수 있습니다.</p>
                        </div>
                    }
                </div>
                {/* 하단버튼 */}
                <div className='lrbtn'>
                    <p onClick={()=>moveToNext()} className='pointer'>◀️</p>
                    <p onClick={()=>moveToNext()} className='pointer'>▶️</p>
                </div>
            </div>
        </div>


            }
        </div>
    )

}
