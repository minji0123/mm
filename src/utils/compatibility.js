function goodCompati (type) {

    let good = [];

    switch (type) {
        case "ESTP":
            good.push('ISFJ');
            good.push('ISTJ');
            break;
        case "ESFP":
            good.push('ISFJ');
            good.push('ISTJ');
            break;
        case "ENTP":
            good.push('INFJ');
            good.push('INTJ');
            break;
        case "ENFP":
            good.push('INFJ');
            good.push('INTJ');
            break;
        case "ISTP":
            good.push('ESFJ');
            good.push('ESTJ');
            break;
        case "ISFP":
            good.push('ESFJ');
            good.push('ESTJ');
            break;
        case "INTP":
            good.push('ENTJ');
            good.push('ESTJ');
            break;
        case "INFP":
            good.push('ENFJ');
            good.push('ENTJ');
            break;
        case "ESTJ":
            good.push('ISFP');
            good.push('ISTP');
            break;
        case "ESFJ":
            good.push('ISFP');
            good.push('ISTP');
            break;
        case "ENTJ":
            good.push('INFP');
            good.push('INTP');
            break;
        case "ENFJ":
            good.push('INFP');
            good.push('ISFP');
            break;
        case "ISTJ":
            good.push('ESFP');
            good.push('ESTP');
            break;
        case "ISFJ":
            good.push('ESFP');
            good.push('ESTP');
            break;
        case "INTJ":
            good.push('ENFP');
            good.push('ENTP');
            break;
        case "INFJ":
            good.push('ENFP');
            good.push('ENTP');
            break;
        default:
            break;
    }
    return good;
}

function badCompati (type) {

    let bad = [];

    switch (type) {
        case "ESTP":
            bad.push('INFP');
            bad.push('ENFP');
            break;
        case "ESFP":
            bad.push('INFP');
            bad.push('ENFP');
            break;
        case "ENTP":
            bad.push('ESFJ');
            bad.push('ESTJ');
            break;
        case "ENFP":
            bad.push('ISFP');
            bad.push('ESFP');
            break;
        case "ISTP":
            bad.push('INFP');
            bad.push('ENFP');
            break;
        case "ISFP":
            bad.push('INFP');
            bad.push('ENFP');
            break;
        case "INTP":
            bad.push('ISFJ');
            bad.push('ISTJ');
            break;
        case "INFP":
            bad.push('ISFP');
            bad.push('ESFP');
            break;
        case "ESTJ":
            bad.push('INFP');
            bad.push('ENFP');
            break;
        case "ESFJ":
            bad.push('INFP');
            bad.push('ENFP');
            break;
        case "ENTJ":
            bad.push('ISFJ');
            bad.push('ESFJ');
            break;
        case "ENFJ":
            bad.push('ESFP');
            bad.push('ISTP');
            break;
        case "ISTJ":
            bad.push('INFP');
            bad.push('ENFP');
            break;
        case "ISFJ":
            bad.push('INFP');
            bad.push('ENFP');
            break;
        case "INTJ":
            bad.push('ISFJ');
            bad.push('ISTJ');
            break;
        case "INFJ":
            bad.push('ISFP');
            bad.push('ESFP');
            break;
        default:
            break;
    }
    return bad;
}

export { goodCompati, badCompati }
