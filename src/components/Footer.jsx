import React from "react";

function Footer() {
  return (
    <>
      <div className=" bottom-0 pt-2 mx-auto mb-0 w-screen bg-black opacity-50 h-24 ">
        <p className="text-sm">Questions? Contact us.</p>
        <div className=" text-white ">
          <ul className="text-xs box-border m-0 p-0">
            <li className="ml-0 pr-3 box-border">FAQ</li>
            <li className="ml-0 pr-3 box-border">Help Center</li>
            <li className="ml-0 pr-3 box-border">Terms of Use </li>
            <li className="ml-0 pr-3 box-border">Privacy</li>

            <li className="ml-0 pr-3 box-border">
              {" "}
              Cookie Preferences<br></br>
            </li>
            <li>Corporate Information</li>
            <li className=" pt-1">
              &copy;{new Date().getFullYear()} www.miskokdesi.sk | Only for
              educational purposes{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
