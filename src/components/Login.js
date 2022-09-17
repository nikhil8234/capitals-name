
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Login.css"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = ()=>{
let navigate = useNavigate();
const[emailenter,setemailenter] = useState("")
const[password,setpassword] = useState("")
const[error,seterror]=useState(false)
    const handleSubmit = (event)=>{
       const emaillogin = localStorage.getItem('email');
       const passwordlogin = localStorage.getItem('password');
       if(emaillogin === emailenter  && passwordlogin === password){
        sessionStorage.setItem("login", true);
        navigate("../home", { replace: true });
       }else{
        seterror(true)
       }
     
        event.preventDefault();

    }
    return (
        <>

          <div className="loginform">

          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
             {/* <p>Already have an account?<a>Sign in</a></p> */}
            <Row>
              <Col style={{width:"100%"}}> 
                <input 
                    className="signinput"
                    type="text" 
                    placeholder="email"
                    onChange={(e)=> setemailenter(e.target.value)}
                  />
              </Col> 
             </Row>
             <Row>
              <Col style={{width:"100%"}}> 
                  <input 
                   className="signinput"
                   type="password" 
                   placeholder="Password"
                   onChange={(e)=> setpassword(e.target.value)}
                  />
            </Col>
            {error && <p className="err">Please enter valid email/password</p>}
            </Row>
  
       <input type="submit" value="Login"  className="submt-frm"/>
      
   </form>


        </div>
        </>
    )
}
export default Login;