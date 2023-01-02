import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate,createSearchParams } from "react-router-dom";
import Button from '@material-ui/core/Button';

export default function Test(){
    const navigate = useNavigate();

    const [contents, setContents] = useState([]);
    const [questionNo, setQuestionNo] = useState(1);
    /* ********************************
        Test 계산 로직
    *********************************/
    const [totalScore, setTotalScore] = useState([
        {id:"EI",score:0},
        {id:"SN",score:0},
        {id:"TF",score:0},
        {id:"JP",score:0},
    ])

    // console.log(totalScore,'totalScore');

    const handleClickBtn = (no, type) => {

        // map 을 돌면서... totalScore 객체의 id 값이 파라미터로 받아온 type 와 같다면 그 타입의 score+파라미터id값
        const newScore = totalScore.map((s)=>{
            console.log('???',s);
            return s.id === type ? {id:s.id , score:s.score + no} : s
        })

        setTotalScore(newScore);

        if(contents.length !== questionNo + 1){
            // 다음문제로 넘어가게 +1 해줌
            setQuestionNo(questionNo+1);
        }
        // 문제가 다 끝났을 때 out of index 가 되기 때문에 
        // else 에서 페이지 이동되게 처리
        else{
            // 집사 mbti 도출
            const mbti = newScore.reduce(
                (acc, curr) =>
                    acc +
                    (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)), // EI, TF 분리시킴
                    ""// 초기값
            )
            // console.log('mbti',mbti);
            // 결과 페이지로 이동
            navigate({
                pathname: "/result",
                search: `?${createSearchParams({// ~/resutl?mbti=ESTJ get 요청으로 데이터를 넘길 수 있음
                  mbti: mbti,
                })}`,
              });
        }
        
    }

    useEffect(()=>{
        /* ********************************
            Test 계산 로직
        *********************************/
        const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
        const URL = `${PROXY}/test/1/1.json`;

        axios.get(URL)
        .then((result)=>{
            let copy = result.data.question;
            setContents(copy);
            // console.log(copy[1].content,'성공...');

        })
        .catch(()=>{
            console.log('실패...');
        })

    },[])
    // console.log(contents);

    return(
        <>
            <Wrapper>
                {/* <ProgressBar striped variant="danger" now={(questionNo/content.length)*100 } className="mt_40"/> */}

                <Title> {contents.length>0 ? contents[questionNo].content : "..."} </Title>
                <ButtonGroup className="mt_20">
                    <Button 
                        className="left_btn"
                        onClick={() => handleClickBtn(1,contents[questionNo].type)}
                    >
                        {contents.length>0 ? contents[questionNo].answer1 : "..."}
                    </Button>

                    <Button 
                    color="primary"
                    className="right_btn"
                    onClick={() => handleClickBtn(0,contents[questionNo].type)}
                    >
                        {contents.length>0 ? contents[questionNo].answer2 : "..."}
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    width:100%;
    font-family:'Cute Font';
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