import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { useEffect } from "react";
import { useRef } from "react";

const FormWrapper = ({ children, className }) => {
  const ref = useRef();

  useEffect(() => {
    if (ref) ref.current.scroll(0, 0);
  }, [children]);

  return (
    <div ref={ref} className={"form-wrapper " + className}>
      <div className="content container-sm mx-3 mx-md-0 bg-white">
        {children}
      </div>
    </div>
  );
};

FormWrapper.propTypes = {};

export default FormWrapper;
