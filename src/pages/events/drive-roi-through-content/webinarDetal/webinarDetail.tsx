import WebinardetailContainer from "@qoruz/pages/events/drive-roi-through-content/webinarDetal/webinarDetail.style";
import React from "react";

const WebinarDetail = () =>{
  return(
    <WebinardetailContainer>
      <p className="title">Webinar</p>
      <h1>How to drive ROI through Content?</h1>
      <div className="flex justify-between">
        <p className="iternary">
          <span className="title">Date</span>
          <span className="detail">June 28th, 2023</span>
        </p>
        <p className="iternary">
          <span className="title">Time</span>
          <span className="detail">3:00 to 4:00 PM IST</span>
        </p>
        <p className="iternary">
          <span className="title">Webinar Length</span>
          <span className="detail">1 hour</span>
        </p>
      </div>
      <p className="details">Drive ROI by leveraging relevant content that aligns with your business goals to attract and engage your target audience.</p>
    </WebinardetailContainer>
  )
}

export default WebinarDetail;