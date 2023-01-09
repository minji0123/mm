
// id, type 매핑 
function matchType(mType){
    let setMId = 0;

    switch (mType) {
        case "ENFJ":
            setMId = 1;
            break;
        case "ESTJ":
            setMId=2;
            break;
        case "ESFP":
            setMId=3;
            break;
        case "ENTJ":
            setMId=4;
            break;
        case "ESTP":
            setMId=5;
            break;
        case "ESFJ":
            setMId=6;
            break;
        case "ENFP":
            setMId=7;
            break;
        case "ENTP":
            setMId=8;
            break;
        case "INFJ":
            setMId=9;
            break;
        case "ISTJ":
            setMId=10;
            break;
        case "INTP":
            setMId=11;
            break;
        case "ISFP":
            setMId=12;
            break;
        case "ISTP":
            setMId=13;
            break;
        case "ISFJ":
            setMId=14;
            break;
        case "INFP":
            setMId=15;
            break;
        case "INTJ":
            setMId=16;
            break;
        default:
            break;
    }
    return setMId;
}

export {matchType}