import React, { useState } from 'react';
import './FaqHosting.css';
const FaqHosting = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const renderAccordionItem = (index, question, answer) => (
    <div key={index} className="panel-wrap">
      <div className="panel-title" onClick={() => handleAccordionClick(index)}>
        <span>{question}</span>
        <div className="float-right">
          <i className={`fa ${activeIndex === index ? 'fa-minus c-pink' : 'fa-plus'}`}></i>
        </div>
      </div>
      {activeIndex === index && (
        <div className="panel-collapse">
          <div className="wrapper-collapse">
            <div className="info">
              <ul className="list">
                <li>
                  <p>{answer}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section className="sec-normal sec-grad-yellow-to-grey-right">
      <img className="path-right" src="patterns/exapath.svg" alt="" />
      <div className="faq">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <h2 className="section-heading">Frequently Asked Questions Hosting</h2>
              <p className="section-subheading">Answers to Your Frequently Asked Questions about Hosting - Empowering Your Online Presence</p>
            </div>
            <div className="col-sm-12">
              <div className="accordion faq pt-5">
                {renderAccordionItem(
                  0,
                  'What is Cloud Hosting?',
                  'Cloud hosting refers to a type of web hosting service that utilizes multiple interconnected servers to distribute resources and handle website or application hosting. In cloud hosting, your website or application is not tied to a single physical server but is instead hosted on a virtual infrastructure that spans across multiple servers and data centers. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                )}
                {renderAccordionItem(
                  1,
                  'Does Shared Web Hosting include Email Hosting as well?',
                  'Yes, shared web hosting often includes email hosting as part of the package. Email hosting allows you to create and manage email accounts associated with your domain name, enabling you to have professional-looking email addresses (e.g., yourname@yourdomain.com)...'
                )}
                {renderAccordionItem(
                  2,
                  'Is an upgrade possible from my current Linux Shared Hosting Plan?',
                  'Yes, it is usually possible to upgrade your current Linux shared hosting plan. Shared hosting providers often offer different hosting plans with varying resource allocations and features to cater to different needs and budgets. If you find that your current plan no longer meets your requirements, upgrading to a higher-tier plan can provide you with additional resources and capabilities.'
                )}
                {renderAccordionItem(
                  3,
                  'Is there any money back guarantee with the Linux Web Hosting services?',
                  'Many Linux web hosting providers offer a money-back guarantee as part of their service. The specific details and terms of the money-back guarantee can vary among hosting providers, so it\'s important to review the hosting provider\'s terms and conditions or contact their customer support for precise information..'
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqHosting;
