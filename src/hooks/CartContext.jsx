import React, { createContext, useState } from "react";

export const CustomContext = createContext();

export const CartContext = (props) => {
    const [orders, setOrders] = useState([]);
    const [alertName, setAlertName] = useState("");

    const addOrder = (item) => {
        const orderIndex = orders.findIndex(
            (itemOrder) => item.id === itemOrder.id
        );

        if (orderIndex < 0) {
            const newOrder = {
                ...item,
                quantity: 1,
            };
            setOrders([...orders, newOrder]);
        } else {
            const newOrders = orders.map((orderItem, index) => {
                if (orderIndex === index) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });

            setOrders(newOrders);
        }
        setAlertName(item.name);
    };

    const removeOrder = (id) => {
        let newOrders;

        const item = orders.find((order) => order.id === id);

        if (item.quantity === 1) {
            newOrders = orders.filter((order) => order.id !== id);
        } else {
            newOrders = orders.map((orderItem) => {
                if (id === orderItem.id) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity - 1,
                    };
                } else {
                    return orderItem;
                }
            });
        }

        setOrders(newOrders);
    };

    const clearOrder = (id) => {
        setOrders(orders.filter((order) => id !== order.id));
    };

    const totalPrice = orders.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    const clearAlert = () => {
        console.log(alertName);
        setAlertName("");
    };

    const cart = {
        orders,
        addOrder,
        removeOrder,
        clearOrder,
        totalPrice,
        alertName,
        clearAlert,
    };

    return (
        <CustomContext.Provider value={cart}>
            {props.children}
        </CustomContext.Provider>
    );
};
