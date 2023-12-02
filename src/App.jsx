import "./styles/style.css";
import { gsap } from "gsap";
import { useEffect } from "react";
import { useRef } from "react";
import { useAnimate } from "./hooks/useAnimate";
import { Outlet } from "react-router-dom";

function App() {


  return (
    <>
       <div className="App">
         <Outlet />
       </div>
    </>
  );
}

export default App;
