/* eslint-disable */

import { useState, useEffect } from 'react';

//my style
import './regstyle.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';
import Previmg from '../assets/img/4.jpg';

export default (props) => {

    const [question,setQuestion] = useState("");
    const [desc,setDesc] = useState("");
    const [content,setContent] = useState("");
    const [mainImg,setMainImg] = useState("");
    const [modalSwitch,setModalSwitch] = useState(true);

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
        console.log(modalSwitch);
        setModalSwitch(!modalSwitch);
        props.setData(false);
    }

    // const targetRef = useRef("");  
    const handleScroll = () => {
        console.log("scrolling");
        
        if (window.scrollY > 0) {
            if(modalSwitch){
                // targetRef.current.style.position = "fixed";
                setModalSwitch(false)
            }
        }
    };

    useEffect(() => {    
        const timer = setInterval(() => {
        window.addEventListener("scroll", handleScroll);
        }, 100);
        return () => {
        clearInterval(timer);
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <div 
        // onClick={() => setModalSwitch(false)}
        >
        {modalSwitch &&

        <div className='regmodalsr-all'>
            <div className='regmodalsr'>
                <div className='regmodalsr-wrap'>

                    <div className="regmodalsr-inputs">
                        <div className='modal-close mb10'>
                            <p className='pointer'
                                onClick={closeModal}
                            >x</p>
                        </div>
                        <p className='mb10' style={{textAlign: "center", fontSize: "20px"}}>예시입니당!</p>
                        
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
                        <label htmlFor="file" className="input-plus mt8">
                            + add picture
                        </label>
                    </div>


                    <p>이렇게 보일거에요</p>
                    <p>↓ ↓ ↓</p>

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
                    

                </div>
            </div>

        </div>

            }
        </div>
    )

}
