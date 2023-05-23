import "./cart.styles.scss";
const Cart = (props) => {
  const { id, name, email } = props.monster;
  return (
    <div className="card-container flex flex-col bg-teal-200 border-gray-400 rounded-lg p-10">
      <img
        src={`https://robohash.org/${id + 1}?set=set2&size=180x180`}
        alt={`monster-${id}`}
      />
      <h2 className="text-2xl font-bold">{name}</h2>
      <p>{email}</p>
    </div>
  );
};
export default Cart;
