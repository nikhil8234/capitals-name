import { useState } from "react";
import "./Navbar.css"
import Navbarhome from "./Navbarhome";



const Home = ()=>{
 
    const[loginstatus,setloginstatus] = useState(sessionStorage.getItem("login"))
console.log(setloginstatus)
    const[numberis,setnumberis]=useState("")
    var n = numberis;
    const fibonacci = n =>
      Array.from({
        length: n
      }).reduce(
        (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i), []
      );
      const data = fibonacci(n);
  
    return(
       <>
       {loginstatus === "true" &&
       <>
       <Navbarhome/> 
       <div className="homesection">
      <h5>Enter Number to get Fibonacci Series:</h5>
     <input type="number" onChange={(e)=>{setnumberis(e.target.value)}}></input>
     {data.length >0?<h5>Fibonacci Series are:</h5>:null}
   {data && data.map((res)=>(
    <>
    <div className="seriesare">
    <ul style={{listStyle:"none"}}>
      <li>{res}</li>
    </ul>
    </div>
    </>
   ))}
       </div>
       </>
       
}
       
       </>
    )
}
export default Home;