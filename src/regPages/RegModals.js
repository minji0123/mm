import { useEffect, useState } from 'react';

//my style
import './regstyle.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';

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
                        <div className='modal-close mb10'>

                            <p className='pointer'
                                onClick={closeModal}
                            >x</p>
                        </div>
                        <p className='mb10' style={{textAlign: "center", fontSize: "20px"}}>예시입니당!</p>
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
                    <p className='mb10'>↓ ↓ ↓</p>

                    <div className='example-card'>
                        <div className='card-wrap'>
                            <p>{ question ? question : "친구가 여행계획을 세워왔어요! 당신은 여행을 갈건가요??"}</p>
                            <div className='btn-wrap mt20'>
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
