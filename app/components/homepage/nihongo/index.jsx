// @flow strict
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function Nihongo() {
  return (
    <div
      id="nihongo"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            日本語
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase text-center">
        Currently Studying for JLPT N3
      </p>
      <div className="flex justify-center  mt-5 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          target="_blank"
          href="https://drive.google.com/file/d/1rxuDfS3yI83CYvTRpbAGuRqvQETYLAPz/view"
        >
          <span>JLPT N4 Certificate </span>
          <FaArrowRight size={16} />
        </Link>
      </div>
      <div className="flex justify-center  mt-5 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          target="_blank"
          href="https://drive.google.com/file/d/1TmwzxpZA0AYEWyttwmr96bpQ_jGOFPeI/view"
        >
          <span>JLPT N5 Certificate </span>
          <FaArrowRight size={16} />
        </Link>
      </div>
      <div className="flex justify-center  mt-5 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          target="_blank"
          href="https://drive.google.com/file/d/1mCppjvr8g4ceyzTVuUxK1eucIi1XtM5f/view"
        >
          <span>Japan Tech Student Exchange Program</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

export default Nihongo;
