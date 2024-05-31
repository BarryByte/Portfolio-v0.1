import "./Tile.css";
function Tile({
  header,
  subHeader,
  img,
  text,
  link,
  linkText,
  position,
  style,
  bgColor
}) {
  return (
    <div className={`tile ${position} ${bgColor} `}>
      <div className="tile-img-parent">
        <img src={img} style={style} alt="" />
      </div>
      <div className="tile-text-parent">
        {header ? <h2>{header}</h2> : ""}
        {subHeader ? <h3>{subHeader}</h3> : ""}
        <div className="tile-text">{text}</div>
        <div className="tile-link-parent">
          <a href={link} className="tile-link">
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Tile;
