function Cart(props) {
    const {
        quantity = 0,
        handleIsBasketShow = Function.prototype,
        totalPrice = 0,
    } = props;

    return (
        <div
            className='cart light-blue darken-4 white-text'
            onClick={handleIsBasketShow}
        >
            <i className='small material-icons'>shopping_cart</i>

            <span className='cart-quantity'>{quantity}</span>
            <span className='total-price'>{totalPrice} р</span>

            <span> </span>
        </div>
    );
}

export { Cart };
