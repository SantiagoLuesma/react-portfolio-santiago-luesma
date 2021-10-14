import React from 'react';
import PText from '../components/PText';
import Button from '../components/Button';

export default function About() {
  return (
    <div>
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
      </div>
    </div>
  );
}
