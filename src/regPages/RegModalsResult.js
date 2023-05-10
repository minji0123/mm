/* eslint-disable */

import { useState } from 'react';
import styled from 'styled-components';

//my style
import './regstyle.sass';
import './regstyler.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';

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



    return(
        <>
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
                                />
                        <input  type="text"
                                className='mt8'
                                id="second" value={desc} onChange={handleData}
                                placeholder="등산"
                        />
                        <textarea  type="text"
                                className='mt8'
                                id="third" value={content} onChange={handleData}
                                placeholder="친구들과 함께 겨울 산을 올라보세요!"
                        />

                        {/* <input type="file" id="image" accept="image/*" 
                        style={{border: "solid 1px lightgray", borderRadius: "5px",  width: '18rem'}}
                        onChange={setPreviewImg}/> */}

                        <input type="file" id="file" accept="image/*" 
                            style={{display: 'none'}}
                            onChange={setPreviewImg}/>
                        <label for="file" className="input-plus mt8">
                            + add picture
                        </label>
                    </div>


                    <p>이렇게 보일거에요</p>
                    <p>↓ ↓ ↓</p>

                    <div className='example-cardr'>
                        <div className='cardr-wrap'>
                            <p>{ question ? question : "나만의 겨울 휴양지는?"  }</p>
                            
                            <Content>
                                <SubTitle> 결과보기 </SubTitle>
                                <LogoImage>
                                    <img alt="메인사진" src={mainImg} style={{maxWidth:"100px"}}></img>
                                </LogoImage>
                                <Desc> { desc? desc : "등산"} 입니다.</Desc>
                                <More>{ content? content:"친구들과 함께 겨울 산을 올라보세요!" }</More>
                            </Content>

                        </div>
                    </div>
                    

                </div>
            </div>

        </div>

            }
        </>
    )

}

const SubTitle = styled.div`
    font-size: 18px;
    margin-top:20px;
    display: flex;
    justify-content:center;
    align-items:center;
`
const LogoImage = styled.div`
    margin-top:10px;
`
const Content = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

`
const Desc = styled.div`
    font-size: 12pt;
    margin-top:20px;
    margin-bottom:20px;
    max-width: 80%;

`
const More = styled.div`
    font-size: 12pt;
    margin-bottom:20px;
    max-width: 80%;
`
