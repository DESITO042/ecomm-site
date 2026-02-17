import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ProductDisplay = ({ item }) => {
    //console.log(item)
    const { name, id, price, seller, ratingsCount, quantity, img } = item;

    const [prequantity, setQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState("");
    const [size, setSize] = useState("Select Size");
    const [color, setColor] = useState("Select Color");

    const handleSizeChange = (e) => {
        setSize(e.target.value)
    }
    const handleColorChange = (e) => {
        setColor(e.target.value)
    }
    const handleDecrease = () => {
        if (prequantity > 1) {
            setQuantity(prequantity - 1)
        }
    }
    const handleIncrease = () => {
        setQuantity(prequantity + 1)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {
            id: id,
            img: img,
            name: name,
            price: price,
            quantity: prequantity,
            size: size,
            color: color,
            coupon: coupon
        }

        console.log(product)
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingProductIndex = existingCart.findIndex((item) => item.id === id);

        if (existingProductIndex !== -1) {
            existingCart[existingProductIndex].quantity += prequantity;
        } else {
            existingCart.push(product);
        }
        // update local storage
        localStorage.setItem("cart", JSON.stringify(existingCart));

        //reset from form field
        setQuantity(1);
        setSize("Select Size");
        setColor("Select Color");
        setCoupon("");
    }

    return (
        <div>
            <div>
                <h4>{name}</h4>
                <p className='rating'>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <span>{ratingsCount} reviews</span>
                </p>
                <h4>${price}</h4>
                <h6>{seller}</h6>
                <i>sit amet consectetur Ipsam ut rerum maxime asperiores ipsa doloremque corpo
                    eius aut distinctio reprehenderit ut.</i>
            </div>
            {/* cart components*/}
            <div>
                <form onSubmit={handleSubmit}>
                    {/* size*/}
                    <div className='select-product size'>
                        <select value={size} onChange={handleSizeChange}>
                            <option value="Select size">Select size</option>
                            <option value="SM">SM</option>
                            <option value="MD">MD</option>
                            <option value="LG">LG</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>
                    {/* color*/}
                    <div className='select-product color'>
                        <select value={color} onChange={handleColorChange}>
                            <option>Select color</option>
                            <option>pink</option>
                            <option>ash</option>
                            <option>blue</option>
                            <option>black</option>
                            <option>white</option>
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>
                    {/* cart plus and minus*/}
                    <div className='cart-plus-minus'>
                        <div className='dec qtybutton' onClick={handleDecrease}>-</div>
                        <input className='cart-plus-minus-box' type="text" name="qtybutton"
                            id="qtybutton" value={prequantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10))} />
                        <div className='inc qtybutton' onClick={handleIncrease}>+</div>
                    </div>
                    {/* coupon field */}
                    <div className='discount-code mb-2'>
                        <input type="text" onChange={(e) => setCoupon(e.target.value)} placeholder='Enter Dicount Code' />
                    </div>
                    {/* button sections */}
                    <button type='submit' className='lab-btn'>
                        <span>Add to Cart</span>
                    </button>
                    <Link to="/cart-page" className='lab-btn bg-primary'>
                        <span>Check Out</span>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default ProductDisplay