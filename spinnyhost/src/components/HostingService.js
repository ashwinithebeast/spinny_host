import React from 'react';
import './HostingService.css';
import { AiFillCheckCircle } from 'react-icons/ai';

const HostingService = () => {
  return (
    <>
      <div className="Hosting-Technical-Specifications">
        <div className="Hosting-Technical">
          <div className="Specifications">
            <h2 >Hosting Technical Specifications</h2>
            <p>Technical specifications play a vital role in determining the
              performance, reliability, and scalability of a hosting service.
              First and foremost, consider the server resources offered,
              including CPU (Central Processing Unit), RAM (Random Access Memory),
              and storage capacity. These resources directly impact the processing
              power and speed of your website or application. Additionally,
              assess the network connectivity and bandwidth provided by the
              hosting provider to ensure that your website can handle the
              expected traffic volume without bottlenecks. It is also essential
              to examine the operating system options available, such as Linux
              or Windows, to ensure compatibility with your website's technology
              stack. Consider the database options, such as MySQL or PostgreSQL,
              and ensure that they align with your application's requirements.
              Security features like SSL certificates, firewalls, and DDoS
              protection are crucial for safeguarding your data and protecting
              against cyber threats. Finally, look into the scalability options,
              including the ability to easily upgrade resources or switch to a
              higher-tier hosting plan as your website or application grows.
              By carefully evaluating and selecting the right hosting technical
              specifications, you can ensure optimal performance, reliability,
              and security for your online presence.</p>
          </div>


          <div className="Technical-Specifications-table">
            <div className="Technical-Specifications">
              <div className="table-heading">
                <p>Software <span className="pink-badge">PLUS</span></p>
                <p >Databases</p>
                <p >Additional Software</p>
              </div>
              <hr />


              <div className="table-item">
                <p><AiFillCheckCircle />PHP 5.5/5.6/7.0/7.1</p>
                <p><AiFillCheckCircle />MySQL 5.6</p>
                <p><AiFillCheckCircle />Zend Engine</p>
              </div>
              <hr />
              <div className="table-item">
                <p><AiFillCheckCircle />Perl</p>
                <p><AiFillCheckCircle />phpMyAdmin 4.6.6</p>
                <p><AiFillCheckCircle />Zend Optimizer</p>
              </div>

              <div className="table-item">
                <p><AiFillCheckCircle />Python 2.6.6</p>
                <p><AiFillCheckCircle />FTPES Supported</p>
                <p><AiFillCheckCircle />Zend Guard Loader</p>
              </div>

              <div className="table-item">
                <p><AiFillCheckCircle />PostgreSQL</p>
                <p><AiFillCheckCircle />MSSQL Stored Procedures</p>
                <p><AiFillCheckCircle />ionCube Loader</p>
              </div>

              <div className="table-item">
                <a href="/" className="specs-btn">All Specs</a>
                <a href="/" className="specs-btn">All Specs</a>
                <a href="/" className="specs-btn">All Specs</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default HostingService;
