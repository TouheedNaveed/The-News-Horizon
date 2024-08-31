import React, { Component } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <div className="container-fluid">
                        <img style={{ height: "50px", width: '50px', marginRight: "10px", cursor: 'pointer' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3RKDWOFbkjawcN_8yfUcBEV30lg4MHYSM1g&s" alt="" />
                        <Link className="navbar-brand" to="/">The News Horizon</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/about">About</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link active dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        News Categories
                                    </Link>
                                    <ul class="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/business">Business</Link></li>
                                        <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                                        <li><Link className="dropdown-item" to="/general">General</Link></li>
                                        <li><Link className="dropdown-item" to="/health">Health</Link></li>
                                        <li><Link className="dropdown-item" to="/science">Science</Link></li>
                                        <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                                        <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                                    </ul>
                                </li>
                                <li>
                                <Link className="nav-link active" aria-current="page" to="/contactus">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}

export default Navbar
