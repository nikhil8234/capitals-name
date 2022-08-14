import { useState } from "react"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Searchbar.css"

const Searchbar = ()=>{
    const[result,setresult] = useState("")
    const[nofind,setnofind]=useState(false)
    const[text,settext]=useState("")
    const [data,setData]=useState( JSON.parse(localStorage.getItem('apidata')))
    const[captalis,setcaptalis]=useState(null)
    const handleSubmit = (event)=>{
        event.preventDefault();
         let res = data.filter(it => it.name==text);
       
         if(res.length){
          setnofind(false)
          setcaptalis(res[0].capital)
         }else{
          setnofind(true)
         }
        
    }
    
    return(
        <form onSubmit={handleSubmit} className="searchform">
       
          <h5 className="serchtitle">Search capital here:</h5>
            <input 
                className="serchbarinput"
                type="text" 
                placeholder="search text here "
                onChange={(e)=> settext(e.target.value)}
              />
       <input type="submit" value="Search"  className="searchtext"/>
       {captalis &&<p> {text}, capital is :<b>{captalis}</b></p>}
       {nofind&&<p style={{fontSize:"15px",color:"red"}}>No Result</p>}
</form>
    )
}
export default Searchbar;