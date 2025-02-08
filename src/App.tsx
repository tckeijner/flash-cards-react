import './App.scss'
import Welcome from "./Welcome/Welcome.tsx";
import {Route, Routes} from "react-router-dom";
import Login from "./Account/Login/Login.tsx";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Welcome/>}></Route>
      <Route path={'/login'} element={<Login/>}></Route>
    </Routes>
  )
}

export default App
