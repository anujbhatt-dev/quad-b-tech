
import { Route, Routes, useNavigate } from 'react-router';
import './App.css';
import Shows from './Components/Shows';
import { useEffect, useState } from 'react';
import Show from './Components/Show';

const App = () => {
  const navigate = useNavigate()
  const [show,setShow] = useState({})

  useEffect(()=>{

  },[show])

  const clickHandler = (shw)=>{
      setShow(pState=>{
        return {...shw}
      })
      console.log(show);
      navigate("/show")

  }
  return (
    <div className="App">
        <Routes>
          <Route path = "/" element={<Shows clickHandler={clickHandler}/>}/>
          <Route path = "/show" element={<Show show={show}/>}/>
        </Routes>
        
    </div>
  );
}

export default App;
