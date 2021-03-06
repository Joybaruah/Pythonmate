import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login'
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/register" element={<Register/>} ></Route>
     <Route path="/login" element={<Login/>} ></Route>
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
