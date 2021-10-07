import React from 'react';
import SectionTitle from './SectionTitle';
import ServiceSectionItem from './ServiceSectionItem';

export default function ServiceSection() {
  return (
    <div>
      <SectionTitle subheading="What i will do for you" heading="Services" />

      <div className="services__allItems">
        <ServiceSectionItem />
        <ServiceSectionItem />
        <ServiceSectionItem />
      </div>
    </div>
  );
}
