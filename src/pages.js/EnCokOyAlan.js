import React, { useEffect, useState } from "react";
import Navbar from "../components.js/Navbar";
import movies from "../movies.json";
import { Link } from "react-router-dom";

const EnCokOyAlan = () => {
  let [data, setData] = useState(null);

  useEffect(() => {
    let dataa = movies.results.filter((e) => e.vote_count > 2500);

    setData(dataa);
  }, []);
  console.log({ data });
  return (
    <main>
      <Navbar />
      <section>
        {data &&
          data.map((e, key) => (
            <div className="movies" key={key}>
              <Link to="">
                <div className="card">
                  <div className="card-top">
                    <Link to="" className="top">
                      {" "}
                      {e.title}
                    </Link>
                  </div>
                  <div className="card-body">
                    <img src={e.poster_path} alt="" />
                  </div>
                  <div className="contact">
                    <Link to="">
                      <i className="fas fa-star" style={{ color: "red" }}>
                        {e.vote_count}
                      </i>
                    </Link>
                    <Link to="">
                      <i className="fas fa-poll" style={{ color: "rgb(64, 134, 190)" }} >
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

export default EnCokOyAlan;
