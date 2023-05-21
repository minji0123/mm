import MainImg from '../assets/img/0.jpg'
import { useNavigate } from 'react-router-dom';

//my style
import './regstyle.sass';
import '../marginpadding.sass';

export default () => {
    const navigate = useNavigate();

    const handleClickButton = () => {
        navigate('/start');
    }


    return(
        <>
            <div className='main-testlist'
                onClick={handleClickButton}
            >
                <img src={MainImg} alt='#' />
                <h2 className='pt10 pb10'>나만의 겨울 휴양지 테스트</h2>
            </div>
        </>
    )
}