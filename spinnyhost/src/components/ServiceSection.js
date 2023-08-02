import React from 'react';
import "./ServiceSection.css";

const ServiceSection = () => {
  return (
    <div className="service-container">

      <div className="service-main">
        <div className="service-row">
          <div className="service-fade-in">
            <img className="service-icon" src="img/dns.svg" alt="" />
          </div>
          <div className="service-info-offset">
            <div className="service-info">
              <h4>Redundant DNS</h4>
              <p>Ensure uninterrupted online presence with redundant DNS for enhanced reliability and continuous accessibility of your services.</p>
            </div>
            <a href="/" className="btn service-btn-yellow mt-3">Learn more</a>
          </div>
        </div>
       
        <div className="service-row">
          <div className="service-info-offset">
            <div className="service-info">
              <h4>Remote Daily Backups</h4>
              <p>Protect your valuable data with ease through remote daily backups, ensuring peace of mind and quick recovery options for your dedicated server.</p>
            </div>
            <a href="/" className="btn service-btn-yellow mt-3">Backup now</a>
          </div>
          <div className="service-fade-in">
            <img className="service-icon" src="img/backups.svg" alt="backups" />
          </div>
        </div>
       
        <div className="service-row">
          <div className="service-fade-in">
            <img className="service-icon" src="img/monitoring.svg" alt="monitoring 24/7/365" />
          </div>
          <div className=" service-info-offset">
            <div className="service-info">
              <h4>24/7/365 Monitoring</h4>
              <p>Enjoy continuous peace of mind with 24/7/365 monitoring, ensuring the optimal performance and security of your dedicated server around the clock.</p>
            </div>
            <a href="/" className="btn service-btn-yellow mt-3">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
