import { Outlet } from "react-router-dom"
import {BsSearch} from "react-icons/bs"


import classes from "./App.module.css";


function App() {

  return (
    <div className={classes.app}>
        <h1>GitHub Finder <BsSearch/> </h1>
        <Outlet />
        
    </div>
  )
}

export default App
