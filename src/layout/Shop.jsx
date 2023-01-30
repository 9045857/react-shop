import { useEffect, useState, useContext } from "react";
import { CustomContext } from "../hooks/CartContext";

import { API_KEY, API_URL } from "../config";

import { GoodList } from "../components/GoodList";
import { Preloader } from "../components/Preloader";
import { Cart } from "../components/Cart";
import { BasketList } from "../components/BasketList";
import { Alert } from "../components/Alert";

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const { orders = [], totalPrice } = useContext(CustomContext);
    const [isBasketShow, setIsBasketShow] = useState(false);
    const { alertName, clearAlert } = useContext(CustomContext);

    const handleIsBasketShow = () => {
        setIsBasketShow(!isBasketShow);
    };

    useEffect(function getGoods() {
        fetch(API_URL, { headers: { Authorization: API_KEY } })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.shop); //TODO for clear
                data.shop && setGoods(data.shop);
                setLoading(false);
            });
    }, []);

    return (
        <main className='container content'>
            <Cart
                quantity={orders.length}
                handleIsBasketShow={handleIsBasketShow}
                totalPrice={totalPrice}
            />
            {loading ? <Preloader /> : <GoodList goods={goods} />}
            {isBasketShow && (
                <BasketList handleIsBasketShow={handleIsBasketShow} />
            )}
            {alertName && (
                <Alert
                    name={alertName}
                    closeAlert={clearAlert}
                />
            )}
        </main>
    );
}

export { Shop };
