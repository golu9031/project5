import React, { Component } from "react";
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/')
    }
    return (
        <div>
            {/*  <!--nav start--> */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <Link className="navbar-brand fw-bold" to="/">School </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link className="nav-link" to="/courses">Courses</Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link className="nav-link" to="/gallery">Gallery</Link>
                            </li>

                            <li class="nav-item mx-3">
                                <Link className="nav-link" to="/contactus">Contact Us</Link>
                            </li>
                        </ul>

                        <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                            {
                                auth ? <li class="nav-item"><Link onClick={logout} className="nav-link" to="/">Logout</Link></li> : <>
                                    <li class="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                                    <li class="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
                                </>
                            }

                        </ul>
                       {/*  <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>

                        </ul> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Nav;