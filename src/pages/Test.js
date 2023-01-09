import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate,createSearchParams } from "react-router-dom";
// import Button from '@material-ui/core/Button';
// import LinearProgress from '@material-ui/core/LinearProgress';
import {matchType} from "../utils/matchType.js";

export default function Test(){
    const navigate = useNavigate();

    const [contents, setContents] = useState([]);
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

    useEffect(()=>{
        /* ********************************
            서버 데이터
        *********************************/
        const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
        const URL = `${PROXY}/test/1/1.json`;

        axios.get(URL)
        .then((result)=>{
            let copy = result.data.question;
            setContents(copy);
        })
        .catch(()=>{
            console.log('실패...');
        })

    },[])
    // console.log(contents);

    return(
        <>
            <Wrapper>
                {/* <LinearProgress variant="determinate" value={progress} /> */}
                <Title> {contents.length>0 && contents[qNumber].content} </Title>
                <ButtonGroup className="mt_20">
                    <button 
                        className="btn left_btn"
                        onClick={() => handleClickBtn(1,contents[qNumber].type)}
                    >
                        {contents.length>0 && contents[qNumber].answer1}
                    </button>

                    <button 
                    color="primary"
                    className="btn right_btn"
                    onClick={() => handleClickBtn(0,contents[qNumber].type)}
                    >
                        {contents.length>0 && contents[qNumber].answer2}
                    </button>
                </ButtonGroup>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    width:100%;
    font-family: "Jua";
    padding:25px;

`
const ButtonGroup = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
`
const Title = styled.div`
    font-size: 20pt;
    margin:40px 80px 40px 80px;
    display: flex;
    justify-content:center;
    align-items:center;

`