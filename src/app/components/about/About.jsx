import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
const About = () => {
  return (
    <div>
      <div className="grid grid-cols-12 md:gap-4 mt-10">
        <div className="md:col-span-7 col-span-12 sm:col-span-6">
          {/* image container */}
          <div className=" md:m-8 m-2 rounded-xl relative inline-block shadow-2xl">
            <div>
              <img
                className="md:h-[450px] h-[300px] w-full z-10 rounded-xl"
                src="/assets/banner/about.jpg"
                alt=""
              />
            </div>
            <div className="h-[250px] -z-20 w-[300px]  bg-[#3535D8] rounded-2xl absolute top-10 md:-right-16 -right-7"></div>
            <div className="md:h-[350px] h-[200px] -z-10 md:w-[300px] w-[200px]  bg-[#E8E8E8] rounded-2xl absolute top-[150px] -right-[60px]"></div>
            <div className="md:h-[120px] h-[80px] flex justify-center md:w-[250px] w-[130px]  bg-[#FFAE22] rounded-2xl absolute bottom-8 -right-[40px]">
              <div className="flex flex-col items-center justify-center gap-4  my-2 font-bold font-sans  text-black">
                <p className="text-lg tracking-wider">Follow Us</p>
                <div className="flex justify-center items-center gap-4">
                  <button className="hover:text-blue-700 transition-all delay-200 ease-in-out">
                    <FaFacebookF />
                  </button>
                  <button className="hover:text-blue-500 transition-all delay-200 ease-in-out">
                    <FaTwitter />
                  </button>
                  <button className="hover:text-red-700 transition-all delay-200 ease-in-out">
                    <FaYoutube />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* text container */}
        <div className="md:m-8 m-2 mt-[80px] sm:mt-2 text-black md:col-span-5 col-span-12 sm:col-span-6">
          <h2 className="md:text-2xl text-xl font-semibold">
            <span className="pl-5 py-1 rounded-l-md text-white bg-gradient-to-r from-[#6017CD] to-[#0B54E7] shadow-2xl">
              ABO
            </span>
            UT US
          </h2>
          <h1 className="md:text-5xl text-3xl sm:text-4xl font-sans mt-10 ">
            Creative Design & Development
          </h1>
          <div className="h-[5px] w-[100px] bg-slate-400 my-8 sm:my-8  rounded-sm"></div>
          <p className=" tracking-wider text-stone-400">
            Our Mission Is To Provide Quality English Language Instruction
            Through A Variety Of Courses To International And Local Students In
            A Professional And Supportive Atmosphere Utilizing Our Unique
            English Teaching Methodology. Our Mission Is To Provide.
          </p>
          <button className=" mt-6 my-8 md:my-8 sm:px-10 sm:py-2   py-1 px-6 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-[#FFA524] hover:to-[#FFDE1D]  hover:text-black bg-gradient-to-r from-[#6017CD] to-[#0B54E7]  text-white">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;