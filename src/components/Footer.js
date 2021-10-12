import React from 'react';
import FooterCol from './FooterCol';
import PText from './PText';

export default function Footer() {
  return (
    <div>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Santiago Luesma</h1>
          <PText>
            Desarrollador y diseñador web freelance de Córdoba, Argentina.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol />
        </div>
        <div className="footer__col3">
          <FooterCol />
        </div>
        <div className="footer__col4">
          <FooterCol />
        </div>
      </div>
    </div>
  );
}
