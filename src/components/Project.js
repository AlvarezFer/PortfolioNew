import React from "react";

const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      {" "}
      <div className="mb-8">
        {" "}
        <a href={item.href} target="_blank" rel="noopener noreferrer">
          <img
            className="rounded-2xl"
            src={item.image}
            alt=""
            style={{ height: "200px" }}
          />{" "}
        </a>
      </div>{" "}
      <p
        className="capitalize text-accent text-sm mb-3"
        style={{ fontFamily: "Ubuntu, sans-serif" }}
      >
        {item.category}
      </p>{" "}
      <a href={item.href} target="_blank" rel="noopener noreferrer">
        {" "}
        <h3
          className="text-2xl font-semibold capitalize mb-3"
          style={{ fontFamily: "Ubuntu, sans-serif" }}
        >
          {item.name}
        </h3>{" "}
      </a>
      <p
        className="text-base max-w-md"
        style={{ fontFamily: "Ubuntu, sans-serif" }}
      >
        {item.description}
      </p>
    </div>
  );
};

export default Project;
