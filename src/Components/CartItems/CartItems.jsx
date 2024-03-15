import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

    // Function to calculate total price of items in the cart
    const calculateTotalPrice = () => {
        let totalPrice = 0;
        all_product.forEach(product => {
            if (cartItems[product.id] > 0) {
                totalPrice += product.new_price * cartItems[product.id];
            }
        });
        return totalPrice;
    };

    // Function to handle checkout
    const handleCheckout = () => {
        // Implement your checkout logic here
        console.log("Checkout clicked");
    };

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((product) => {
                if (cartItems[product.id] > 0) {
                    return (
                        <div key={product.id} className="cartitems-format">
                            <img src={product.image} alt="" className='carticon-product-icon' />
                            <p>{product.name}</p>
                            <p>${product.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[product.id]}</button>
                            <p>{product.new_price * cartItems[product.id]}</p>
                            <img src={remove_icon} onClick={() => { removeFromCart(product.id) }} alt="" />
                        </div>
                    );
                }
                return null;
            })}
            {/* Checkout section */}
            <div className="checkout-section">
                <div className="cart-total">
                    <p>Total: ${calculateTotalPrice()}</p>
                </div>
                <div className="promo-code">
                    <input type="text" placeholder="Enter promo code" />
                    <button>Apply</button>
                </div>
                <div className="checkout-button">
                    <button onClick={handleCheckout}>Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
