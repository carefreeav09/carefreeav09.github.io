import React from "react";

const Tab = ({ children, name, key }: any) => {
  return (
    <div
      className="tab-pane fade show active"
      id={name}
      role="tabpanel"
      aria-labelledby={`${key}-tab}`}
    >
      {children}
    </div>
  );
};

export default Tab;
