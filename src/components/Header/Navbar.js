import React from 'react'
import { Space } from 'antd'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark" >
                <div className="container">
                    <Link to="/" className="navbar-brand">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link active" aria-current="page">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contect" className="nav-link active" aria-current="page">Contect</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/feedback" className="nav-link active" aria-current="page">Feedback</Link>
                            </li>



                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}

                        </ul>
                        <div className="d-flex">
                            <Space>
                                <Link to="/auth/login" className="btn btn-success" >Login</Link>
                                <Link to="/auth/register" className="btn btn-info" >Register</Link>

                            </Space>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar