
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';


export default () => {
    const [question,setQuestion] = useState("");
    const [desc,setDesc] = useState("");
    const [content,setContent] = useState("");
    const [mainImg,setMainImg] = useState("");

    // const [realQ, setRealQ] = useState();
    


    const navigate = useNavigate();
    
    const handleData = (event) => {
        if (event.target.id === 'first') {
            setQuestion(event.target.value);
        }else if (event.target.id === 'second') {
            setDesc(event.target.value);
        }else if (event.target.id === 'third') {
            setContent(event.target.value);
        }

    }

    const setPreviewImg = (event) => {

        var reader = new FileReader();

        reader.onload = function(event) {
            setMainImg(event.target.result);
        };

        reader.readAsDataURL(event.target.files[0]);
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
                                placeholder="예시 제목이에요"
                        />

                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="second" value={desc} onChange={handleData}
                                placeholder="예시 결과에요"
                        />
                        <textarea  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px",
                                    }}
                                id="third" value={content} onChange={handleData}
                                placeholder="예시 설명란이에요"
                        />
                        <input type="file" id="image" accept="image/*" 
                        style={{border: "solid 1px lightgray", borderRadius: "5px",  width: '18rem'}}
                        onChange={setPreviewImg}/>

                    </div>

                </div>




                <p></p>
                <p>이렇게 보일거에요</p>
                <p>↓ ↓ ↓</p>

                <Card style={{ width: '18rem' }}>
                    <Header>{ question ?question :"나만의 겨울 휴양지는?"  }</Header>

                    <Content>
                        <Title> 결과보기 </Title>
                        <LogoImage>
                            <img alt="메인사진" src={mainImg} style={{maxWidth:"100px"}}></img>
                        </LogoImage>
                        
                        <Desc> { desc? desc : "등산"} 입니다.</Desc>
                        <More>{ content? content:"친구들과 함께 겨울 산을 올라보세요!" }</More>

                    </Content>
                </Card>

                {/* <p>❕ </p> */}
                <p></p>


                <ButtonGroup className="mt_20">
                    <Button variant="light"
                            className="btn"
                            onClick={() => handleClickButton('/regtest')}
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
const Header = styled.div`
    font-size: 20pt;
    display: flex;
    justify-content:center;
    align-items:center;
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
    margin-top:40px;
    display: flex;
    justify-content:center;
    align-items:center;
`
const LogoImage = styled.div`
    margin-top:10px;

`
const Content = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

`
const Desc = styled.div`
    font-size: 12pt;
    margin-top:20px;
    margin-bottom:20px;
`
const More = styled.p`
    font-size: 12pt;
    margin-bottom:20px;
`
const ButtonGroup = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    
`