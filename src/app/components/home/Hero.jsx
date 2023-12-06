import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
const Hero = () => {
  return (
    <div>
      <div className="grid grid-cols-12 shadow-2xl">
        {/* heading text  */}
        <div className="sm:col-span-12 md:col-span-5 lg:col-span-5 col-span-12 ">
          <div>
            <div>
              <img
                className="w-[300px] "
                src="/assets/banner/topcorner.svg"
                alt=""
              />

              <h3 className="tracking-widest text-xl sm:text-2xl">
                <span className="bg-black text-white sm:px-2 sm:py-2 py-1 px-2 ml-8 rounded-l-md">
                  BEST
                </span>{" "}
                BUSINSESS
              </h3>
              <h1 className="md:text-5xl text-3xl sm:text-5xl font-sans mt-10 ml-8">
                We&apos;re Equally Excited About Corporate
              </h1>
              <div className="h-[5px] w-[100px] bg-slate-400 my-8 sm:my-8 ml-8 rounded-sm"></div>
              <p className="ml-8 tracking-wider text-stone-400">
                Our mission is to provide quality English language instruction
                through a variety of courses to international and local.
              </p>
              <button className="ml-8 mt-6 my-3 sm:px-10 sm:py-3  py-1 px-6 rounded-full shadow-lg hover:bg-[#FFBF21] hover:text-black bg-slate-600 text-white">
                LEARN MORE
              </button>
              <div className="flex gap-4 ml-[100px] sm:ml-[80px] sm:my-8 mt-2  mb-[60px]  text-stone-400">
                <p className="text-lg">Follow Us</p>
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

        {/* banner image  */}
        <div className="sm:col-span-12 md:col-span-7 lg:col-span-7 col-span-12 h-auto">
          <div className="relative -z-10 md:h-[750px] h-[500px] md:overflow-hidden m-2 md:m-0">
            <div className="z-50 absolute md:-right-[100px] md:-top-[180px] sm:top-0 top-0 right-0 sm:right-0">
              <img className="w-[800px]" src="/assets/banner/home.png" alt="" />
            </div>
            <div className="absolute md:-top-[50px] md:-right-[80px] sm:-top-[10px] -top-[10px] right-[30px] sm:right-[30px] -z-10">
              <img
                className="w-[800px] "
                src="/assets/banner/homebg.svg"
                alt=""
              />
            </div>
            <div className="absolute bottom-12 right-3 hidden lg:block">
              <img src="/assets/banner/home_banner_bottom.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
