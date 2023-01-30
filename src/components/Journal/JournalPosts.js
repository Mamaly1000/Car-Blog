<<<<<<< HEAD
import React from "react";

const descwraper = (text) => {
  const desc = text.split(".").slice(0, 1);
  return desc.toString();
};

const JournalPosts = ({ data }) => {
  return (
    <div
      className="bg-dark col-12 h-25 overflow-hidden d-flex mb-1 p-2 rounded-2"
      data-aos="fade-left"
    >
      <div className="col-4">
        <img
          src={data.img_url}
          alt={data.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
      <div className="col-8 d-flex justify-content-between align-items-center flex-column ps-1">
        <span className="col-12 mb-0 fs-6">{data.date}</span>
        <h6 className="col-12 mb-0 journal-title ">{data.title}</h6>
        <p className="col-12 mb-0 journal-links fs-6 display-6">
          {descwraper(data.desc)}
        </p>
      </div>
    </div>
  );
};

export default JournalPosts;
=======
import React from "react";

const descwraper = (text) => {
  const desc = text.split(".").slice(0, 1);
  return desc.toString();
};

const JournalPosts = ({ data }) => {
  return (
    <div
      className="bg-dark col-12 h-25 overflow-hidden d-flex mb-1 p-2 rounded-2"
      data-aos="fade-left"
    >
      <div className="col-4">
        <img
          src={data.img_url}
          alt={data.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
      <div className="col-8 d-flex justify-content-between align-items-center flex-column ps-1">
        <span className="col-12 mb-0 fs-6">{data.date}</span>
        <h6 className="col-12 mb-0 journal-title ">{data.title}</h6>
        <p className="col-12 mb-0 journal-links fs-6 display-6">
          {descwraper(data.desc)}
        </p>
      </div>
    </div>
  );
};

export default JournalPosts;
>>>>>>> c8a56cb8c6a7319fadd77e54b612cae83079c501
