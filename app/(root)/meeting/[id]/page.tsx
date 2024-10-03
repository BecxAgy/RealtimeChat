import React from "react";

const Meeting = ({ params }: { params: { id: string } }) => {
  return <div className="text-white">Meeting {params.id}</div>;
};

export default Meeting;
