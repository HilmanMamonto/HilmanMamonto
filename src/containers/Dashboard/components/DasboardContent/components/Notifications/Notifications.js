import { ANIMATE_FADEINDOWN, ANIMATE_FADEINUP } from "assets/animate/animate";
import DahsboardList from "components/DataDisplay/DahsboardList/DahsboardList";
import React from "react";

const Notifications = () => {
  const arr = [
    {
      name: "name",
      message: "Ordered Dubai",
      time: "2 minutes ago",
      imageUr: "/tgr/olivia-small.jpg",
    },
    {
      name: "name",
      message: "Ordered Giza",
      time: "5 hours ago",
      imageUr: "/tgr/daniel-small.jpg",
    },
    {
      name: "name",
      message: "Ordered Giza",
      time: "2 days ago",
      imageUr: "/tgr/emma-small.jpg",
    },
    {
      name: "name",
      message: "Succes transaction",
      time: "5 days ago",
      imageUr: "/tgr/noah-small.jpg",
    },
    {
      name: "name",
      message: "Has give a review to you",
      time: "10 days ago",
      imageUr: "/tgr/daniel-small.jpg",
    },
  ];

  return (
    <div className="d-flex flex-column gap-3 ">
      <h1 className={"mb-4 " + ANIMATE_FADEINDOWN}>Notifications</h1>
      {arr.map((item, i) => {
        return (
          <DahsboardList
            key={i}
            src={item.imageUr}
            name={item.name}
            mid={item.message}
            right={item.time}
            className={ANIMATE_FADEINUP}
            style={{ animationDelay: i * 0.3 + "s" }}
          />
        );
      })}
    </div>
  );
};

export default Notifications;
