import React from 'react'
import iitjee from '../images/iitjee.jpg'
import { Link } from 'react-router-dom'
import products from "./productlist"
import './Course.css'
function Course(props) {
    const product = products.product.find((value) => {
        
        return value.id == props.match.params.id;
        
    }
    
    );
    return (

        <>
           
            <div className="details">
                <div className="product-image">
                    <img className="img" src={product.image}></img>
                </div>
                <div className="product-info">
                    <ul>
                        <li>
                            <h2>{product.name}
                            {product.id}
                            </h2>
                        </li>
                        <li>
                            DESCRIPTION:
                           <h2>{product.desc}</h2>
                        </li>
                        <li>
                            <h2>{product.rating}</h2>
                        </li>
                    </ul>

               
                
               
                    <ul>

                        <Link to={'/prev'} style={{textDecoration: 'none', }}>
                        <li>
                           <h2> PREVIOUS YEAR QUESTION</h2>
                        </li>
                        </Link>
                        <li>
                           <h2> SAMPLE VIDEO</h2>
                        </li>
                     
                    </ul>

                    </div>
                </div>

            
        </>


    );
}
export default Course;