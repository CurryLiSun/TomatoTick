import React, { Component } from 'react';
//import './vendor/bootstrap/css/bootstrap.min.css';
//import './css/resume.css';

class MyNavBar extends Component {
    render() {
        return (
        <div className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top" id="sideNav">
                <span className="d-block d-lg-none">Curry Sun</span>
                <span className="d-block d-lg-none">
                    <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="" alt=""></img>
                </span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
        </div>
        );
    }
}

export default MyNavBar;