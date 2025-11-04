
// import React from "react";
// import ReactImageMagnify from "react-image-magnify";

// const ZoomOnHoverImage = ({ src }) => {
//   return (
//     <div
//       className="relative w-[400px] z-50" // ensure high z-index
//       style={{ overflow: "visible" }}     // allow zoom to show outside
//     >
//       <ReactImageMagnify
//         {...{
//           smallImage: {
//             alt: "Jewellery",
//             isFluidWidth: true,
//             src: src,
//           },
//           largeImage: {
//             src: src,
//             width: 1200,
//             height: 1800,
//           },
//           enlargedImageContainerStyle: {
//             zIndex: 9999,                 // make sure it's above all
//             backgroundColor: "white",     // optional for clarity
//           },
//           enlargedImageContainerDimensions: {
//             width: "200%",                // adjust to your design
//             height: "150%",
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default ZoomOnHoverImage;




import React, { useState, useEffect } from "react";
import ReactImageMagnify from "react-image-magnify";

const ZoomOnHoverImage = ({ src }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // mobile breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="relative w-full max-w-[600px] mx-auto z-50"
      style={{ overflow: "visible" }}
    >
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "Jewellery",
            isFluidWidth: true,
            src: src,
          },
          largeImage: {
            src: src,
            width: 1200,
            height: 1800,
          },
          enlargedImageContainerStyle: {
            zIndex: 9999,
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            position: "absolute",
            top: isMobile ? "10%" : "-10%",
            // top: isMobile ? "10%" : "-10%",
            left: isMobile ? "50px" : "105%",
            transform: isMobile ? "none" : "translateY(0)",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",

            width: isMobile ? "500vw" : "auto",
            height: isMobile ? "90vh" : "auto",
          },
          enlargedImageContainerDimensions: {
            width: isMobile ? "100%" : "170%",
            height: isMobile ? "100%" : "150%",
          },
          enlargedImagePosition: isMobile ? "over" : "beside",
          // enlargedImagePosition: "beside",
        }}
      />
    </div>
  );
};

export default ZoomOnHoverImage;




// import React from "react";
// import ReactImageMagnify from "react-image-magnify";

// const ZoomOnHoverImage = ({ src }) => {
//   return (
//     <div className="max-w-[400px] mx-auto">
//       <ReactImageMagnify
//         {...{
//           smallImage: {
//             alt: "Jewellery",
//             isFluidWidth: true,
//             src,
//           },
//           largeImage: {
//             src,
//             width: 1200,
//             height: 1800,
//           },
//           enlargedImageContainerStyle: {
//             zIndex: 1500,
//             backgroundColor: "white",
//           },
//           enlargedImageContainerDimensions: {
//             width: "100%",
//             height: "100%",
//           },
//           isHintEnabled: true,
//           shouldHideHintAfterFirstActivation: false,
//         }}
//       />
//     </div>
//   );
// };

// export default ZoomOnHoverImage;



// import React, { useState, useEffect } from "react";
// import ReactImageMagnify from "react-image-magnify";

// const ZoomOnHoverImage = ({ src }) => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div
//       className="relative w-full max-w-[400px] mx-auto z-50"
//       style={{
//         overflow: "visible",
//         display: "flex",
//         justifyContent: "center",
//       }}
//     >
//       <ReactImageMagnify
//         {...{
//           smallImage: {
//             alt: "Jewellery",
//             isFluidWidth: true,
//             src: src,
//           },
//           largeImage: {
//             src: src,
//             width: 1200,
//             height: 1800,
//           },

//           // 🧩 The magic fix
//           enlargedImageContainerStyle: {
//             zIndex: 9999,
//             backgroundColor: "white",
//             borderRadius: "12px",
//             boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
//             position: isMobile ? "fixed" : "absolute", // fixed for mobile
//             top: isMobile ? "50%" : "-10%",
//             left: isMobile ? "50%" : "105%",
//             transform: isMobile
//               ? "translate(-50%, -50%)"
//               : "translateY(0)",
//             width: isMobile ? "90vw" : "auto",
//             height: isMobile ? "70vh" : "auto",
//           },
//           enlargedImageContainerDimensions: {
//             width: isMobile ? "100%" : "180%",
//             height: isMobile ? "100%" : "150%",
//           },
//           enlargedImagePosition: isMobile ? "over" : "beside",
//           isHintEnabled: true,
//           shouldHideHintAfterFirstActivation: false,
//         }}
//       />
//     </div>
//   );
// };

// export default ZoomOnHoverImage;



