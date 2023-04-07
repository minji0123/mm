/*eslint-disable */
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
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
            <p>이제 진짜 결과 데이터를 입력해보세요</p>
            <p>총 16개의 결과를 입력해야해요</p>
            <div style={{ width: '1000px' }} >
                <Content>
                    {/* ESFP */}
                    <SubContent>
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                disabled
                                placeholder="ESFP"
                        />
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="name1"
                                placeholder="결과데이터를 입력해주세요"
                                onChange={(event)=>{handleData(event,'1')}}
                        />
                        <textarea  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px",
                                    }}
                                id="text1" 
                                placeholder="설명을 입력해주세요"
                                onChange={(event)=>{handleData(event,'1')}}
                        />
                        <input type="file" id="img1" accept="image/*" 
                        style={{border: "solid 1px lightgray", borderRadius: "5px",  width: '18rem'}}
                        onChange={(event)=>{handleData(event,'1')}}

                        />
                    </SubContent>

                    
                    {/* ESTJ */}
                    <SubContent>
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                disabled
                                placeholder="ESTJ"
                        />
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="name2"
                                placeholder="결과데이터를 입력해주세요"
                                onChange={(event)=>{handleData(event,'2')}}
                        />
                        <textarea  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px",
                                    }}
                                id="text2" 
                                placeholder="설명을 입력해주세요"
                                onChange={(event)=>{handleData(event,'2')}}
                        />
                        <input type="file" id="img2" accept="image/*" 
                        style={{border: "solid 1px lightgray", borderRadius: "5px",  width: '18rem'}}
                        onChange={(event)=>{handleData(event,'2')}}
                        />
                    </SubContent>
                </Content>
                
                <Content>
                    {/* ENFJ */}
                    <SubContent>
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="first"
                                disabled
                                placeholder="ENFJ"
                        />
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="second"
                                placeholder="결과데이터를 입력해주세요"
                        />
                        <textarea  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px",
                                    }}
                                id="third" 
                                placeholder="설명을 입력해주세요"
                        />
                        <input type="file" id="image" accept="image/*" 
                        style={{border: "solid 1px lightgray", borderRadius: "5px",  width: '18rem'}}
                        />
                    </SubContent>
                    
                    {/* ENTJ */}
                    <SubContent>
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="first"
                                disabled
                                placeholder="ENTJ"
                        />
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="second"
                                placeholder="결과데이터를 입력해주세요"

                        />
                        <textarea  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px",
                                    }}
                                id="third" 
                                placeholder="설명을 입력해주세요"
                        />
                        <input type="file" id="image" accept="image/*" 
                        style={{border: "solid 1px lightgray", borderRadius: "5px",  width: '18rem'}}
                        />
                    </SubContent>
                </Content>

                <Content>
                    {/* ESTP */}
                    <SubContent>
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="first"
                                disabled
                                placeholder="ESTP"
                        />
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="second"
                                placeholder="결과데이터를 입력해주세요"
                        />
                        <textarea  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px",
                                    }}
                                id="third" 
                                placeholder="설명을 입력해주세요"
                        />
                        <input type="file" id="image" accept="image/*" 
                        style={{border: "solid 1px lightgray", borderRadius: "5px",  width: '18rem'}}
                        />
                    </SubContent>
                    
                    {/* ESFJ */}
                    <SubContent>
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="first"
                                disabled
                                placeholder="ESFJ"
                        />
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="second"
                                placeholder="결과데이터를 입력해주세요"

                        />
                        <textarea  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px",
                                    }}
                                id="third" 
                                placeholder="설명을 입력해주세요"
                        />
                        <input type="file" id="image" accept="image/*" 
                        style={{border: "solid 1px lightgray", borderRadius: "5px",  width: '18rem'}}
                        />
                    </SubContent>
                </Content>

                <Content>
                    {/* ENFP */}
                    <SubContent>
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="first"
                                disabled
                                placeholder="ENFP"
                        />
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="second"
                                placeholder="결과데이터를 입력해주세요"
                        />
                        <textarea  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px",
                                    }}
                                id="third" 
                                placeholder="설명을 입력해주세요"
                        />
                        <input type="file" id="image" accept="image/*" 
                        style={{border: "solid 1px lightgray", borderRadius: "5px",  width: '18rem'}}
                        />
                    </SubContent>
                    
                    {/* ENTP */}
                    <SubContent>
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="first"
                                disabled
                                placeholder="ENTP"
                        />
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="second"
                                placeholder="결과데이터를 입력해주세요"

                        />
                        <textarea  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px",
                                    }}
                                id="third" 
                                placeholder="설명을 입력해주세요"
                        />
                        <input type="file" id="image" accept="image/*" 
                        style={{border: "solid 1px lightgray", borderRadius: "5px",  width: '18rem'}}
                        />
                    </SubContent>
                </Content>



                <Content>
                    {/* INFJ */}
                    <SubContent>
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="first"
                                disabled
                                placeholder="INFJ"
                        />
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="second"
                                placeholder="결과데이터를 입력해주세요"
                        />
                        <textarea  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px",
                                    }}
                                id="third" 
                                placeholder="설명을 입력해주세요"
                        />
                        <input type="file" id="image" accept="image/*" 
                        style={{border: "solid 1px lightgray", borderRadius: "5px",  width: '18rem'}}
                        />
                    </SubContent>
                    
                    {/* ISTJ */}
                    <SubContent>
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="first"
                                disabled
                                placeholder="ISTJ"
                        />
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="second"
                                placeholder="결과데이터를 입력해주세요"

                        />
                        <textarea  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px",
                                    }}
                                id="third" 
                                placeholder="설명을 입력해주세요"
                        />
                        <input type="file" id="image" accept="image/*" 
                        style={{border: "solid 1px lightgray", borderRadius: "5px",  width: '18rem'}}
                        />
                    </SubContent>
                </Content>


                <Content>
                    {/* INTP */}
                    <SubContent>
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="first"
                                disabled
                                placeholder="INTP"
                        />
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="second"
                                placeholder="결과데이터를 입력해주세요"
                        />
                        <textarea  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px",
                                    }}
                                id="third" 
                                placeholder="설명을 입력해주세요"
                        />
                        <input type="file" id="image" accept="image/*" 
                        style={{border: "solid 1px lightgray", borderRadius: "5px",  width: '18rem'}}
                        />
                    </SubContent>
                    
                    {/* ISFP */}
                    <SubContent>
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="first"
                                disabled
                                placeholder="ISFP"
                        />
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="second"
                                placeholder="결과데이터를 입력해주세요"

                        />
                        <textarea  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px",
                                    }}
                                id="third" 
                                placeholder="설명을 입력해주세요"
                        />
                        <input type="file" id="image" accept="image/*" 
                        style={{border: "solid 1px lightgray", borderRadius: "5px",  width: '18rem'}}
                        />
                    </SubContent>
                </Content>


                <Content>
                    {/* ISTP */}
                    <SubContent>
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="first"
                                disabled
                                placeholder="ISTP"
                        />
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="second"
                                placeholder="결과데이터를 입력해주세요"
                        />
                        <textarea  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px",
                                    }}
                                id="third" 
                                placeholder="설명을 입력해주세요"
                        />
                        <input type="file" id="image" accept="image/*" 
                        style={{border: "solid 1px lightgray", borderRadius: "5px",  width: '18rem'}}
                        />
                    </SubContent>
                    
                    {/* ISFJ */}
                    <SubContent>
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="first"
                                disabled
                                placeholder="ISFJ"
                        />
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="second"
                                placeholder="결과데이터를 입력해주세요"

                        />
                        <textarea  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px",
                                    }}
                                id="third" 
                                placeholder="설명을 입력해주세요"
                        />
                        <input type="file" id="image" accept="image/*" 
                        style={{border: "solid 1px lightgray", borderRadius: "5px",  width: '18rem'}}
                        />
                    </SubContent>
                </Content>


                <Content>
                    {/* INFP */}
                    <SubContent>
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="first"
                                disabled
                                placeholder="INFP"
                        />
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="second"
                                placeholder="결과데이터를 입력해주세요"
                        />
                        <textarea  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px",
                                    }}
                                id="third" 
                                placeholder="설명을 입력해주세요"
                        />
                        <input type="file" id="image" accept="image/*" 
                        style={{border: "solid 1px lightgray", borderRadius: "5px",  width: '18rem'}}
                        />
                    </SubContent>
                    
                    {/* INTJ */}
                    <SubContent>
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="first"
                                disabled
                                placeholder="INTJ"
                        />
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="second"
                                placeholder="결과데이터를 입력해주세요"

                        />
                        <textarea  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px",
                                    }}
                                id="third" 
                                placeholder="설명을 입력해주세요"
                        />
                        <input type="file" id="image" accept="image/*" 
                        style={{border: "solid 1px lightgray", borderRadius: "5px",  width: '18rem'}}
                        />
                    </SubContent>
                </Content>


                <ButtonGroup className="mt_20">
                    <Button variant="light"
                            className="btn"
                            onClick={() => handleClickButton('/regtest')}
                    >
                        이전
                    </Button>
                    
                    <Button variant="light"
                            className="btn"
                            onClick={() => handleClickButton('/')}

                    >
                        다음
                    </Button>
                    
                </ButtonGroup>
            </div>

        </>
    )
}

const Content = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;

`
const SubContent = styled.div`
    width: 18rem;
`
const ButtonGroup = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    
`