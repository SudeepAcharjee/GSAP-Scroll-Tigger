import React from "react";

// Importing images from ../assets/img
import img7 from "../assets/img/7.png";
import img8 from "../assets/img/8.png";
import img9 from "../assets/img/9.png";
import img10 from "../assets/img/10.png";
import img11 from "../assets/img/11.png";
import img12 from "../assets/img/12.png";
import '../../css/base.css';
import Header from '../components/header';
import Nav from '../components/nav';
import Footer from '../components/footer';

const StickySections: React.FC = () => {
  return (
    <div className="loading demo-6">
      <main>
        <header className="frame frame--header" style={{ backgroundImage: `url(${img9})` }}>
          <Header/>
          <Nav/>
          <div className="frame__heading">
            <h2 className="content__title"><i>The</i> Emissions</h2>
            <p className="text-meta">An exploration of the Synthetic Era.</p>
          </div>
        </header>
        <div className="content content--highlight content--intro">
          <p className="text-large">As data conglomerates reveled in the opulence of cognitive wealth, a silent underclass manifested, condemned to the digital periphery.</p>
        </div>
        <div className="wrap">
          <div className="content content--sticky content--grid content--perspective">
            <div className="content__inner bg-1">
              <img className="content__img content__img--large content__img--left" src={img7} alt="Algorithm" />
              <h2 className="content__title"><i>The</i> Algorithm</h2>
              <p className="content__text content__text--left text-meta">The algorithm's workings are shrouded in complexity, and its decision-making processes are inscrutable to the general populace.</p>
            </div>
          </div>
          <div className="content content--sticky content--grid content--perspective">
            <div className="content__inner bg-2">
              <img className="content__img content__img--large content__img--left" src={img8} alt="Dogma" />
              <h2 className="content__title"><i>The</i> Dogma</h2>
              <p className="content__text content__text--left text-meta">The digital gospel etched into the very code of the algorithmic society, served as the bedrock of the cognitive regime.</p>
            </div>
          </div>
          <div className="content content--sticky content--grid content--perspective">
            <div className="content__inner bg-3">
              <img className="content__img content__img--large content__img--left" src={img9} alt="Architects" />
              <h2 className="content__title"><i>The</i> Architects</h2>
              <p className="content__text content__text--left text-meta">The elusive entities, lacking human form, operate in the shadows, skillfully shaping societal norms through the complex interplay of algorithms and Dogmas.</p>
            </div>
          </div>
          <div className="content content--sticky content--grid content--perspective">
            <div className="content__inner bg-4">
              <img className="content__img content__img--large content__img--left" src={img10} alt="Wasteland" />
              <h2 className="content__title"><i>The</i> Wasteland</h2>
              <p className="content__text content__text--left text-meta">This overlooked realm, a consequence of algorithmic judgments, is a haunting landscape filled with the echoes of untold stories and uncharted thoughts.</p>
            </div>
          </div>
          <div className="content content--sticky content--grid content--perspective">
            <div className="content__inner bg-5">
              <img className="content__img content__img--large content__img--left" src={img11} alt="Narrative" />
              <h2 className="content__title"><i>The</i> Narrative</h2>
              <p className="content__text content__text--left text-meta">"The Narrative" unfolds as the omnipresent thread weaving through the fabric of the algorithmic society.</p>
            </div>
          </div>
          <div className="content content--sticky content--grid content--perspective">
            <div className="content__inner bg-6">
              <img className="content__img content__img--large content__img--left" src={img12} alt="Opulence" />
              <h2 className="content__title"><i>The</i> Opulence</h2>
              <p className="content__text content__text--left text-meta">"The Opulence" epitomizes the cognitive elite's wealth in the algorithmic society, where opulent thoughts and experiences shape the societal narrative.</p>
            </div>
          </div>
        </div>
        <div className="content content--highlight content--outro">
          <p className="text-large">Lost in perpetual dependency, inhabitants of the Synthetic Era found solace in cryptic simulations, where pain ebbed and cognitive loads momentarily lightened.</p> 
          <img className="content__img spacer" src={img7} alt="Spacers" />
        </div>
       <Footer/>
      </main>
    </div>
  );
};

export default StickySections;
