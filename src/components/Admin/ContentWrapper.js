import React from "react";

const ContentWrapper = ({ noItems = false, children }) => {
  return (
    <>
      <div className="content-wrapper">
        {noItems ? <div  className="no-items"><h3>😔 Items Not Found</h3></div> : <div>{children}</div>}
      </div>
    </>
  );
};

export default ContentWrapper;
