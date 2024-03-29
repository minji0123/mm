/* eslint-disable*/

import { useEffect, useReducer, useState } from 'react';
import { useFirestore } from '../hooks/useFirestore';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import  AdminBtn  from '../common/AdminBtn'

//my style
import './regstyle.sass';
import './regtest.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';

export default () => {

    const [strUserDN, setstrUserDN] = useState("");
    const [strUserID, setstrUserID] = useState("");
    const [strContUID, setstrcontUID] = useState("");

    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { addComment, response } = useFirestore("TestData");

    
    useEffect(()=>{
        setstrUserDN(localStorage.getItem('userDN'))
        setstrUserID(localStorage.getItem('userID'))
        setstrcontUID(localStorage.getItem('contUID'))
    });

    console.log('input: 이 데이터를 넣어줄거에용',strContUID);

    let question = [];
    const printDatas = ["EI","SN","TF","JP"];
    const 임시 = " 질문을 입력해주세요";
    const 임시1 = " 답변을 입력해주세요";
    const [showHide, setShowHide] = useState(true);
    
    const inputSwitch = (data) =>{
        console.log(showHide?'안보여랏':'보여랏');
        if(data === '8'){
            setShowHide(true);
        }else{
            setShowHide(false);
        }
    }

    const handleClickButton = (link) => {
        if(link === '/regmain'){
        navigate(link);
        }
    }

    const setDatatoObj = (data,func) => {
        // 여기는 필수
        let data1 = {id:1, content: data.question1, answer1 :data.answera1, answer2: data.answerb1, type:"EI"}
        let data2 = {id:2, content: data.question2, answer1 :data.answera2, answer2: data.answerb2, type:"SN"}
        let data3 = {id:3, content: data.question3, answer1 :data.answera3, answer2: data.answerb3, type:"TF"}
        let data4 = {id:4, content: data.question4, answer1 :data.answera4, answer2: data.answerb4, type:"JP"}
        let data5 = {id:5, content: data.question5, answer1 :data.answera5, answer2: data.answerb5, type:"EI"}
        let data6 = {id:6, content: data.question6, answer1 :data.answera6, answer2: data.answerb6, type:"SN"}
        let data7 = {id:7, content: data.question7, answer1 :data.answera7, answer2: data.answerb7, type:"TF"}
        let data8 = {id:8, content: data.question8, answer1 :data.answera8, answer2: data.answerb8, type:"JP"}

        // 여기는 선택... undefined 가 들어올 수도 있다.
        let data9  = {id:9, content:data.question9  === undefined? '' : data.question9, answer1:data.answera9 === undefined? '' : data.answera9 , answer2: data.answerb9  === undefined? '' : data.answerb9, type:"EI"}
        let data10 = {id:10,content:data.question10 === undefined? '' : data.question10,answer1:data.answera9 === undefined? '' : data.answera10, answer2: data.answerb9  === undefined? '' : data.answerb10,type:"SN"}
        let data11 = {id:11,content:data.question11 === undefined? '' : data.question11,answer1:data.answera9 === undefined? '' : data.answera11, answer2: data.answerb9  === undefined? '' : data.answerb11,type:"TF"}
        let data12 = {id:12,content:data.question12 === undefined? '' : data.question12,answer1:data.answera9 === undefined? '' : data.answera12, answer2: data.answerb9  === undefined? '' : data.answerb12,type:"JP"}

        question.push(data1);
        question.push(data2);
        question.push(data3);
        question.push(data4);
        question.push(data5);
        question.push(data6);
        question.push(data7);
        question.push(data8);
        if(data.question9 !== undefined){
            question.push(data9);
            question.push(data10);
            question.push(data11);
            question.push(data12);
        }

        console.log('저장되는 질문 데이터',question);

        func({question}, strUserDN, strUserID, strContUID);
        navigate('/regresult');
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return(
        <>
            {strUserDN === "admin" ? <AdminBtn link='/regresult'/> : '' }

            <section className='testInput-group'>
                
                {/* <p>12 개의 질답을 입력해주세요🙂</p> */}
                <div className='btn-group-input'>
                    <button type='button' onClick={()=>{ inputSwitch('8')}} >8개 입력하기</button>
                    <button className='ml3' type='button' onClick={()=>{ inputSwitch('12')}} >12개 입력하기</button>
                </div>
                <form 
                style={{display:"flex", flexDirection:"column", alignItems: "center"}}
                onSubmit={
                    handleSubmit( (data) =>{
                        if(confirm("데이터가 저장됩니다. 진행하시겠습니까?")){
                            setDatatoObj(data, addComment);
                            // (data, editDocument);
                        }else{
                            return false;
                        }
                    })
                }>
                {/* ei 159 */}
                <div className='group-wrap '>
                    <p className='group-p'>e 와 i 질문을 입력해 주세요</p>
                    <div className='grpup-inputs'>
                        {/* 1 */}
                        <div className='group1'>
                            <textarea type="text"
                                id="question1"
                                name='question1'
                                placeholder={printDatas[0]+ 임시}
                                {...register("question1")}
                                required
                            />
                            <input type="text"
                                id="answera1" 
                                name="answera1" 
                                {...register("answera1")}
                                placeholder={printDatas[0].slice(0,1)+ 임시1}
                                required
                            />
                            <input type="text"
                                id="answerb1" 
                                name="answerb1" 
                                {...register("answerb1")}
                                placeholder={printDatas[0].slice(1)+ 임시1}
                                required
                            />
                        </div>
                        {/* 5 */}
                        <div className='group2'>
                            <textarea type="text"
                                id="question5" 
                                name="question5" 
                                {...register("question5")}
                                placeholder={printDatas[0]+ 임시}
                                required
                            />

                            <input type="text"
                                id="answera5" 
                                name="answera5" 
                                {...register("answera5")}
                                placeholder={printDatas[0].slice(0,1)+ 임시1}
                                required
                            />
                            <input type="text"
                                id="answerb5" 
                                name="answerb5" 
                                {...register("answerb5")}
                                placeholder={printDatas[0].slice(1)+ 임시1}
                                required
                            />
                        </div>
                        {/* 9 */}
                        {
                            !showHide && 
                            <div className='group2'>
                            <textarea type="text"
                                id="question9" 
                                name="question9" 
                                {...register("question9")}
                                placeholder={printDatas[0]+ 임시}
                                required
                            />

                            <input type="text"
                                id="answera9" 
                                name="answera9" 
                                {...register("answera9")}
                                placeholder={printDatas[0].slice(0,1)+ 임시1}
                                required
                            />
                            <input type="text"
                                id="answerb9" 
                                name="answerb9" 
                                {...register("answerb9")}
                                placeholder={printDatas[0].slice(1)+ 임시1}
                                required
                            />
                            </div>
                        }

                    </div>
                </div>

                {/* sn 2 6 10*/}
                <div className='group-wrap '>
                    <p className='group-p'>s 와 n 질문을 입력해 주세요</p>
                    <div className='grpup-inputs'>
                        {/* 2 */}
                        <div className='group1'>
                            <textarea type="text"
                                id="question2" 
                                name="question2" 
                                {...register("question2")}
                                placeholder={printDatas[1]+ 임시}
                                required
                            />
                            <input type="text"
                                id="answera2" 
                                name="answera2" 
                                {...register("answera2")}
                                placeholder={printDatas[1].slice(0,1)+ 임시1}
                                required
                            />
                            <input type="text"
                                id="answerb2" 
                                name="answerb2" 
                                {...register("answerb2")}
                                placeholder={printDatas[1].slice(1)+ 임시1}
                                required
                            />
                        </div>
                        {/* 6 */}
                        <div className='group2'>
                            <textarea type="text"
                                id="question6" 
                                name="question6" 
                                {...register("question6")}
                                placeholder={printDatas[1]+ 임시}
                                required
                            />
                            <input type="text"
                                id="answera6" 
                                name="answera6" 
                                {...register("answera6")}
                                placeholder={printDatas[1].slice(0,1)+ 임시1}
                                required
                            />
                            <input type="text"
                                id="answerb6" 
                                name="answerb6" 
                                {...register("answerb6")}
                                placeholder={printDatas[1].slice(1)+ 임시1}
                                required
                            />
                        </div>
                        {/* 10 */}
                        {
                            !showHide && 
                            <div className='group2'>
                            <textarea type="text"
                                id="question10" 
                                name="question10" 
                                {...register("question10")}
                                placeholder={printDatas[1]+ 임시}
                                required
                            />
                            <input type="text"
                                id="answera10" 
                                name="answera10" 
                                {...register("answera10")}
                                placeholder={printDatas[1].slice(0,1)+ 임시1}
                                required
                            />
                            <input type="text"
                                id="answerb10" 
                                name="answerb10" 
                                {...register("answerb10")}
                                placeholder={printDatas[1].slice(1)+ 임시1}
                                required
                            />
                            </div>
                        }

                    </div>
                </div>

                {/* tf 3 7 11*/}
                <div className='group-wrap '>
                    <p className='group-p'>t 와 f 질문을 입력해 주세요</p>
                    <div className='grpup-inputs'>
                        {/* 3 */}
                        <div className='group1'>
                            <textarea type="text"
                                id="question3" 
                                name="question3" 
                                {...register("question3")}
                                placeholder={printDatas[2]+ 임시}
                                required
                            />
                            <input type="text"
                                id="answera3" 
                                name="answera3" 
                                {...register("answera3")}
                                placeholder={printDatas[2].slice(0,1)+ 임시1}
                                required
                            />
                            <input type="text"
                                id="answerb3" 
                                name="answerb3" 
                                {...register("answerb3")}
                                placeholder={printDatas[2].slice(1)+ 임시1}
                                required
                            />
                        </div>
                        {/* 7 */}
                        <div className='group2'>
                            <textarea type="text"
                                id="question7" 
                                name="question7" 
                                {...register("question7")}
                                placeholder={printDatas[2]+ 임시}
                                required
                            />
                            <input type="text"
                                id="answera7" 
                                name="answera7" 
                                {...register("answera7")}
                                placeholder={printDatas[2].slice(0,1)+ 임시1}
                                required
                            />
                            <input type="text"
                                id="answerb7" 
                                name="answerb7" 
                                {...register("answerb7")}
                                placeholder={printDatas[2].slice(1)+ 임시1}
                                required
                            />
                        </div>
                        {/* 11 */}
                        {
                            !showHide && 
                            <div className='group2'>
                            <textarea type="text"
                                id="question11" 
                                name="question11" 
                                {...register("question11")}
                                placeholder={printDatas[2]+ 임시}
                                required
                            />
                            <input type="text"
                                id="answera11" 
                                name="answera11" 
                                {...register("answera11")}
                                placeholder={printDatas[2].slice(0,1)+ 임시1}
                                required
                            />
                            <input type="text"
                                id="answerb11" 
                                name="answerb11" 
                                {...register("answerb11")}
                                placeholder={printDatas[2].slice(1)+ 임시1}
                                required
                            />
                            </div>
                        }

                    </div>
                </div>

                {/* jp 4 8 12*/}
                <div className='group-wrap '>
                    <p className='group-p'>j 와 p 질문을 입력해 주세요</p>
                    <div className='grpup-inputs'>
                        {/* 4 */}
                        <div className='group1'>
                            <textarea type="text"
                                id="question4" 
                                name="question4" 
                                {...register("question4")}
                                placeholder={printDatas[3]+ 임시}
                                required
                            />
                            <input type="text"
                                id="answera4" 
                                name="answera4" 
                                {...register("answera4")}

                                placeholder={printDatas[3].slice(0,1)+ 임시1}
                                required
                            />
                            <input type="text"
                                id="answerb4" 
                                name="answerb4" 
                                {...register("answerb4")}

                                placeholder={printDatas[3].slice(1)+ 임시1}
                                required
                            />
                        </div>
                        {/* 8 */}
                        <div className='group2'>
                            <textarea type="text"
                                id="question8" 
                                name="question8" 
                                {...register("question8")}
                                placeholder={printDatas[3]+ 임시}
                                required
                            />
                            <input type="text"
                                id="answera8" 
                                name="answera8" 
                                {...register("answera8")}
                                placeholder={printDatas[3].slice(0,1)+ 임시1}
                                required
                            />
                            <input type="text"
                                id="answerb8" 
                                name="answerb8" 
                                {...register("answerb8")}
                                placeholder={printDatas[3].slice(1)+ 임시1}
                                required
                            />
                        </div>
                        {/* 12 */}
                        {
                            !showHide && 
                            <div className='group2'>
                            <textarea type="text"
                                id="question12" 
                                name="question12" 
                                {...register("question12")}
                                placeholder={printDatas[3]+ 임시}
                                required
                            />
                            <input type="text"
                                id="answera12" 
                                name="answera12" 
                                {...register("answera12")}
                                placeholder={printDatas[3].slice(0,1)+ 임시1}
                                required
                            />
                            <input type="text"
                                id="answerb12" 
                                name="answerb12" 
                                {...register("answerb12")}
                                required
                                placeholder={printDatas[3].slice(1)+ 임시1}
                            />
                        </div>
                        }
                        
                    </div>
                </div>

                <div className='btn-group mt40'>
                    <button  type="button"
                        onClick={() => 
                            {
                                if(confirm('입력하신 데이터가 사라집니다. 이동하시겠습니까?')){
                                    handleClickButton('/regmain')
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }else{
                                    return false;
                                }
                            }
                    }
                    >이전</button>
                    <button className='ml3'
                    type='submit'
                        // onClick={() => 
                        //     {   
                        //         handleClickButton('/regresult')
                        //         window.scrollTo({ top: 0, behavior: "smooth" });
                        //     }
                        // }
                    >다음</button>
                </div>

            </form>
            </section>
        </>
    )
}
