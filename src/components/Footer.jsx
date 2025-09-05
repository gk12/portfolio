import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Footer = () => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-2 lg:gap-0 h-auto lg:h-[30vh] mb-0 w-full bg-[#B4F2F1]"
      id="contactus"
    >
      <div className="w-[90%] sm:w-[85%] lg:w-[80%] gap-2 max-w-7xl">
        <div className="flex gap-4 lg:gap-0 flex-col-reverse lg:flex-row justify-between items-center w-full">
          {/* <div className="flex flex-col items-center lg:items-start"> </div> */}
          <div className="font-sacramento text-2xl sm:text-3xl lg:text-4xl xl:text-6xl flex justify-center items-center align-baseline">
            Get in Touch
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-slate-600 text-base sm:text-lg text-center lg:text-left">You can find me everywhere</p>
            <div className="flex justify-center items-center w-full">
              <ul className="w-full flex justify-evenly text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-slate-600">
                <li>
                  <a
                    href="https://www.linkedin.com/in/gauravkumar44/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="hover:text-[#287bbc]" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/gk12"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="hover:fill-white hover:bg-black hover:rounded-full m-0 hover:border-white" />
                  </a>
                </li>
                <li>
                  <a href="mailto:gk44035@gmail.com">
                    <SiGmail className="hover:text-[#e44d26]" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center  ">
          <p className="flex text-xl items-baseline font-semibold text-slate-700">
            Made with&nbsp;
            <span className=" ">
              <FaHeart className="text-red-500" />
            </span>
            &nbsp; in India
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
