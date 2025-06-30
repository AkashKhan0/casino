import React from "react";
import AutoImageSlider from "../components/AutoImageSlider";
import box1 from "../assets/box1/box1.png";
import box2 from "../assets/box1/box2.png";
import box3 from "../assets/box1/box3.png";

const Home = () => {
  return (
    <div>
      <div className="px-2 md:px-5 lg:px-10 flex flex-col md:flex-col lg:flex-row w-full justify-between gap-5 my-10">
        <div className="w-full h-auto lg:w-[40%] min-h-[250px] rounded-md">
          <div className="w-full h-auto min-h-[250px]">
            <AutoImageSlider />
          </div>
        </div>
        <div className="w-full lg:w-[60%] h-full rounded-md">
          <div className="w-full min-h-[250px]">
            <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
              <div className="boxs border-[#000169] border-2 rounded-md hover:cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_#000169]">
                <img
                  src={box1}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
              </div>
              <div className="boxs border-[#1E4A34] border-2 rounded-md hover:cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_#FDD950]">
                <img
                  src={box2}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
              </div>
              <div className="boxs border-[#321801] border-2 rounded-md hover:cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_#840B09]">
                <img
                  src={box3}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
{/* first row */}
      <div className="w-full h-full px-2 md:px-5 lg:px-10 rounded-md">
          <div className="w-full h-auto pb-10">
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-4 items-center">
              <div className="boxss border-[#000169] border-2 rounded-md hover:cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_#000169]">
                <img
                  src={box1}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
              </div>

              <div className="boxss border-[#1E4A34] border-2 rounded-md hover:cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_#FDD950]">
                <img
                  src={box2}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
              </div>

              <div className="boxss border-[#321801] border-2 rounded-md hover:cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_#840B09]">
                <img
                  src={box3}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
              </div>
              
              <div className="boxss border-[#321801] border-2 rounded-md hover:cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_#840B09]">
                <img
                  src={box3}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
              </div>
              
              <div className="boxss border-[#321801] border-2 rounded-md hover:cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_#840B09]">
                <img
                  src={box3}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
              </div>

              <div className="boxss border-[#321801] border-2 rounded-md hover:cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_#840B09]">
                <img
                  src={box3}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
              </div>

            </div>
          </div>
        </div>

{/* second row */}
      <div className="w-full h-full px-2 md:px-5 lg:px-10 rounded-md">
          <div className="w-full h-auto pb-10">
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-4 items-center">
              <div className="boxss border-[#000169] border-2 rounded-md hover:cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_#000169]">
                <img
                  src={box1}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
              </div>

              <div className="boxss border-[#1E4A34] border-2 rounded-md hover:cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_#FDD950]">
                <img
                  src={box2}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
              </div>

              <div className="boxss border-[#321801] border-2 rounded-md hover:cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_#840B09]">
                <img
                  src={box3}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
              </div>
              
              <div className="boxss border-[#321801] border-2 rounded-md hover:cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_#840B09]">
                <img
                  src={box3}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
              </div>
              
              <div className="boxss border-[#321801] border-2 rounded-md hover:cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_#840B09]">
                <img
                  src={box3}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
              </div>

              <div className="boxss border-[#321801] border-2 rounded-md hover:cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_#840B09]">
                <img
                  src={box3}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
              </div>

            </div>
          </div>
        </div>

{/* thired row */}
      <div className="w-full px-2 md:px-5 lg:px-10 h-full rounded-md">
          <div className="w-full h-auto pb-10">
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-4 items-center">
              <div className="boxss border-[#000169] border-2 rounded-md hover:cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_#000169]">
                <img
                  src={box1}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
              </div>

              <div className="boxss border-[#1E4A34] border-2 rounded-md hover:cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_#FDD950]">
                <img
                  src={box2}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
              </div>

              <div className="boxss border-[#321801] border-2 rounded-md hover:cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_#840B09]">
                <img
                  src={box3}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
              </div>
              
              <div className="boxss border-[#321801] border-2 rounded-md hover:cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_#840B09]">
                <img
                  src={box3}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
              </div>
              
              <div className="boxss border-[#321801] border-2 rounded-md hover:cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_#840B09]">
                <img
                  src={box3}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
              </div>

              <div className="boxss border-[#321801] border-2 rounded-md hover:cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_#840B09]">
                <img
                  src={box3}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
              </div>

            </div>
          </div>
        </div>


    </div>
  );
};

export default Home;
