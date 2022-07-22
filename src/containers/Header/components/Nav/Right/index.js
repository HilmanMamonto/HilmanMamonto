import React from "react";
import Avatar from "components/Avatar/Avatar";
import IconButton from "components/IconButton/IconButton";
import { useClickOutside } from "components/utility/clickOutside";
import "./styles.scss";
import { Link } from "react-router-dom";

const NavRight = ({ className }) => {
  const { show, ref, onToggle } = useClickOutside();

  return (
    <div
      className={
        "nav-right d-flex justify-content-end align-items-center gap-4 " +
        className
      }
    >
      <a href="/tour-guide">Become a tour guide</a>
      <div ref={ref} className="position-relative">
        <IconButton onClick={onToggle} variant="burger" size="large" />
        <div
          hidden={!show}
          className="burger-wrapper border d-flex flex-column gap-2 bg-white position-absolute py-3 mt-2 end-0 px-3 rounded shadow-sm"
        >
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/">Wish lists</Link>
          <Link to="/" className="border-top mt-3 pt-2">
            Logout
          </Link>
        </div>
      </div>
      <Avatar size="large" as="link" href="/dashboard" src="/andy/andy.jpg" />
    </div>
  );
};

NavRight.propTypes = {};

export default NavRight;
