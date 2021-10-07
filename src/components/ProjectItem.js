import React from 'react';
import { Link } from 'react-router-dom';
import projectImg from '../assets/images/projectImg.png';

export default function ProjectItem() {
  return (
    <div>
      <Link to="/projects" className="projectItem__img">
        <img src={projectImg} alt="Project Img" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">Project 1</h3>
        </Link>
        <p className="projectItem__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, odio, unde.
        </p>
      </div>
    </div>
  );
}
