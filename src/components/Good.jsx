import React, { useContext } from "react";
import { CustomContext } from "../hooks/CartContext";

export const Good = (props) => {
    const good = {
        name: props.displayName,
        id: props.mainId,
        image: props.displayAssets[0].full_background,
        price: props.price.finalPrice,
        description: props.displayDescription,
    };

    const { name, id, image, price, description } = good;

    const { addOrder } = useContext(CustomContext);

    return (
        <div
            id={id}
            className='card'
        >
            <div className='card-image'>
                <img
                    alt={name}
                    src={image}
                />
            </div>
            <div className='card-content'>
                <span className='card-title'>{name}</span>
                <p>{description}</p>
            </div>
            <div className='card-action'>
                <button
                    className='btn'
                    onClick={() => addOrder(good)}
                >
                    Купить
                </button>
                <span className='right price'>{price} руб.</span>
            </div>
        </div>
    );
};
