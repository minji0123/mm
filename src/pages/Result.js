import { useEffect,useState } from 'react';
import { useNavigate,createSearchParams, useSearchParams,useParams } from 'react-router-dom';
import { useCollectionDtl } from '../hooks/useCollectionDtl';

//my style
import './pages.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';

//data
import { matchType } from "../utils/matchType.js";
import  { goodCompati, badCompati } from "../utils/compatibility";
import { matchImg } from "../utils/matchImg.js";
import KakaoShareBtn from '../kakao/KakaoShareBtn';


export default function Result(){
    const [title,setTitle] = useState("");
    const [finalResult, setFinalResult] = useState([]);

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const mbti = searchParams.get('mbti');
    let {id} = useParams();

    const {documents,error} = useCollectionDtl("ResultData",["contUID","==",id]);
    
    useEffect(()=>{
        if(documents){
            documents.map((data,i) => {
                console.log('서버에서 받아온 데이터',data);
                setTitle(data.mainTitle);
                setFinalResult(data.question);
                // log
            })
        }
    },[documents]);

    useEffect(() => {
        console.log('mbti 타입: ',mbti);
        // console.log('이게뭐지?: ', matchType(mbti));
        // console.log('이게뭐지?: ', matchImg(mbti));
        console.log('이게뭐지?good: ', goodCompati(mbti)[0] );
        // console.log('이게뭐지?bad: ', badCompati(mbti));

        console.log('이게뭐지?good: ', matchType(goodCompati(mbti)[0]), matchType(goodCompati(mbti)[1]) );
        console.log('이게뭐지?bad: ', matchImg(goodCompati(mbti)[0]), matchImg(goodCompati(mbti)[1]));
    });

    const moveToAnotherResult = (data) => {

        navigate({
            // pathname: "/result",
            pathname: `/result/${id}`,
            search: `?${createSearchParams({mbti: data,})}`,
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return(
        <>
        {

            finalResult &&

            <div className='result-style'>
                <div className='result-wrap mt50'>

                    <p className='main-title mb40'>{title && title}</p>

                    <p className='what-result'> 당신은 {mbti} 입니다. </p>

                    {
                        finalResult.length>0
                        ?
                        <img alt="결과사진" className='start-img' src={(finalResult[matchType(mbti)-1].imgUrl).length !== 0 ? finalResult[matchType(mbti)-1].imgUrl :  matchImg(mbti) } ></img>
                        :
                        ''
                    }

                    <p className='result-desc mt20 mb20'>{finalResult.length>0 && finalResult[matchType(mbti)-1].name } </p>
                    <p className='result-more'>{finalResult.length>0 && finalResult[matchType(mbti)-1].text }
                    </p>

                    {/* mbti 궁합 추가! */}
                    <div className='compatibility'>
                        <div className='content'>
                            <p className='compa-title'>나와 잘맞는 mbti는?</p>
                            <div className='result-wrap'>
                                <div className='result'>
                                {
                                    finalResult.length>0
                                    ?
                                    <img onClick={()=>{moveToAnotherResult(goodCompati(mbti)[0])}}
                                        alt="궁합사진" className='' src={(finalResult[matchType(goodCompati(mbti)[0])].imgUrl).length !== 0 ? finalResult[matchType(goodCompati(mbti)[0])-1].imgUrl :  matchImg(goodCompati(mbti)[0]) } ></img>
                                    :
                                    ''
                                }
                                <p>{goodCompati(mbti)[0]}</p>

                                </div>
                                <div className='result'>                            
                                {
                                    finalResult.length>0
                                    ?
                                    <img alt="궁합사진" className='' src={(finalResult[matchType(goodCompati(mbti)[1])].imgUrl).length !== 0 ? finalResult[matchType(goodCompati(mbti)[1])-1].imgUrl :  matchImg(goodCompati(mbti)[1]) } ></img>
                                    :
                                    ''
                                }
                                <p>{goodCompati(mbti)[1]}</p>
                                </div>
                            </div>
                        </div>
                        <div className='content bad-cont'>
                        <p className='compa-title'>나와 안맞는 mbti는?</p>
                            <div className='result-wrap'>
                                <div className='result'>
                                {
                                    finalResult.length>0
                                    ?
                                    <img alt="궁합사진" className='' src={(finalResult[matchType(badCompati(mbti)[0])-1].imgUrl).length !== 0 ? finalResult[matchType(badCompati(mbti)[0])-1].imgUrl :  matchImg(badCompati(mbti)[0]) } ></img>
                                    :
                                    ''
                                }
                                <p>{badCompati(mbti)[0]}</p>
                                </div>
                                <div className='result'>                            
                                {
                                    finalResult.length>0
                                    ?
                                    <img alt="궁합사진" className='' src={(finalResult[matchType(badCompati(mbti)[1])-1].imgUrl).length !== 0 ? finalResult[matchType(badCompati(mbti)[1])-1].imgUrl :  matchImg(badCompati(mbti)[1]) } ></img>
                                    :
                                    ''
                                }
                                <p>{badCompati(mbti)[1]}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='btn-group mt40'>
                        <button 
                            className='brown-btn'
                            onClick={() => {
                                navigate(`/start/${id}`)
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }}

                        >테스트 다시하기</button>

                        <KakaoShareBtn
                            title={title}
                            img={finalResult.length>0 ? finalResult[matchType(mbti)-1].imgUrl : '#' } 
                            content={finalResult.length>0 && finalResult[matchType(mbti)-1].text } 
                            contUID={id}
                            strValue={'카카오톡 공유하기'}
                        />

                    </div>
                    
                    <button 
                        className='brown-btn'
                        onClick={() => {
                                    navigate('/') 
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }}
                    >나도 테스트 만들래!</button>

                </div>
            </div>
        }
        </>
    )
}

