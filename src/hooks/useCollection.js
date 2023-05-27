/* eslint-disable*/

// orderby 만
import { appFireStore } from "../firebase/config"
import { useEffect, useState } from "react"
import { onSnapshot,collection,query, orderBy } from "firebase/firestore";

export const useCollection = (transaction) => {

    // documents 데이터 관리, error 관리
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);
    // 💛 collection에 변화가 생길때마다 실행
    useEffect(() => {
        let q;
            q = query(collection(appFireStore, transaction),orderBy("createdTime","desc"));
            
        // onSnapshot: 가장 최근 컬랙션의 내용 반환 
        // unsubscribe: 데이터 수신을 중단(데이터 오는거 기다릴 필요가 없을때 사용.)
        // const unsubscribe = onSnapshot(myQuery ? q : (collection(appFireStore, transaction)),
        const unsubscribe = onSnapshot(q ,
            
            // 응답받은 컬랙션을 snapshot에 저장
            (snapshot) => {
                let result = [];
                // 배열형태로 저장되어있음 => forEach 사용
                snapshot.docs.forEach((doc) => {
                    // document 데이터랑 id 값 push 해주기
                    result.push({ ...doc.data(), id: doc.id });
                })
                setDocuments(result);
                setError(null);
            },
            (error) => {
                setError(error.message);
            });
            
        return unsubscribe; // clean-up 함수

    }, [collection])
    return { documents, error }
}