import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"
import { useNavigate } from "react-router-dom";

const Navbarhome = ()=>{

let navigate = useNavigate();

const setlogout = ()=>{
  
    sessionStorage.setItem("login", false);
    navigate("../", { replace: true });
}
    return(
        <Navbar expand="lg" variant="light" bg="grey">
          <Navbar.Brand className="welcome">
            <button >Welcome to Home</button>
            </Navbar.Brand>
          <Navbar.Brand className="logout">
            <button onClick={(e)=>{setlogout()}} >Log out</button>
            </Navbar.Brand>
        
      </Navbar>
    )
}
export default Navbarhome;