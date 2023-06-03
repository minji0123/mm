/*eslint-disable */

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFirestore } from '../hooks/useFirestore';
import { useAuthContext } from '../hooks/useAuthContext'
import { useForm } from "react-hook-form";
import  AdminBtn  from '../admin/AdminBtn'

//my style
import './regstyle.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';

// dummy datas
import IMG_estp from '../assets/dummyImg/IMG_3926.PNG';
import IMG_istp from '../assets/dummyImg/IMG_3927.PNG';
import IMG_esfp from '../assets/dummyImg/IMG_3928.PNG';
import IMG_isfp from '../assets/dummyImg/IMG_3929.PNG';
import IMG_estj from '../assets/dummyImg/IMG_3930.PNG';
import IMG_istj from '../assets/dummyImg/IMG_3931.PNG';
import IMG_esfj from '../assets/dummyImg/IMG_3932.PNG';
import IMG_isfj from '../assets/dummyImg/IMG_3933.PNG';
import IMG_entp from '../assets/dummyImg/IMG_3934.PNG';
import IMG_intp from '../assets/dummyImg/IMG_3935.PNG';
import IMG_enfp from '../assets/dummyImg/IMG_3936.PNG';
import IMG_infp from '../assets/dummyImg/IMG_3937.PNG';
import IMG_entj from '../assets/dummyImg/IMG_3938.PNG';
import IMG_intj from '../assets/dummyImg/IMG_3939.PNG';
import IMG_enfj from '../assets/dummyImg/IMG_3940.PNG';
import IMG_infj from '../assets/dummyImg/IMG_3941.PNG';

