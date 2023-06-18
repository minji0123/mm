/* eslint-disable*/

// regPages> RegTest 페이지 cud
import { useReducer,useState } from "react"
import { appFireStore, timestamp, storage } from "../firebase/config"
import { addDoc,setDoc,updateDoc, deleteDoc,doc, collection } from "firebase/firestore"
import { ref, uploadBytesResumable,getDownloadURL } from "firebase/storage";
import  {GetCurDayTime ,GetUniqueNum }  from "../utils/DateUtil.js"

// 우리가 받을 응답을 저장할 객체 (객체이기 때문에 리듀서로 관리)
// 상태를 관리할 때 error나 isPending을 useReducer로 한번에 관리

/**
 * document : 파이어스토어에 document의 생성을 요청하면 우리가 생성한 document를 반환
 *      파이어스토어의 데이터 저장 단위
 * isPending: 통신중인지 아닌지 상태
 * success : 요청에 대한 응답의 성공 유무
 */
const initState = {
    document: null,
    isPending: false,
    error: null,
    success: false
}

// 전달 받는 action에 따른 state 업데이트
const storeReducer = (state, action) => {
    /**case 마다 데이터가 다 달라서 spread operator 안쓰고 그냥 적음... */
    switch (action.type) {
        case 'isPending':
            return { isPending: true, document: null,            success: false, error: null }
        case 'addDoc':
            return { isPending: false, document: action.payload, success: true,  error: null }
        case 'editDoc':
            return { isPending: false, document: action.payload, success: true,  error: null }
        case 'deleteDoc':
            return { isPending: false, document: action.payload, success: true,  error: null }
        case 'error':
            return { isPending: false, document: null,           success: false, error: action.payload }
        default:
            return state
    }
}

