import { useEffect,useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

//style
import styled from 'styled-components';
// import {KakaoShareBtn} from "../utils/KakaoShareBtn"
import { Button } from 'react-bootstrap';

//data
import {matchType} from "../utils/matchType.js";
import ResultData from '../assets/data/2.json'
import MainImg from '../assets/img/4.jpg'


export default function Result(){
    let [title,setTitle] = useState("");
    let [mainImg,setMainImg] = useState("");
    let [content,setContent] = useState("");
    const [searchParams] = useSearchParams();

    const mbti = searchParams.get('mbti');

    const navigate = useNavigate();

    console.log('ddd',ResultData);

    useEffect(() => {
        console.log(mbti);
        let realTit = ResultData.result[0];
        let realCont = ResultData.result[matchType(mbti)];
        setTitle(realTit);
        setContent(realCont);

        setMainImg(MainImg);

    });

    // const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
    // const URL = `${PROXY}/test/1/2.json`;
    // const imgURL = `${PROXY}/test/1/2.json`;

    // useEffect(()=>{
    //     axios.get(URL)
    //     .then((result)=>{
    //         let realTit = result.data.result[0];
    //         let realCont = result.data.result[matchType(mbti)];
    //         setTitle(realTit);
    //         setContent(realCont);
    //     })
    //     .catch(()=>{
    //     })

    //     axios.get(imgURL)
    //     .then((result)=>{
    //         const imageData = result.data.result[matchType(mbti)].img;
    //         setMainImg(`https://teal-swan-1836fc.netlify.app/${imageData}`);
    //     })
    //     .catch(()=>{
    //     })

    // },[])


    return(
        <>
            <Wrapper>
                <Header>{title && title}</Header>
                <Content>

                <Title > 결과보기 </Title>
                <LogoImage>
                    <img alt="결과사진" src={mainImg} width={350} height={350}></img>
                </LogoImage>
                <Desc> {content && content.name} 입니다.</Desc>
                <More>{content && content.text}</More>
                <ButtonGroup>
                    <Button variant="secondary"
                            className='btn'
                            style={{fontSize: "20px"}}
                            onClick={() => navigate("/")}
                    >테스트 다시하기</Button>
                    {/* <KakaoShareBtn data={resultData}/> */}
                    
                </ButtonGroup>

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

const Header = styled.div`
    font-size: 30pt;
    display: flex;
    justify-content:center;
    align-items:center;
`
const Title = styled.div`
    font-size: 20pt;
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
    width: 350px;
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