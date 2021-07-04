import React from 'react'

const Header = () => {
    return (
        <nav>
            <div className="navbar">
                <div className="logo">
                    <img src="https://cdn.onjuno.com/on-juno.png" alt="..." />
                </div>
                <div>
                    <ul>
                        <li style={{color:"#4643ee"}}>Home</li>
                        <li>Immigrants <i class="fa fa-angle-down" aria-hidden="true"></i></li>
                        <li>Company <i class="fa fa-angle-down" aria-hidden="true"></i></li>
                        <li>Learn <i class="fa fa-angle-down" aria-hidden="true"></i></li>
                        <li>Resources <i class="fa fa-angle-down" aria-hidden="true"></i></li>
                    </ul>
                </div>
                <div className="button">
                    <button className="btn1">Login</button>
                    <button className="btn2">Get Started</button>
                </div>
            </div>
        </nav>
    )
}

export default Header
