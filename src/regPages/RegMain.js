/* eslint-disable*/

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthContext } from '../hooks/useAuthContext'

//my style
import './regstyle.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';
import Previmg from '../assets/img/0.jpg';

import { useFirestore } from '../hooks/useFirestore';

export default () => {

    const {isAuthReady, user } = useAuthContext();
    const [mainTitle,setTitle] = useState("");
    const [mainImg,setMainImg] = useState("");
    const [pic, setPic] = useState("");

    const navigate = useNavigate();
    
    
    /**************************************************************
     * 글 저장
     **************************************************************/
    // 컬랙션 이름 파라미터로 넣어주기
    const { addDocument, response } = useFirestore("MainData");

    // controlled component
    const handleData = (event) => {
        if (event.target.id === 'first') {
            setTitle(event.target.value);
        }
    }

    // 이미지 미리보기
    const setPreviewImg = (event) => {

        var reader = new FileReader();

        reader.onload = function(event) {
            setMainImg(event.target.result);
        };

        reader.readAsDataURL(event.target.files[0]);
        setPic(event.target.files[0]);

    }

    // navigation 이벤트
    const handleClickButton = (link) => {
        if(link === '/regtest'){
            // 데이터가 비어있으면 return false
            if(mainTitle.length === 0){
                alert('테스트 제목을 입력해주세요🙂');
                return false;
    
            }else if(pic.length === 0){
                alert('테스트 사진을 넣어주세요😮');
                return false;
    
            }else {
                if(confirm("데이터가 저장됩니다. 진행하시겠습니까??")){
                    //예 버튼
                    addDocument({mainTitle },pic,user.displayName,user.uid );
                }else{
                    // 아니오 버튼
                    return false;
                }
            }
        
            navigate(link);

        }else{
            navigate(link);
        }
        // navigate(link);

    }


    return(
        <>
        <div className='regmain pt80 pb80'>
            <div className='regpage-wrap mt30 mb30'>
                {user ? <p>{user.displayName}</p> : <p>isAuthReady</p>}
                {/* input start */}
                <p className='main-title'>테스트 메인화면 만들기</p>
                <input  type="text"
                        className='pl18 pt18 mt10'
                        id="first" value={mainTitle} onChange={handleData}
                        placeholder="나만의 겨울 휴양지 테스트"

                />
                {/* <input type="file" id="image" accept="image/*" 
                    style={{border: "solid 1px lightgray", borderRadius: "5px"}}
                    onChange={setPreviewImg}/> */}

                <input type="file" id="file" accept="image/*" 
                style={{display: 'none'}}
                onChange={setPreviewImg}/>
                <label htmlFor="file" className="input-plus mt8">
                    + add picture
                </label>
                {/* input end */}

                <p className='mt30'>이렇게 보일거에요</p>
                <p className='mb10'>↓ ↓ ↓</p>

                

                {/* 미리보기 */}
                <div className='prev-box'>
                    <div className='box-wrap'>
                        <p>{mainTitle ? mainTitle : "나만의 겨울 휴양지 테스트"} </p>
                        {mainImg 
                        ? 
                        <img alt="메인사진" src={mainImg}></img>
                        : 
                        <img alt="메인사진?" src={Previmg}></img>
                        
                        }

                        <button className='brown-btn mt20' >start</button>
                    </div>
                </div>



                <p className='warn pt8'>❕ 1:1 비율 사진을 사용하면 좋아요</p>
                <p className='warn'>❕ 제목은 20글자를 넘을 수 없어요</p>

                <div className='btn-group mt40'>
                    <button
                            onClick={() => 
                                {
                                    handleClickButton('/')
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }
                            }
                    
                    >이전</button>
                    <button className='ml3'
                            onClick={() => 
                                {
                                    handleClickButton('/regtest')
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }
                            }
                    
                    >다음</button>
                </div>

            </div>
            
        </div>
        </>
    )
}

