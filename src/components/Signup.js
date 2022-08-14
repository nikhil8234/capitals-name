import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./signup.css"
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = ()=>{

let navigate = useNavigate();
const[emailenter,setemailenter] = useState("")
const[firstname,setfirstname] = useState("")
const[lastname,setlastname] = useState("")
const[password,setpassword] = useState("")
const[repeatpassword,setrepeatpassword] = useState("")
const[passworderror,setpassworderror] = useState(false);
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(password===repeatpassword){
          localStorage.setItem('Name', firstname+ ""+lastname);
          localStorage.setItem('email', emailenter);
          localStorage.setItem('password', password);
          navigate("../home", { replace: true });

        }else{
          setpassworderror(true)
        }

    }
    return (
        <>

          <div className="signupform">

  <form onSubmit={handleSubmit}>
            <h1>Create account</h1>
             <p>Already have an account? <Link to="/login">Sign in</Link></p>
            <Row>
              <Col style={{width:"100%"}}> 
                <input 
                    className="signinput"
                    type="text" 
                    placeholder="email"
                    onChange={(e)=> setemailenter(e.target.value)}
                    required
                  />
              </Col>  
            </Row>
            <Row className = "namesection">
            <Col>
                  <input 
                   className="signinput"
                   type="text" 
                   placeholder="first name"
                   onChange={(e)=> setfirstname(e.target.value)}
                   required
                  />
            </Col>
            <Col>
                  <input 
                   className="signinput"
                   type="text" 
                    placeholder="lastname"
                    onChange={(e)=> setlastname(e.target.value)}
                    required
                  />
            </Col>
          </Row>
          <Row className = "passwordsection">
            <Col>
                  <input 
                   className="signinput"
                   type="password" 
                   placeholder="Password"
                   onChange={(e)=> setpassword(e.target.value)}
                   required
                  />
            </Col>
            <Col>
                  <input 
                    className="signinput"
                    type="password" 
                    placeholder="Repeat Password"
                    onChange={(e)=> setrepeatpassword(e.target.value)}
                    required
                  />
            </Col>
          </Row>
       <input type="submit" value="Signup"  className="submt-frm"/>
      {passworderror&&<p>pasword is mismatch</p>}
   </form>


        </div>
        </>
    )
}
export default Signup;