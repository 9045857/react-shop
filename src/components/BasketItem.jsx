import { CustomContext } from "../hooks/CartContext";
import { useContext } from "react";

export function BasketItem(props) {
    const { id, image, name, price, quantity } = props;

    // console.log(image);

    const { removeOrder, addOrder, clearOrder } = useContext(CustomContext);

    return (
        <li
            className='collection-item'
            key={id}
        >
            <div>
                <img
                    className='basket-item-image'
                    alt={name}
                    src={image}
                />
                {name} {quantity}x{price} = {quantity * price} руб.
                <span className='secondary-content'>
                    <i
                        className='material-icons  btn-basket-item'
                        onClick={() => removeOrder(id)}
                    >
                        remove
                    </i>
                    <span className="item-quantity"> {quantity}</span>
                    <i
                        className='material-icons btn-basket-item btn-add-basket-item'
                        onClick={() => addOrder(props)}
                    >
                        add
                    </i>
                    <i
                        className='material-icons btn-basket-item'
                        onClick={() => clearOrder(id)}
                    >
                        close
                    </i>
                </span>
            </div>
        </li>
    );
}
