import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { useMenu } from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menu, isPending] = useMenu();
  const popular = menu?.filter((item) => item.category === "popular");

  if (isPending) {
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>;
  }

  return (
    <section className="mb-10">
      <SectionTitle
        heading={"SPECIAL COLLECTIONS"}
        subHeading={"Popular Items"}
      />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 container mx-auto gap-6">
        {popular?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link className="flex justify-center" to={`/order/popular`}>
        <button className="btn  btn-outline border-0 border-b-4 text-black my-2 w-[280px]">
          Order now
        </button>
      </Link>
    </section>
  );
};

export default PopularMenu;
