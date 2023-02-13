
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';


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
                <Title>결과화면 만들기</Title>

                <p>예시입니당</p>

                <div style={{ width: '18rem' }}>

                    <div className="mb-3">

                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="first" value={question} onChange={handleData}
                                placeholder="예시 결과에요"
                        />
                        <textarea  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px",
                                    }}
                                id="second" value={answer1} onChange={handleData}
                                placeholder="예시 설명란이에요"
                        />

                    </div>

                </div>




                <p></p>
                <p>이렇게 보일거에요</p>
                <p>↓ ↓ ↓</p>

                <Card style={{ width: '18rem' }}>
                    <Content>
                        <SubTitle>{ question} </SubTitle>
                        <ButtonGroup className="mb_20">
                            {answer1 && <Button variant="secondary"
                                    className="btn reg_left_btn"
                                    style={{marginRight:"7px"}}
                            >
                                {answer1}
                            </Button>}

                        </ButtonGroup>
                    </Content>
                </Card>

                {/* <p>❕ </p> */}
                <p></p>


                <ButtonGroup className="mt_20">
                    <Button variant="light"
                            className="btn"
                            onClick={() => handleClickButton('/regmain')}
                    >
                        이전
                    </Button>
                    <Button variant="light"
                            className="btn"
                            onClick={() => handleClickButton('/regtest')}

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
    font-size: 20px;
    margin-top:10px;
    margin-bottom:10px;
    display: flex;
    justify-content:center;
    align-items:center;
`
const Content = styled.div`
    // font-size: 20pt;
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
    
`