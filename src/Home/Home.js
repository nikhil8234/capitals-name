import { useEffect, useState } from "react";
import Datacard from "./Datacard";
import Navbarhome from "./Navbarhome";
import Searchbar from "./Searchbar";
import { useNavigate } from "react-router-dom";

const Home = ()=>{
    let navigate = useNavigate();
    const[loginstatus,setloginstatus] = useState(sessionStorage.getItem("login"))

    useEffect(() => {
      if(loginstatus=== "false"){
        navigate("../", { replace: true });
      }
        fetch("https://restcountries.com/v2/all")
        .then(response => response.json())
        .then(data => localStorage.setItem('apidata', JSON.stringify(data)))     
      },[])
    
    return(
       <>
       {loginstatus === "true" &&
       <>
       <Navbarhome/> 
       <div className="homesection">
       <Searchbar/>
       <Datacard/>
       </div>
       </>
       
}
       
       </>
    )
}
export default Home;