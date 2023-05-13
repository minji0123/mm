import { useState } from 'react';
import { useNavigate,createSearchParams } from "react-router-dom";

//my style
import './pages.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';

//data
import {matchType} from "../utils/matchType.js";
import TestData from '../assets/data/1.json'

export default function Test(){
    const navigate = useNavigate();

    const [contents, setContents] = useState(TestData.question);
    const [qNumber, setQNumber] = useState(1);
    const [progress, setProgress] = useState(0);
    const [mId,setMId] = useState(0);
    /* ********************************
        Test 계산 로직
    *********************************/
    const [total, setTotal] = useState([
        {mType:"EI",score:0},
        {mType:"SN",score:0},
        {mType:"TF",score:0},
        {mType:"JP",score:0},
    ])
    
    console.log(total,'total');
    console.log(contents,'contents');


    const handleClickBtn = (no, type) => {

        // map 을 돌면서... 
        // total 객체의 mType 값 === 파라미터로 받아온 type => 그 타입의 score + 파라미터id값
        const calScore = total.map((a,i)=>{
            return a.mType === type ? {mType:a.mType , score:a.score + no} : a
        })
        setTotal(calScore);

        /* ********************************
            페이지 이동 로직
        *********************************/
        if(contents.length !== qNumber + 1){
            setQNumber(qNumber+1);// 문제 번호+1
            setProgress((qNumber/contents.length)*100);// progress 바 수치+10
        }

        // 문제가 다 끝나면 결과 페이지로 이동
        else{
            // 최종 결과 계산
            const finalResult = calScore.reduce(
                (acc, cur) =>
                    acc +
                    (cur.score >= 2 ? cur.mType.substring(0, 1) : cur.mType.substring(1, 2)), // E랑 I, T랑 F 이런식으로 TYPE 을 분리시킴
                    ""// 초기값
            )
            console.log(finalResult);

            // 결과 페이지로 이동
            // 이동할때 어떤 방식으로 넘겨줄지 고민....
            navigate({
                pathname: "/result",
                search: `?${createSearchParams({// ~/resutl?mbti=ESTJ get 요청으로 데이터를 넘길 수 있음
                mbti: finalResult,
            })}`,
            });

        }
        
    }

    return(
        <>
            <div className='page-style'>
                <div className='page-wrap safe-size mt100'>
                    {/* <LinearProgress variant="determinate" value={progress} /> */}
                    <p className='page-content '> {contents.length>0 && contents[qNumber].content} </p>
                    
                    <div className="btn-group mt100">

                        <button 
                            className="grey-btn mr10"
                            onClick={() => handleClickBtn(1,contents[qNumber].type)}
                        >
                            {contents.length>0 && contents[qNumber].answer1}
                        </button>

                        <button 
                            className="brown-btn ml10"
                            onClick={() => handleClickBtn(0,contents[qNumber].type)}
                        >
                            {contents.length>0 && contents[qNumber].answer2}
                        </button>

                    </div>
                </div>

            </div>
        </>
    )
}

