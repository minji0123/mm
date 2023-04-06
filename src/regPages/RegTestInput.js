/* eslint-disable*/

import { useReducer, useState } from 'react';
import styled from 'styled-components';
import { useFirestore } from '../hooks/useFirestore';
import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';


export default () => {
    let question = [];
    let questionSample = [
        {
            "id":1
            ,"content":"모처럼만의 휴일... 전기장판 위에서 넷플릭스를 보고 있었는데 갑자기 핸드폰 진동이 울린다. 친구: 연말인데 모해! 놀러가자"
            ,"answer1":"오!!!"
            ,"answer2":"어...?"
            ,"type":"EI"
        }
        ,{
            "id":2
            ,"content":"나: 어디로 갈건데...? 친구: 바다가쟈!!! 리스트를 만들어왔는데 한번 읽어볼래?? 교통편같은것도 알아왔어!"
            ,"answer1":"너가 벌써 다 짜왔다구...?"
            ,"answer2":"개이득이잖아??"
            ,"type":"JP"
        }
        ,{
            "id":3
            ,"content":"드디어 도착한 바닷가! 너무 시원해서 기분이 좋다. 신발을 벗어 발을 살짝 담구고 물장구를 치는중... 친구: 발 담그고있는거야??? 발 더러워지면 어떡해!"
            ,"answer1":"시원해! 너도 담궈바"
            ,"answer2":"물살을 가르는 느낌이라구ㅎㅎ"
            ,"type":"SN"
        }
        ,{
            "id":4
            ,"content":"바다구경 후 저녁을 먹으러 가고있는데 갑자기 오토바이가 쌩 하고 친구와 나 사이를 가로질러 달려갔다. 친구: 아 뭐야 깜짝아 위험하잖아..."
            ,"answer1":"저 오토바이는 도로가 있는데 왜 여기로 지나가는거야?"
            ,"answer2":"미친거아니야?? 괜찮아?? 놀랬지!"
            ,"type":"TF"
        }
        ,{
            "id":5
            ,"content":"친구가 정했던 저녁메뉴는 조개구이! 친구: 맛있겠지! 버터조개구이가 그렇게 맛있대!!"
            ,"answer1":"마쟈마쟈 버터조개구이 진짜 맛있지... !! 나는 가리비도 주문할래!"
            ,"answer2":"와 생각만했느데 진짜... 치즈까지 넣어서 쫙 늘려먹으면 진짜 개맛있겠다..."
            ,"type":"SN"
        }
        ,{
            "id":6
            ,"content":"조개구이를 굽고있는데 굽다가 불판에 팔이 살짝 닿았다. 나: 아뜨거.... 친구: 어떡해!!! 괜찮아??? 불이너무쎈데...엄청아프겠다ㅠㅠㅠ 어떡해애...."
            ,"answer1":"ㅠㅠㅠ 너무 뜨거워어어ㅓ,,,,,,으아앙아...."
            ,"answer2":"물수건좀 갖다줄수있어??"
            ,"type":"TF"
        }
        ,{
            "id":7
            ,"content":"불판이 너므 뜨거워서 친구랑 번갈아가면서 굽고있는데 갑자기 옆에서 누가 툭툭 친다. ???: 뜨거우시면 저희가 구워드릴께요. 옆에 앉아도 되나요?"
            ,"answer1":"헌팅인가???"
            ,"answer2":"뭐지...왜말걸어.."
            ,"type":"EI"
        }
        ,{
            "id":8
            ,"content":"친구가 내 눈치를 살피며 물어본다. 친구: 어... 너는 괜찮아?? 나는 좋은데...더 놀다가도 되나???"
            ,"answer1":"우리 막차시간이 거의 다된거같은데...?"
            ,"answer2":"좋아..놀지뭐! 아직 배터리도 40퍼나있네!"
            ,"type":"JP"
        }
    ];

    const [data,setData] = useState([{
        id:1
        ,content:""
        ,answer1:""
        ,answer2:""
        ,type:"EI"
    }]);

    const [data1,setData1] = useState({
        id:1
        ,content:""
        ,answer1:""
        ,answer2:""
        ,type:"EI"
    });

    const [data2,setData2] = useState({
        id:2
        ,content:""
        ,answer1:""
        ,answer2:""
        ,type:"JP"
    });

    const [data3,setData3] = useState({
        id:3
        ,content:""
        ,answer1:""
        ,answer2:""
        ,type:"SN"
    });

    const [data4,setData4] = useState({
        id:4
        ,content:""
        ,answer1:""
        ,answer2:""
        ,type:"TF"
    });

    const [data5,setData5] = useState({
        id:5
        ,content:""
        ,answer1:""
        ,answer2:""
        ,type:"SN"
    });

    const [data6,setData6] = useState({
        id:6
        ,content:""
        ,answer1:""
        ,answer2:""
        ,type:"TF"
    });

    const [data7,setData7] = useState({
        id:7
        ,content:""
        ,answer1:""
        ,answer2:""
        ,type:"EI"
    });

    const [data8,setData8] = useState({
        id:8
        ,content:""
        ,answer1:""
        ,answer2:""
        ,type:"JP"
    });
    const { addComment, response } = useFirestore("TestData");
    const navigate = useNavigate();

    const printDatas = ["EI","SN","TF","JP"];
    const 임시 = " 질문을 입력해주세요";
    const 임시1 = " 답변을 입력해주세요";

    // console.log(data1);

    const handleClickButton1 = (link) => {

        question.push(data1);
        question.push(data2);
        question.push(data3);
        question.push(data4);
        question.push(data5);
        question.push(data6);
        question.push(data7);
        question.push(data8);
        // console.log(question);

        // addComment({question});// uid:작성한 유저 id
        // addComment({questionSample});// uid:작성한 유저 id

        navigate(link);

    }

    const handleData = (event,i) => {

        switch (i){
            case '1':
                if (event.target.id === `question${i}`) {
                    setData1((prevState)=>{
                        return { ...prevState, content: event.target.value }
                    })
    
                }else if (event.target.id === `answera${i}`) {
                    setData1((prevState)=>{
                        return { ...prevState, answer1: event.target.value }
                    })
    
                }else if (event.target.id === `answerb${i}`) {
                    setData1((prevState)=>{
                        return { ...prevState, answer2: event.target.value }
                    })
                }
            case '2':
                if (event.target.id === `question${i}`) {
                    setData2((prevState)=>{
                        return { ...prevState, content: event.target.value }
                    })
    
                }else if (event.target.id === `answera${i}`) {
                    setData2((prevState)=>{
                        return { ...prevState, answer1: event.target.value }
                    })
    
                }else if (event.target.id === `answerb${i}`) {
                    setData2((prevState)=>{
                        return { ...prevState, answer2: event.target.value }
                    })
                }
            case '3':
                if (event.target.id === `question${i}`) {
                    setData3((prevState)=>{
                        return { ...prevState, content: event.target.value }
                    })
    
                }else if (event.target.id === `answera${i}`) {
                    setData3((prevState)=>{
                        return { ...prevState, answer1: event.target.value }
                    })
    
                }else if (event.target.id === `answerb${i}`) {
                    setData3((prevState)=>{
                        return { ...prevState, answer2: event.target.value }
                    })
                }
            case '4':
                if (event.target.id === `question${i}`) {
                    setData4((prevState)=>{
                        return { ...prevState, content: event.target.value }
                    })
    
                }else if (event.target.id === `answera${i}`) {
                    setData4((prevState)=>{
                        return { ...prevState, answer1: event.target.value }
                    })
    
                }else if (event.target.id === `answerb${i}`) {
                    setData4((prevState)=>{
                        return { ...prevState, answer2: event.target.value }
                    })
                }
            case '5':
                if (event.target.id === `question${i}`) {
                    setData5((prevState)=>{
                        return { ...prevState, content: event.target.value }
                    })
    
                }else if (event.target.id === `answera${i}`) {
                    setData5((prevState)=>{
                        return { ...prevState, answer1: event.target.value }
                    })
    
                }else if (event.target.id === `answerb${i}`) {
                    setData5((prevState)=>{
                        return { ...prevState, answer2: event.target.value }
                    })
                }
            case '6':
                if (event.target.id === `question${i}`) {
                    setData6((prevState)=>{
                        return { ...prevState, content: event.target.value }
                    })
    
                }else if (event.target.id === `answera${i}`) {
                    setData6((prevState)=>{
                        return { ...prevState, answer1: event.target.value }
                    })
    
                }else if (event.target.id === `answerb${i}`) {
                    setData6((prevState)=>{
                        return { ...prevState, answer2: event.target.value }
                    })
                }
            case '7':
                if (event.target.id === `question${i}`) {
                    setData7((prevState)=>{
                        return { ...prevState, content: event.target.value }
                    })
    
                }else if (event.target.id === `answera${i}`) {
                    setData7((prevState)=>{
                        return { ...prevState, answer1: event.target.value }
                    })
    
                }else if (event.target.id === `answerb${i}`) {
                    setData7((prevState)=>{
                        return { ...prevState, answer2: event.target.value }
                    })
                }
            case '8':
                if (event.target.id === `question${i}`) {
                    setData8((prevState)=>{
                        return { ...prevState, content: event.target.value }
                    })
    
                }else if (event.target.id === `answera${i}`) {
                    setData8((prevState)=>{
                        return { ...prevState, answer1: event.target.value }
                    })
    
                }else if (event.target.id === `answerb${i}`) {
                    setData8((prevState)=>{
                        return { ...prevState, answer2: event.target.value }
                    })
                }

        }        

    }


            // if((event.target.id).slice(-1) === i){
            // if (event.target.id === `question${i}`) {
            //     setData((prevState)=>{
            //         return { ...prevState, content: event.target.value }
            //     })

            // }else if (event.target.id === `answera1${i}`) {
            //     setData((prevState)=>{
            //         return { ...prevState, answer1: event.target.value }
            //     })

            // }else if (event.target.id === `answerb${i}`) {
            //     setData((prevState)=>{
            //         return { ...prevState, answer2: event.target.value }
            //     })
            // }
        // }

    return(
        <>
            <p>이제 진짜 질문과 답변을 입력해보세요</p>
            <p>총 8개의 질답을 입력해야해요</p>
            <div  style={{ width:'100%', maxWidth: '1000px' }} >

            {/* ei */}
            <Content>

                <SubContent>
                    <MyTextarea type="text"
                        id="question1" 
                        placeholder={printDatas[0]+ 임시}
                        onChange={(event)=>{handleData(event,'1')}}

                    />
                    <MyInput type="text"
                        id="answera1" 
                        placeholder={printDatas[0].slice(0,1)+ 임시1}
                        onChange={(event)=>{handleData(event,'1')}}


                    />
                    <MyInput type="text"
                        id="answerb1" 
                        placeholder={printDatas[0].slice(1)+ 임시1}
                        onChange={(event)=>{handleData(event,'1')}}


                    />
                </SubContent>

                <SubContent>
                    <MyTextarea type="text"
                        id="question7" 
                        placeholder={printDatas[0]+ 임시}
                        onChange={(event)=>{handleData(event,'7')}}

                    />
                    <MyInput type="text"
                        id="answera7" 
                        placeholder={printDatas[0].slice(0,1)+ 임시1}
                        onChange={(event)=>{handleData(event,'7')}}

                    />
                    <MyInput type="text"
                        id="answerb7" 
                        placeholder={printDatas[0].slice(1)+ 임시1}
                        onChange={(event)=>{handleData(event,'7')}}

                    />
                </SubContent>
                
            </Content>

            {/* sn */}
            <Content>
                <SubContent>
                <MyTextarea type="text"
                    id="question1" 
                    placeholder={printDatas[1]+ 임시}
                />
                <MyInput type="text"
                    id="answer1" 
                    placeholder={printDatas[1].slice(0,1)+ 임시1}

                />
                <MyInput type="text"
                    id="answer2" 
                    placeholder={printDatas[1].slice(1)+ 임시1}
                />
                </SubContent>
                <SubContent>
                <MyTextarea type="text"
                    id="question1" 
                    placeholder={printDatas[1]+ 임시}
                />
                <MyInput type="text"
                    id="answer1" 
                    placeholder={printDatas[1].slice(0,1)+ 임시1}

                />
                <MyInput type="text"
                    id="answer2" 
                    placeholder={printDatas[1].slice(1)+ 임시1}
                />
                </SubContent>
            </Content>

          {/* tf */}
          <Content>
                <SubContent>
                <MyTextarea type="text"
                    id="question1" 
                    placeholder={printDatas[2]+ 임시}
                />
                <MyInput type="text"
                    id="answer1" 
                    placeholder={printDatas[2].slice(0,1)+ 임시1}

                />
                <MyInput type="text"
                    id="answer2" 
                    placeholder={printDatas[2].slice(1)+ 임시1}
                />
                </SubContent>
                <SubContent>
                <MyTextarea type="text"
                    id="question1" 
                    placeholder={printDatas[2]+ 임시}
                />
                <MyInput type="text"
                    id="answer1" 
                    placeholder={printDatas[2].slice(0,1)+ 임시1}

                />
                <MyInput type="text"
                    id="answer2" 
                    placeholder={printDatas[2].slice(1)+ 임시1}
                />
                </SubContent>
            </Content>

          {/* jp */}
          <Content>
                <SubContent>
                <MyTextarea type="text"
                    id="question1" 
                    placeholder={printDatas[3]+ 임시}
                />
                <MyInput type="text"
                    id="answer1" 
                    placeholder={printDatas[3].slice(0,1)+ 임시1}

                />
                <MyInput type="text"
                    id="answer2" 
                    placeholder={printDatas[3].slice(1)+ 임시1}
                />
                </SubContent>
                <SubContent>
                <MyTextarea type="text"
                    id="question1" 
                    placeholder={printDatas[3]+ 임시}
                />
                <MyInput type="text"
                    id="answer1" 
                    placeholder={printDatas[3].slice(0,1)+ 임시1}

                />
                <MyInput type="text"
                    id="answer2" 
                    placeholder={printDatas[3].slice(1)+ 임시1}
                />
                </SubContent>
            </Content>
            </div>
                   
            <ButtonGroup className="mt_20">
                <Button variant="light"
                        className="btn"
                        onClick={() => handleClickButton('/regmain')}
                >
                    이전
                </Button>
                <Button variant="light"
                        className="btn"
                        onClick={() => handleClickButton1('/regresult')}

                >
                    다음
                </Button>
            </ButtonGroup>
        </>
    )
}
const MyInput = styled.input`
    border: solid 1px lightgray;
    border-radius: 5px;
    margin-bottom: 4px;
    width: 200px;
`
const MyTextarea = styled.textarea`
    border: solid 1px lightgray;
    border-radius: 5px;
    margin-bottom: 4px;
    width: 200px;
`
const Content = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    margin-top:30px;
`
const SubContent = styled.div`
    width: 18rem;
`
const ButtonGroup = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    margin-bottom:20px;
    
`