import { BasketItem } from "./BasketItem";
import { useContext } from "react";
import { CustomContext } from "../hooks/CartContext";

function BasketList(props) {
    const { orders, totalPrice } = useContext(CustomContext);
    const { handleIsBasketShow } = props;

    return (
        <ul className='collection with-header basket'>
            <li className='collection-header teal lighten-1 white-text'>
                <span>Корзина</span>
                <span className='secondary-content'>
                    <i
                        className='material-icons white-text close-basket'
                        onClick={handleIsBasketShow}
                    >
                        close
                    </i>
                </span>
            </li>

            {orders.length ? (
                orders.map((order) => (
                    <BasketItem
                        key={order.id}
                        {...order}
                    />
                ))
            ) : (
                <li className='collection-item '>
                    <span>Корзина пуста </span>
                </li>
            )}

            <li className='collection-item teal lighten-1 white-text'>
                <span>Общая стоимость: {totalPrice} руб.</span>
            </li>
        </ul>
    );
}

export { BasketList };
