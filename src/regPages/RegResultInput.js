
import { useEffect, useState } from 'react';
import styled from 'styled-components';


export default () => {
    const [question1,setQuestion1] = useState("");
    const [answer1,setAnswer1] = useState("");
    const [answer2,setAnswer2] = useState("");

    console.log(question1);

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
                                id="first"
                                disabled
                                placeholder="ESFP"
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

                    
                    {/* ESTJ */}
                    <SubContent>
                        <input  type="text"
                                style={{border: "solid 1px lightgray", borderRadius: "5px",
                                        marginBottom:"4px",width:"290px"}}
                                id="first"
                                disabled
                                placeholder="ESTJ"
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