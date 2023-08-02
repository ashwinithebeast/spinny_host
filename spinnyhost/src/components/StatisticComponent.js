import React from 'react';

const StatisticComponent = ({ number, title, description }) => {
  return (
    <div className="col-sm-12 col-md-4 col-lg-4 float-left">
      <div className="skill-section">
        <div className="circle-wrapper">
          <div
            className="circle center-block color-dark-2"
            data-startdegree="0"
            data-dimension="180"
            data-text={`<strong class='number'>${number}</strong><div class='title-round'>${title}</div>`}
            data-width="5"
            data-fontsize="17"
            data-percent="45"
            data-fgcolor="#808080"
            data-bgcolor="transparent"
            data-bordersize="2"
          ></div>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default StatisticComponent;
