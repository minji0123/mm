
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

//style
import styled from 'styled-components';
//data
import MainImg from '../assets/img/0.jpg'
import MainData from '../assets/data/title.json'

export default function Start(){
    let [title,setTitle] = useState(MainData.title);
    let [mainImg,setMainImg] = useState(MainImg);
    console.log(title);

    const navigate = useNavigate();

    const handleClickButton = () => {
        navigate('/Test');
    }


    return(
        <>
            <Wrapper>
                <Content>
                <Title> {title} </Title>
                <LogoImage>
                    <img alt="메인사진" src={mainImg} width={350} height={350}></img>
                </LogoImage>

                 <Button variant="secondary"
                            className='btn'
                            style={{fontSize: "20px", fontFamily: "Jua" , marginTop: "30px"}}
                            onClick={handleClickButton}
                            >Start</Button>
                </Content>
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
const Content = styled.div`
    font-size: 20pt;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

`