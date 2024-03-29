/* eslint-disable*/

import { useState } from "react"
import {appAuth} from '../firebase/config';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    // 로그인 시 에러가 발생했을 때 에러 정보를 저장함
    const [error,setError] = useState(null);

    // 현재 서버와 통신 상태를 저장
    const [isPending,setIsPending] = useState(false);
    
    // 인증과 관련된 훅
    const {dispatch} = useAuthContext();

    // 로컬 스토리지에 넣어줄 데이터 setting
    let str_user = '';
    let str_userid = '';

    // 로그인
    const login = (email, password) =>{
        setError(null); // 아직 에러가 없음...
        setIsPending(true); // 통신을 진행중입니다...

        // 로그인 진행
        signInWithEmailAndPassword(appAuth, email, password)
        .then((userCredential)=>{
            const user = userCredential.user;
            dispatch({type:'login', payload:user });
            str_user = user.displayName
            str_userid = user.uid
            setError(null); //에러없다고 넣어주고
            setIsPending(false); //통신끊어주기

            if(!user){
                throw new Error('로그인에 실패했습니다.');
            }
        })
        .catch((err) => {
            setError(err.message);
            setIsPending(false);
            console.log(err.message);
        })
        .finally((userCredential)=>{
            // 로컬스토리지에 로그인한 유저 넣어주기...
            localStorage.setItem('userDN',str_user );
            localStorage.setItem('userID',str_userid );
        })

    }
    return {error, isPending,login}
}