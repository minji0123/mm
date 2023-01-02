
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import Start from './pages/Start';
import Test from './pages/Test';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<Start/>}></Route>
          <Route path = '/test' element={<Test/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
