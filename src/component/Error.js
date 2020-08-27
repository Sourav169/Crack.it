import  React from 'react'
import './error.css'
function Error(props){
    return(
        <>
      <div className="error">
    <span>{props.message}</span>
    <button  onClick={props.clearerror}>X</button>
      </div>
        </>
    )
}
export default Error;