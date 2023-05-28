import { useEffect,useState } from 'react';
import { useNavigate, useSearchParams,useParams } from 'react-router-dom';
import { useCollectionDtl } from '../hooks/useCollectionDtl';

//my style
import './pages.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';

//data
import {matchType} from "../utils/matchType.js";
import ResultData from '../assets/data/2.json'
import MainImg from '../assets/img/4.jpg'
import KakaoShareBtn from '../kakao/KakaoShareBtn';


export default function Result(){
    let [title,setTitle] = useState("");
    let [mainImg,setMainImg] = useState("");
    let [content,setContent] = useState("");
    const [searchParams] = useSearchParams();
    const [finalResult, setFinalResult] = useState([]);


    const mbti = searchParams.get('mbti');
    const navigate = useNavigate();
    console.log('로컬 임시 데이터',ResultData);
    let {id} = useParams();
    const {documents,error} = useCollectionDtl("ResultData",["contUID","==",id]);
    // console.log(documents);

    useEffect(()=>{
        if(documents){
            documents.map((data,i) => {
                console.log('서버에서 받아온 데이터',data);
        setTitle(data.mainTitle);

                setFinalResult(data.question)
            })
        }
    },[documents]);

    useEffect(() => {
        console.log('mbti 타입: ',mbti);
        console.log('이게뭐지?: ', matchType(mbti));
        // let realTit = ResultData.result[0];
        // let realCont = ResultData.result[matchType(mbti)];

    });




    return(
        <>
        {

            finalResult &&

            <div className='result-style'>
                <div className='result-wrap mt50'>

                    <p className='main-title mb40'>{title && title}</p>

                    <p className='what-result'> 당신은 {mbti} 입니다. </p>

                    <img alt="결과사진" className='start-img' src={finalResult.length>0 ? finalResult[matchType(mbti)-1].imgUrl : '#' } ></img>

                    {/* <p className='result-desc mt20 mb20'> {content && content.name} 입니다.</p> */}
                    <p className='result-desc mt20 mb20'>{finalResult.length>0 && finalResult[matchType(mbti)-1].name } </p>
                    {/* <p className='result-more'>{content && content.text}</p> */}
                    <p className='result-more'>{finalResult.length>0 && finalResult[matchType(mbti)-1].text }
                    </p>

                    <div className='btn-group mt40'>
                        <button 
                            className='brown-btn'
                            // onClick={() => navigate("/start/")}
                            onClick={() => navigate(`/start/${id}`)}
                        >테스트 다시하기</button>

                        <KakaoShareBtn
                            title={title}
                            img={finalResult.length>0 ? finalResult[matchType(mbti)-1].imgUrl : '#' } 
                            content={finalResult.length>0 && finalResult[matchType(mbti)-1].name } 
                        />
                        
                    </div>

                </div>
            </div>
        }
        </>
    )
}

