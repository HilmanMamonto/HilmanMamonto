import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Button from "components/Button/Button";

const WalletInfo = ({ value = 0, className }) => {
  return (
    <div className={"wallet-info-wrapper " + className}>
      <div className="wallet-info d-flex gap-3 justify-content-center w-100">
        <label>Total Earn</label>
        <h2 className={"mb-3"}>${value}</h2>
      </div>
      <div className="mt-4">
        <Button
          justifyContent="space-between"
          color="primary"
          rightIcon="btn-rounded"
          fullWidth
          size="small"
          label="witdraw"
        />
      </div>
    </div>
  );
};

WalletInfo.propTypes = {
  size: PropTypes.string,
};

export default WalletInfo;
