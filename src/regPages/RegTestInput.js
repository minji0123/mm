/* eslint-disable*/

import { useReducer, useState } from 'react';
import styled from 'styled-components';

import { Button } from 'react-bootstrap';


export default () => {
    const [question,setQuestion] = useState([ 

    ]);

    const [data,setData] = useState({
        id:1
        ,content:""
        ,answer1:""
        ,answer2:""
        ,type:"EI"
    });

    const printDatas = ["EI","SN","TF","JP"];
    const 임시 = " 질문을 입력해주세요";
    const 임시1 = " 답변을 입력해주세요";

    console.log(data);

    const handleClickButton = (link) => {
        // navigate(link);

    }

    const handleData = (event,i) => {

        if((event.target.id).slice(-1) === i){
            
            if (event.target.id === `question${i}`) {
                setData((prevState)=>{
                    return { ...prevState, content: event.target.value }
                })

            }else if (event.target.id === `answera1${i}`) {
                setData((prevState)=>{
                    return { ...prevState, answer1: event.target.value }
                })

            }else if (event.target.id === `answerb${i}`) {
                setData((prevState)=>{
                    return { ...prevState, answer2: event.target.value }
                })

            }

        }
        

    }

    return(
        <>
            <p>이제 진짜 질문과 답변을 입력해보세요</p>
            <p>총 8개의 질답을 입력해야해요</p>
            <div  style={{ width:'100%', maxWidth: '1000px' }} >

            {/* ei */}
            <Content>

                <SubContent>
                    <MyTextarea type="text"
                        id="question1" 
                        placeholder={printDatas[0]+ 임시}
                        onChange={(event)=>{handleData(event,'1')}}

                    />
                    <MyInput type="text"
                        id="answera1" 
                        placeholder={printDatas[0].slice(0,1)+ 임시1}
                        onChange={(event)=>{handleData(event,'1')}}


                    />
                    <MyInput type="text"
                        id="answerb1" 
                        placeholder={printDatas[0].slice(1)+ 임시1}
                        onChange={(event)=>{handleData(event,'1')}}


                    />
                </SubContent>

                <SubContent>
                    <MyTextarea type="text"
                        id="question7" 
                        placeholder={printDatas[0]+ 임시}
                        onChange={(event)=>{handleData(event,'7')}}

                    />
                    <MyInput type="text"
                        id="answera7" 
                        placeholder={printDatas[0].slice(0,1)+ 임시1}
                        onChange={(event)=>{handleData(event,'7')}}

                    />
                    <MyInput type="text"
                        id="answerb7" 
                        placeholder={printDatas[0].slice(1)+ 임시1}
                        onChange={(event)=>{handleData(event,'7')}}

                    />
                </SubContent>
                
            </Content>

            {/* sn */}
            <Content>
                <SubContent>
                <MyTextarea type="text"
                    id="question1" 
                    placeholder={printDatas[1]+ 임시}
                />
                <MyInput type="text"
                    id="answer1" 
                    placeholder={printDatas[1].slice(0,1)+ 임시1}

                />
                <MyInput type="text"
                    id="answer2" 
                    placeholder={printDatas[1].slice(1)+ 임시1}
                />
                </SubContent>
                <SubContent>
                <MyTextarea type="text"
                    id="question1" 
                    placeholder={printDatas[1]+ 임시}
                />
                <MyInput type="text"
                    id="answer1" 
                    placeholder={printDatas[1].slice(0,1)+ 임시1}

                />
                <MyInput type="text"
                    id="answer2" 
                    placeholder={printDatas[1].slice(1)+ 임시1}
                />
                </SubContent>
            </Content>

          {/* tf */}
          <Content>
                <SubContent>
                <MyTextarea type="text"
                    id="question1" 
                    placeholder={printDatas[2]+ 임시}
                />
                <MyInput type="text"
                    id="answer1" 
                    placeholder={printDatas[2].slice(0,1)+ 임시1}

                />
                <MyInput type="text"
                    id="answer2" 
                    placeholder={printDatas[2].slice(1)+ 임시1}
                />
                </SubContent>
                <SubContent>
                <MyTextarea type="text"
                    id="question1" 
                    placeholder={printDatas[2]+ 임시}
                />
                <MyInput type="text"
                    id="answer1" 
                    placeholder={printDatas[2].slice(0,1)+ 임시1}

                />
                <MyInput type="text"
                    id="answer2" 
                    placeholder={printDatas[2].slice(1)+ 임시1}
                />
                </SubContent>
            </Content>

          {/* jp */}
          <Content>
                <SubContent>
                <MyTextarea type="text"
                    id="question1" 
                    placeholder={printDatas[3]+ 임시}
                />
                <MyInput type="text"
                    id="answer1" 
                    placeholder={printDatas[3].slice(0,1)+ 임시1}

                />
                <MyInput type="text"
                    id="answer2" 
                    placeholder={printDatas[3].slice(1)+ 임시1}
                />
                </SubContent>
                <SubContent>
                <MyTextarea type="text"
                    id="question1" 
                    placeholder={printDatas[3]+ 임시}
                />
                <MyInput type="text"
                    id="answer1" 
                    placeholder={printDatas[3].slice(0,1)+ 임시1}

                />
                <MyInput type="text"
                    id="answer2" 
                    placeholder={printDatas[3].slice(1)+ 임시1}
                />
                </SubContent>
            </Content>
            </div>
            <Button variant="light"
                            className="btn"
                            onClick={() => handleClickButton}
                    >
                        다음
                    </Button>
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
    margin-top:30px;
`
const SubContent = styled.div`
    width: 18rem;
`