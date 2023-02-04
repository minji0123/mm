
import { useEffect, useState } from 'react';


export default () => {
    const [question,setQuestion] = useState("");
    const [answer1,setAnswer1] = useState("");
    const [answer2,setAnswer2] = useState("");

    
    const handleData = (event) => {
        if (event.target.id === 'first') {
            setQuestion(event.target.value);
        }else if (event.target.id === 'second') {
            setAnswer1(event.target.value);
        }else if (event.target.id === 'third') {
            setAnswer2(event.target.value);
        }
    }
    
    // 일단 하드코딩을 해야되나...

    return(
        <>
            <p>이제 진짜 질문과 답변을 입력해보세요</p>
            <p>총 8개의 질답을 입력해야 해요</p>

            <div className="row mb-3" >

                <div className="col-3 mb-3">
                    <input type="text"
                           style={{border: "solid 1px lightgray", borderRadius: "5px",
                                   marginBottom:"4px",width:"290px"}}
                           id="first" value={question} onChange={handleData}
                           placeholder="EI 질문을 입력해주세요"
                    />
                    <input type="text"
                           style={{border: "solid 1px lightgray", borderRadius: "5px",
                                   marginBottom:"4px",width:"290px"}}
                           id="second" value={answer1} onChange={handleData}
                           placeholder="E 답변을 입력해주세요"
                    />
                    <input type="text"
                           style={{border: "solid 1px lightgray", borderRadius: "5px",
                                   marginBottom:"4px",width:"290px"}}
                           id="third" value={answer2} onChange={handleData}
                           placeholder="I 답변을 입력해주세요"
                    />
                </div>

            </div>

        </>
    )
}