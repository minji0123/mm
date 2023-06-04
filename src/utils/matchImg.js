// dummy datas
import IMG_estp from '../assets/dummyImg/IMG_3926.PNG';
import IMG_istp from '../assets/dummyImg/IMG_3927.PNG';
import IMG_esfp from '../assets/dummyImg/IMG_3928.PNG';
import IMG_isfp from '../assets/dummyImg/IMG_3929.PNG';
import IMG_estj from '../assets/dummyImg/IMG_3930.PNG';
import IMG_istj from '../assets/dummyImg/IMG_3931.PNG';
import IMG_esfj from '../assets/dummyImg/IMG_3932.PNG';
import IMG_isfj from '../assets/dummyImg/IMG_3933.PNG';
import IMG_entp from '../assets/dummyImg/IMG_3934.PNG';
import IMG_intp from '../assets/dummyImg/IMG_3935.PNG';
import IMG_enfp from '../assets/dummyImg/IMG_3936.PNG';
import IMG_infp from '../assets/dummyImg/IMG_3937.PNG';
import IMG_entj from '../assets/dummyImg/IMG_3938.PNG';
import IMG_intj from '../assets/dummyImg/IMG_3939.PNG';
import IMG_enfj from '../assets/dummyImg/IMG_3940.PNG';
import IMG_infj from '../assets/dummyImg/IMG_3941.PNG';

// id, type 매핑 
function matchImg(mType){
    let setImg = '';

    switch (mType) {
        case "ESTP":
            setImg = IMG_estp;
            break;
        case "ESFP":
            setImg=IMG_esfp;
            break;
        case "ENTP":
            setImg=IMG_entp;
            break;
        case "ENFP":
            setImg=IMG_enfp;
            break;
        case "ISTP":
            setImg=IMG_istp;
            break;
        case "ISFP":
            setImg=IMG_isfp;
            break;
        case "INTP":
            setImg=IMG_intp;
            break;
        case "INFP":
            setImg=IMG_infp;
            break;
        case "ESTJ":
            setImg=IMG_estj;
            break;
        case "ESFJ":
            setImg=IMG_esfj;
            break;
        case "ENTJ":
            setImg=IMG_entj;
            break;
        case "ENFJ":
            setImg=IMG_enfj;
            break;
        case "ISTJ":
            setImg=IMG_istj;
            break;
        case "ISFJ":
            setImg=IMG_isfj;
            break;
        case "INTJ":
            setImg=IMG_intj;
            break;
        case "INFJ":
            setImg=IMG_infj;
            break;
        default:
            break;
    }
    return setImg;
}

export {matchImg}