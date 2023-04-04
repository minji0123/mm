
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import { useFirestore } from '../hooks/useFirestore';

export default () => {

    const [title,setTitle] = useState("");
    const [mainImg,setMainImg] = useState("");

    const navigate = useNavigate();
    
    // controlled component
    const handleData = (event) => {
        if (event.target.id === 'first') {
            setTitle(event.target.value);
        }
    }

    // 이미지 미리보기
    const setPreviewImg = (event) => {

        var reader = new FileReader();

        reader.onload = function(event) {
            setMainImg(event.target.result);
        };

        reader.readAsDataURL(event.target.files[0]);
    }

    // navigation 이벤트
    const handleClickButton = (link) => {
        navigate(link);
    }



    /**************************************************************
     * 글 저장
     **************************************************************/
    // 컬랙션 이름 파라미터로 넣어주기
    const { addComment, response } = useFirestore("comment");

    return(

        <Wrapper>
            <Content>
                <Title>메인화면 만들기</Title>

                <div style={{ width: '18rem' }}>
                    <InputGroup className="mb-3">

                    <input  type="text"
                            style={{border: "solid 1px lightgray", borderRadius: "5px",
                                    marginBottom:"4px",width:"290px"}}
                            id="first" value={title} onChange={handleData}
                            placeholder="나만의 겨울 휴양지 테스트"

                    />

                    <input type="file" id="image" accept="image/*" 
                        style={{border: "solid 1px lightgray", borderRadius: "5px"}}
                        onChange={setPreviewImg}/>
                    {/* <input type="file" id="file" accept="image/*" 
                    style={{display: 'none'}}
                    onChange={setPreviewImg}/> */}
                    {/* <label for="file" class="input-plus">+</label> */}

                    </InputGroup>
                </div>

                <p></p>
                <p>이렇게 보일거에요</p>
                <p>↓ ↓ ↓</p>
                <Card style={{ width: '18rem' }}>
                    <Content>
                        <SubTitle>{title ? title : "나만의 겨울 휴양지 테스트"}  </SubTitle>
                        <LogoImage>
                            <img alt="메인사진" src={mainImg} style={{maxWidth:"100px"}}></img>
                        </LogoImage>

                        <Button variant="secondary"
                                className='btn'
                                style={{fontSize: "10px", fontFamily: "Jua" , marginTop: "30px", marginBottom: "30px"}}
                                >Start</Button>
                    </Content>
                </Card>

                <p>❕ 1:1 비율 사진을 사용하면 좋아요</p>

                <ButtonGroup className="mt_20">
                    <Button variant="light"
                            className="btn"
                            onClick={() => handleClickButton('/regst')}
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
    font-size: 18px;
    margin-top:40px;
    max-width: 80%;

`
const Content = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

`
const LogoImage = styled.div`
    margin-top:10px;

`
const ButtonGroup = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    
`