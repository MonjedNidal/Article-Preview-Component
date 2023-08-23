import React from "react";
import Drawers from "../images/drawers.jpg";
import Avatar from "../images/avatar-michelle.jpg";
function Main() {
  return (
    <div className="bg-white flex content-center flex-col md:flex-row m-4 md:w-10/12 lg:w-8/12 h-9/12 shadow-lg rounded-lg">
      <img
        src={Drawers}
        alt=""
        className="md:w-5/12 w-full rounded-t-lg md:rounded-none md:rounded-l-lg "
      />
      <div className="flex flex-col justify-between m-9">
        <h2 className="text-VeryDarkGrayishBlue font-bold text-2xl my-5">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h2>
        <p className="text-DesaturatedDarkBlue">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <div className="flex justify-between mt-5">
          <div className="flex">
            <img src={Avatar} alt="" className="w-11 rounded-full mr-3" />
            <div className="flex flex-col">
              <h4 className="text-base font-bold text-VeryDarkGrayishBlue">
                Michelle Appleton
              </h4>
              <span className="text-sm text-DesaturatedDarkBlue">
                28 Jun 2020
              </span>
            </div>
          </div>
          <div className="flex flex-wrap content-center justify-center">
            <svg
              className="w-6 pt-1 pl-1 hover:bg-VeryDarkGrayishBlue hover:fill-white hover:cursor-pointer h-6 bg-slate-200 rounded-full  fill-[#6E8098]"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="13"
            >
              <path d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" />
            </svg>
            {/* <div className="relative hover:bg-[#6E8098] hover:text-white bg-slate-200 mt-2 flex flex-wrap self-center content-center justify-center w-7 h-7 rounded-full ">
              <svg
                className="absolute  z-10 w-4 top-1.5 self-center  fill-[#6E8098]"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="13"
              >
                <path d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" />
              </svg>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
