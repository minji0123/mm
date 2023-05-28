
// id, type 매핑 
function matchType(mType){
    let setMId = 0;

    switch (mType) {
        case "ESTP":
            setMId = 1;
            break;
        case "ESFP":
            setMId=2;
            break;
        case "ENTP":
            setMId=3;
            break;
        case "ENFP":
            setMId=4;
            break;
        case "ISTP":
            setMId=5;
            break;
        case "ISFP":
            setMId=6;
            break;
        case "INTP":
            setMId=7;
            break;
        case "INFP":
            setMId=8;
            break;
        case "ESTJ":
            setMId=9;
            break;
        case "ESFJ":
            setMId=10;
            break;
        case "ENTJ":
            setMId=11;
            break;
        case "ENFJ":
            setMId=12;
            break;
        case "ISTJ":
            setMId=13;
            break;
        case "ISFJ":
            setMId=14;
            break;
        case "INTJ":
            setMId=15;
            break;
        case "INFJ":
            setMId=16;
            break;
        default:
            break;
    }
    return setMId;
}

export {matchType}