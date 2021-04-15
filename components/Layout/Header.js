import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import { Navbar, Nav } from 'react-bootstrap'

{/* <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
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
</nav> */}

const Header = () => {
  const router = useRouter();

  return (
    <Navbar collapseOnSelect className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top" expand="lg" bg="dark" variant="dark">
      <div className="container">
        <Link href="/"><a className="navbar-brand" >React Bootstrap</a></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <ul className="navbar-nav">
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
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>

  );
}

export default Header;