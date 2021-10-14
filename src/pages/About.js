import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutInfoItem from '../components/AboutInfoItem';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hola, yo soy <span>Santiago Luesma</span>
            </p>
            <h2 className="about__heading">Un desarrollador de software</h2>
            <div className="about__info">
              <PText>
                Me llamo Santiago Luesma, tengo 27 años y soy de Córdoba,
                Argentina.
                <br />
                <br />
                Actualmente trabajo de manera freelance haciendo sitios web con
                la tecnología de WordPress y estudio programación,
                principalmente orientado al frontend pero con la idea de luego
                al dominar éstas tecnologías comenzar con backend y convertirme
                en Full Stack Developer.
                <br />
                <br />
                Me considero una persona inteligente, emprendedora, autodidacta
                y que le encanta ayudar a los demás.
              </PText>
            </div>
            <Button btnText="Descargar CV" btnLink="#" />
          </div>
          <div className="right">
            <img
              src="https://picsum.photos/id/4/566/769?grayscale"
              alt="Santiago Luesma"
            />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem />
          </div>
        </div>
      </div>
    </AboutPageStyles>
  );
}
