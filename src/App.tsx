import "./App.scss";
import Welcome from "./Welcome/Welcome.tsx";
import {Route, Routes} from "react-router-dom";
import Login from "./Account/Login/Login.tsx";
import Decks from "./Decks/Decks.tsx";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Welcome/>}></Route>
      <Route path={"/login"} element={<Login/>}></Route>
      <Route path={"/decks"} element={<Decks/>}></Route>
    </Routes>
  );
}

export default App;
