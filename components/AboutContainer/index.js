import React from 'react';

const AboutContainer = ({ details }) => {
  const renderParagraph = () => {
    return details.content.split('\n').map((d, id) => {
      return (
        <p key={id}>{d}</p>
      )
    })
  }

  return (
    <div className="container">

      <h1 className="mt-4 mb-3">{details.title}</h1>

      <div className="row">
        <div className="col-lg-6">
          <img className="img-fluid rounded mb-4" src={details.imageUrl} alt="" />
        </div>
        <div className="col-lg-6">
          <h2>{details.subTitle}</h2>
          {renderParagraph()}
        </div>
      </div>
    </div>
  );
}

export default AboutContainer;