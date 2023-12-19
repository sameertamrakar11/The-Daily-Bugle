import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ()=> {
        return (
            <div >
                <nav className = "navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><img style={{ height: "35px" }} src="https://th.bing.com/th/id/R.3e7e5ed41b26dd5b8e0ae767c7f54ab9?rik=bOYZJnodfPaNZQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-MZKVKjha11I%2fT3XPOHZO5tI%2fAAAAAAAAAoY%2fGOCgjr-cBy4%2fs1600%2fDaily_Bugle_logo.png&ehk=Jxx%2fpiWybJE6jQzMiQXdtegRsGQAGJVFyuBh0iGOhTo%3d&risl=&pid=ImgRaw&r=0" alt="" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">Business</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/general">General</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/health">Health</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science">Science</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">Sports</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology">Technology</Link></li>

                            </ul>
                            
                        </div>

                    </div>

                </nav>

            </div>
        )
    
}

export default Navbar
