import "./ProjectCard.css";

function ProjectCard({ image, title, description, link, linktext }) {
  return (
    <div className="container">
      <div className="card-parent">
        <div className="card-img-parent">
          <img src={image} alt={title} className="card-img" />
        </div>
        <div className="card-body-parent">
          <div className="card-body-header">{title}</div>
          <div className="card-body-text">{description}</div>
        </div>
        <div className="card-link-parent">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {linktext}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
