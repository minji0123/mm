/* eslint-disable */

import { useAuthContext } from '../hooks/useAuthContext'
import { useCollectionDtl } from '../hooks/useCollectionDtl';
import { useEffect, useState } from 'react';


//my style
import './auth.sass'
import TestList from '../regPages/TestList';

import Profileimg from '../assets/img/IMG_3950.PNG';

export default () =>{
    const {isAuthReady, user } = useAuthContext();
    
    const {documents : documents} = useCollectionDtl("MainData",["user","==", localStorage.getItem('userDN')],false );
    const {documents : documents2} = useCollectionDtl("MainData",["user","==", localStorage.getItem('userDN')],true );

    return(
        <div className='mypage'>
            {
                user && 
                <>                
                    <div className='mypage-wrap'>
                        <img src={Profileimg} alt='profileimg'/>
                        <div className='mypage-info'>
                            <p>@{user.displayName}</p>
                            <p>{user.email}</p>
                        </div>
                    </div>

                    <div>
                        <h3>제작중 프로젝트</h3>
                        <TestList mbtiDatas={documents}/>
                    </div>
                    <div>
                        <h3>완성된 프로젝트</h3>
                        <TestList mbtiDatas={documents2}/>
                    </div>
                </>
            }

        </div>
    )
}