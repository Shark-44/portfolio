
import './App.css';

import Moi from './assets/image/moi.webp';
import github from './assets/image/github.png';
import linkedin from './assets/image/linkedin.png';
import mail from './assets/image/mail.png';
import CV from './assets/image/CVJoanny.png';
import CVwh from './assets/image/CVJoannywh.png';
import lelabo from './assets/image/LeLabo.png';
import linkedinwh from './assets/image/linkedin-white.png';
import mailwh from './assets/image/mailwh.png';
import githubwh from './assets/image/githubwh.png';
import monkey from './assets/image/monkey.png';
import pageperso from './assets/image/pageperso.png';
import alterworld from "./assets/image/alterworld.png";
import recrea2 from "./assets/image/recrea2.png";
import chaser from "./assets/image/jeu_chaser.png"
import angular from "./assets/image/Angular.png"

import { useState } from 'react';


function App() {
  const [over1, setOver1] = useState(false);
  const [over2, setOver2] = useState(false);
  const [over3, setOver3] = useState(false);
  const [over4, setOver4] = useState(false);
     
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
          


          <div className='link'>
            <a href="https://github.com/Shark-44" target="_blank" rel="noopener noreferrer"><img className="icone" src={over1 ? githubwh : github} onMouseOver={() => setOver1(true)}
            onMouseOut={() => setOver1(false)} alt="github" /></a>        
            <a href="https://www.linkedin.com/in/joanny-bernardeau-6a9b51bb" target="_blank"><img className="icone" src={over2 ? linkedinwh : linkedin} onMouseOver={() => setOver2(true)}
            onMouseOut={() => setOver2(false)} alt="linkedin" /></a>
            <a href="mailto:joanny.bernardeau@gmail.com?subject=Sujet du message"><img className="icone" src={over3 ? mailwh : mail} onMouseOver={() => setOver3(true)}
            onMouseOut={() => setOver3(false)} alt="mail" /></a>
            <a href="https://1drv.ms/b/c/f1d07a223c005096/EVTzHH0cyEVPuXLMhVd86CMBR6NLkFTcvtMVYPaWzORi-g?e=n8Rr2u" target="_blank"><img className="icone" src={over4 ? CVwh : CV} onMouseOver={() => setOver4(true)}
            onMouseOut={() => setOver4(false)} alt="cv" /></a>
            </div> 
            <p>Dans un projet de reconversion, je suis passé par un bootcamp.<br /> Aujourd&apos;hui je recherche une entreprise pour un titre de Concepteur Développeur d&apos;Applications  en alternance<br /> Les langages que j&apos;ai étudié sont Javascript, React et Node.js, et je continue à apprendre le php et Symfony</p>
        </div>
        <img className="avatar" src={Moi} alt="Joanny" /> 
      </div>     
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
          <a href="https://github.com/Shark-44/Projet2-wildcodeschool/tree/main" target="_blank">GitHub</a>
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
      <div className="card">
        <div className="circle"></div>
        <div className="content">
          <h4>Recré A2</h4>
          <p>Avec React, j&apos;ai développé un projet avec typescript afin d&apos;apprendre et savoir faire</p>
          <a href="https://typescript-react-swart.vercel.app/" >lien</a>
          <a href="https://github.com/Shark-44/Typescript-react" target="_blank">GitHub</a>
        </div>
        <img className="screen" src={recrea2} alt="recréA2" />     
      </div>
      <div className="card">
        <div className="circle"></div>
        <div className="content">
          <h4>Clone Chase HQ</h4>
          <p>Toujours sous React et Typescript. Un clone d&apos;un jeu en cours de développement ou j'apprends certaines notions avec Redux</p>
          <a href="" >En cours</a>
          <a href="https://github.com/Shark-44/clone-Chase-HQ" target="_blank">GitHub</a>
        </div>
        <img className="screen" src={chaser} alt="chase" />     
      </div>
      <div className="card">
        <div className="circle"></div>
        <div className="content">
          <h4>S-B / Angular</h4>
          <p>Pour m'initier et comprendre les fonctionnalités. Sur un serveur maison, dont le lien peut être demandé</p>
          <a>lien sur demande</a>
          <a href="https://github.com/Shark-44/1erbackendJava" target="_blank">GitHub</a>
        </div>
        <img className="screen" src={angular} alt="angular" />     
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
