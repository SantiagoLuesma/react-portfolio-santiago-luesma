import React from 'react';
import PText from './PText';

export default function AboutInfoItem({
  title = 'this is title',
  items = ['HTML', 'CSS'],
}) {
  return (
    <div>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
          </div>
        ))}
      </div>
    </div>
  );
}