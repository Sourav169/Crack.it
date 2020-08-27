import React ,{useEffect,useState,useContext} from 'react';
import { BroserRouter as router, Route, Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import iitjee from '../images/iitjee.jpeg'
import './product.css'
import {Modal} from 'react-bootstrap'
import Example from './Modal'
import products from './productlist'

import {Usercontext} from '../App'
import axios from 'axios'


function Product(props) {
    const {user}=useContext(Usercontext)
    console.log(user)
    const myfun=()=>{
       window .confirm("please sign in")
    }
    return(
        <>
            <div className="content">

                <ul className="all-product">
                    {
                       products.product.map((product) =>

                            <li key={product.id}>
                               
                                    <div className="product">
                                        <img className="image-product" src={product.image} />
                                        <div className="name">{product.name}</div>
                                        <div className="desc">{product.desc}</div>
                                        <div className="star">{product.rating}</div>

                                    </div>

                                    <div>
                                        {
                                            user.user ?(
                                              
                                                <Link to={"/course/" + product.id}>
                                            <button className="cbtn">VIEW COURSE</button>
                                            </Link>
                                              ):(
                                               
                                              <Link to='/signin'onClick={myfun}>
                                              <button className="cbtn">VIEW COURSE</button>
                                              </Link>
                                              )

                                        }
                                   
                                    </div>
                               
                            </li>)

                    }

                </ul>

            </div>

        </>
    );
}
export default Product