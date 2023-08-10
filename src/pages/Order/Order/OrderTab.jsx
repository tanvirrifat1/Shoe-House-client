import WatchCard from "../../../components/sectionTitle/watchCard/WatchCard";

const OrderTab = ({ items }) => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-8">
        {items?.map((item) => (
          <WatchCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default OrderTab;
