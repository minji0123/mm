/* eslint-disable*/

import { useReducer, useState } from 'react';
import styled from 'styled-components';
import { useFirestore } from '../hooks/useFirestore';
import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';


export default () => {
    let question = [];

    const [data,setData] = useState([
        { id:1, content:"",answer1:"", answer2:"", type:"EI"},
        { id:2, content:"",answer1:"", answer2:"", type:"JP"},
        { id:3, content:"",answer1:"", answer2:"", type:"SN"},
        { id:4, content:"",answer1:"", answer2:"", type:"TF"},
        { id:5, content:"",answer1:"", answer2:"", type:"SN"},
        { id:6, content:"",answer1:"", answer2:"", type:"TF"},
        { id:7, content:"",answer1:"", answer2:"", type:"EI"},
        { id:8, content:"",answer1:"", answer2:"", type:"JP"}
    ]);

    const [data1,setData1] = useState({
        id:1
        ,content:""
        ,answer1:""
        ,answer2:""
        ,type:"EI"
    });

    const [data2,setData2] = useState({
        id:2
        ,content:""
        ,answer1:""
        ,answer2:""
        ,type:"JP"
    });

    const [data3,setData3] = useState({
        id:3
        ,content:""
        ,answer1:""
        ,answer2:""
        ,type:"SN"
    });

    const [data4,setData4] = useState({
        id:4
        ,content:""
        ,answer1:""
        ,answer2:""
        ,type:"TF"
    });

    const [data5,setData5] = useState({
        id:5
        ,content:""
        ,answer1:""
        ,answer2:""
        ,type:"SN"
    });

    const [data6,setData6] = useState({
        id:6
        ,content:""
        ,answer1:""
        ,answer2:""
        ,type:"TF"
    });

    const [data7,setData7] = useState({
        id:7
        ,content:""
        ,answer1:""
        ,answer2:""
        ,type:"EI"
    });

    const [data8,setData8] = useState({
        id:8
        ,content:""
        ,answer1:""
        ,answer2:""
        ,type:"JP"
    });



    const { addComment, response } = useFirestore("TestData");
    const navigate = useNavigate();

    const printDatas = ["EI","SN","TF","JP"];
    const 임시 = " 질문을 입력해주세요";
    const 임시1 = " 답변을 입력해주세요";

    // console.log(data1);

    const handleClickButton1 = (link) => {

        question.push(data1);
        question.push(data2);
        question.push(data3);
        question.push(data4);
        question.push(data5);
        question.push(data6);
        question.push(data7);
        question.push(data8);
        // console.log(question);

        // addComment({question});// uid:작성한 유저 id
        // addComment({questionSample});// uid:작성한 유저 id

        navigate(link);

    }

    const handleData = (event,i) => {

        switch (i){
            case '1':
                if (event.target.id === `question${i}`) {
                    setData1((prevState)=>{
                        return { ...prevState, content: event.target.value }
                    })
    
                }else if (event.target.id === `answera${i}`) {
                    setData1((prevState)=>{
                        return { ...prevState, answer1: event.target.value }
                    })
    
                }else if (event.target.id === `answerb${i}`) {
                    setData1((prevState)=>{
                        return { ...prevState, answer2: event.target.value }
                    })
                }
            case '2':
                if (event.target.id === `question${i}`) {
                    setData2((prevState)=>{
                        return { ...prevState, content: event.target.value }
                    })
    
                }else if (event.target.id === `answera${i}`) {
                    setData2((prevState)=>{
                        return { ...prevState, answer1: event.target.value }
                    })
    
                }else if (event.target.id === `answerb${i}`) {
                    setData2((prevState)=>{
                        return { ...prevState, answer2: event.target.value }
                    })
                }
            case '3':
                if (event.target.id === `question${i}`) {
                    setData3((prevState)=>{
                        return { ...prevState, content: event.target.value }
                    })
    
                }else if (event.target.id === `answera${i}`) {
                    setData3((prevState)=>{
                        return { ...prevState, answer1: event.target.value }
                    })
    
                }else if (event.target.id === `answerb${i}`) {
                    setData3((prevState)=>{
                        return { ...prevState, answer2: event.target.value }
                    })
                }
            case '4':
                if (event.target.id === `question${i}`) {
                    setData4((prevState)=>{
                        return { ...prevState, content: event.target.value }
                    })
    
                }else if (event.target.id === `answera${i}`) {
                    setData4((prevState)=>{
                        return { ...prevState, answer1: event.target.value }
                    })
    
                }else if (event.target.id === `answerb${i}`) {
                    setData4((prevState)=>{
                        return { ...prevState, answer2: event.target.value }
                    })
                }
            case '5':
                if (event.target.id === `question${i}`) {
                    setData5((prevState)=>{
                        return { ...prevState, content: event.target.value }
                    })
    
                }else if (event.target.id === `answera${i}`) {
                    setData5((prevState)=>{
                        return { ...prevState, answer1: event.target.value }
                    })
    
                }else if (event.target.id === `answerb${i}`) {
                    setData5((prevState)=>{
                        return { ...prevState, answer2: event.target.value }
                    })
                }
            case '6':
                if (event.target.id === `question${i}`) {
                    setData6((prevState)=>{
                        return { ...prevState, content: event.target.value }
                    })
    
                }else if (event.target.id === `answera${i}`) {
                    setData6((prevState)=>{
                        return { ...prevState, answer1: event.target.value }
                    })
    
                }else if (event.target.id === `answerb${i}`) {
                    setData6((prevState)=>{
                        return { ...prevState, answer2: event.target.value }
                    })
                }
            case '7':
                if (event.target.id === `question${i}`) {
                    setData7((prevState)=>{
                        return { ...prevState, content: event.target.value }
                    })
    
                }else if (event.target.id === `answera${i}`) {
                    setData7((prevState)=>{
                        return { ...prevState, answer1: event.target.value }
                    })
    
                }else if (event.target.id === `answerb${i}`) {
                    setData7((prevState)=>{
                        return { ...prevState, answer2: event.target.value }
                    })
                }
            case '8':
                if (event.target.id === `question${i}`) {
                    setData8((prevState)=>{
                        return { ...prevState, content: event.target.value }
                    })
    
                }else if (event.target.id === `answera${i}`) {
                    setData8((prevState)=>{
                        return { ...prevState, answer1: event.target.value }
                    })
    
                }else if (event.target.id === `answerb${i}`) {
                    setData8((prevState)=>{
                        return { ...prevState, answer2: event.target.value }
                    })
                }

        }        

    }

    // const handleData = (event,i) => {

    //     if((event.target.id).slice(-1) === i){
    //         if (event.target.id === `question${i}`) {
    //             setData((prevState)=>{
    //                 return { ...prevState, content: event.target.value }
    //             })

    //         }else if (event.target.id === `answera1${i}`) {
    //             setData((prevState)=>{
    //                 return { ...prevState, answer1: event.target.value }
    //             })

    //         }else if (event.target.id === `answerb${i}`) {
    //             setData((prevState)=>{
    //                 return { ...prevState, answer2: event.target.value }
    //             })
    //         }
    //     }
    // }

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
                   
            <ButtonGroup className="mt_20">
                <Button variant="light"
                        className="btn"
                        onClick={() => handleClickButton('/regmain')}
                >
                    이전
                </Button>
                <Button variant="light"
                        className="btn"
                        onClick={() => handleClickButton1('/regresult')}

                >
                    다음
                </Button>
            </ButtonGroup>
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
const ButtonGroup = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    margin-bottom:20px;
    
`