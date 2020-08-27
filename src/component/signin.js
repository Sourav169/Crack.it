import React ,{useEffect,useState,useContext}from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {Link } from 'react-router-dom'
import  { Usercontext } from '../App'
import './signin.css'
import Error from './Error'

function signin(props){
    const [email,setEmail]=useState()
    const[password,setPassword]=useState()
    const [error,seterror]=useState()
    
    const {setdata}=useContext(Usercontext)
    const history=useHistory();
    const submitHandler=async(e)=>{
        try{
        e.preventDefault();
        
        const loginuser={email,password};
      
        const login=  await axios.post(
            "http://localhost:5000/api/user/login",loginuser
           
        );
        setdata({
            token:login.data.token,
            user:login.data.user
        })
        localStorage.setItem("auth-token",login.data.token)
        history.push('/product')
    }  catch(err){
        err.response.data.msg && seterror(err.response.data.msg);
     }
        
    }
    return(
        <div className="signinform">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <h3 style={{textAlign:"center"}}>CRACK.IT</h3>

                    <li>
                    {
                           error && ( <Error message={error} clearerror={()=>seterror(undefined)}/>)}
                        <h2 style={{textAlign:"center"}}>
                            SIGN IN
                           
                        </h2>
                    </li>
                   
                    <li>
                        <label htmlFor="email" >
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
                        <button type="submit" className="signinbtn">SIGNIN</button>
                    </li>
                    <li>
                        Didn't have account?
                    </li>
                    <li>
                        <Link to='/register'>Create your account</Link>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default signin;