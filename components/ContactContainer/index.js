import React from 'react';

const ContactContainer = ({ details }) => {
  return (
    <div className="container">

      <h1 className="mt-4 mb-3">{details.title}</h1>

      <div className="row">
        <div className="col-lg-8 mb-4">
          <iframe style={{
            width: "100%",
            height: "400px",
            border: '0'
          }} src={details.iframeUrl}></iframe>
        </div>
        <div className="col-lg-4 mb-4">
          <h3>{details.subTitle}</h3>
          <p>
            {details.address}
          </p>
          <p>
            <abbr title="Phone">P</abbr>: {details.telno}
          </p>
          <p>
            <abbr title="Email">E</abbr>:
            <a href={`mailto:${details.email}`}>
              {details.email}
            </a>
          </p>
          <p>
            <abbr title="Hours">H</abbr>: {details.timings}
          </p>
        </div>
      </div>
    </div>
  )
};

export default ContactContainer;