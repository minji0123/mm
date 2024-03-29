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
import RegFinish from './regPages/RegFinish';

// 인증 화면
import NewLogin from './rauthPages/NewLogin'
import NewSignup from './rauthPages/NewSignup'
import Mypage from './rauthPages/MyPage'
// 커스텀 훅
import { useAuthContext } from './hooks/useAuthContext';
import Nav from './common/Nav';


function App() {

  const {isAuthReady, user } = useAuthContext();

  return (
    <div>
      <BrowserRouter>
      <Nav></Nav>
        <Routes>

          {/* 테스트 하는 경로 */}
          <Route path='/start/:id' element={<Start/>} /> 
          <Route path = '/test/:id' element={<Test/>} />
          <Route path='/result/:id' element={<Result/>}/>
          
          {/* 테스트 제작하는 경로 */}
          <Route path='/' element={<RegStart/>}/>
          <Route path='/regmain' element={user
                                  ?<RegMain/>:<Navigate replace={true} to="/" />
                                  }/>
          <Route path='/regtest' element={user
                                  ?<RegTest/>:<Navigate replace={true} to="/" />
                                  }/>
          <Route path='/regresult' element={user
                                  ?<RegResult/>:<Navigate replace={true} to="/" />
                                  }/>
          <Route path='/regfinish' element={user
                                  ?<RegFinish/>:<Navigate replace={true} to="/" />
                                  }/>

        {/* 회원가입/로그인 경로 */}
        <Route path='/newlogin' element={!user
                                ?<NewLogin />:<Navigate replace={true} to="/" />
                                }/> 
        <Route path='/newsignup' element={!user
                                ?<NewSignup />:<Navigate replace={true} to="/" />
                                }/> 
        <Route path='/mypage' 
        element = {<Mypage/>}/>

        {/* // element={user
        //                         ?<Mypage />:<Navigate replace={true} to="/" />
        //                         }/>  */}


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
