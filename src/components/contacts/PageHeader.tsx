import React from "react";

interface title {
  title: string
}

const PageHeader = ({title}:title) => {
  return <div className="bg-purple-700 text-white text-3xl text-center p-1 mb-2">
    <p>{title}</p>
  </div>;
};

export default PageHeader;
