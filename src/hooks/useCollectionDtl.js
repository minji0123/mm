/* eslint-disable*/

// where + orderby
import { appFireStore } from "../firebase/config"
import { useEffect, useState } from "react"
import { onSnapshot,collection,query,where,orderBy } from "firebase/firestore";

export const useCollectionDtl = (transaction, myQuery, order="") => { // myQuery: 파이어스토어 쿼리 사용을 위한 파라미터
    // console.log(order);
    // documents 데이터 관리, error 관리
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);

    // 💛 collection에 변화가 생길때마다 실행
    useEffect(() => {
        let q;
        if(order === "uqe"){
            q = query(collection(appFireStore, transaction),where(...myQuery),orderBy("createdUqe","desc"));
        }else if (order === "time"){
            q = query(collection(appFireStore, transaction),where(...myQuery),orderBy("createdTime","desc"));
        }
        else if (order === false){
            // and...
            q = query(collection(appFireStore, transaction),where(...myQuery),where('mainShow','==',false),orderBy("createdTime","desc"));
        }
        else if (order === true){
            // and...
            q = query(collection(appFireStore, transaction),where(...myQuery),where('mainShow','==',true),orderBy("createdTime","desc"));
        }
        else{
            console.log('요기타나?');
            q = query(collection(appFireStore, transaction),where(...myQuery));
        }

        // onSnapshot: 가장 최근 컬랙션의 내용 반환 
        // unsubscribe: 데이터 수신을 중단(데이터 오는거 기다릴 필요가 없을때 사용.)
        const unsubscribe = onSnapshot(myQuery ? q : (collection(appFireStore, transaction)),
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
                console.log('1',result);
            },
            (error) => {
                setError(error.message);
                console.log('d',order, error.message);
            });
            
        
        return unsubscribe; // clean-up

    }, [collection])
    return { documents, error }
}