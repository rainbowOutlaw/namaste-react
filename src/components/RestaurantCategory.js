export default function RestaurantCategory({ data }) {
  return (
    <div>
      <div>
        <span>
          {data?.title} ({data?.itemCards.length})
        </span>
      </div>
    </div>
  );
}
