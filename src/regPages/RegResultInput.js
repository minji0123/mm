
import { useEffect, useState } from 'react';
import styled from 'styled-components';


export default () => {
    const [question1,setQuestion1] = useState("");
    const [answer1,setAnswer1] = useState("");
    const [answer2,setAnswer2] = useState("");

    const printDatas = ["EI","SN","TF","JP"];
    const 임시 = " 질문을 입력해주세요";
    const 임시1 = " 답변을 입력해주세요";

    const handleData = (event) => {
        if (event.target.id === 'question1') {
            setQuestion1(event.target.value);
        }else if (event.target.id === 'answer1') {
            setAnswer1(event.target.value);
        }else if (event.target.id === 'answer2') {
            setAnswer2(event.target.value);
        }
    }
    console.log(question1);
    
    // 일단 하드코딩을 해야되나...
    // 문구 배열에 저장해놓고 8개 돌려버리면 되지 않을까...?
    // 8개나 되는데 이거를 다 이벤트로 넣어야 되는게 맞나...? 어차피 useState 를 사용하긴 해야되느데...
    // 실패?ㅠㅠㅠ
    // 그럼... 저거 target 쓰지말고 다음 버튼을 누를 때 

    return(
        <>
            <p>이제 진짜 질문과 답변을 입력해보세요</p>
            <p>총 8개의 질답을 입력해야해요</p>

            <div  style={{ width: '1000px' }} >

            <Content>
                {/* ei */}
                <div>
                    <MyTextarea type="text"
                        id="question1" value={question1} onChange={handleData}
                        placeholder={printDatas[0]+ 임시}
                    />
                    <MyInput type="text"
                        id="answer1" value={answer1} onChange={handleData}
                        placeholder={printDatas[0].slice(0,1)+ 임시1}

                    />
                    <MyInput type="text"
                        id="answer2" value={answer2} onChange={handleData}
                        placeholder={printDatas[0].slice(1)+ 임시1}
                    />
                </div>
                {/* sn */}
                <div >
                    <MyTextarea type="text"
                        id="question2" value={question1} onChange={handleData}
                        placeholder={printDatas[1]+ 임시}
                    />
                    <MyInput type="text"
                        id="answer1" value={answer1} onChange={handleData}
                        placeholder={printDatas[1].slice(0,1)+ 임시1}

                    />
                    <MyInput type="text"
                        id="answer2" value={answer2} onChange={handleData}
                        placeholder={printDatas[1].slice(1)+ 임시1}
                    />
                </div>

                {/* tf */}
                <div >
                    <MyTextarea type="text"
                        id="question1" value={question1} onChange={handleData}
                        placeholder={printDatas[2]+ 임시}
                    />
                    <MyInput type="text"
                        id="answer1" value={answer1} onChange={handleData}
                        placeholder={printDatas[2].slice(0,1)+ 임시1}

                    />
                    <MyInput type="text"
                        id="answer2" value={answer2} onChange={handleData}
                        placeholder={printDatas[2].slice(1)+ 임시1}
                    />
                </div>

                {/* jp */}
                <div>
                    <MyTextarea type="text"
                        id="question1" value={question1} onChange={handleData}
                        placeholder={printDatas[3]+ 임시}
                    />
                    <MyInput type="text"
                        id="answer1" value={answer1} onChange={handleData}
                        placeholder={printDatas[3].slice(0,1)+ 임시1}

                    />
                    <MyInput type="text"
                        id="answer2" value={answer2} onChange={handleData}
                        placeholder={printDatas[3].slice(1)+ 임시1}
                    />
                </div>

            </Content>

            <Content style={{marginTop:"40px" }}>
                <div >
                    <MyTextarea type="text"
                        id="question1" value={question1} onChange={handleData}
                        placeholder={printDatas[0]+ 임시}
                    />
                    <MyInput type="text"
                        id="answer1" value={answer1} onChange={handleData}
                        placeholder={printDatas[0].slice(0,1)+ 임시1}

                    />
                    <MyInput type="text"
                        id="answer2" value={answer2} onChange={handleData}
                        placeholder={printDatas[0].slice(1)+ 임시1}
                    />
                </div>

                <div >
                    <MyTextarea type="text"
                        id="question1" value={question1} onChange={handleData}
                        placeholder={printDatas[1]+ 임시}
                    />
                    <MyInput type="text"
                        id="answer1" value={answer1} onChange={handleData}
                        placeholder={printDatas[1].slice(0,1)+ 임시1}

                    />
                    <MyInput type="text"
                        id="answer2" value={answer2} onChange={handleData}
                        placeholder={printDatas[1].slice(1)+ 임시1}
                    />
                </div>

                <div>
                    <MyTextarea type="text"
                        id="question1" value={question1} onChange={handleData}
                        placeholder={printDatas[2]+ 임시}
                    />
                    <MyInput type="text"
                        id="answer1" value={answer1} onChange={handleData}
                        placeholder={printDatas[2].slice(0,1)+ 임시1}

                    />
                    <MyInput type="text"
                        id="answer2" value={answer2} onChange={handleData}
                        placeholder={printDatas[2].slice(1)+ 임시1}
                    />
                </div>

                <div>
                    <MyTextarea type="text"
                        id="question1" value={question1} onChange={handleData}
                        placeholder={printDatas[3]+ 임시}
                    />
                    <MyInput type="text"
                        id="answer1" value={answer1} onChange={handleData}
                        placeholder={printDatas[3].slice(0,1)+ 임시1}

                    />
                    <MyInput type="text"
                        id="answer2" value={answer2} onChange={handleData}
                        placeholder={printDatas[3].slice(1)+ 임시1}
                    />
                </div>
                </Content>
            </div>

        </>
    )
}
const MyInput = styled.input`
    border: solid 1px lightgray;
    border-radius: 5px;
    margin-bottom: 4px;
    width: 200px;
`
const MyTextarea = styled.textarea`
    border: solid 1px lightgray;
    border-radius: 5px;
    margin-bottom: 4px;
    width: 200px;
`
const Content = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;

`

{/* {repeatDiv()} */}
{/* {mapDatas.map((a,i)=>{
    return(
        <div key={i} className="col-3 mb-3">
            <input type="text"
                style={{border: "solid 1px lightgray", borderRadius: "5px",
                        marginBottom:"4px",width:"200px"}}
                id={a} value={question} onChange={handleData}
                placeholder={printDatas[i]+ 임시}
            />
            <input type="text"
                style={{border: "solid 1px lightgray", borderRadius: "5px",
                        marginBottom:"4px",width:"200px"}}
                id={a} value={answer1} onChange={handleData}
                placeholder={printDatas[i].slice(0,1)+ 임시1}

            />
            <input type="text"
                style={{border: "solid 1px lightgray", borderRadius: "5px",
                        marginBottom:"4px",width:"200px"}}
                id={a} value={answer2} onChange={handleData}
                placeholder={printDatas[i].slice(1)+ 임시1}
            />
        </div>
    )
    
})} */}