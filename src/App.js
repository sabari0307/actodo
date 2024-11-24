import Header from "./components/header";
import Card from "./components/card";
import TodoContainer from "./components/TodoContainer";
import Login from "./pages/Login"
import Landing from "./pages/Landing"
import { useState } from "react";
import Signup from "./pages/Signup"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  const [users, setusers] = useState(
    [
      {
        username: "sabari",
        password: "123"
      }
    ]
  )
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login users={users} setusers={setusers} />}></Route>
          <Route path='/signup' element={<Signup users={users} setusers={setusers} />}></Route>
          <Route path='/landing' element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;
