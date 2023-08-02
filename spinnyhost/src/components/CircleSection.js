import React from 'react';
import StatisticComponent from './StatisticComponent';

const CircleSection = () => {
  return (
    <section className="circle-section sec-normal sec-bg1">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4 text-left">
            <h2 className="section-heading">Our Statistics</h2>
            <p className="section-subheading">
              Unleash the Power of Data: Empowering Insights with Comprehensive Statistics
            </p>
            <a href="" className="btn btn-default-yellow-fill mt-5">
              Learn more
            </a>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-8 text-left">
            <StatisticComponent
              number="19.322"
              title="Clients"
              description="Clients are individuals or organizations that seek goods or services from a business or service provider. In the context of various industries, including web hosting, clients are the customers who rely on the expertise and offerings of a company to meet their specific needs. Clients may have different requirements, expectations, and objectives, and it is important for businesses to understand and cater to those needs to deliver satisfactory results and build strong client relationships.."
            />
            <StatisticComponent
              number="9.510"
              title="Equipment"
              description="Equipment refers to the tools, machinery, technology, or physical assets used in a business operation or project execution. The specific equipment required can vary greatly depending on the industry or nature of the project. In the case of web hosting, equipment may include servers, networking devices, data storage systems, backup solutions, and other hardware or software infrastructure necessary to provide hosting services. Proper selection, maintenance, and utilization of equipment are essential to ensure smooth operations, performance, and reliability in delivering services to clients.."
            />
            <StatisticComponent
              number="1231"
              title="Projects"
              description="Projects are temporary endeavors undertaken to achieve specific goals within a defined timeframe and with allocated resources. Projects can vary in scale and complexity, ranging from small internal initiatives to large-scale client engagements. In the context of web hosting, projects may include tasks such as website migrations, server deployments, software upgrades, security enhancements, or custom development projects tailored to meet specific client requirements. Effective project management involves careful planning, resource allocation, task coordination, and monitoring to ensure successful project delivery and client satisfaction."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircleSection;
