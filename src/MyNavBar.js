import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/resume.css';

class MyNavBar extends Component {
    render() {
        return (
        <div className="MyNavBar">
            <a className="" href="#page-top">
                <span className="">Curry Sun</span>
                <span className="">
                    <img className="" src="" alt=""></img>
                </span>
            </a>
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
                </li>
                <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#education">Education</a>
                </li>
                <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
                </li>
                <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>
                </li>
                <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#awards">Awards</a>
                </li>
            </ul>
        </div>
        );
    }
}

export default MyNavBar;