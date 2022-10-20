import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="text-lg text-gray-700 hover:underline duration-300
           cursor-pointer leading-6 ">{title}</h1>
      {Links.map((link) => (
        <li className='' key={link.name}>
          <a
            className="text-gray-700 hover:underline duration-300
          cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;