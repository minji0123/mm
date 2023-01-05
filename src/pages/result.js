import { useEffect,useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';


export default function Result(){



    return(
        <>
            <Wrapper>
                <Header > 제목 </Header>
                <Content>
                <Title > 결과 </Title>
                <LogoImage>
                    <img alt="결과사진" src={resultData.image} className="rounded-circle" width={350} height={350}></img>
                </LogoImage>
                <Desc> {resultData.name} 로 놀러가볼까요?</Desc>
                <More>{resultData.desc}</More>
                <ButtonGroup>
                    <Button variant="outline-success" style={{fontSize: "20px"}}
                            onClick={() => navigate("/")}
                    >테스트 다시하기</Button>
                    <KakaoShareBtn data={resultData}/>
                    
                </ButtonGroup>

                </Content>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    width:100%;
    font-family:"Cute Font";
    padding:25px;

`

const Header = styled.div`
    font-size: 40pt;
    display: flex;
    justify-content:center;
    align-items:center;
`
const Title = styled.div`
    font-size: 30pt;
    margin-top:40px;
    display: flex;
    justify-content:center;
    align-items:center;

`
const LogoImage = styled.div`
    margin-top:10px;

`
const Desc = styled.div`
    font-size: 20pt;
    margin-top:20px;
    margin-bottom:20px;
`
const More = styled.div`
    font-size: 18pt;
    margin-top:20px;
    margin-bottom:20px;
`

const Content = styled.div`
    font-size: 20pt;
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