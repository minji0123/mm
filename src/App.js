
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import Start from './pages/Start';
import Test from './pages/Test';
import Result from './pages/Result';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<Start/>}></Route>
          <Route path = '/test' element={<Test/>}></Route>
          {/* <Route path='/result/:id' element={<Result/>}/> */}
          <Route path='/result' element={<Result/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
