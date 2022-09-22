import React from "react";
function Home() {
  return (
    <div className="home">
      <div className="home-image">
        <img src="https://i.imgur.com/6IQf0EY.jpg" alt="Home-image"></img>
      </div>
      <div className="about-text">
        <br></br>
        <article>
          <h2>
            The future is <b>green</b>.
          </h2>
          <br></br>
          <p>
            Welcome to the knowledge you need to create an indoor jungle.
            Anybody can have a green thumb! At <i>Plant Daddy</i>, we make it
            super easy to find the information you need to keep your plant
            babies alive and healthy!
          </p>
          <br></br>
          <p>
            If you'd like, you can also add your own by selecting "My List"
            above!
          </p>
        </article>
      </div>
    </div>
  );
}

export default Home;
