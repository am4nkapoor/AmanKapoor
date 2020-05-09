import React from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import Backdrop from './components/Backdrop/Backdrop';
import SideDrawer from './components/SideDrawer/SideDrawer';
import About from './components/About/About'

export default class Navbar extends React.Component{

  state = {
    sideDrawerOpen: false
  }

  drawToggleClickHandler = () =>{
    this.setState((prevState) => {
      return {sideDrawerOpen : !prevState.sideDrawerOpen}
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen:false})
  }

    render() {

      let backdrop;

      if(this.state.sideDrawerOpen){
        backdrop = <Backdrop click={this.backdropClickHandler}/>
      }
      
      return (
        <div class="container">
              <Toolbar drawerClickHandler={this.drawToggleClickHandler}/>
              <SideDrawer show={this.state.sideDrawerOpen}/>
              {backdrop}
              {/* <header class="HeaderContainer">
                <nav class="header_Navbar">
                    <div></div>
                    <div>
                      <div class="header_Hamburger">
                          <div class="header_HamburgerBox">
                            <div class="cRLRRh"></div>
                          </div>
                      </div>
                    </div>
                    <div class="header_NavLinks">
                      <ol class="header_NavList">
                          <div>
                            <li class="header_NavListItem"><a href="#about" class="header_NavLink">About</a></li>
                            <li class="header_NavListItem"><a href="#jobs" class="header_NavLink">Experience</a></li>
                            <li class="header_NavListItem"><a href="#projects" class="header_NavLink">Work</a></li>
                            <li class="header_NavListItem"><a href="#contact" class="header_NavLink">Contact</a></li>
                          </div>
                      </ol>
                      <div>
                          <div class="fadedown-enter-done"><a href="/static/Akansh-Gulati-Resume-e77771e98b9322f776bdd118eba40627.pdf" target="_blank" rel="nofollow noopener noreferrer" class="header_ResumeLink">Resume</a></div>
                      </div>
                    </div>
                </nav>
                <div aria-hidden="true" tabIndex="-1" class="menu_MenuContainer">
                    <div class="menu_Sidebar">
                      <nav class="menu_NavLinks">
                          <ol class="menu_NavList">
                            <li class="menu_NavListItem"><a href="#about" class="menu_NavLink">About</a></li>
                            <li class="menu_NavListItem"><a href="#jobs" class="menu_NavLink">Experience</a></li>
                            <li class="menu_NavListItem"><a href="#projects" class="menu_NavLink">Work</a></li>
                            <li class="menu_NavListItem"><a href="#contact" class="menu_NavLink">Contact</a></li>
                          </ol>
                          <a href="/static/Akansh-Gulati-Resume-e77771e98b9322f776bdd118eba40627.pdf" target="_blank" rel="nofollow noopener noreferrer" class="menu__ResumeLink-sdn9y6-6 kEIIkn">Resume</a>
                      </nav>
                    </div>
                </div>
              </header> */}

              <div class="social-container">
                <div>
                    <ul class="social_SocialItemList">
                      <li class="social_SocialItem">
                          <a href="https://github.com/am4nkapoor" target="_blank" rel="nofollow noopener noreferrer" aria-label="Github" class="social_link">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 438.549 438.549">
                                <title>Github</title>
                                <path d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"></path>
                            </svg>
                          </a>
                      </li>
                      <li class="social_SocialItem">
                          <a href="https://www.linkedin.com/in/aman-kapoor-660a98103/" target="_blank" rel="nofollow noopener noreferrer" aria-label="Linkedin" class="social_link">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 430.117 430.117">
                                <title>LinkedIn</title>
                                <path d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z"></path>
                            </svg>
                          </a>
                      </li>
                      <li class="social_SocialItem">
                          <a href="https://twitter.com/Am4nKapoor" target="_blank" rel="nofollow noopener noreferrer" aria-label="Twitter" class="social_link">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 612 612">
                                <title>Twitter</title>
                                <path d="M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411 c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513 c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101 c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104 c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194 c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485 c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z"></path>
                            </svg>
                          </a>
                      </li>
                    </ul>
                </div>
              </div>

              <div class="email-counter">
                <div>
                  <div class="email-wrapper">
                  <a href="mailto:amankapoor2810@gmail.com" class="email-side">amankapoor2810@gmail.com</a>
                  </div>
                </div>
              </div>

              <main class="main-content">
                <section class="Section_Container">
                  <div>
                    <h1 class="head">Hi! I'm</h1>
                    <h2 class="name">Aman Kapoor.</h2>
                    <h3 class="subtitle">I create products for the web.</h3>
                    <div class="fadeup-enter-done" style={{transitionDelay: '500ms'}}><a href="mailto:amankapoor2810@gmail.com" class="email-link">Get In Touch</a></div>
                  </div>
                </section>

                <About/>

                {/* <section id="about" class="AboutContainer" data-sr-id="0">
                  <h3 class="Heading-about">About Me</h3>
                  <div class="about_FlexContainer">
                      <div class="about_ContentContainer">
                        <div>
                            <p>I'm a software engineer, backed by an ideology to build highly performant and scalable products. Quickly fathoming a problem and progressively finding its solution have been the building blocks of my professional career.</p>
                            <p>Currently, playing with code at <strong><a href="https://collegedunia.com/" target="_blank" rel="nofollow noopener noreferrer">Collegedunia</a></strong> <em>("Coll-age-dunia")</em> on PWA applications for different customer facing verticals, making it light weight and accessible.</p>
                            <p>Here are few things I'm proficient in:</p>
                        </div>
                        <ul class="about_SkillsContainer">
                            <li class="about_Skill">React</li>
                            <li class="about_Skill">GraphQL</li>
                            <li class="about_Skill">JavaScript</li>
                            <li class="about_Skill">Angular</li>
                            <li class="about_Skill">Vue</li>
                            <li class="about_Skill">Node</li>
                        </ul>
                      </div>
                      <div class="about_PicContainer">
                        <div class="about_AvatarContainer">
                          <div class="about_Avatar">
                            <div class="about_custom"></div>
                            <picture>
                              <img src="/images/hero.jpg" alt="" />
                            </picture>
                          </div>
                        </div>
                      </div>
                  </div>
                </section> */}
                
                <section id="jobs" class="Section-sc">
                  <h3 class="Heading-sc">Where I've Worked</h3>
                  <div class="jobs-TabsContainer">
                    <div class="jobs-ContentContainer">
                      <div id="job0" role="tabpanel" tabIndex="0" aria-labelledby="job0" aria-hidden="false" class="jobs-TabContent">
                        <h5 class="jobs-JobDetails">
                          <span>May 2019 - Present</span>
                        </h5>
                        <div>
                          <h4 class="jobs-JobTitle">
                            <span>Senior Software Engineer</span>
                              <span class="jobs__Company">
                                &nbsp;@&nbsp;
                                <a href="https://www.Collegedunia.com/" target="_blank" rel="nofollow noopener noreferrer">Collegedunia</a>
                              </span>
                          </h4>
                          <div>
                            <ul>
                              <li>Working on PWA application for different verticals.</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div id="job1" role="tabpanel" tabIndex="0" aria-labelledby="job1" aria-hidden="true" class="jobs-TabContent">
                        <h5 class="jobs-JobDetails"><span>Aug 2018 - May 2019</span></h5>
                        <div>
                            <h4 class="jobs-JobTitle"><span>Software Engineer ||</span><span class="jobs__Company">&nbsp;@&nbsp;<a href="https://www.3pillarglobal.com/" target="_blank" rel="nofollow noopener noreferrer">3 Pillar Global</a></span></h4>
                            <div>
                              <ul>
                                  <li>Working as software engineer on a Gannett project for local and national news.</li>
                                  <li>Responsible for code review and guidance on system architecture to fellow team.</li>
                                  <li>Implemented UI design using <strong>HTML5 and CSS3</strong> design for the whole site from scratch using JSP.</li>
                                  <li>Worked extensively on jQuery and native JavaScript.</li>
                                  <li>Creation of all java script logic (validation, animations, transitions, templates, date picking enhancements and improvements on the overall website aesthetic. </li>
                                  <li>Followed agile development and consistently delivered new features on time During sprints.</li>
                                  <li>Deep knowledge of Django practices and commonly used modules based on extensive work. </li>
                              </ul>
                            </div>
                        </div>
                      </div>

                      <div id="job2" role="tabpanel" tabIndex="0" aria-labelledby="job2" aria-hidden="true" class="jobs-TabContent">
                        <h5 class="jobs-JobDetails"><span>Jan 2017 - June 2018</span></h5>
                        <div>
                            <h4 class="jobs-JobTitle"><span>UI Developer</span><span class="jobs__Company">&nbsp;@&nbsp;<a href="https://www.niit.com/india/" target="_blank" rel="nofollow noopener noreferrer">NIIT Limited</a></span></h4>
                            <div>
                              <ul>
                                  <li>Creating a dashboard for Citibank using web technologies like <strong>D3, DC Chart.js, MongoDB</strong>.</li>
                                  <li>This project is basically a dashboard for creating an analytical data by bar charts, pie charts, using <strong>JS, CSS3 and HTML5</strong>.</li>
                                  <li>Developed the Appraisal Master screen for corporate exam. I have worked on corporate exam application by which we schedule exams for user and after that user can start the schedule exam. </li>
                                  <li>When user submit his Exam this Exam Automatically goes to the Evaluator for evaluation and Design the UI for Evaluation Web and make this application user responsive.</li>
                                  <li>Ensure ability to write test plans and test cases. To communicate bugs to developers and other stakeholders</li>
                                  <li>Knowledge and experience in technical aspects of software solution being tested </li>
                                  <li>Ensure the ability translate technical requirements test plans. </li>
                                  <li>Hold and facilitate test plan/case reviews with cross-functional team members. </li>
                                  <li>Created all java script logic (validation, animations, transitions, templates, datepicking etc.). </li>
                              </ul>
                            </div>
                        </div>
                      </div>

                      {/* <div id="job3" role="tabpanel" tabIndex="0" aria-labelledby="job3" aria-hidden="true" class="jobs-TabContent">
                        <h5 class="jobs-JobDetails"><span>May - Dec 2016</span></h5>
                        <div>
                            <h4 class="jobs-JobTitle"><span>HTML Leader</span><span class="jobs__Company-sc-13kygjg-8 jjOnhh">&nbsp;@&nbsp;<a href="https://www.duckduckgo.com" target="_blank" rel="nofollow noopener noreferrer">DuckDuckGo</a></span></h4>
                            <div>
                              <ul>
                                  <li>Worked on adding new Instant Answers for DuckDuckGo search engine.</li>
                                  <li>Contributed to review code and planning architecture for latest instant answers.</li>
                              </ul>
                            </div>
                        </div>
                      </div> */}

                      
                    </div>
                  </div>
                </section>  
              
                <section id="projects" class="Section-sc-projects">
                  <h3 class="Heading-sc-projects">Some Things I've Made</h3>
                    <div class="featured-grid">
                      <div class="featured-projects">
                        <div class="featured-ContentContainer">
                          <h4 class="featured-FeaturedLabel">Featured Project</h4>
                          <h5 class="featured-ProjectName"><a href="https://www.carhp.com/" target="_blank" rel="nofollow noopener noreferrer" aria-label="External Link">Car Hp</a></h5>
                          <div class="featured-ProjectDescription">
                              <ul>
                                <li>CARHP is an automotive startup working towards representing the cars and their values in the best way possible.</li>
                              </ul>
                          </div>
                          <ul class="featured-TechList">
                              <li>React</li>
                              <li>CSS</li>
                              <li>HTML</li>
                              <li>PHP</li>
                          </ul>
                          <div class="featured-Links">
                              <a href="https://www.carhp.com/" target="_blank" rel="nofollow noopener noreferrer" aria-label="External Link">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 194.818 194.818">
                                    <title>External</title>
                                    <g>
                                      <path d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z"></path>
                                      <path d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"></path>
                                    </g>
                                </svg>
                              </a>
                          </div>
                        </div>
                        <div class="featured-ImgContainer">
                          <div class="featured__FeaturedImg">
                             <div class="custom"></div>
                             <picture>
                               <img alt="" src="/images/w-1.png" />
                             </picture> 
                          </div>
                        </div>
                      </div>

                      <div class="featured-projects">
                        <div class="featured-ContentContainer">
                          <h4 class="featured-FeaturedLabel">Featured Project</h4>
                          <h5 class="featured-ProjectName"><a href="https://www.usatoday.com/" target="_blank" rel="nofollow noopener noreferrer" aria-label="External Link">USA Today</a></h5>
                          <div class="featured-ProjectDescription">
                              <p>USA Today is an internationally distributed American daily, middle-market newspaper that serves as the flagship publication of its owner, the Gannett Company.</p>
                          </div>
                          <ul class="featured-TechList">
                              <li>Django</li>
                              <li>CSS</li>
                              <li>HTML</li>
                              <li>Node</li>
                          </ul>
                          <div class="featured-Links">
                              <a href="https://www.usatoday.com/" target="_blank" rel="nofollow noopener noreferrer" aria-label="External Link">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 194.818 194.818">
                                    <title>External</title>
                                    <g>
                                      <path d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z"></path>
                                      <path d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"></path>
                                    </g>
                                </svg>
                              </a>
                          </div>
                        </div>

                        <div class="featured-ImgContainer">
                          <div class="featured__FeaturedImg">
                              <div class="custom"></div>
                              <picture>
                                <img alt="" src="/images/w-2.png" />
                              </picture> 
                          </div>
                        </div>                     
                      </div>

                      <div class="featured-projects">
                        <div class="featured-ContentContainer">
                          <h4 class="featured-FeaturedLabel">Featured Project</h4>
                          <h5 class="featured-ProjectName"><a href="https://www.training.com/" target="_blank" rel="nofollow noopener noreferrer" aria-label="External Link">LMS Training.com</a></h5>
                          <div class="featured-ProjectDescription">
                              <ul>
                                <li>Training offers high-quality early childhood training courses and CDA classes online so you can earn your CDA certificate or CDA renewal.</li>
                              </ul>
                          </div>
                          <ul class="featured-TechList">
                              <li>Microsoft ASP.NET</li>
                              <li>CSS</li>
                              <li>HTML</li>
                              <li>Bootstap</li>
                          </ul>
                          <div class="featured-Links">
                              <a href="https://www.training.com/" target="_blank" rel="nofollow noopener noreferrer" aria-label="External Link">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 194.818 194.818">
                                    <title>External</title>
                                    <g>
                                      <path d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z"></path>
                                      <path d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"></path>
                                    </g>
                                </svg>
                              </a>
                          </div>
                        </div>
                        <div class="featured-ImgContainer">
                          <div class="featured__FeaturedImg">
                             <div class="custom"></div>
                             <picture>
                               <img alt="" src="/images/w-3.png" />
                             </picture> 
                          </div>
                        </div>
                      </div>
                    </div>
                </section>  
              
                <section id="contact" class="ContactContainer" data-sr-id="6">
                  <h3 class="contact_GreenHeading">What's Next?</h3>
                  <h4 class="contact_Title">Get In Touch</h4>
                  <div>
                      <p>I'm currently looking for any freelance opportunities, my inbox is always open. Whether for a potential project or just to say hi, I'll try my best to answer your email!</p>
                  </div>
                  <a href="mailto:amankapoor2810@gmail.com" target="_blank" rel="nofollow noopener noreferrer" class="contact_EmailLink">Say Hello</a>
                </section>
              </main>
            </div>
        );
    }
}