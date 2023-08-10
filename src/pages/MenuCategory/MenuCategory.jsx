import Cover from "../Shared/Cover/Cover";
import MenuItem from "../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img, paragraph }) => {
  return (
    <div className="pt-10">
      {title && <Cover img={img} title={title} paragraph={paragraph} />}
      <div className="grid md:grid-cols-2 gap-8 grid-cols-1">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
