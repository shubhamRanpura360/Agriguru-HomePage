import React from "react";
import GradientHeading from "./GradientHeading";

const AgriguruVideo = ({ videoId }) => {
  return (
    <div className="flex flex-col items-center my-6">
       <div className="flex justify-center mb-8">
        <GradientHeading
          mainText="Agriguru"
          gradientText="ONLINE TRADE"
          endText="Process"
        />
      </div>
      <div className="flex justify-center items-center">
        <iframe
          className="rounded-lg shadow-lg"
          width="1425px"
          height="821px"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=0&modestbranding=1&controls=1`}
          title="Agriguru video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default AgriguruVideo;
