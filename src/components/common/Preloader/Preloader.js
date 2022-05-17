import React from "react";

import preloader from "../../../assets/images/preloader.gif";

const Preloader = () => {
  return (
    <div style={{backgroundColor: 'white'}}>
      <img src={preloader} alt="preloader"/>
    </div>
  )
}

export default Preloader