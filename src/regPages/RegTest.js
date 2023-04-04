
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import RegTestInput from './RegTestInput';

export default () => {
    const [question,setQuestion] = useState("");
    const [answer1,setAnswer1] = useState("");
    const [answer2,setAnswer2] = useState("");

    // const [realQ, setRealQ] = useState();
    


    const navigate = useNavigate();
    
    const handleData = (event) => {
        if (event.target.id === 'first') {
            setQuestion(event.target.value);
        }else if (event.target.id === 'second') {
            setAnswer1(event.target.value);
        }else if (event.target.id === 'third') {
            setAnswer2(event.target.value);
        }

    }

    const handleClickButton = (link) => {
        navigate(link);
    }

    return(
        <Wrapper>
            <Content>
                <Title>테스트화면 만들기</Title>

                <p>예시입니당</p>

                <div style={{ width: '18rem' }}>

                    <div className="mb-3">

                        <textarea  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="first" value={question} onChange={handleData}
                                placeholder="친구가 여행계획을 세워왔어요! 당신은 여행을 갈건가요??"
                        />
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px",
                                    }}
                                id="second" value={answer1} onChange={handleData}
                                placeholder="네!!"
                        />
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="third" value={answer2} onChange={handleData}
                                placeholder="아녀!!"
                        />

                    </div>

                </div>




                <p></p>
                <p>이렇게 보일거에요</p>
                <p>↓ ↓ ↓</p>

                <Card style={{ width: '18rem' }}>
                    <Content>
                        <SubTitle>{ question ? question : "친구가 여행계획을 세워왔어요! 당신은 여행을 갈건가요??"} </SubTitle>
                        <ButtonGroup className="mb_20">
                            <Button variant="secondary"
                                    className="btn reg_left_btn"
                                    style={{marginRight:"7px"}}
                            >
                                {answer1 ? answer1 : "네!"}
                            </Button>

                            <Button variant="secondary"
                                    className="btn reg_right_btn"
                                    
                            >
                                {answer2 ? answer2 : "아녀!"}
                            </Button>
                        </ButtonGroup>
                    </Content>
                </Card>

                {/* <p>❕ </p> */}
                <p></p>

                <RegTestInput/>

                <ButtonGroup className="mt_20">
                    <Button variant="light"
                            className="btn"
                            onClick={() => handleClickButton('/regmain')}
                    >
                        이전
                    </Button>
                    <Button variant="light"
                            className="btn"
                            onClick={() => handleClickButton('/regresult')}

                    >
                        다음
                    </Button>

                    
                </ButtonGroup>

            </Content>
            
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    width:100%;
    font-family: "Jua";
    padding:25px;
`
const Title = styled.div`
    font-size: 30px;
    margin-top:40px;
    display: flex;
    justify-content:center;
    align-items:center;
`
const SubTitle = styled.div`
    font-size: 18px;
    margin-top:20px;
    margin-bottom:20px;
    max-width: 80%;
`
const Content = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

`
const ButtonGroup = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    margin-bottom:20px;
    
`