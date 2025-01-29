import React from "react";

const ActiveOffers = () => {
  return (
    <div className="container">
      <div className="welcome-message">
        <p>Hi Skylight Alwar, Welcome to Qraze!</p>
      </div>

      <h2 className="section-title">Active Offers</h2>

      <div className="offer-card">
        <div className="offer-details">
          <strong>Campaign Name</strong>
          <p>
            Start date <span>25th Jan 2025, 00:00 AM</span>
          </p>
          <p>
            End date <span>25th Jan 2025, 00:00 AM</span>
          </p>
          <p>
            Redemptions <span>150</span>
          </p>
        </div>
        <div className="offer-badge">
          <p>25% off</p>
        </div>
      </div>

      <button className="avail-now-btn">Avail now</button>
    </div>
  );
};

export default ActiveOffers;
