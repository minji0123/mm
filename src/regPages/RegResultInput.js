/*eslint-disable */

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFirestore } from '../hooks/useFirestore';
import { useForm } from "react-hook-form";
import  AdminBtn  from '../common/AdminBtn'
import  Loading  from '../common/Loading'

//my style
import './regstyle.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';

export default () => {

        const [strUserDN, setstrUserDN] = useState("");
        const [strUserID, setstrUserID] = useState("");
        const [strContUID, setstrcontUID] = useState("");
        const [strMainTitle, setstrMainTitle] = useState("");
        const [printLoading, setPrintLoading] = useState(false);
        const [showHide, setShowHide] = useState(true);

        const { register, handleSubmit, watch, formState: { errors } } = useForm();
        const { addDocumentObjImg, response } = useFirestore("ResultData");
        const { addComment } = useFirestore("ResultData");
        const { editDocument } = useFirestore("MainData");

        const navigate = useNavigate();

        useEffect(()=>{
                setstrUserDN(localStorage.getItem('userDN'))
                setstrUserID(localStorage.getItem('userID'))
                setstrcontUID(localStorage.getItem('contUID'))
                setstrMainTitle(localStorage.getItem('mainTitle'))
        });

        console.log('input: 이 데이터를 넣어줄거에용',strContUID,strMainTitle);
        const inputSwitch = (data) =>{
                console.log(showHide?'이미지빼기':'이미지넣기');
                if(data === '8'){
                        setShowHide(true);
                }else{
                        setShowHide(false);
                }
        }
        let question = [];
        let pic = [];

        const sendDataObj = (data,func) =>{
                // 이미지 포함 저장
                console.log('들어오는 데이터',data);
                let data1 =   {id:1, name:data.ESTP1, type:"ESTP", text:data.ESTP2, img:data.ESTP3[0] }
                let data2 =   {id:2, name:data.ESFP1, type:"ESFP", text:data.ESFP2, img:data.ESFP3[0] }
                let data3 =   {id:3, name:data.ENTP1, type:"ENTP", text:data.ENTP2, img:data.ENTP3[0] }
                let data4 =   {id:4, name:data.ENFP1, type:"ENFP", text:data.ENFP2, img:data.ENFP3[0] }
                let data5 =   {id:5, name:data.ISTP1, type:"ISTP", text:data.ISTP2, img:data.ISTP3[0] }
                let data6 =   {id:6, name:data.ISFP1, type:"ISFP", text:data.ISFP2, img:data.ISFP3[0] }
                let data7 =   {id:7, name:data.INTP1, type:"INTP", text:data.INTP2, img:data.INTP3[0] }
                let data8 =   {id:8, name:data.INFP1, type:"INFP", text:data.INFP2, img:data.INFP3[0] }
                let data9 =   {id:9, name:data.ESTJ1, type:"ESTJ", text:data.ESTJ2, img:data.ESTJ3[0] }
                let data10 = {id:10, name:data.ESFJ1, type:"ESFJ", text:data.ESFJ2, img:data.ESFJ3[0] }
                let data11 = {id:11, name:data.ENTJ1, type:"ENTJ", text:data.ENTJ2, img:data.ENTJ3[0] }
                let data12 = {id:12, name:data.ENFJ1, type:"ENFJ", text:data.ENFJ2, img:data.ENFJ3[0] }
                let data13 = {id:13, name:data.ISTJ1, type:"ISTJ", text:data.ISTJ2, img:data.ISTJ3[0] }
                let data14 = {id:14, name:data.ISFJ1, type:"ISFJ", text:data.ISFJ2, img:data.ISFJ3[0] }
                let data15 = {id:15, name:data.INTJ1, type:"INTJ", text:data.INTJ2, img:data.INTJ3[0] }
                let data16 = {id:16, name:data.INFJ1, type:"INFJ", text:data.INFJ2, img:data.INFJ3[0] }

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

                func({question},strUserDN, strUserID, strContUID, strMainTitle);
                setTimeout(()=>{
                        setPrintLoading(false)
                        navigate('/regfinish');
                        window.scrollTo({ top: 0, behavior: "smooth" });
                },11000)
        }
        const sendDataNoImg = (data,func) =>{
                // 이미지 없이 저장
                console.log('들어오는 데이터',data);
                let data1 =   {id:1, name:data.ESTP1, type:"ESTP", text:data.ESTP2, imgUrl: ""}
                let data2 =   {id:2, name:data.ESFP1, type:"ESFP", text:data.ESFP2, imgUrl: ""}
                let data3 =   {id:3, name:data.ENTP1, type:"ENTP", text:data.ENTP2, imgUrl: ""}
                let data4 =   {id:4, name:data.ENFP1, type:"ENFP", text:data.ENFP2, imgUrl: ""}
                let data5 =   {id:5, name:data.ISTP1, type:"ISTP", text:data.ISTP2, imgUrl: ""}
                let data6 =   {id:6, name:data.ISFP1, type:"ISFP", text:data.ISFP2, imgUrl: ""}
                let data7 =   {id:7, name:data.INTP1, type:"INTP", text:data.INTP2, imgUrl: ""}
                let data8 =   {id:8, name:data.INFP1, type:"INFP", text:data.INFP2, imgUrl: ""}
                let data9 =   {id:9, name:data.ESTJ1, type:"ESTJ", text:data.ESTJ2, imgUrl: ""}
                let data10 = {id:10, name:data.ESFJ1, type:"ESFJ", text:data.ESFJ2, imgUrl: ""}
                let data11 = {id:11, name:data.ENTJ1, type:"ENTJ", text:data.ENTJ2, imgUrl: ""}
                let data12 = {id:12, name:data.ENFJ1, type:"ENFJ", text:data.ENFJ2, imgUrl: ""}
                let data13 = {id:13, name:data.ISTJ1, type:"ISTJ", text:data.ISTJ2, imgUrl: ""}
                let data14 = {id:14, name:data.ISFJ1, type:"ISFJ", text:data.ISFJ2, imgUrl: ""}
                let data15 = {id:15, name:data.INTJ1, type:"INTJ", text:data.INTJ2, imgUrl: ""}
                let data16 = {id:16, name:data.INFJ1, type:"INFJ", text:data.INFJ2, imgUrl: ""}

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

                console.log('저장되는 질문 데이터 이미지없이!',question);
                func({question}, strUserDN, strUserID, strContUID,strMainTitle);
                setTimeout(()=>{
                        setPrintLoading(false)
                        navigate('/regfinish');
                        window.scrollTo({ top: 0, behavior: "smooth" });

                },4000)
        }

        const handleClickButton = (link) => {
                if(link === '/regtest'){
                        navigate(link);
                }
        }

return(
<>
{strUserDN === "admin" ? <AdminBtn link='/regfinish'/> : '' }
{printLoading === true ? <Loading/> : ''}
        
        <section>
                <div className='resultinput-wrap'>
                <div className='btn-group-input'>
                        <button type='button' onClick={()=>{ inputSwitch('8')}} >이미지 빼기</button>
                        <button className='ml3' type='button' onClick={()=>{ inputSwitch('12')}} >이미지 넣기</button>
                </div>

                <form onSubmit={
                handleSubmit( (data) =>{
                        if(confirm("데이터가 저장됩니다. 진행하시겠습니까?")){
                                if(showHide === true){
                                        // 이미지빼기
                                        sendDataNoImg(data,addComment);
                                        let mainShow = true;
                                        editDocument({mainShow},strContUID);
                                        setPrintLoading(true);

                                }else{
                                        // 이미지넣기
                                        sendDataObj(data,addDocumentObjImg);
                                        let mainShow = true;
                                        editDocument({mainShow},strContUID);
                                        setPrintLoading(true);
                                }
                        }else{
                                return false;
                        }
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
                                                className={ showHide ? 'dn' : 'db' }
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
                                                className={ showHide ? 'dn' : 'db' }
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
                                                className={ showHide ? 'dn' : 'db' }
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
                                                className={ showHide ? 'dn' : 'db' }
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
                                                className={ showHide ? 'dn' : 'db' }
                                                
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
                                                className={ showHide ? 'dn' : 'db' }
                                                
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
                                                className={ showHide ? 'dn' : 'db' }
                                                
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
                                                className={ showHide ? 'dn' : 'db' }
                                                
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
                                                className={ showHide ? 'dn' : 'db' }
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
                                                className={ showHide ? 'dn' : 'db' }
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
                                                className={ showHide ? 'dn' : 'db' }
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
                                                className={ showHide ? 'dn' : 'db' }
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
                                                className={ showHide ? 'dn' : 'db' }
                                        
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
                                                className={ showHide ? 'dn' : 'db' }
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
                                                className={ showHide ? 'dn' : 'db' }
                                        
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
                                                className={ showHide ? 'dn' : 'db' }
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

