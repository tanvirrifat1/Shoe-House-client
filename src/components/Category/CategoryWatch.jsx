import SectionTitle from "../sectionTitle/SectionTitle";
import men from "../../assets/assets/men.png";
import women from "../../assets/assets/women.png";
import { BsArrowRight } from "react-icons/bs";

const CategoryWatch = () => {
  return (
    <div>
      <div>
        <SectionTitle heading={"choose your option"} />
      </div>
      <div className="flex justify-center gap-4 ">
        <div className="flex flex-col group relative w p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
          <div>
            <img
              src={men}
              alt=""
              className="object-cover lg:w-[600px] mb-4 h-60 sm:h-96 dark:bg-gray-500"
            />
          </div>
          <div className="flex justify-center absolute bottom-0 left-0 w-full h-0 flex-col  items-center opacity-0 group-hover:h-full group-hover:opacity-90 duration-700">
            <div className="flex justify-center gap-2">
              <h1 className="text-white text-3xl">MENS WATCH </h1>
              <button className="text-white">
                <BsArrowRight className="text-3xl -mt-1 text-white" />
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col group relative  p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
          <div>
            <img
              src={women}
              alt=""
              className="object-cover lg:w-[600px]  mb-4  sm:h-96 dark:bg-gray-500"
            />
          </div>
          <div className="flex justify-center absolute bottom-0 left-0 w-full h-0 flex-col  items-center opacity-0 group-hover:h-full group-hover:opacity-90 duration-700">
            <div className="flex justify-center gap-2">
              <h1 className="text-white text-3xl">WOMENS WATCH</h1>
              <button>
                <BsArrowRight className="text-3xl -mt-1 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryWatch;
