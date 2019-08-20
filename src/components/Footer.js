import React from 'react';

export default function Footer(){
    return (
      <footer id="footer">
          <div className="footer__details">
              <h2 className="details__h2 h2--spaced-out">&copy; All Rights Reserved</h2>
              <h2 className="details__h2">Credits:</h2>
              <ul className="details__ul">
                  <li><a className="details__a" href="https://www.pexels.com/photo/aerial-photography-of-seashore-1624450/">Landing Page Picture</a></li>
                  <li><a className="details__a" href="https://seeklogo.com/vector-logo/316033/you-tube-2017">Youtube Logo</a></li>
                  <li><a className="details__a" href="https://discordapp.com/branding">Discord Logo</a></li>
                  <li><a className="details__a" href="https://github.com/MWR1/neocities-website">Source Code</a></li>
              </ul>
          </div>
          <div className="footer__last-updated">
            <h3>Last updated: <span className="last-updated__span">{document.lastModified.substr(0, 10)}</span></h3>
            <svg className="last-updated__svg" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="80%" viewBox="0 0 900 340">
                <path d="M6313.778,960.9s-376.08-30.821-477.793,85.491-156.068,137.13-276.719,132.557S5355.3,1296.832,5355.3,1296.832h958.476Z" transform="translate(-5355.302 -957.198)"/>
            </svg>
          </div>

      </footer>  
    );
}