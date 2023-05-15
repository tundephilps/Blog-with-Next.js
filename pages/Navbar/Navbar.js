import React, { useState, useEffect } from "react";
import * as Icons from "react-icons/fa";
import Button from "../Navbar/Button";
import Link from "next/link";

function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1065) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1065) {
        setMobile(true);
      } else {
        setMobile(false);
        setSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="navbar top-0">
        <Link
          href="/"
          //  className="navbar-logo"
          //    onClick={() => setSidebar(false)}
        >
          <Icons.FaPiedPiper />
          BLOG
        </Link>

        <ul className="nav-item">
          return (
          <li className="">
            <Link href="/">
              <Icons.FaHome />
              <span>Home</span>
            </Link>
            <li className="">
              <Link href="/">
                <Icons.FaHome />
                <span>Home</span>
              </Link>
            </li>
            <li className="">
              <Link href="/">
                <Icons.FaHome />
                <span>Home</span>
              </Link>
            </li>
            <li className="">
              <Link href="/">
                <Icons.FaHome />
                <span>Home</span>
              </Link>
            </li>
          </li>
          );
        </ul>

        {mobile && (
          <div className="sidebar-toggle">
            {sidebar ? (
              <Icons.FaTimes
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            ) : (
              <Icons.FaBars
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            )}
          </div>
        )}
      </nav>

      <div>
        <ul className="sidebar-items">
          return (
          <li className="nav-item" onClick={() => setSidebar(false)}>
            <Link href="/">
              <Icons.FaHome />
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-item" onClick={() => setSidebar(false)}>
            <Link href="/">
              <Icons.FaBlog />
              <span>Blog</span>
            </Link>
          </li>{" "}
          <li className="nav-item" onClick={() => setSidebar(false)}>
            <Link href="/">
              <span>Blog</span>
            </Link>
          </li>
          );
        </ul>
        <Button onClick={() => setSidebar(false)} />
      </div>
    </>
  );
}

export default Navbar;
