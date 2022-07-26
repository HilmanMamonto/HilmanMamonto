import React from "react";
import "./styles.scss";
import { useScrollPos } from "components/utility/scrollPos";
import Slide from "components/DataDisplay/Slide/Slide";
import Icons from "components/Icons";
import { Link, useLocation } from "react-router-dom";

const HeaderCategories = ({ className = "" }) => {
  const { scrollPos } = useScrollPos();
  const location = useLocation();

  const classes = {
    shadow: scrollPos >= 18 ? "shadow-sm " : "",
  };

  const arr = [
    { name: "mountain", href: "?category=mountain" },
    { name: "middle east", href: "?category=middle-east" },
    { name: "japanese", href: "?category=japanese" },
    { name: "dive", href: "?category=dive" },
    { name: "beach", href: "?category=beach" },
    { name: "cities", href: "?category=cities" },
    { name: "historical", href: "?category=historical" },
    { name: "islands", href: "?category=islands" },
    { name: "surfing", href: "?category=surfing" },
    { name: "pool", href: "?category=pool" },
    { name: "watter fall", href: "?category=watter-fall" },
    { name: "village", href: "?category=village" },
    { name: "fruity", href: "?category=fruity" },
  ];

  return (
    <div className={"header-categories " + classes.shadow + className}>
      <Slide
        onChange={() => ""}
        interval="sm"
        gap={5}
        className="container categories-items"
      >
        {arr.map((item) => {
          const activate = item.href === location.search ? "active" : "";
          return (
            <Link
              to={item.href}
              className={
                "hc-item d-flex h-100 align-items-center justify-content-center flex-column gap-1 " +
                activate
              }
              key={item.name}
            >
              <Icons className="hc-icon" variant={item.name} size="large" />
              <small>{item.name}</small>
            </Link>
          );
        })}
      </Slide>
    </div>
  );
};

export default HeaderCategories;
