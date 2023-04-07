import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import MainImg from '../assets/img/0.jpg'
import { useNavigate } from 'react-router-dom';


export default () => {
    const navigate = useNavigate();

    const handleClickButton = () => {
        navigate('/start');
    }


    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={MainImg}
                          onClick={handleClickButton}
                          style={{cursor:"pointer"}}
                            />
                <Card.Body>
                    <Card.Title>나만의 겨울 휴양지 테스트</Card.Title>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </>
    )
}