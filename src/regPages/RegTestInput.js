/* eslint-disable*/

import { useReducer, useState } from 'react';
import styled from 'styled-components';
import { useFirestore } from '../hooks/useFirestore';
import { useNavigate } from 'react-router-dom';
import { nullCheck, nullCheckDatas } from '../utils/StringUtil.js'
import { Button } from 'react-bootstrap';

//my style
import './regstyle.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';

export default () => {
    let question = [];

    const [data1,setData1] = useState({id:1,content:"",answer1:"",answer2:"",type:"EI"});
    const [data2,setData2] = useState({id:2,content:"",answer1:"",answer2:"",type:"JP"});
    const [data3,setData3] = useState({id:3,content:"",answer1:"",answer2:"",type:"SN"});
    const [data4,setData4] = useState({id:4,content:"",answer1:"",answer2:"",type:"TF"});
    const [data5,setData5] = useState({id:5,content:"",answer1:"",answer2:"",type:"SN"});
    const [data6,setData6] = useState({id:6,content:"",answer1:"",answer2:"",type:"TF"});
    const [data7,setData7] = useState({id:7,content:"",answer1:"",answer2:"",type:"EI"});
    const [data8,setData8] = useState({id:8,content:"",answer1:"",answer2:"",type:"JP"});

    const { addComment, response } = useFirestore("TestData");
    const navigate = useNavigate();

    const printDatas = ["EI","SN","TF","JP"];
    const 임시 = " 질문을 입력해주세요";
    const 임시1 = " 답변을 입력해주세요";


    const handleClickButton = (link) => {
        if(link === '/regmain'){
        navigate(link);

        }else if(link === '/regresult'){
            // 데이터가 비어있으면 return false
            // console.log(data1,data2,data3,data4,data5,data6,data7,data8);

            // question.push(data1);
            // question.push(data2);
            // question.push(data3);
            // question.push(data4);
            // question.push(data5);
            // question.push(data6);
            // question.push(data7);
            // question.push(data8);

            // nullCheckDatas(question);

            // console.log(question);

            // addComment({question});
            navigate(link);
        }else{
            //오류
        }

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
                break;
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
                break;

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
                break;

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
                break;

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
                break;

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
                break;

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
                break;

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
                break;


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
            <section className='testInput-group'>
                
                <p>8개의 질답을 입력해주세요🙂</p>
                {/* ei */}
                <div className='group-wrap mt40'>

                    <div className='group1'>
                        <p>{printDatas[0]+ 임시}</p>
                        <textarea type="text"
                            id="question1" 
                            placeholder={printDatas[0]+ 임시}
                            onChange={(event)=>{handleData(event,'1')}}

                        />
                        <p className='mt10'>{printDatas[0].slice(0,1)+ 임시1}</p>
                        <input type="text"
                            id="answera1" 
                            placeholder={printDatas[0].slice(0,1)+ 임시1}
                            onChange={(event)=>{handleData(event,'1')}}


                        />
                        <p>{printDatas[0].slice(1)+ 임시1}</p>
                        <input type="text"
                            id="answerb1" 
                            placeholder={printDatas[0].slice(1)+ 임시1}
                            onChange={(event)=>{handleData(event,'1')}}
                        />
                    </div>

                    <div className='group2'>
                    <p>{printDatas[0]+ 임시}</p>
                        
                        <textarea type="text"
                            id="question7" 
                            placeholder={printDatas[0]+ 임시}
                            onChange={(event)=>{handleData(event,'7')}}

                        />
                        <p className='mt10'>{printDatas[0].slice(0,1)+ 임시1}</p>

                        <input type="text"
                            id="answera7" 
                            placeholder={printDatas[0].slice(0,1)+ 임시1}
                            onChange={(event)=>{handleData(event,'7')}}

                        />
                        <p>{printDatas[0].slice(1)+ 임시1}</p>

                        <input type="text"
                            id="answerb7" 
                            placeholder={printDatas[0].slice(1)+ 임시1}
                            onChange={(event)=>{handleData(event,'7')}}

                        />
                    </div>
                </div>
                {/* sn */}
                <div className='group-wrap mt40'>

                    <div className='group1'>
                        <p>{printDatas[1]+ 임시}</p>
                        <textarea type="text"
                            id="question1" 
                            placeholder={printDatas[1]+ 임시}
                            onChange={(event)=>{handleData(event,'1')}}

                        />
                        <p className='mt10'>{printDatas[1].slice(0,1)+ 임시1}</p>
                        <input type="text"
                            id="answera1" 
                            placeholder={printDatas[1].slice(0,1)+ 임시1}
                            onChange={(event)=>{handleData(event,'1')}}


                        />
                        <p>{printDatas[1].slice(1)+ 임시1}</p>
                        <input type="text"
                            id="answerb1" 
                            placeholder={printDatas[1].slice(1)+ 임시1}
                            onChange={(event)=>{handleData(event,'1')}}
                        />
                    </div>

                    <div className='group2'>
                    <p>{printDatas[1]+ 임시}</p>
                        
                        <textarea type="text"
                            id="question7" 
                            placeholder={printDatas[1]+ 임시}
                            onChange={(event)=>{handleData(event,'7')}}

                        />
                        <p className='mt10'>{printDatas[1].slice(0,1)+ 임시1}</p>

                        <input type="text"
                            id="answera7" 
                            placeholder={printDatas[1].slice(0,1)+ 임시1}
                            onChange={(event)=>{handleData(event,'7')}}

                        />
                        <p>{printDatas[1].slice(1)+ 임시1}</p>

                        <input type="text"
                            id="answerb7" 
                            placeholder={printDatas[1].slice(1)+ 임시1}
                            onChange={(event)=>{handleData(event,'7')}}

                        />
                    </div>
                </div>
                {/* tf */}
                <div className='group-wrap mt40'>
                    <div className='group1'>
                        <p>{printDatas[2]+ 임시}</p>
                        <textarea type="text"
                            id="question1" 
                            placeholder={printDatas[2]+ 임시}
                            onChange={(event)=>{handleData(event,'1')}}

                        />
                        <p className='mt10'>{printDatas[2].slice(0,1)+ 임시1}</p>
                        <input type="text"
                            id="answera1" 
                            placeholder={printDatas[2].slice(0,1)+ 임시1}
                            onChange={(event)=>{handleData(event,'1')}}


                        />
                        <p>{printDatas[2].slice(1)+ 임시1}</p>
                        <input type="text"
                            id="answerb1" 
                            placeholder={printDatas[2].slice(1)+ 임시1}
                            onChange={(event)=>{handleData(event,'1')}}
                        />
                    </div>

                    <div className='group2'>
                    <p>{printDatas[2]+ 임시}</p>
                        
                        <textarea type="text"
                            id="question7" 
                            placeholder={printDatas[2]+ 임시}
                            onChange={(event)=>{handleData(event,'7')}}

                        />
                        <p className='mt10'>{printDatas[2].slice(0,1)+ 임시1}</p>

                        <input type="text"
                            id="answera7" 
                            placeholder={printDatas[2].slice(0,1)+ 임시1}
                            onChange={(event)=>{handleData(event,'7')}}

                        />
                        <p>{printDatas[2].slice(1)+ 임시1}</p>

                        <input type="text"
                            id="answerb7" 
                            placeholder={printDatas[2].slice(1)+ 임시1}
                            onChange={(event)=>{handleData(event,'7')}}

                        />
                    </div>
                </div>
                {/* jp */}
                <div className='group-wrap mt40'>
                            <div className='group1'>
                                <p>{printDatas[3]+ 임시}</p>
                                <textarea type="text"
                                    id="question1" 
                                    placeholder={printDatas[3]+ 임시}
                                    onChange={(event)=>{handleData(event,'1')}}

                                />
                                <p className='mt10'>{printDatas[3].slice(0,1)+ 임시1}</p>
                                <input type="text"
                                    id="answera1" 
                                    placeholder={printDatas[3].slice(0,1)+ 임시1}
                                    onChange={(event)=>{handleData(event,'1')}}


                                />
                                <p>{printDatas[3].slice(1)+ 임시1}</p>
                                <input type="text"
                                    id="answerb1" 
                                    placeholder={printDatas[3].slice(1)+ 임시1}
                                    onChange={(event)=>{handleData(event,'1')}}
                                />
                            </div>

                            <div className='group2'>
                            <p>{printDatas[3]+ 임시}</p>
                                
                                <textarea type="text"
                                    id="question7" 
                                    placeholder={printDatas[3]+ 임시}
                                    onChange={(event)=>{handleData(event,'7')}}

                                />
                                <p className='mt10'>{printDatas[3].slice(0,1)+ 임시1}</p>

                                <input type="text"
                                    id="answera7" 
                                    placeholder={printDatas[3].slice(0,1)+ 임시1}
                                    onChange={(event)=>{handleData(event,'7')}}

                                />
                                <p>{printDatas[3].slice(1)+ 임시1}</p>

                                <input type="text"
                                    id="answerb7" 
                                    placeholder={printDatas[3].slice(1)+ 임시1}
                                    onChange={(event)=>{handleData(event,'7')}}
                                />
                            </div>
                        </div>

                <div className='btn-group mt40'>
                    <button
                        onClick={() => 
                            {
                                handleClickButton('/regmain')
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                    
                    }
                    >이전</button>
                    <button className='ml3'
                        onClick={() => 
                            {   
                                handleClickButton('/regresult')
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                        
                        }
                    >다음</button>
                </div>


            </section>
        </>
    )
}
