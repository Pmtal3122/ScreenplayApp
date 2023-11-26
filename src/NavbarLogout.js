import React from 'react'
import { Link } from 'react-router-dom'

function NavbarLogout() {
    return (
        <>
            <button>
                <Link to="/login" className="homePage navbar-links links">Log In</Link>
            </button>
            <button className="homePage navbar-links links">
                <Link to="/SignUp" className="homePage navbar-links links">Sign Up</Link>
            </button>
        </>
    )
}

export default NavbarLogout
