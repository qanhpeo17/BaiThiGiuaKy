import React from "react";
import "./film.css";
import data from "../filmData/data";
import { Link } from "react-router-dom";

function Film() {
  const divStyle = {
    background: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${data[0].image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div>
      <h1 className="bigTitle">Explore</h1>
      <p className="miniTitle">What are you gonna watch today ?</p>
      <div className="bigFilm" style={divStyle}>
        <h1 className="bigfilmTitle">{data[0].movieName}</h1>
        <p className="bigfilmDes">{data[0].description}</p>
      </div>
      <div className="newreleasedFilm">
        <h1>New Released</h1>
        <div className="listFilm">
          {data.slice(1).map((item) => (
            <Link
              key={item.id}
              to={`/filmDirectPage/${item.id}`}
              className="filmItemLink"
            >
              <div
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
                className="filmItem"
              >
                <div className="movieName">{item.movieName}</div>
                <div className="episode">Tập {item.episode}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Film;
