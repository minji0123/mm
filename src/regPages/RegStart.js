import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export default () => {
    
    const navigate = useNavigate();

    const handleClickButton = () => {
        navigate('/regmain');
    }


    return(
        <Wrapper>
            <Content>

                <Title>나만의 테스트 사이트 만들기</Title>

                 <Button variant="secondary"
                            className='btn'
                            style={{fontSize: "20px", fontFamily: "Jua" }}
                            onClick={handleClickButton}
                            >Start</Button>


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
const Content = styled.div`
    // font-size: 20pt;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

`