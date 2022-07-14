import React from "react";
import movies from "../movies.json";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Anasayfa = () => {
  return (
    <main>
     
        <Navbar />

        <section>
          {movies &&
            movies.results.length > 0 &&
            movies.results.map((e, key) => (
              <div className="movies" key={key}>
                <Link to="">
                  <div className="card">
                    <div className="card-top">
                      <Link to="" className="top"> {e.title}</Link></div>
                    <div className="card-body">
                      <img src={e.poster_path} alt="" />
                    </div>
                    <div className="contact">
                      <Link to="">
                      <i className="fas fa-star" style={{ color: "red" }}>
                        {e.vote_count}
                      </i></Link>
                      <Link to="">
                      <i
                        className="fas fa-poll"
                        style={{ color: "rgb(64, 134, 190)" }}
                      >
                        {" "}
                        {e.vote_average}
                      </i>
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            ))}

        
        </section> 
     
    </main>
  );
};

export default Anasayfa;
