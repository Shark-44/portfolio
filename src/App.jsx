
import './App.css';

import Moi from './assets/image/moi.png';
import github from './assets/image/github.svg';
import linkedin from './assets/image/linkedin.svg';
import mail from './assets/image/mail.svg';
import lelabo from './assets/image/LeLabo.png';
import linkedinwh from './assets/image/linkedin-white.svg';
import mailwh from './assets/image/mailwh.svg';
import githubwh from './assets/image/githubwh.svg';
import monkey from './assets/image/monkey.png';
import pageperso from './assets/image/pageperso.png';
import alterworld from "./assets/image/alterworld.png"

import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const images = document.querySelectorAll('.icone');

    images.forEach(image => {
      const originalSrc = image.src;

      image.addEventListener('mouseenter', function() {
        if (!this.classList.contains('hovered')) {
          if (originalSrc.includes('linkedin')) {
            this.src = linkedinwh;
          } else if (originalSrc.includes('mail')) {
            this.src = mailwh;
          } else if (originalSrc.includes('github')) {
            this.src = githubwh;
          }
          this.classList.add('hovered');
        }
      });

      image.addEventListener('mouseleave', function() {
        if (this.classList.contains('hovered')) {
          if (originalSrc.includes('linkedin')) {
            this.src = linkedin;
          } else if (originalSrc.includes('mail')) {
            this.src = mail;
          } else if (originalSrc.includes('github')) {
            this.src = github;
          }
          this.classList.remove('hovered');
        }
      });
    });
  }, []);
  return (
    <>
    <div className="wrapper">
    <div className="nav">
    <li><a href="#contact">Contact</a></li>
      <li><a href="#project">Mes projets</a></li>
      
    </div>
      <div className="contenair">
      
        <div className="title">
          <h1>Joanny BERNARDEAU</h1>
          <h4>Web Développeur</h4>
          <div className="link">
            <a href="https://github.com/Shark-44" target="_blank"><img id="monImage1" className="icone" src={github} alt="github" /></a>
            <a href="https://www.linkedin.com/in/joanny-bernardeau-6a9b51bb" target="_blank"><img id="monImage2" className="icone" src={linkedin} alt="linkedin" /></a>
            <a href="mailto:joanny.bernardeau@gmail.com?subject=Sujet du message"><img id="monImage3" className="icone" src={mail} alt="mail" /></a>
          </div>
          <p>Dans un projet de reconversion, je suis passé par un bootcamp.<br /> Aujourd&apos;hui je recherche une entreprise pour un titre de Concepteur Développeur d&apos;Applications  en alternance<br /> Les langages que j&apos;ai étudié sont Javascript, React et Node.js, et je continue à apprendre le php et Symfony</p>
        </div>
      <img className="avatar" src={Moi} alt="Joanny" />
     
      <div className="blob">
          <svg width="100%" height="20%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" overflow="auto" shapeRendering="auto" fill="#ffffff">
            <defs>
              <path id="wavepath" d="M 0 2000 0 500 Q 62.5 420 125 500 t 125 0 125 0 125 0 125 0 125 0 125 0 125 0 125 0 125 0 125 0  v1000 z" />
              <path id="motionpath" d="M -250 0 0 0" /> 
            </defs>
            <g >
            <use xlinkHref="#wavepath" y="61" fill="#ff0080">
            <animateMotion
              dur="5s"
              repeatCount="indefinite">
             <mpath xlinkHref="#motionpath" />
            </animateMotion>
            </use>
           </g>
          </svg>
      </div>
    </div>

    
     </div>
    <div id="project" className="project">
      <h2> Mes projets</h2>
      <div className="list">
      <div className="card">
        <div className="circle"></div>
        <div className="content">
          <h4>Le Labo</h4>
          <p>Avec les basiques HTML, CSS et Javascript. Le premier projet en groupe avec thème, design et fonctionnalités libres</p>
          <a href="http://labo.devbyeloise.fr/" target="_blank">lien</a>
          <a href="https://github.com/Shark-44/ProjetLabo" target="_blank">GitHub</a>
        </div>
        <img className="screen" src={lelabo} alt="lelabo" />     
      </div>
      <div className="card">
        <div className="circle"></div>
        <div className="content">
          <h4>Monkey Shroom</h4>
          <p>Avec React et express. Un projet en groupe avec objectif d&apos;une boutique à laquelle un jeu permet des credits</p>
          <a href="" >lien</a>
          <a href="https://github.com/Shark-44/2023-05-JS-RemoteFR-codeQuiPeut-P2-G1" target="_blank">GitHub</a>
        </div>
        <img className="screen" src={monkey} alt="monkey" />     
      </div>
      <div className="card">
        <div className="circle"></div>
        <div className="content">
          <h4>Alterworld</h4>
          <p>Avec React et Node.js express et MySQL. Mon projet de titre DWWM, un e-commerce avec les règles de sécurité</p>
          <a href="" >lien</a>
          <a href="https://github.com/Shark-44/projet3wildcodeschool" target="_blank">GitHub</a>
        </div>
        <img className="screen" src={alterworld} alt="monkey" />     
      </div>
      <div className="card">
        <div className="circle"></div>
        <div className="content">
          <h4>Page perso</h4>
          <p>Avec React, je me suis exprimé dans des essais</p>
          <a href="https://pageperso-plum.vercel.app/" target="_blank">lien</a>
          <a href="https://github.com/Shark-44/Pageperso" target="_blank">GitHub</a>
        </div>
        <img className="screen" src={pageperso} alt="monkey" />     
      </div>
      </div>
      <div id="contact">
        <p>Tél. : 07.82.57.25.93</p>
        <p>Mail : joanny.bernardeau@gmail.com</p>
      </div>
    </div>
    </>
  )
}

export default App