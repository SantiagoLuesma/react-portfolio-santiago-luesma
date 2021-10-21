import React from 'react';
import PText from './PText';

export default function Map() {
  return (
    <div>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText>Córdoba, Argentina</PText>
          <a
            href="https://www.google.com.ar/maps/place/Centro,+C%C3%B3rdoba/@-31.4150309,-64.1904697,15z/data=!3m1!4b1!4m5!3m4!1s0x9432a29d1d3f9d45:0xcbcd910412819792!8m2!3d-31.4164315!4d-64.1827297"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Map
          </a>
        </div>
      </div>
    </div>
  );
}
