import { Link } from "react-router-dom";
import "./Menu.css";
export function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg menu navbar-dark fixed-top animate__animated animate__flash">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Guns'N Roses
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="navbar-brand" to="history">
                  History
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand" to="members">
                  Members
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand" to="shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand" to="fans">Fans</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
