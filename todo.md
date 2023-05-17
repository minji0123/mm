## todo list

1. useform 사용법 알아오기
2. 디자인 수정( 부트스트랩 + styled component 폐기)


1. useform 사용법 알아오기
https://tech.osci.kr/2023/01/02/introduce-react-hook-form/
https://www.daleseo.com/react-hook-form/


npm i react-hook-form



2. 디자인 수정 -> 이거먼저ㄱㄱ


부트스트랩 + styled component 폐기
sass 사용

npm i sass

3. firebase 백앤드로 변경
밑의 코드는 혹시 모르니 주석 처리...

```js
    const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
    const URL = `${PROXY}/test/1/2.json`;
    const imgURL = `${PROXY}/test/1/2.json`;

    useEffect(()=>{
        axios.get(URL)
        .then((result)=>{
            let realTit = result.data.result[0];
            let realCont = result.data.result[matchType(mbti)];
            setTitle(realTit);
            setContent(realCont);
        })
        .catch(()=>{
        })

        axios.get(imgURL)
        .then((result)=>{
            const imageData = result.data.result[matchType(mbti)].img;
            setMainImg(`https://teal-swan-1836fc.netlify.app/${imageData}`);
        })
        .catch(()=>{
        })

    },[])
```

4. 회원가입 기능 구현