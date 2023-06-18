/* eslint-disable */

import { useState, useEffect } from 'react';

//my style
import './regstyle.sass';
import './regresult.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';
import Previmg from '../assets/img/4.jpg';
import Dummyvimg from '../assets/dummyImg/IMG_3926.PNG';

export default (props) => {

    const [question,setQuestion] = useState("");
    const [desc,setDesc] = useState("");
    const [content,setContent] = useState("");
    const [mainImg,setMainImg] = useState("");
    const [modalSwitch,setModalSwitch] = useState(true);
    const [nextSwitch,setNextSwitch] = useState(true);

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

    const closeModal = () =>{
        setModalSwitch(!modalSwitch);
        props.setData(false);
    }

    const moveToNext = () =>{
        setNextSwitch(!nextSwitch);
    }

    return(
        <div>
        {modalSwitch &&
        <div className='regmodalsr-all'>
            <div className='regmodalsr'>
                {/* 닫기 버튼 */}
                <div className='modal-close mb10'>
                    <p className='pointer' onClick={closeModal}>x</p>
                </div>
                {/* 본문 */}
                <div className='regmodalsr-wrap'>
                    { !nextSwitch &&
                    <>                    
                        {/* 모달 상단 */}
                        <div className="regmodalsr-inputs">
                            <h3 className='modal-title mb10'>작성한 결과는 이렇게 보일거에요</h3>
                            <input  type="text"
                                    id="first" value={question} onChange={handleData}
                                    placeholder="나만의 겨울 휴양지는?"
                                    maxLength={30}
                                    />
                            <input  type="text"
                                    className='mt8'
                                    maxLength={10}
                                    id="second" value={desc} onChange={handleData}
                                    placeholder="등산"
                            />
                            <textarea  type="text"
                                    className='mt8'
                                    maxLength={30}
                                    id="third" value={content} onChange={handleData}
                                    placeholder="친구들과 함께 겨울 산을 올라보세요!"
                            />
                            <input type="file" id="file" accept="image/*" 
                                style={{display: 'none'}}
                                onChange={setPreviewImg}/>
                            <label htmlFor="file" className="input-pic">
                                + add picture
                            </label>
                            <p className='mt10 mb10'>↓ ↓ ↓</p>
                        </div>

                        {/* 모달 하단 */}
                        <div className='example-cardr'>
                            <div className='cardr-wrap'>
                                <p className='cardr-title'>{ question ? question : "나만의 겨울 휴양지는?"  }</p>
                                <p className='cardr-result'> 결과보기 </p>
                                {mainImg 
                                ? 
                                <img alt="메인사진" src={mainImg} className='mt10' style={{maxWidth:"100px"}}></img>
                                : 
                                <img alt="메인사진" src={Previmg} className='mt10' style={{maxWidth:"100px"}}></img>
                                }
                                
                                <p className='cardr-desc'> { desc? desc : "등산"} 입니다.</p>
                                <p className='cardr-more'>{ content? content:"친구들과 함께 겨울 산을 올라보세요!" }</p>

                            </div>
                        </div>
                    </>
                    }
                    {/* 선택지 입력 */}
                    { nextSwitch &&
                        <div className='option-input' >
                            <h3>결과를 입력할 순서에요.</h3>
                            <p>mbti 별 테스트 결과를 입력해주세요.</p>
                            <p>이미지를 넣지 않으면 기본 이미지로 저장됩니다.</p>
                            <img src={Dummyvimg} alt='#' />
                        </div>
                    }
                </div>
                {/* 하단버튼 */}
                <div className='lrbtn'>
                    <p onClick={()=>moveToNext()} className='pointer'>◀️</p>
                    <p onClick={()=>moveToNext()} className='pointer'>▶️</p>
                </div>
            </div>

        </div>

            }
        </div>
    )

}
