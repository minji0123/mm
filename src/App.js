import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import Start from './pages/Start';
import Test from './pages/Test';
import Result from './pages/Result';
import RegStart from './regPages/RegStart';
import RegMain from './regPages/RegMain';
import RegTest from './regPages/RegTest';
import RegResult from './regPages/RegResult';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* 테스트하는 경로 */}
          <Route path = '/' element={<Start/>}></Route>
          <Route path = '/test' element={<Test/>}></Route>
          {/* <Route path='/result/:id' element={<Result/>}/> */}
          <Route path='/result' element={<Result/>}/>
          
          {/* 테스트 제작하는 경로 
            따로 버튼안만들고 분리해서 갈거임...*/}
          <Route path='/regst' element={<RegStart/>}/>
          <Route path='/regmain' element={<RegMain/>}/>
          <Route path='/regtest' element={<RegTest/>}/>
          <Route path='/regresult' element={<RegResult/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
