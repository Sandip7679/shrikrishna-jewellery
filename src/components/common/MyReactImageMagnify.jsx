import React from "react";

import ReactImageMagnify from "react-image-magnify";
import necklaceImg from "../../assets/images/neckless4.jpeg"


const MyReactImageMagnify = (props) => {
  return (
    <div> 
      <ReactImageMagnify
        {...props}
        {...{
          smallImage: {
            alt: "Wristwatch by Ted Baker London",
            isFluidWidth: true,
            src: necklaceImg,
          },
          largeImage: {
            src: necklaceImg,
            width: 1000,
            height: 480,
          },
          enlargedImageContainerStyle: {
            zIndex: "1500",
          },
          enlargedImageContainerDimensions: {
            width: "100%",
            height: "100%",
          },
        }}
      />
    </div>
  );
};

export default MyReactImageMagnify;