// transaction: 데이터를 저장할 컬렉션 이름
export const useFirestore = (transaction) => {

    // response 요청에 대한 firestore 의 응답 저장
    // 저장되는 데이터: 저장 성공 또는 요청한 문서 데이터(객체)
    const [response, dispatch] = useReducer(storeReducer, initState);
    
    // ------------------
    // 컬랙션 이름 짓기 
    // colRef : 파이어스토어가 컬랙션 이름 랜덤으로 지어줌
    // docName : 컬랙션 이름 짓기 
    // 밑에서 둘 중 원하는거 쓰면 됨
    // ------------------
    const colRef = collection(appFireStore, transaction);
    const docName = doc(appFireStore, transaction, 'test');


    /*===============================================
    // 컬렉션에 문서를 저장(Main 저장 시 _ 이미지 저장 포함됨)
    *===================================================*/
    const addDocument = async (doc,pic,user="",uuid="",mainShow = "false") => {

        // 시간 저장(order by 용)
        const createdTime = timestamp.fromDate(new Date());
        const createdDate = GetCurDayTime('/',':');

        // 유일키 저장
        const createdUqe = GetUniqueNum();

        // 이미지 업로드 경로 저장
        const storageRef = ref(storage, 'images/'+pic.name );
        const uploadTask = uploadBytesResumable(storageRef, pic);

        // 230526 추가 글 pk
        const contUID = user + createdUqe;
        console.log('키값...',contUID);

        dispatch({ type: "isPending" });
        try {

            // 이미지 저장
            uploadTask.on('state_changed', 
            (snapshot) => {
                null
            }, 
            (error) => {
                console.error('실패사유는', error);
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                
                console.log('업로드된 경로는', downloadURL);

                // 데이터 저장
                // docRef : 참조(컬랙션 이름)
                // addDoc : 컬렉션에 문서를 추가
                const docRef = addDoc(colRef,{ ...doc, createdTime, createdDate,createdUqe, downloadURL, user, uuid, contUID,mainShow});
                console.log(docRef);

                localStorage.setItem('contUID',contUID );
                
                dispatch({ type: 'addDoc', payload: docRef });
                console.log('저장완료');               
                });
            });
        } catch (error) {
            dispatch({ type: 'error', payload: error.message });
        }

    }

    /*===============================================
    // 컬렉션에 문서를 저장(test 저장 시_이미지 저장 없음)
    *===================================================*/
    const addComment = async (doc,user="",uuid="",contUID="",mainTitle="") => {
        // 시간 저장(order by 용)
        const createdTime = timestamp.fromDate(new Date());
        const createdDate = GetCurDayTime('/',':');

        // 유일키 저장
        const createdUqe = GetUniqueNum();

        dispatch({ type: "isPending" });
        try {

            // 데이터 저장
            // docRef : 참조(컬랙션 이름)
            // addDoc : 컬렉션에 문서를 추가
            const docRef = addDoc(colRef,{ ...doc, contUID, mainTitle, createdTime, createdDate,createdUqe,user,uuid});
            console.log(docRef);

            dispatch({ type: 'addDoc', payload: docRef });
            console.log('저장완료');               

        } catch (error) {
            dispatch({ type: 'error', payload: error.message });
        }

    }

    /*===============================================
    // 문서에 이미지 저장 + 저장경로 obj 에 추가
    *===================================================*/
    const addDocumentObjImg = async (doc,user="",uuid="",contUID="",mainTitle="") => {
        
        doc.question.map((a,i)=>{

            // 이미지 업로드 경로 저장
            const storageRef = ref(storage, 'images/'+a.img.name );
            const uploadTask = uploadBytesResumable(storageRef, a.img);

            delete a.img;

            console.log('storageRef',storageRef);
            console.log('uploadTask',uploadTask);

            try {
                uploadTask.on('state_changed', 
                (snapshot) => {
                    null
                }, 
                (error) => {
                    console.error('실패사유는', error);
                }, 
                () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    a.imgUrl = downloadURL;

                });
                }
            );
            } catch (error) {
                dispatch({ type: 'error', payload: error.message });
            }
        })
        console.log('doc',doc);

        setTimeout(()=>{
            addComment(doc,user,uuid,contUID,mainTitle);
        },10000)
        
        // await addComment(doc);

    }



    // 컬렉션에서 문서를 삭제
    const deleteDocument = async (id) => {

        dispatch({ type: "isPending" });
        try {
            const docRef = await deleteDoc(doc(colRef,id));
            dispatch({ type: 'deleteDoc', payload: docRef });
        } catch (error) {
            dispatch({ type: 'error', payload: error.message });
        }
    }

    // 컬렉션에서 문서를 수정
    const editDocument = async (documents,id) => {
        dispatch({ type: "isPending" });
        
        // const 임시 = doc(appFireStore,'diary',id);

        try {
            const createdTime = timestamp.fromDate(new Date());
            const createdDate = GetCurDayTime('/',':');

            // docRef : 참조(컬랙션 이름)
            // updateDoc : 컬렉션에 있는 문서 수정
            // 230526 궁금 => 키 값이 없어도 수정이 되는거신가?!!
            const docRef = await updateDoc(doc(colRef,id),{ ...documents, createdTime,createdDate});
            dispatch({ type: 'editDoc', payload: docRef });

        } catch (error) {
            dispatch({ type: 'error', payload: error.message });
        }
    }

    // 유저 최초 저장
    const addUser = async (doc) => {

        // 시간 저장(order by 용)
        const createdTime = timestamp.fromDate(new Date());
        const createdDate = GetCurDayTime('/',':');

        // 유일키 저장
        const createdUqe = GetUniqueNum();


        dispatch({ type: "isPending" });
        try {

                /*===============================================
                * 데이터 저장
                *===================================================*/
                // docRef : 참조(컬랙션 이름)
                // addDoc : 컬렉션에 문서를 추가
                const docRef = addDoc(colRef,{ ...doc, createdTime, createdDate,createdUqe});
                console.log(docRef);

                dispatch({ type: 'addDoc', payload: docRef });
                console.log('저장완료');               


        } catch (error) {
            dispatch({ type: 'error', payload: error.message });
        }

    }


    return { addDocument,addComment,addDocumentObjImg, deleteDocument, editDocument, addUser,response }

}