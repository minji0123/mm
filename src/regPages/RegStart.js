import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import TestList from './TestList';

export default () => {
    
    const navigate = useNavigate();

    const handleClickButton = () => {
        navigate('/regmain');
    }
    const handleClickButton2 = () => {
        alert('준비중이양...💨');
    }

    return(
        <Wrapper>
            <Content>

                <Title>TestMaker</Title>
                <SubTitle>나만의 테스트 사이트 만들기</SubTitle>

                 <Button variant="secondary"
                            className='btn'
                            style={{fontSize: "20px", fontFamily: "Jua", marginTop:"30px" }}
                            onClick={handleClickButton}
                            >MBTI 테스트 만들기</Button>

                 <Button variant="secondary"
                            className='btn'
                            style={{fontSize: "20px", fontFamily: "Jua", marginTop:"30px" }}
                            onClick={handleClickButton2}
                            >심리테스트 만들기</Button>


                <ListWrapper>
                    <h3>🔽 테스트 해보기 🔽</h3>
                    <TestList/>
                </ListWrapper>

            </Content>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    width:100%;
    font-family: "Jua";
    padding:25px;

`
const Title = styled.div`
    font-size: 30pt;
    margin-top:40px;
    display: flex;
    justify-content:center;
    align-items:center;
`
const SubTitle = styled.div`
    font-size: 20pt;
    margin-top:20px;
    display: flex;
    justify-content:center;
    align-items:center;
`
const Content = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

`
const ListWrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-top:200px;
`