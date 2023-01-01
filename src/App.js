
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import Start from './pages/Start';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<Start/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
