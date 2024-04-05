import React, { useEffect } from "react";

const Home = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    // function isInstagramApp() {
    //     const userAgent = navigator?.userAgent;
    //     return userAgent?.includes('Instagram') || userAgent?.includes('FBAN/Instagram'); // Detect Instagram app more reliably
    //   }
      
    //   function openLink(baseUrl) {
    //     if (isInstagramApp()) {
    //       // Open in Safari or Chrome on iOS (consider user preference for Android)
    //       window.location.href = window.location.origin;
    //     } else {
    //         window.open(baseUrl, '_blank');
        
    //     }
        
    //   }
    // function openLink(url) {
    //     var ua = navigator.userAgent;
    //     var isInstagram = (ua.indexOf('Instagram') > -1) ? true : false;
        
    //     if (isInstagram) {
    //       if (/iPad|iPhone|iPod/.test(ua)) {
    //         // Open in Safari on iOS
    //         window.location.href = 'https://restroreff.microlent.com/poc';
    //       } else if (/Android/.test(ua)) {
    //         // Open in Chrome on Android
    //         window.location.href = 'googlechrome://restroreff.microlent.com/poc';
    //       }
    //     }
        
        
    //   }
      
    //   // Call the openLink function with your URL
    //   openLink("https://restroreff.microlent.com/poc");

    //   useEffect(()=>{
    //     openLink("https://restroreff.microlent.com/poc");
    //   },[])

    //   useEffect(() => {
    //     const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    //     const str = navigator.userAgent;
    //     const instagram = str.indexOf("Instagram");
    //     const facebook = str.indexOf("FB");
    
    //     if (/android/i.test(userAgent) && (instagram !== -1 || facebook !== -1)) {
    //       const openBrowserUrl = document.getElementById('open-browser-url');
    //       if (openBrowserUrl) {
    //         openBrowserUrl.click();
    //       }
    //     }
    //   }, []);
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
      </div>
    </>
  );
};

export default Home;
