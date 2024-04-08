import React from "react";

const Home = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" to="/">
            My SPA
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" to="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/about">
                  About
                </a>
              </li>
              {/* Add more navigation links here */}
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <h1 className="display-4 mb-4">Welcome to my SPA!</h1>
        <p className="lead">This is a simple page with a video.</p>
        <a id="open-browser-url" style={{ display: 'none' }} href="https://restroreff.microlent.com/poc" download target="_blank" rel="noopener noreferrer"></a>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/-4zsY28t76k?si=G0huABLUs2dXKMDQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h1 className="display-4 mb-4">Thanks for visiting!</h1>
      </div>
    </>
  );
};

export default Home;
