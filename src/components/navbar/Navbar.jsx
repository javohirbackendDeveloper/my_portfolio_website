import { useRef, useState } from "react";
import "./Navbar.css";
import { Equal, Menu, TableOfContents, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <Link to={"/home"}>
        <img src="/logo.png" alt="Logo" />
      </Link>

      <Menu onClick={openMenu} className="tableContentOpen" />
      <ul ref={menuRef} className="nav_menu">
        <X onClick={closeMenu} className="tableContentClose" />

        <li>
          <Link className="anchor_link" to={"/home"}>
            <p onClick={() => setMenu("home")}>Home</p>
          </Link>
          {menu === "home" ? <p>----------</p> : <></>}
        </li>
        <li>
          <Link className="anchor_link" to="about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </Link>
          {menu === "about" ? <p>----------</p> : <></>}
        </li>
        <li>
          <Link className="anchor_link" to="service">
            <p onClick={() => setMenu("service")}>Services</p>
          </Link>
          {menu === "service" ? <p>----------</p> : <></>}
        </li>
        <li>
          <Link className="anchor_link" to="work">
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </Link>
          {menu === "work" ? <p>----------</p> : <></>}
        </li>
        <li>
          <Link className="anchor_link" to="contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </Link>
          {menu === "contact" ? <p>----------</p> : <></>}
        </li>
      </ul>

      <div className="nav_connect">
        <Link className="anchor_link" to="contact">
          <p onClick={() => setMenu("contact")}>Connect with me</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
