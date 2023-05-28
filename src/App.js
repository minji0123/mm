import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import { useEffect, useState } from 'react';

// 테스트 화면
import Start from './pages/Start';
import Test from './pages/Test';
import Result from './pages/Result';
// 테스트 제작 화면
import RegStart from './regPages/RegStart';
import RegMain from './regPages/RegMain';
import RegTest from './regPages/RegTest';
import RegResult from './regPages/RegResult';

// 인증 화면
import NewLogin from './rauthPages/NewLogin'
import NewSignup from './rauthPages/NewSignup'

// 커스텀 훅
import { useAuthContext } from './hooks/useAuthContext';


function App() {
  const [userDN, setUserDN] = useState("");

  const {isAuthReady, user } = useAuthContext();
  useEffect(() => {
    // console.log('유저정보',user);
    if(user){
        setUserDN(user.displayName)
    }
  },[user])


  return (
    <div>
      <BrowserRouter>
        <Routes>

          {/* 테스트 하는 경로 */}
          <Route path='/start/:id' element={<Start/>} /> 
          <Route path = '/test/:id' element={<Test/>} />
          <Route path='/result/:id' element={<Result/>}/>
          
          {/* 테스트 제작하는 경로 */}
          <Route path='/' element={<RegStart/>}/>
          <Route path='/regmain' element={<RegMain/>}/>
          <Route path='/regtest' element={<RegTest userDN={userDN}/>}/>
          <Route path='/regresult' element={<RegResult userDN={userDN}/>}/>

        {/* 회원가입/로그인 경로 */}
        <Route path='/newlogin' 
        element={!user
          ?<NewLogin />
        :<Navigate replace={true} to="/" />}/> 

        <Route path='/newsignup' 
              element={!user
                ?<NewSignup />
              :<Navigate replace={true} to="/" />}/> 


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
