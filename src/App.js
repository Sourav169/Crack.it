import React, { useState, useEffect, useContext } from 'react';
import Mainimage from './mainimage.jpeg'
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom'
import './App.css';
import axios from 'axios'
import Home from './component/Home'
import Product from './component/Product'
import course from './component/Course'
import signin from './component/signin';
import modal from './component/Modal'


import about from './component/about'

import register from './component/Register';

import previous from './component/previousyear';

export const Usercontext = React.createContext()
function App() {
  const [user, setdata] = useState({
    token: undefined,
    user: undefined,
  })
  const logout = () => {
    setdata({
      token: undefined,
      user: undefined
    })
    localStorage.setItem("auth-token", '')
  }
  useEffect(() => {
    const checkedlogin = async () => {
      let token = localStorage.getItem("auth-token")
      if (token === null) {
        localStorage.setItem("auth-token", "")
        token = ''
      }
      const tokenres = await axios.post(
        "http://localhost:5000/api/user/token", null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenres.data) {
        const userres = await axios.get(
          "http://localhost:5000/api/user/",
          { headers: { "x-auth-token": token } },
        );
        setdata({
          token,
          user: userres.data,
        })
      }

    }
    checkedlogin()
  }, [user])
  return (
    <>

      <Router>

        <div className="container">
          <header className="header">
            <div className="name">
              <Link to='/'><h1>CRACK.IT</h1></Link>
            </div>
            <div className="MY-COURSES">
              <Link to='/about'>
              ABOUT US
              </Link>

              {
                user.user ? (
                  <Link to='/'
                onClick={logout}>hi {user.user.name} LOG OUT
                  </Link>
                ) : (

                    <Link to='/signin'>
                      <a>Sign In</a>
                    </Link>
                  )}



            </div>


          </header>
          <div className="main">

            <Usercontext.Provider value={{ user, setdata }}>
              <Route exact path="/" component={Home} />
              <Route exact path="/product" component={Product} />
              <Route exact path="/course/:id" component={course} />
              <Route exact path="/signin" component={signin} />
              <Route exact path="/register" component={register} />
              <Route exact path="/modal" component={modal} />
              
              <Route exact path="/about" component={about} />
              <Route exact path="/prev" component={previous} />
              

            </Usercontext.Provider>
          </div>
          <footer className="footer" >
            ALL RIGHT RESERVED
            </footer>

        </div>




      </Router>
    </>
  );

}

export default App;
