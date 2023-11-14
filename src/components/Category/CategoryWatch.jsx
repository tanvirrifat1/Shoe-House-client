import SectionTitle from "../sectionTitle/SectionTitle";
import men from "../../assets/assets/men.png";
import women from "../../assets/assets/women.png";

const CategoryWatch = () => {
  return (
    <div>
      <div>
        <SectionTitle heading={"choose your option"} />
      </div>
      <div className="flex justify-center gap-4 ">
        <div className="flex flex-col  max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
          <div>
            <img
              src={men}
              alt=""
              className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
            />
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
          <div>
            <img
              src={women}
              alt=""
              className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryWatch;
