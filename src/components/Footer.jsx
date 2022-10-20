import React from "react";
import Item from "./Item";

const Footer = () => {
  return (
    <footer className=" bg-black text-white w-full absolute">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 sm:px-8 px-5 py-7">
      <Item Links={COL1} title="Questions Contact us." />
      <Item Links={COL2} title=""/>
      <Item Links={COL3} title=""/>
      <Item Links={COL4} title=""/>
    </div>
       <span className='text-gray-700 hover:underline duration-300
          text-sm cursor-pointer leading-6'>&copy;{new Date().getFullYear()}www.miskokdesi.sk | Made with ❤️| Only for educational purposes</span>
    </footer>
  );
};

export default Footer;

export const COL1 = [
  { name: "FAQ", link: "#" },
  { name: "Investor Relations", link: "#" },
  { name: "Privacy", link: "#" },
  { name: "Speed Test", link: "#" },
];
export const COL2 = [
  { name: "Help Center", link: "#" },
  { name: "Jobs", link: "#" },
  { name: "Cookie Preferences", link: "#" },
  { name: "Legal Guarantee", link: "#" },
];
export const COL3 = [
  { name: "Account", link: "#" },
  { name: "Ways to Watch",Link: "#" },
  { name: "Corporate Information", link: "#" },
  { name: "Legal Notices", link: "#" },
];
export const COL4 = [
  { name: "Media Center", link: "#" },
  { name: "Terms of Use", link: "#" },
  { name: "Contact Us", link: "#" },
  { name: "Only on Netflix", link: "#" },
];
