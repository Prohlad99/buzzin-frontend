"use client";
import "./style.css";
const ServiceCard = ({ image, title }) => {
  return (
    <div>
      <div className="mx-4 sm:mx-0 cardContainer sm:w-[280px] rounded-2xl relative shadow-blue-400 shadow-xl">
        <img className="sm:w-[280px] rounded-2xl" src={image} alt="" />
        <div className="heading">
          <div className="flex justify-start items-center gap-2 py-5 pl-6 rounded-b-2xl absolute bottom-0 bg-white w-full">
            <div className="bg-gradient-to-r from-[#6017CD] to-[#0B54E7] h-[5px] w-[40px] rounded-sm"></div>
            <h2 className="font-semibold text-xl">{title}</h2>
          </div>
        </div>
        {/* <div className="absolute top-0 ">
          <div className=" overly relative rounded-2xl bg-gradient-to-tr from-[#0B54E7] to-[#6017CD]  ">
            <div className="absolute bottom-10 w-full ">
              <h1 className="flex justify-between items-center px-4 text-white font-serif text-xl">
                Facebook Boosting{" "}
                <span className="text-[#FFC920]">
                  <FaLongArrowAltRight />
                </span>
              </h1>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ServiceCard;
