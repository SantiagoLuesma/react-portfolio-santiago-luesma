import React from 'react';
// import HeroImg from '../assets/images/santiagoluesma-width.jpg';
import Button from './Button';
import PText from './PText';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import scrollDownArrow from '../assets/images/scroll-down-arrow.svg';

export default function HeroSection() {
  return (
    <div>
      <div className="container">
        <h1 className="hero__heading">
          <span>Hola, yo soy</span>
          <span>Santiago Luesma</span>
        </h1>
        {/* <div className="hero__img">
          <img src={HeroImg} alt="" />
        </div> */}
        <div className="hero__info">
          <PText>
            I am working as a freelance web designer and developer for 4 years.
            I love to design and make new web experiences for the people.
          </PText>
          <Button btnLink="/projects" btnText="see my works" />
        </div>
        <div className="hero__social">
          <div className="hero__social__indicator">
            <p>Follow</p>
            <img src={SocialMediaArrow} alt="social media arrow" />
          </div>
          <div className="hero__social__text">
            <ul>
              <li>
                <a
                  href="https://twitter.com/luesmadev"
                  target="_blank"
                  rel="noreferrer"
                >
                  TW
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/santiagoluesma"
                  target="_blank"
                  rel="noreferrer"
                >
                  GH
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/santiagoluesma"
                  target="_blank"
                  rel="noreferrer"
                >
                  LI
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hero__scrollDown">
          <p>Scroll</p>
          <img src={scrollDownArrow} alt="" />
        </div>
      </div>
    </div>
  );
}
