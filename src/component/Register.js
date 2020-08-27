import React ,{useEffect,useState,useContext}from 'react'
import {Link } from 'react-router-dom'
import axios from "axios"
import  { Usercontext } from '../App'
import {useHistory} from 'react-router-dom'
import './signin.css'
import Error from './Error'

function Register(props){
    
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[cpassword,setrePassword]=useState()
    const [error,seterror]=useState()
    const {setdata}=useContext(Usercontext)
    const history=useHistory();
    const submitHandler=async(e)=>{
        try{
        e.preventDefault();
        const newuser={name,email,password,cpassword};
        await axios.post(
            "http://localhost:5000/api/user/register",
            newuser,
        );
        const login=  await axios.post(
            "http://localhost:5000/api/user/login",{
            email,
            password,
        }
        );
        setdata({
            token:login.data.token,
            user:login.data.user
        })
        localStorage.setItem("auth-token",login.data.token)
        history.push('/product')
    }
    catch(err){
       err.response.data.msg && seterror(err.response.data.msg);
    }
       
    }
    return(
        <div className="signinform">
            <form>
                <ul className="form-container">
                    <li>
                        {
                           error && ( <Error message={error} clearerror={()=>seterror(undefined)}/>)}
                        
                        <h2 style={{textAlign:"center"}}>
                            Create-Account
                        </h2>

                    </li>
                  
                    <li>
                        <label htmlFor="name">
                            Name
                        </label>
                        <input type="name" name="name" id='name 'onChange={(e)=>setName(e.target.value)}>

                        </input>
                    </li>
                    <li>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" name="email" id='email 'onChange={(e)=>setEmail(e.target.value)}>

                        </input>
                    </li>
                    <li>
                        <label htmlFor="password">
                            password
                        </label>
                        <input type="password" name="password" id='password 'onChange={(e)=>setPassword(e.target.value)}>
                            
                        </input>
                    </li>
                    <li>
                        <label htmlFor="repassword">
                            cpassword
                        </label>
                        <input type="password" name="cpassword" id='cpassword 'onChange={(e)=>setrePassword(e.target.value)}>
                            
                        </input>
                    </li>
                    <li>
                        <button type="submit" className="signinbtn" onClick={submitHandler}>register</button>
                    </li>
                    <li>
                        Already have account?<Link to="/signin">Sign -in</Link>
                    </li>
                  
                </ul>
            </form>
        </div>
    )
}

export default Register;