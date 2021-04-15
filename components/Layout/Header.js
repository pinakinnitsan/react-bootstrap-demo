import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link href="/"><a className="navbar-brand" >React Bootstrap</a></Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item ${router.pathname == "/" ? "active" : ""}`}>
              <Link href="/"><a className="nav-link">Home</a></Link>
            </li>
            <li className={`nav-item ${router.pathname == "/about" ? "active" : ""}`}>
              <Link href="/about"><a className="nav-link">About</a></Link>
            </li>
            <li className={`nav-item ${router.pathname == "/contact" ? "active" : ""}`}>
              <Link href="/contact"><a className="nav-link">Contact</a></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;