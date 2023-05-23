import Cart from "../cart/cart.component";
import "./cart-list.styles.scss";
const CartList = (props) => {
  const { monsters } = props;
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Cart key={monster.id} monster={{ ...monster }} />
      ))}
    </div>
  );
};
export default CartList;
