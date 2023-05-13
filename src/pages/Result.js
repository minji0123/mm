import { useEffect,useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

//style
import styled from 'styled-components';

//my style
import './pages.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';

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




    return(
        <>
            <div className='result-style'>
                <div className='result-wrap mt50'>

                    <p className='main-title mb40'>{title && title}</p>

                    {/* <p className='page-result mt40'> 결과는??! </p> */}

                    <img alt="결과사진" src={mainImg} width={350} height={350}></img>

                    <p className='result-desc mt20 mb20'> {content && content.name} 입니다.</p>
                    {/* <p className='result-more'>{content && content.text}</p> */}
                    <p className='result-more'>임시데이터 입니다아아아아어ㅏ어아ㅓ아ㅓ아ㅓ아어ㅏ어아ㅓ이ㅏㅓㄴ이라ㅓㅇ니라ㅓㅇ
                    아아아어ㅏ어아ㅓ아ㅓ아ㅓ아어ㅏ어아ㅓ이ㅏㅓㄴ이라ㅓㅇ니라ㅓㅇㄴ
                    아아아어ㅏ어아ㅓ아ㅓ아ㅓ아어ㅏ어아ㅓ이ㅏㅓㄴ이라ㅓㅇ니라ㅓㅇㄴ
                    ㄴ</p>

                    <div className='btn-group mt40'>
                        <button 
                            className='brown-btn mr10'
                            onClick={() => navigate("/start")}
                        >테스트 다시하기</button>

                        <button
                            className='grey-btn ml10'
                        > 카카오톡 공유하기 </button>
                        
                    </div>

                </div>
            </div>
        </>
    )
}

