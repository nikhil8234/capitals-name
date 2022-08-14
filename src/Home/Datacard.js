import { useState } from "react";
import "./Datacard.css"
const Datacard = ()=>{
    const [data,setData]=useState( JSON.parse(localStorage.getItem('apidata')))
    
    return (
      <div>

        <table>
        <h1><b>Country and there Captalis:</b></h1>
        <tr>
          <th>Country</th>
          <th>Capital</th>
        
        </tr>

        {data && data.map((user,index) => (
            <tr key ={index}>
            <td>{user.name}</td>
            <td>{user.capital}</td>
          </tr>
    

       ))}
       
      </table>
      </div>
    )
}
export default Datacard ;