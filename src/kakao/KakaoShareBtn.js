/* eslint-disable*/

import { useEffect } from "react";
const { Kakao } = window;

export default () =>{
    const url = "https://mm-test-maker.web.app/"
    const resultUrl = window.location.href;

    console.log('dsfsd',resultUrl);

    useEffect(()=>{
        Kakao.cleanup();
        Kakao.init('c4661b44316c9830107365a6c35a3d7c');
        console.log(Kakao.isInitialized());
    },[]);

    const shareKakao = () =>{

        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: '오늘의 디저트',
                description: '아메리카노, 빵, 케익',
                imageUrl:
                'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
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