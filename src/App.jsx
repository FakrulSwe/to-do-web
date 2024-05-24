import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './Create';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        {/* <Route path='/edit/:id' element={</>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