export default (props) => {
        // isAuthReady 를 쓸 일이 있을까??
        const {isAuthReady, user } = useAuthContext();
        // console.log(user);
        const { register, handleSubmit, watch, formState: { errors } } = useForm();
        const { addDocumentObjImg, response } = useFirestore("ResultData");

        const navigate = useNavigate();
        let [contUID, setContUID] = useState('');
        let [mainTitle, setMainTitle] = useState('');

        useEffect(()=>{
                console.log('유저정보',user);
        },[])

        // 기존 내용 넣어주기
        useEffect(()=>{
                if(props.datas){
                props.datas.map((a,i) => {
                        console.log('props 에서 넘어온 데이터',a);
                        console.log('props 에서 넘어온 데이터',props.datas[0].mainTitle);
                        setContUID(props.datas[0].contUID)
                        setMainTitle(props.datas[0].mainTitle)
                })
                }
        },[props]);

        console.log('이 데이터를 넣어줄거에용',contUID);
        
        let question = [];
        let pic = [];

        const sendDataObj = (data,func) =>{
                console.log('들어오는 데이터',data);
                let data1 =   {id:1, name:data.ESTP1, type:"ESTP", text:data.ESTP2, img:data.ESTP3[0] ? data.ESTP3[0] : IMG_estp}
                let data2 =   {id:2, name:data.ESFP1, type:"ESFP", text:data.ESFP2, img:data.ESFP3[0] ? data.ESFP3[0] : IMG_esfp}
                let data3 =   {id:3, name:data.ENTP1, type:"ENTP", text:data.ENTP2, img:data.ENTP3[0] ? data.ENTP3[0] : IMG_entp}
                let data4 =   {id:4, name:data.ENFP1, type:"ENFP", text:data.ENFP2, img:data.ENFP3[0] ? data.ENFP3[0] : IMG_enfp}
                let data5 =   {id:5, name:data.ISTP1, type:"ISTP", text:data.ISTP2, img:data.ISTP3[0] ? data.ISTP3[0] : IMG_istp}
                let data6 =   {id:6, name:data.ISFP1, type:"ISFP", text:data.ISFP2, img:data.ISFP3[0] ? data.ISFP3[0] : IMG_isfp}
                let data7 =   {id:7, name:data.INTP1, type:"INTP", text:data.INTP2, img:data.INTP3[0] ? data.INTP3[0] : IMG_intp}
                let data8 =   {id:8, name:data.INFP1, type:"INFP", text:data.INFP2, img:data.INFP3[0] ? data.INFP3[0] : IMG_infp}
                let data9 =   {id:9, name:data.ESTJ1, type:"ESTJ", text:data.ESTJ2, img:data.ESTJ3[0] ? data.ESTJ3[0] : IMG_estj}
                let data10 = {id:10, name:data.ESFJ1, type:"ESFJ", text:data.ESFJ2, img:data.ESFJ3[0] ? data.ESFJ3[0] : IMG_esfj}
                let data11 = {id:11, name:data.ENTJ1, type:"ENTJ", text:data.ENTJ2, img:data.ENTJ3[0] ? data.ENTJ3[0] : IMG_entj}
                let data12 = {id:12, name:data.ENFJ1, type:"ENFJ", text:data.ENFJ2, img:data.ENFJ3[0] ? data.ENFJ3[0] : IMG_enfj}
                let data13 = {id:13, name:data.ISTJ1, type:"ISTJ", text:data.ISTJ2, img:data.ISTJ3[0] ? data.ISTJ3[0] : IMG_istj}
                let data14 = {id:14, name:data.ISFJ1, type:"ISFJ", text:data.ISFJ2, img:data.ISFJ3[0] ? data.ISFJ3[0] : IMG_isfj}
                let data15 = {id:15, name:data.INTJ1, type:"INTJ", text:data.INTJ2, img:data.INTJ3[0] ? data.INTJ3[0] : IMG_intj}
                let data16 = {id:16, name:data.INFJ1, type:"INFJ", text:data.INFJ2, img:data.INFJ3[0] ? data.INFJ3[0] : IMG_infj}

                question.push(data1);
                question.push(data2);
                question.push(data3);
                question.push(data4);
                question.push(data5);
                question.push(data6);
                question.push(data7);
                question.push(data8);
                question.push(data9);
                question.push(data10);
                question.push(data11);
                question.push(data12);
                question.push(data13);
                question.push(data14);
                question.push(data15);
                question.push(data16);

                console.log('저장되는 질문 데이터',question);

                func({question},user.displayName,user.uid,contUID,mainTitle);
                // navigate('/regresult');
        }

        const handleClickButton = (link) => {
                if(link === '/regtest'){
                        navigate(link);
                }
        }

return(
<>
{user?.displayName === "admin" ? <AdminBtn link='/regresult'/> : '' }

        <section>
                <div className='resultinput-wrap'>
                {/* <p>16개의 결과를 입력해주세요🙂</p> */}

                <form onSubmit={
                handleSubmit( (data) =>{
                        if(confirm("데이터가 저장됩니다. 진행하시겠습니까?")){
                                // setDatatoObj(data, addComment);
                                sendDataObj(data,addDocumentObjImg);
                        }else{
                                return false;
                        }
                        console.log(data);
                })
                }>
                        <div className='mbti-input-wrap'>

                                <div className='resultinput-left'>
                                        {/* ESTP */}
                                        <p className='sep-line mt10'>-------------- E 구간 </p>
                                        <div className='mbti-input estp'>
                                                <input  type="text"
                                                        disabled
                                                        placeholder="ESTP"
                                                />
                                                <input  type="text"
                                                        id="ESTP1"
                                                        name='ESTP1'
                                                        placeholder="결과데이터를 입력해주세요"
                                                        {...register("ESTP1")}
                                                        required
                                                />
                                                <textarea  type="text"
                                                        id="ESTP2"
                                                        name='ESTP2' 
                                                        placeholder="설명을 입력해주세요"
                                                        {...register("ESTP2")}
                                                        required
                                                />
                                                <input type="file" id="ESTP3" accept="image/*" 
                                                {...register("ESTP3")}
                                                />

                                        </div>
                                        {/* ESFP */}
                                        <div className='mbti-input esfp'>
                                                <input  type="text"
                                                        disabled
                                                        placeholder="ESFP"
                                                />
                                                <input  type="text"
                                                        id="ESFP1"
                                                        name='ESFP1'
                                                        placeholder="결과데이터를 입력해주세요"
                                                        {...register("ESFP1")}
                                                        required
                                                />
                                                <textarea  type="text"
                                                        id="ESFP2" 
                                                        name='ESFP2'
                                                        placeholder="설명을 입력해주세요"
                                                        {...register("ESFP2")}
                                                        required
                                                />
                                                <input type="file" id="ESFP3" accept="image/*" 
                                                {...register("ESFP3")}

                                                />
                                        </div>
                                        {/* ENTP */}
                                        <div className='mbti-input entp'>
                                                <input  type="text"
                                                        id="first"
                                                        disabled
                                                        placeholder="ENTP"
                                                />
                                                <input  type="text"
                                                        id="ENTP1"
                                                        name='ENTP1'
                                                        placeholder="결과데이터를 입력해주세요"
                                                        {...register("ENTP1")}
                                                        
                                                />
                                                <textarea  type="text"
                                                        id="ENTP2" 
                                                        name='ENTP2'
                                                        placeholder="설명을 입력해주세요"
                                                        {...register("ENTP2")}
                                                        
                                                />
                                                <input type="file" id="ENTP3" accept="image/*" 
                                                {...register("ENTP3")}
                                                />
                                        </div>
                                        {/* ENFP */}
                                        <div className='mbti-input enfp'>
                                                <input  type="text"
                                                        id="first"
                                                        disabled
                                                        placeholder="ENFP"
                                                />
                                                <input  type="text"
                                                        id="ENFP1"
                                                        name='ENFP1'
                                                        placeholder="결과데이터를 입력해주세요"
                                                        {...register("ENFP1")}
                                                        required
                                                />
                                                <textarea  type="text"
                                                        id="ENFP2" 
                                                        name='ENFP2'
                                                        placeholder="설명을 입력해주세요"
                                                        {...register("ENFP2")}
                                                        required
                                                />
                                                <input type="file" id="ENFP3" accept="image/*" 
                                                {...register("ENFP3")}
                                                />
                                        </div>
                                        <p className='sep-line mt20'>-------------- I 구간 </p>
                                        {/* ISTP */}
                                        <div className=' mbti-input istp '>
                                                <input  type="text"
                                                        id="first"
                                                        disabled
                                                        placeholder="ISTP"
                                                />
                                                <input  type="text"
                                                        id="ISTP1"
                                                        name='ISTP1'
                                                        placeholder="결과데이터를 입력해주세요"
                                                        {...register("ISTP1")}
                                                        required
                                                />
                                                <textarea  type="text"
                                                        id="ISTP2" 
                                                        name='ISTP2'
                                                        placeholder="설명을 입력해주세요"
                                                        {...register("ISTP2")}
                                                        required
                                                />
                                                <input type="file" id="ISTP3" accept="image/*" 
                                                {...register("ISTP3")}
                                                
                                                />
                                        </div>
                                        {/* ISFP */}
                                        <div className='mbti-input isfp'>
                                                <input  type="text"
                                                        id="first"
                                                        disabled
                                                        placeholder="ISFP"
                                                />
                                                <input  type="text"
                                                        id="ISFP1"
                                                        name='ISFP1'
                                                        placeholder="결과데이터를 입력해주세요"
                                                        {...register("ISFP1")}
                                                        required
                                                />
                                                <textarea  type="text"
                                                        id="ISFP2" 
                                                        name='ISFP2'
                                                        placeholder="설명을 입력해주세요"
                                                        {...register("ISFP2")}
                                                        required
                                                />
                                                <input type="file" id="ISFP3" accept="image/*" 
                                                {...register("ISFP3")}
                                                
                                                />
                                        </div>
                                        {/* INTP */}
                                        <div className='mbti-input intp'>
                                                <input  type="text"
                                                        id="first"
                                                        disabled
                                                        placeholder="INTP"
                                                />
                                                <input  type="text"
                                                        id="INTP1"
                                                        name='INTP1'
                                                        placeholder="결과데이터를 입력해주세요"
                                                        {...register("INTP1")}
                                                        required
                                                />
                                                <textarea  type="text"
                                                        id="INTP2" 
                                                        name='INTP2'
                                                        placeholder="설명을 입력해주세요"
                                                        {...register("INTP2")}
                                                        required
                                                />
                                                <input type="file" id="INTP3" accept="image/*" 
                                                {...register("INTP3")}
                                                
                                                />
                                        </div>
                                        {/* INFP */}
                                        <div className='mbti-input infp'>
                                                <input  type="text"
                                                        id="first"
                                                        disabled
                                                        placeholder="INFP"
                                                />
                                                <input  type="text"
                                                        id="INFP1"
                                                        name='INFP1'
                                                        placeholder="결과데이터를 입력해주세요"
                                                        {...register("INFP1")}
                                                        required
                                                />
                                                <textarea  type="text"
                                                        id="INFP2" 
                                                        name='INFP2'
                                                        placeholder="설명을 입력해주세요"
                                                        {...register("INFP2")}
                                                        required
                                                />
                                                <input type="file" id="INFP3" accept="image/*" 
                                                {...register("INFP3")}
                                                
                                                />
                                        </div>
                                </div>
                                
                                <div className='resultinput-right'>
                                        {/* ESTJ */}
                                        <p className='sep-line mt10 plus-style'>E 구간 --------------</p>
                                        <div className='mbti-input estj'>
                                                <input  type="text"
                                                        disabled
                                                        placeholder="ESTJ"
                                                />
                                                <input  type="text"
                                                        id="ESTJ1"
                                                        name='ESTJ1'
                                                        placeholder="결과데이터를 입력해주세요"
                                                        {...register("ESTJ1")}
                                                        required
                                                />
                                                <textarea  type="text"
                                                        id="ESTJ2" 
                                                        name='ESTJ2'
                                                        placeholder="설명을 입력해주세요"
                                                        {...register("ESTJ2")}
                                                        required
                                                />
                                                <input type="file" id="ESTJ3" accept="image/*" 
                                                {...register("ESTJ3")}
                                                />
                                        </div>
                                        {/* ESFJ */}
                                        <div className='mbti-input esfj'>
                                                <input  type="text"
                                                        id="first"
                                                        disabled
                                                        placeholder="ESFJ"
                                                />
                                                <input  type="text"
                                                        id="ESFJ1"
                                                        name='ESFJ1'
                                                        placeholder="결과데이터를 입력해주세요"
                                                        {...register("ESFJ1")}
                                                        required
                                                />
                                                <textarea  type="text"
                                                        id="ESFJ2" 
                                                        name='ESFJ2'
                                                        placeholder="설명을 입력해주세요"
                                                        {...register("ESFJ2")}
                                                        required
                                                />
                                                <input type="file" id="ESFJ3" accept="image/*" 
                                                {...register("ESFJ3")}
                                                />
                                        </div>
                                        {/* ENTJ */}
                                        <div className='mbti-input entj'>
                                                <input  type="text"
                                                        id="first"
                                                        disabled
                                                        placeholder="ENTJ"
                                                />
                                                <input  type="text"
                                                        id="ENTJ1"
                                                        name='ENTJ1'
                                                        placeholder="결과데이터를 입력해주세요"
                                                        {...register("ENTJ1")}
                                                        required
                                                />
                                                <textarea  type="text"
                                                        id="ENTJ2" 
                                                        name='ENTJ2'
                                                        placeholder="설명을 입력해주세요"
                                                        {...register("ENTJ2")}
                                                        required
                                                />
                                                <input type="file" id="ENTJ3" accept="image/*" 
                                                {...register("ENTJ3")}
                                                
                                                />
                                        </div>
                                        {/* ENFJ */}
                                        <div className='mbti-input enfj'>
                                        <input  type="text"
                                                id="first"
                                                disabled
                                                placeholder="ENFJ"
                                        />
                                        <input  type="text"
                                                id="ENFJ1"
                                                name='ENFJ1'
                                                placeholder="결과데이터를 입력해주세요"
                                                {...register("ENFJ1")}
                                                required
                                        />
                                        <textarea  type="text"
                                                id="ENFJ2" 
                                                name='ENFJ2'
                                                placeholder="설명을 입력해주세요"
                                                {...register("ENFJ2")}
                                                required
                                        />
                                        <input type="file" id="ENFJ3" accept="image/*" 
                                                {...register("ENFJ3")}
                                        />
                                        </div>
                                        <p className='sep-line mt20'>I 구간 --------------</p>
                                        {/* ISTJ */}
                                        <div className='mbti-input istj'>
                                        <input  type="text"
                                                // className='mt30'
                                                id="first"
                                                disabled
                                                placeholder="ISTJ"
                                        />
                                        <input  type="text"
                                                id="ISTJ1"
                                                name='ISTJ1'
                                                placeholder="결과데이터를 입력해주세요"
                                                {...register("ISTJ1")}
                                                required
                                        />
                                        <textarea  type="text"
                                                id="ISTJ2" 
                                                name='ISTJ2'
                                                placeholder="설명을 입력해주세요"
                                                {...register("ISTJ2")}
                                                required
                                        />
                                        <input type="file" id="ISTJ3" accept="image/*" 
                                                {...register("ISTJ3")}
                                        
                                        />
                                        </div>
                                        {/* ISFJ */}
                                        <div className='mbti-input isfj'>
                                        <input  type="text"
                                                id="first"
                                                disabled
                                                placeholder="ISFJ"
                                        />
                                        <input  type="text"
                                                id="ISFJ1"
                                                name='ISFJ1'
                                                placeholder="결과데이터를 입력해주세요"
                                                {...register("ISFJ1")}
                                                required
                                        />
                                        <textarea  type="text"
                                                id="ISFJ2" 
                                                name='ISFJ2'
                                                placeholder="설명을 입력해주세요"
                                                {...register("ISFJ2")}
                                                required
                                        />
                                        <input type="file" id="ISFJ3" accept="image/*" 
                                                {...register("ISFJ3")}
                                                />
                                        </div>
                                        {/* INTJ */}
                                        <div className='mbti-input intj'>
                                        <input  type="text"
                                                id="first"
                                                disabled
                                                placeholder="INTJ"
                                        />
                                        <input  type="text"
                                                id="INTJ1"
                                                name='INTJ1'
                                                placeholder="결과데이터를 입력해주세요"
                                                {...register("INTJ1")}
                                                required
                                        />
                                        <textarea  type="text"
                                                id="INTJ2" 
                                                name='INTJ2'
                                                placeholder="설명을 입력해주세요"
                                                {...register("INTJ2")}
                                                required
                                        />
                                        <input type="file" id="INTJ3" accept="image/*" 
                                                {...register("INTJ3")}
                                        
                                        />
                                        </div>
                                        {/* INFJ */}
                                        <div className='mbti-input infj'>
                                        <input  type="text"
                                                id="first"
                                                disabled
                                                placeholder="INFJ"
                                        />
                                        <input  type="text"
                                                id="INFJ1"
                                                name='INFJ1'
                                                placeholder="결과데이터를 입력해주세요"
                                                {...register("INFJ1")}
                                                required
                                        />
                                        <textarea  type="text"
                                                id="INFJ2" 
                                                name='INFJ2'
                                                placeholder="설명을 입력해주세요"
                                                {...register("INFJ2")}
                                                required
                                        />
                                        <input type="file" id="INFJ3" accept="image/*" 
                                                {...register("INFJ3")}
                                        />
                                        </div>
                                </div>
                        </div>

                        <div className='btn-group mt40'>
                                <div>
                                        <button  type="button"
                                                onClick={() => 
                                                        {
                                        if(confirm('입력하신 데이터가 사라집니다. 이동하시겠습니까?')){
                                                handleClickButton('/regtest')
                                                window.scrollTo({ top: 0, behavior: "smooth" });
                                        }else{
                                                return false;
                                        }
                                                        }
                                        }
                                        >이전</button>

                                        <button className='ml3'
                                                type='submit'
                                        >다음</button>
                                </div>
                        </div>
                </form>
                </div>
        </section>

</>
)
}

