import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          {/* 테스트 하는 경로 */}
          <Route path = '/start' element={<Start/>}></Route>
          <Route path = '/test' element={<Test/>}></Route>
          {/* <Route path='/result/:id' element={<Result/>}/> */}
          <Route path='/result' element={<Result/>}/>
          
          {/* 테스트 제작하는 경로 */}
          <Route path='/' element={<RegStart/>}/>
          <Route path='/regmain' element={<RegMain/>}/>
          <Route path='/regtest' element={<RegTest/>}/>
          <Route path='/regresult' element={<RegResult/>}/>

        {/* 회원가입 경로 */}
        <Route path='/newlogin' element={<NewLogin/>}/>
        <Route path='/newsignup' element={<NewSignup/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
