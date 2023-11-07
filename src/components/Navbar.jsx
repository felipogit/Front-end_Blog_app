import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../images/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutNavbar = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>ARTE</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>CIÊNCIA</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>TECNOLOGIA</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>PROJETO</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>COMIDA</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logoutNavbar}>Sair</span>
          ) : (
            <Link className="link" to="/login">
              Entrar
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Escrever
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
