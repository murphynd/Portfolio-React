import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

function ProjectItem(props) {
  return (
    <>
      <li className="projects__item">
        <Link className="projects__item__link" to={props.path}>
          <figure
            className="projects__item__pic-wrap"
            data-category={props.label}
          >
            <img
              src={props.src}
              alt="Travel Image"
              className="projects__item__img"
            />
          </figure>
          <div className="projects__item__info">
            <h3 className="projects_items">{props.title}</h3>
            <h5 className="projects__items">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ProjectItem;
