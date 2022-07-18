import Avatar from "components/Avatar/Avatar";
import React from "react";

const Reviewer = () => {
  return (
    <div className="reviewer row row-cols-sm-1 row-cols-md-2">
      <div className="item mb-4">
        <div className="profile d-flex gap-3 align-items-center mb-2">
          <Avatar size="large" />
          <div className="d-flex flex-column">
            <label className="fw-semibold">Dani</label>
            <span>December 2019</span>
          </div>
        </div>
        <div className="profile d-flex gap-3 align-items-center mb-2">
          <label>
            This spot was lovely and very central to everything I wanted to see
            in Nusa Penida
          </label>
        </div>
      </div>
      <div className="item mb-4">
        <div className="profile d-flex gap-3 align-items-center mb-2">
          <Avatar size="large" />
          <div className="d-flex flex-column">
            <label className="fw-semibold">Dani</label>
            <span>December 2019</span>
          </div>
        </div>
        <div className="profile d-flex gap-3 align-items-center mb-2">
          <label>
            This spot was lovely and very central to everything I wanted to see
            in Nusa Penida
          </label>
        </div>
      </div>
      <div className="item mb-4">
        <div className="profile d-flex gap-3 align-items-center mb-2">
          <Avatar size="large" />
          <div className="d-flex flex-column">
            <label className="fw-semibold">Dani</label>
            <span>December 2019</span>
          </div>
        </div>
        <div className="profile d-flex gap-3 align-items-center mb-2">
          <label>
            This spot was lovely and very central to everything I wanted to see
            in Nusa Penida
          </label>
        </div>
      </div>
    </div>
  );
};

export default Reviewer;
