/*eslint-disable */

import { useEffect, useState } from 'react';

//my style
import './regstyle.sass';
import '../margin.sass';
import '../padding.sass';
import '../marginpadding.sass';

import { useNavigate } from 'react-router-dom';
import { useFirestore } from '../hooks/useFirestore';

export default () => {
        let question = [];
        let pic = [];

        const navigate = useNavigate();

        const [data1,setData1] = useState({id:1, name:"", type:"ESFP", text:"", img:""});
        const [data2,setData2] = useState({id:2, name:"", type:"ESTJ", text:"", img:""});
        const [data3,setData3] = useState({id:3, name:"", type:"ENFJ", text:"", img:""});
        const [data4,setData4] = useState({id:4, name:"", type:"ENTJ", text:"", img:""});
        const [data5,setData5] = useState({id:5, name:"", type:"ESTP", text:"", img:""});
        const [data6,setData6] = useState({id:6, name:"", type:"ESFJ", text:"", img:""});
        const [data7,setData7] = useState({id:7, name:"", type:"ENFP", text:"", img:""});
        const [data8,setData8] = useState({id:8, name:"", type:"ENTP", text:"", img:""});
        const [data9,setData9] = useState({id:9, name:"", type:"INFJ", text:"", img:""});
        const [data10,setData10] = useState({id:10, name:"", type:"ISTJ", text:"", img:""});
        const [data11,setData11] = useState({id:11, name:"", type:"INTP", text:"", img:""});
        const [data12,setData12] = useState({id:12, name:"", type:"ISFP", text:"", img:""});
        const [data13,setData13] = useState({id:13, name:"", type:"ISTP", text:"", img:""});
        const [data14,setData14] = useState({id:14, name:"", type:"ISFJ", text:"", img:""});
        const [data15,setData15] = useState({id:15, name:"", type:"INFP", text:"", img:""});
        const [data16,setData16] = useState({id:16, name:"", type:"INTJ", text:"", img:""});


        const handleData = (event,i) => {
                switch (i){
                        case '1':
                        if (event.target.id === `name${i}`) {
                                setData1((prevState)=>{
                                return { ...prevState, name: event.target.value }
                                })
                
                        }else if (event.target.id === `text${i}`) {
                                setData1((prevState)=>{
                                return { ...prevState, text: event.target.value }
                                })
                
                        }else if (event.target.id === `img${i}`) {
                                setData1((prevState)=>{
                                return { ...prevState, img: event.target.files[0] }
                                })
                        }
                        case '2':
                                if (event.target.id === `name${i}`) {
                                setData2((prevState)=>{
                                        return { ...prevState, name: event.target.value }
                                })
                
                                }else if (event.target.id === `text${i}`) {
                                setData2((prevState)=>{
                                        return { ...prevState, text: event.target.value }
                                })
                
                                }else if (event.target.id === `img${i}`) {
                                setData2((prevState)=>{
                                        return { ...prevState, img: event.target.files[0] }
                                })
                                }
                }    
                
        }
        //     console.log(data1);
        const { addDocumentObjImg, response } = useFirestore("ResultData");

        const handleClickButton = (link) => {

        // question.push(data1);
        // question.push(data2);
        // question.push(data3);
        // question.push(data4);
        // question.push(data5);
        // question.push(data6);
        // question.push(data7);
        // question.push(data8);
        // question.push(data9);
        // question.push(data10);
        // question.push(data11);
        // question.push(data12);
        // question.push(data13);
        // question.push(data14);
        // question.push(data15);
        // question.push(data16);


        // addDocumentObjImg({ question });
        // console.log(question);

        if(link === '/regtest'){
                navigate(link);
        }else{
                alert('준비중이양...💨');
        }

}


return(
<>
        <section>
                <div className='resultinput-wrap'>

                        <p>16개의 결과를 입력해주세요🙂</p>

                        <div className='mbti-input-wrap'>

                                <div className='resultinput-left'>
                                
                                        {/* ESTP */}
                                        <p className='sep-line mt10'>-------------- E 구간 </p>

                                        <div className='mbti-input estp'>
                                                <input  type="text"
                                                        id="first"
                                                        disabled
                                                        placeholder="ESTP"
                                                />
                                                <input  type="text"
                                                        id="second"
                                                        placeholder="결과데이터를 입력해주세요"
                                                />
                                                <textarea  type="text"
                                                        id="third" 
                                                        placeholder="설명을 입력해주세요"
                                                />
                                                <input type="file" id="image" accept="image/*" 
                                                />

                                        </div>

                                        {/* ESFP */}
                                        <div className='mbti-input esfp'>
                                                <input  type="text"
                                                        disabled
                                                        placeholder="ESFP"
                                                />
                                                <input  type="text"
                                                        id="name1"
                                                        placeholder="결과데이터를 입력해주세요"
                                                        onChange={(event)=>{handleData(event,'1')}}
                                                />
                                                <textarea  type="text"
                                                        id="text1" 
                                                        placeholder="설명을 입력해주세요"
                                                        onChange={(event)=>{handleData(event,'1')}}
                                                />
                                                <input type="file" id="img1" accept="image/*" 
                                                onChange={(event)=>{handleData(event,'1')}}

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
                                                        id="second"
                                                        placeholder="결과데이터를 입력해주세요"
                                                />
                                                <textarea  type="text"
                                                        id="third" 
                                                        placeholder="설명을 입력해주세요"
                                                />
                                                <input type="file" id="image" accept="image/*" 
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
                                                        
                                                        id="second"
                                                        placeholder="결과데이터를 입력해주세요"
                                                />
                                                <textarea  type="text"
                                                        
                                                        id="third" 
                                                        placeholder="설명을 입력해주세요"
                                                />
                                                <input type="file" id="image" accept="image/*" 
                                                
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
                                                        
                                                        id="second"
                                                        placeholder="결과데이터를 입력해주세요"
                                                />
                                                <textarea  type="text"
                                                        
                                                        id="third" 
                                                        placeholder="설명을 입력해주세요"
                                                />
                                                <input type="file" id="image" accept="image/*" 
                                                
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
                                                        
                                                        id="second"
                                                        placeholder="결과데이터를 입력해주세요"

                                                />
                                                <textarea  type="text"
                                                        
                                                        id="third" 
                                                        placeholder="설명을 입력해주세요"
                                                />
                                                <input type="file" id="image" accept="image/*" 
                                                
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
                                                        
                                                        id="second"
                                                        placeholder="결과데이터를 입력해주세요"
                                                />
                                                <textarea  type="text"
                                                        
                                                        id="third" 
                                                        placeholder="설명을 입력해주세요"
                                                />
                                                <input type="file" id="image" accept="image/*" 
                                                
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
                                                        
                                                        id="second"
                                                        placeholder="결과데이터를 입력해주세요"
                                                />
                                                <textarea  type="text"
                                                        
                                                        id="third" 
                                                        placeholder="설명을 입력해주세요"
                                                />
                                                <input type="file" id="image" accept="image/*" 
                                                
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
                                                        
                                                        id="name2"
                                                        placeholder="결과데이터를 입력해주세요"
                                                        onChange={(event)=>{handleData(event,'2')}}
                                                />
                                                <textarea  type="text"
                                                        
                                                        id="text2" 
                                                        placeholder="설명을 입력해주세요"
                                                        onChange={(event)=>{handleData(event,'2')}}
                                                />
                                                <input type="file" id="img2" accept="image/*" 
                                                
                                                onChange={(event)=>{handleData(event,'2')}}
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
                                                        
                                                        id="second"
                                                        placeholder="결과데이터를 입력해주세요"
                
                                                />
                                                <textarea  type="text"
                                                        
                                                        id="third" 
                                                        placeholder="설명을 입력해주세요"
                                                />
                                                <input type="file" id="image" accept="image/*" 
                                                
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
                                                        
                                                        id="second"
                                                        placeholder="결과데이터를 입력해주세요"

                                                />
                                                <textarea  type="text"
                                                        
                                                        id="third" 
                                                        placeholder="설명을 입력해주세요"
                                                />
                                                <input type="file" id="image" accept="image/*" 
                                                
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
                                                
                                                id="second"
                                                placeholder="결과데이터를 입력해주세요"
                                        />
                                        <textarea  type="text"
                                                
                                                id="third" 
                                                placeholder="설명을 입력해주세요"
                                        />
                                        <input type="file" id="image" accept="image/*" 
                                        
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
                                                
                                                id="second"
                                                placeholder="결과데이터를 입력해주세요"

                                        />
                                        <textarea  type="text"
                                                
                                                id="third" 
                                                placeholder="설명을 입력해주세요"
                                        />
                                        <input type="file" id="image" accept="image/*" 
                                        
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
                                                
                                                id="second"
                                                placeholder="결과데이터를 입력해주세요"

                                        />
                                        <textarea  type="text"
                                                
                                                id="third" 
                                                placeholder="설명을 입력해주세요"
                                        />
                                        <input type="file" id="image" accept="image/*" 
                                        
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
                                                
                                                id="second"
                                                placeholder="결과데이터를 입력해주세요"

                                        />
                                        <textarea  type="text"
                                                
                                                id="third" 
                                                placeholder="설명을 입력해주세요"
                                        />
                                        <input type="file" id="image" accept="image/*" 
                                        
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
                                                
                                                id="second"
                                                placeholder="결과데이터를 입력해주세요"
                                        />
                                        <textarea  type="text"
                                                
                                                id="third" 
                                                placeholder="설명을 입력해주세요"
                                        />
                                        <input type="file" id="image" accept="image/*" 
                                        
                                        />
                                </div>
                                </div>
                        </div>

                        <div className='btn-group mt40'>
                                <button
                                        onClick={() => 
                                                {
                                                        handleClickButton('/regtest')
                                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                                }
                                
                                }
                                >이전</button>
                                <button className='ml3'
                                        onClick={() => 
                                                {
                                                        handleClickButton('/')
                                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                                }
                                        }
                                >다음</button>
                        </div>
                </div>
        </section>

</>
)
}

