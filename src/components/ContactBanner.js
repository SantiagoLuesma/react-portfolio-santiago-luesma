import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>Estoy interesado en trabajar contigo</PText>
          <h3 className="contactBanner__heading">¿Quieres contactarme?</h3>
          <Button btnText="Hablemos" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}
