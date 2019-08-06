import React from 'react';
import EarningContainer from "../components/EarningContainer"

function Footer() {
    return (
      <div className="footer">
          <EarningContainer />
          <div>Your Total Earnings:</div>
      </div>
    );
  }

export default Footer;