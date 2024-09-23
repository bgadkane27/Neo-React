import { NavLink } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <>
      <div className="container error-center">
        <span className="error-msg">4 0 4</span>
        <h1>The page you are looking for cannot be found.</h1>
        <div>
        <h2>Possible reasons</h2>
        <li style={{fontSize:14, fontStyle:"italic"}}>The url may be typed incorrectly.</li>
        <li style={{fontSize:14, fontStyle:"italic"}}>The link may be broken or outdated link.</li>
        </div>
        <NavLink to="/">
          <button className="back-btn">Go Back</button>
        </NavLink>
      </div>
    </>
  );
};
