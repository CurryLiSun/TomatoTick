import React, { Component } from 'react';
// ES6 Imports
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
//import 'bootstrap/dist/css/bootstrap.css';
//import './css/resume.css';

class MyContent extends Component {
    render() {
        return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <span className="d-block d-lg-none">Curry Sun</span>
                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt=""></img>
                    </span>
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* <a className="nav-link js-scroll-trigger" href="#about">About</a> */}
                            <Link className="nav-link js-scroll-trigger" activeClass="active" to="about"
                                spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link js-scroll-trigger" href="#experience">Experience</a> */}
                            <Link className="nav-link js-scroll-trigger" activeClass="active" to="experience"
                                spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                                Experience
                            </Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link js-scroll-trigger" href="#education">Education</a> */}
                            <Link className="nav-link js-scroll-trigger" activeClass="active" to="education"
                                spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                                Education
                            </Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link js-scroll-trigger" href="#skills">Skills</a> */}
                            <Link className="nav-link js-scroll-trigger" activeClass="active" to="skills"
                                spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                                Skills
                            </Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link js-scroll-trigger" href="#interests">Interests</a> */}
                            <Link className="nav-link js-scroll-trigger" activeClass="active" to="interests"
                                spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                                Interests
                            </Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link js-scroll-trigger" href="#awards">Awards</a> */}
                            <Link className="nav-link js-scroll-trigger" activeClass="active" to="awards"
                                spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                                Awards
                            </Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link js-scroll-trigger" href="#features">Features</a> */}
                            <Link className="nav-link js-scroll-trigger" activeClass="active" to="features"
                                spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                                Features
                            </Link>
                        </li>
                    </ul>
                </div>
                
            </nav>

            <div class="container-fluid p-0">
                <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                    <div class="w-100">
                        <h2 class="mb-0">孫
                        <span class="text-primary">揚理</span>
                        </h2>
                        <h4 class="mb-0">
                        <span class="text-primary">curry</span>
                        </h4>
                        <div class="subheading mb-5">802高雄市苓雅區福德三路317巷21號 · 0984-341-635 ·
                        <a href="#">justdomyselfli@gmail.com</a>
                        </div>
                        <p class="lead mb-5">軟體工程師</p>
                        <div class="social-icons">
                        <a href="#">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        </div>
                    </div>
                </section>

                <hr class="m-0"></hr>

                <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
                    <div class="w-100">
                        <h2 class="mb-5">Experience</h2>

                        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="resume-content">
                            <h3 class="mb-0">Web軟體工程</h3>
                            <div class="subheading mb-3">軟體工程師</div>
                            <p>以Web Form架構開發，開發業務所需之網站</p>
                        </div>
                        <div class="resume-date text-md-right">
                            <span class="text-primary">2018 - 2019</span>
                        </div>
                        </div>

                        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="resume-content">
                            <h3 class="mb-0">Web Service軟體工程</h3>
                            <div class="subheading mb-3">實習工程師</div>
                            <p>以Ext.js開發後台介面，並且以PHP撰寫後端Web Service功能</p>
                        </div>
                        <div class="resume-date text-md-right">
                            <span class="text-primary">2013 - 2015</span>
                        </div>
                        </div>

                        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="resume-content">
                            <h3 class="mb-0">Web專題開發</h3>
                            <div class="subheading mb-3">軟體工程師</div>
                            <p>以HTML,CSS,JavaScript,JQuery架設專題網站，並且以PHP撰寫後端Web Service雲端推播功能</p>
                        </div>
                        <div class="resume-date text-md-right">
                            <span class="text-primary">2012 - 2013</span>
                        </div>
                        </div>

                        <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
                        <div class="resume-content">
                            <h3 class="mb-0"></h3>
                            <div class="subheading mb-3"></div>
                            <p></p>
                        </div>
                        <div class="resume-date text-md-right">
                            <span class="text-primary"></span>
                        </div>
                        </div>

                    </div>

                </section>

                <hr class="m-0"></hr>

                <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
                    <div class="w-100">
                        <h2 class="mb-5">Education</h2>

                        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="resume-content">
                            <h3 class="mb-0">樹德科技大學</h3>
                            <div class="subheading mb-3">碩士</div>
                            <div>資訊工程所</div>
                            <p></p>
                        </div>
                        <div class="resume-date text-md-right">
                            <span class="text-primary">2015 - 2017</span>
                        </div>
                        </div>

                        <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
                        <div class="resume-content">
                            <h3 class="mb-0">樹德科技大學</h3>
                            <div class="subheading mb-3">學士</div>
                            <div>資訊工程系</div>
                            <p>GPA: 3.56</p>
                        </div>
                        <div class="resume-date text-md-right">
                            <span class="text-primary">2011 - 2015</span>
                        </div>
                        </div>

                    </div>
                </section>

                <hr class="m-0"></hr>

                <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
                    <div class="w-100">
                        <h2 class="mb-5">Skills</h2>

                        <div class="subheading mb-3">Programming Languages &amp; Tools</div>
                        <ul class="list-inline dev-icons">
                        <li class="list-inline-item">
                            <i class="fab fa-html5">PHP</i>
                        </li>
                        <li class="list-inline-item">
                            <i class="fab fa-css3-alt">JavaScript</i>
                        </li>
                        <li class="list-inline-item">
                            <i class="fab fa-js-square">VS Code</i>
                        </li>
                        <li class="list-inline-item">
                            <i class="fab fa-angular">CSS</i>
                        </li>
                        <li class="list-inline-item">
                            <i class="fab fa-react">React.js</i>
                        </li>
                        <li class="list-inline-item">
                            <i class="fab fa-node-js">Git</i>
                        </li>
                        <li class="list-inline-item">
                            <i class="fab fa-sass">Wordpress</i>
                        </li>
                        <li class="list-inline-item">
                            <i class="fab fa-less"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="fab fa-wordpress"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="fab fa-gulp"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="fab fa-grunt"></i>
                        </li>
                        <li class="list-inline-item">
                            <i class="fab fa-npm"></i>
                        </li>
                        </ul>

                        <div class="subheading mb-3">Workflow</div>
                        <ul class="fa-ul mb-0">
                        <li>
                            <i class="fa-li fa fa-check"></i>
                            規劃/需求分析
                            </li>
                        <li>
                            <i class="fa-li fa fa-check"></i>
                            畫面布局設計
                            </li>
                        <li>
                            <i class="fa-li fa fa-check"></i>
                            撰寫邏輯流程
                            </li>
                        <li>
                            <i class="fa-li fa fa-check"></i>
                            測試/Debug
                            </li>
                        </ul>
                    </div>
                </section>

                <hr class="m-0"></hr>

                <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
                    <div class="w-100">
                        <h2 class="mb-5">Interests</h2>
                        <p>寫程式</p>
                        <p>魔術</p>
                        <p>桌遊</p>
                        <p>跳舞</p>
                        <p class="mb-0"></p>
                    </div>
                </section>

                <hr class="m-0"></hr>

                <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
                    <div class="w-100">
                        <h2 class="mb-5">Awards &amp; Certifications</h2>
                        <ul class="fa-ul mb-0">
                        <li>
                            <i class="fa-li fa fa-trophy text-warning"></i>
                            優<sup>等</sup>
                            2014院專題展</li>
                        <li>
                            <i class="fa-li fa fa-trophy text-warning"></i>
                            優<sup>等</sup>
                            2013行動端創新應用APP</li>
                        <li>
                            <i class="fa-li fa fa-trophy text-warning"></i>
                            2<sup>nd</sup>
                            2012行動應用創作軟體競賽</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
        );
    }
}

export default MyContent;