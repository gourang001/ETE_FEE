import './App.css';
import Courses from './components/Courses';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Coursesno from './components/Coursesno';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/SignUp';
import { useState } from 'react';
function App() {
  const [login,setLogin]=useState({});
  let setter=(data)=>{
    setLogin(null)
  }
  let remover=()=>{
    setLogin(null)
  }
  return (
    <div className="App">
    
      <div className='content-wrap'>
        <Routes>
           <Route path="/"  element={<HomePage login={login} logout={remover} />} />
           <Route path="/login" element={<Login func={setter} />} />
           <Route path="/signup" element={<Signup func={setter}/>} />
        </Routes>
      </div>
    <Footer/>
    </div>
  );
}

export default App;