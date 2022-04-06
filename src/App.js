import React, { useState } from 'react'
import './App.css';
import { Route } from 'react-router-dom'

//!--Importing Styled Components --// <--At bottom of file --
import styled from 'styled-components';


//!--Components --//
import Header from './components/Header'
import SocialIcons from './components/SocialIcons'
import Projects from './components/Projects'

//! -- Icons Data -- //
import { socialIcons } from './data/socialIconsData';



function App() {
  const [icons] = useState(socialIcons);
  return (
    <StyledApp className="App">
      <div className = 'header-container'>
        <Header />
      </div>
      
      <SocialIcons icons = {icons}/>

      <section className = 'content-container'>
        <div className = 'top-text-container'>
          <div className = 'hi-text'>
              <h1 className = 'text'>Hi, my name is</h1>
            </div>
            <div className = 'name-text'>
              <h2 className = 'text'>Geoff Kelly</h2>
            </div>
            <div className = 'statement-text'>
              <h3> Problem Solver. Full Stack Developer</h3>
            </div>
            <div className = 'about-paragraph'>
              <p className = 'text'> I am a software engineer specializing in building (and occasionally designing) full stack applications. I have a passion for problem solving and a love for learning new technologies. I am currently looking for ways to continue to grow my abilities. </p>
            </div>
            <div className = 'resume-btn'>
              <span className = 'resume-text'>RESUME</span>
            </div>
        </div>
      </section>
      <section className = 'projects-container'>
        <Projects />
      </section>


    </StyledApp>
  );
}

export default App;



//!--Styled Components --//
const StyledApp = styled.div`

  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10em;
  }
  

  .top-text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 5em;
    margin-left: 2em;
  }

  .top-text-container h1 {
    font-size: ${pr => pr.theme.fontSizes.small};
    font-weight: bold;
    color: ${pr => pr.theme.colors.primary};
    font-family: ${pr => pr.theme.fonts.secondary};
  }
  .top-text-container h2 {
    font-size: ${pr => pr.theme.fontSizes.extraLarge};
    color: white;
    font-family: ${pr => pr.theme.fonts.primary};
  }

  .top-text-container h3 {
    font-size: ${pr => pr.theme.fontSizes.large};
    color: ${pr => pr.theme.colors.secondary};
    font-family: ${pr => pr.theme.fonts.primary};
    font-weight: 300;
  }

  .top-text-container p {
    font-size: ${pr => pr.theme.fontSizes.tiny};
    color: white;
    font-family: ${pr => pr.theme.fonts.primary};
    font-weight: 300;
    max-width: 50em;
    padding-top: 2em;
  }

  .text{
    margin-bottom: 1rem;
  }


  //!-- Resume Button --//
  .resume-btn {
    border: 1px solid ${pr => pr.theme.colors.primary};
    color: white;
    margin: 2rem 0;
    border-radius: 8px;
  }

  .resume-btn:hover {
    background-color: ${pr => pr.theme.colors.secondary};
    transition: 0.2s;
  }

  .resume-text {
    font-size: ${pr => pr.theme.fontSizes.small};
    font-weight: bold;
    color: ${pr => pr.theme.colors.primary};
    font-family: ${pr => pr.theme.fonts.secondary};
    padding: 0.5rem 1rem;
  }

  @media (max-width: 768px) {


    .top-text-container {
      margin-left: 1rem;
      margin-top: 0;
    }

    .top-text-container p {
      max-width: 90%;
      margin: auto;
      margin-left: 0;
  }


  //! -- AboutMe Section -- //

 
  




`