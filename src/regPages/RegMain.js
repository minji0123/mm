/* eslint-disable*/

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import  AdminBtn  from '../common/AdminBtn'

//my style
import './regstyle.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';

import { useFirestore } from '../hooks/useFirestore';

export default () => {

    const [mainTitle,setTitle] = useState("");
    const [mainImg,setMainImg] = useState("");
    const [picInfo, setPic] = useState("");

    const [strUserDN, setstrUserDN] = useState("");
    const [strUserID, setstrUserID] = useState("");
    useEffect(()=>{
        setstrUserDN(localStorage.getItem('userDN'))
        setstrUserID(localStorage.getItem('userID'))
    });

    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    /**************************************************************
     * 글 저장
     **************************************************************/
    // 컬랙션 이름 파라미터로 넣어주기
    const { addDocument, response } = useFirestore("MainData");

    // 이미지 미리보기
    const setPreviewImg = (event) => {

        var reader = new FileReader();

        reader.onload = function(event) {
            setMainImg(event.target.result);
        };

        reader.readAsDataURL(event.target.files[0]);
        setPic(event.target.files[0]);
        console.log(event.target.files[0]);

    }

    // 텍스트 미리보기
    const handleData = (event) => {
        if (event.target.id === 'mainTitle') {
            setTitle(event.target.value);
        }
    }


    // navigation 이벤트
    const handleClickButton = (link) => {
        navigate(link);
    }

    const sendDataObj = (data,func) =>{

        console.log('이미지',picInfo);

        let mainTitle = data.mainTitle;
        let pic = picInfo;
        localStorage.setItem('mainTitle',mainTitle );

        // func({mainTitle },pic,user.displayName,user.uid );
        func({mainTitle}, pic, strUserDN, strUserID);
        navigate('/regtest');

        window.scrollTo({ top: 0, behavior: "smooth" });

    }

    return(
        <>
            {strUserDN === "admin" ? <AdminBtn link='/regtest'/> : '' }

        <form
            onSubmit={
                handleSubmit( (data) =>{
                    if(picInfo?.name?.length === undefined){
                        alert('이미지를 넣어주세요');
                        return false;
                    }else{
                        if(confirm("데이터가 저장됩니다. 진행하시겠습니까?")){
                            sendDataObj(data,addDocument);
                        }else{
                            return false;
                        }
                    }
                })
            }
            >
        <div className='regmain'>
            <div className='regpage-wrap'>
                <p className='main-title'>메인화면 만들기</p>
                    <input  type="text"
                            className='main-input pl18 pt18 mt10'
                            id="mainTitle" 
                            name='mainTitle'
                            {...register("mainTitle")}
                            onChange={handleData}
                            placeholder="테스트 제목을 입력해주세요"
                            required

                    />
                    <input type="file" id="pic" accept="image/*"
                    {...register("pic")}
                    style={{display: 'none'}}
                    onChange={setPreviewImg}/>
                    <label htmlFor="pic" className="input-plus mt8">
                        + add picture
                    </label>
                    {/* input end */}


                <p className='mt30'>이렇게 보일거에요</p>
                <p className='mb10'>↓ ↓ ↓</p>

                

                {/* 미리보기 */}
                <div className='prev-box'>
                    <div className='box-wrap'>
                        <p>{mainTitle ? mainTitle : "테스트 제목을 입력해주세요"} </p>
                        {mainImg 
                        ? 
                        <img alt="메인사진" src={mainImg}></img>
                        : 
                        <p className='warn-txt'>이미지를 넣어주세요</p>
                        
                        }

                        <button type='button' className='brown-btn mt20' >start</button>
                    </div>
                </div>



                <p className='warn pt8'>❕ 1:1 비율 사진을 사용하면 좋아요</p>
                <p className='warn'>❕ 제목은 20글자를 넘을 수 없어요</p>

                <div className='btn-group mt40'>
                    <button type='button'
                            onClick={() => 
                                {
                                    if(confirm('입력하신 데이터가 사라집니다. 이동하시겠습니까?')){
                                        handleClickButton('/')
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }else{
                                        return false;
                                    }
                                }
                            }
                    
                    >이전</button>
                    <button className='ml3'
                    type='submit'>다음</button>
                </div>

            </div>
            
        </div>
        </form>
        </>
    )
}

