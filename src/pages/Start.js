
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

export default function Start(){
    let [title,setTitle] = useState("");
    let [mainImg,setMainImg] = useState("");

    const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
    const URL = `${PROXY}/test/1/1.json`;
    const imgURL = `${PROXY}/test/1/img.json`;


    const navigate = useNavigate();

    const handleClickButton = () => {
        navigate('/Test');
    }


    useEffect(()=>{
        axios.get(URL)
        .then((result)=>{
            let copy = result.data.question[0];
            setTitle(copy);

        })
        .catch(()=>{
        })


        axios.get(imgURL)
        .then((result)=>{
            const imageData = result.data;
            setMainImg(`https://teal-swan-1836fc.netlify.app/${imageData.url[0]}`);
        })
        .catch(()=>{
        })

    },[])


    return(
        <>
            <Wrapper>
                <Content>
                <Title> {title} </Title>
                <LogoImage>
                    <img alt="메인사진" src={mainImg} width={350} height={350}></img>
                </LogoImage>
                <Button variant="contained" style={{fontSize: "20px"}}
                        onClick={handleClickButton}
                >시작하기</Button>
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