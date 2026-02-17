import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import delingUrl from '../assets/images/shop/del.png'
import CheckOutPage from './CheckOutPage';

const CartPage = () => {
    const [cartItem, setCartItem] = useState([]);

    useEffect(() => {
        //fetch cart item from local storage
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItem(storedCartItems);
    }, [])

    //calculate prices
    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;
    }
    //handle quantity increase
    const handleIncrease = (item) => {
        item.quantity += 1;
        setCartItem([...cartItem]);

        // update local storage with new cart item
        localStorage.setItem("cart", JSON.stringify(cartItem));

    }

    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1;
            setCartItem([...cartItem]);

            // update local storage with new cart item
            localStorage.setItem("cart", JSON.stringify(cartItem));
        }

    }
    const handleRemoveItem = (item) => {
        const updatedCart = cartItem.filter((cartItem) => cartItem.id !== item.id);
        //update  new cart
        setCartItem(updatedCart);

        updateLocalStorage(updatedCart);
    }
    const updateLocalStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    //cart sub total
    const cartSubTotal = cartItem.reduce((total, item) => {
        return total + calculateTotalPrice(item);
    }, 0)
    // order total
    const orderTotal = cartSubTotal;
    return (
        <div>
            <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />
            <div className='shop-cart padding-tb'>
                <div className="container">
                    <div className="section-wrapper">
                        {/* cart top */}
                        <div className='cart-top'>
                            <table>
                                <thead>
                                    <tr>
                                        <th className='cart-product'>Products</th>
                                        <th className='cart-price'>Price</th>
                                        <th className='cart-quantity'>Quantity</th>
                                        <th className='cart-total'>Totals</th>
                                        <th className='cart-edit'>Edit</th>
                                    </tr>
                                </thead>
                                {/* table body */}
                                <tbody>
                                    {
                                        cartItem.map((item, index) => (
                                            <tr key={index}>
                                                <td className='product-item cat-product'>
                                                    <div className='p-thumb'>
                                                        <Link to='/shop'><img src={item.img} alt="" /></Link>
                                                    </div>
                                                    <div className="p-content">
                                                        <Link to='/shop'><sm>{item.name}</sm></Link>
                                                    </div>
                                                </td>
                                                <td className='cat-price'>
                                                    <div>${item.price}</div>
                                                </td>
                                                <td className=''>
                                                    <div className='cart-plus-minus'>
                                                        <div className='dec qtybutton' onClick={() => handleDecrease(item)}>-</div>
                                                        <input type="text" className='cart-plus-minus-box' 
                                                        name="qtybutton" value={item.quantity}/>
                                                        <div className='inc qtybutton' onClick={() => handleIncrease(item)}>+</div>
                                                    </div>
                                                </td>
                                                <td className='cat-toprice'>
                                                    <div>${calculateTotalPrice(item)}</div>
                                                </td>
                                                <td className='cat-edit'>
                                                    <a href="#" onClick={() => handleRemoveItem(item)}>
                                                        <img src={delingUrl} alt="" />
                                                    </a>
                                                </td>

                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        {/*------ cart top ends ------ */}
                        {/* ----- cart bottom ------- */}
                        <div className='cart-bottom'>
                            {/* check out box */}
                            <div className='cart-checkout-box'>
                                <form className='coupon'>
                                    <input className='cart-page-input-text' type="text" name="coupon" id="coupon" placeholder='Coupon code....' />
                                    <input type="submit" value={"Apply Coupon"} />
                                </form>

                                <form className='cart-checkout'>
                                    <input type="submit" value={"Update Cart"}/>
                                    <div>
                                        <CheckOutPage/>
                                    </div>
                                </form>
                            </div>
                            {/* check out box ends */}

                            {/* shopping box */}
                            <div className='shiping-box'>
                                <div className='row'>
                                    <div className='col-md-6 col-12 '>
                                        <div className='calculate-shiping'>
                                            <h3>Calculate Shipping</h3>
                                            <div className="outline-select">
                                                <select>
                                                    <option value="Uk">United Kingdom (Uk)</option>
                                                    <option value="USA">United States (USA)</option>
                                                    <option value="AU">Australia (AU)</option>
                                                    <option value="Ca">Canada (Ca)</option>
                                                    <option value="NG">Nigeria (NG)</option>
                                                </select>
                                                <span className='select-icon'>
                                                    <i className='icofont-rounded-down'></i>
                                                </span>
                                            </div>
                                            <div className="outline-select shipping-select">
                                                <select>
                                                    <option value="Uk">London </option>
                                                    <option value="USA">New York</option>
                                                    <option value="AU">Maldives</option>
                                                    <option value="Ca">Toronto</option>
                                                    <option value="NG">Lagos</option>
                                                </select>
                                                <span className='select-icon'>
                                                    <i className='icofont-rounded-down'></i>
                                                </span>
                                            </div>
                                            <input type="text" name="postalcode" id="postalcode" 
                                            placeholder='postalcode/ZIP*' className='cart-page-input-text' />
                                            <button type='submit'>update address</button>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-12'>
                                        <div className='cart-overview'>
                                            <h3>Cart Totals</h3>
                                            <ul className='lab-ul'>
                                                <li>
                                                    <span className='pull-left'>Cart Subtotals</span>
                                                    <p className='pull-right'>${cartSubTotal}</p>
                                                </li>
                                                  <li>
                                                    <span className='pull-left'>Shipping and Handling</span>
                                                    <p className='pull-right'>Free Shipping</p>
                                                </li>
                                                  <li>
                                                    <span className='pull-left'>Order Totals</span>
                                                    <p className='pull-right'>${orderTotal.toFixed(2)}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage