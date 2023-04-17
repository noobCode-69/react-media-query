import React from "react";

import MediaQuery from "../components/MediaQuery/MediaQuery";
import MediaType from "../components/MediaType/MediaType";

export default {
  title: "App",
};

// const MyApp = () => {
//   const [isMobile, windowWidth] = MediaQuery(
//     { minWidth: 300, maxWidth: 500 },
//     (currWindowWidth) => {
//       console.log(currWindowWidth);
//     }
//   );
//   return (
//     <div>
//       {isMobile ? "We are using it on mobile" : "We are using it on desktop"}
//       <br />
//       {windowWidth}
//     </div>
//   );
// };

const MyApp = () => {
  const mediaType = MediaType();
  return mediaType == "mobile" ? <div>Mobile</div> : <div>Desktop</div>;
};

export const App = () => <MyApp />;
