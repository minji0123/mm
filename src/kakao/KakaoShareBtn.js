/* eslint-disable*/

import { useEffect } from "react";
const { Kakao } = window;

export default (props) =>{
    const url = "https://mm-test-maker.web.app/"
    const resultUrl = window.location.href;

    console.log('dsfsd',resultUrl);

    useEffect(()=>{
        Kakao.cleanup();
        Kakao.init('c4661b44316c9830107365a6c35a3d7c');
        console.log(Kakao.isInitialized());
        console.log(props.title);
    },[]);

    const shareKakao = () =>{

        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: props.title,
                description: props.content,
                imageUrl:
                props.img,
                link: {
                    mobileWebUrl: url,
                },
            },
            buttons: [
                {
                    title: '나도 테스트 하러가기',
                    link: {
                    mobileWebUrl: url,
                    },
                },
                ],
            });
    }
    
    return(
        <>
            <button 
                className='grey-btn'
                onClick={() => {
                    shareKakao()
                }}
            > 카카오톡 공유하기 </button>
        </>
    )
}