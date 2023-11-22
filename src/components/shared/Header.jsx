import { Button, Navbar } from "keep-react";
import logo from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import "../../styles/header.css";

const Header = () => {
  const navigate = useNavigate();

  const navLinks = (
    <>
      <NavLink className="rounded px-5 py-2" to="/">
        Home
      </NavLink>
      <NavLink className="rounded px-5 py-2" to="/Blog">
        Blog
      </NavLink>
    </>
  );

  const handleHeaderBtn = () => navigate("/login");

  return (
    <header className="py-3 bg-[#FF4444]">
      <Navbar className="section bg-transparent text-white font-poppins">
        <Navbar.Container className="flex items-center">
          <Navbar.Container className="flex flex-1 items-center">
            <Navbar.Brand>
              <img className="invert" src={logo} width="100" height="40" />
            </Navbar.Brand>
            <Navbar.Divider></Navbar.Divider>
            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center justify-center gap-2 flex-1"
            >
              {navLinks}
            </Navbar.Container>
            <Navbar.Collapse collapseType="sidebar">
              <Navbar.Container tag="ul" className="flex flex-col gap-5">
                {navLinks}
              </Navbar.Container>
            </Navbar.Collapse>
          </Navbar.Container>

          <Navbar.Container className="flex gap-2">
            <Button
              onClick={handleHeaderBtn}
              className="bg-[rgb(10,13,18)] px-7"
              size="sm"
              type="primary"
            >
              Login
            </Button>
            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>
    </header>
  );
};

export default Header;
