import React, { useState } from "react";

import AnimationLoader from "../AnimationLoader";

export const IsLoadingHOC = (WrappedComponent) => {
  function HOC(props) {
    const [isLoading, steLoading] = useState(true);

    const setLoadingState = (isComponentLoading) => {
      setLoadingState(isComponentLoading);
    };

    return (
      <>
        {isLoading && <AnimationLoader />}
        <WrappedComponent {...props} setLoading={setLoadingState} />
      </>
    );
  }
  return HOC;
};

export default IsLoadingHOC;
