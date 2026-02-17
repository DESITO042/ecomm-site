import React, { useState } from 'react'
import {Button, Modal} from 'react-bootstrap'
import {useNavigate, useLocation} from 'react-router-dom'
import "../components/modal.css"

const CheckOutPage = () => {
    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState("visa");

    //handle tab change
    const handleTabChange = (tabId) => {
        setActiveTab(tabId)
    }

    const handleShow = () => setShow(true);
    const handleClosed = () => setShow(false); 
    
    // direct to home page
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleOrderConfirm = () => {
        alert("Your Order is placed successfuly!")
        localStorage.removeItem("cart");
        navigate(from, {replace: true})

    }


  return (
    <div className='modalCard'>
        <Button variant='primary' className='py-2' onClick={handleShow}> Proceed to Checkout</Button>
        <Modal 
        show={show}
        onHide={handleClosed}
        animation={false}
        className='modal fade'
        centered>
            <div className='modal-dialog'>
                <h5 className='px-3 mb-3'>Select Your Payment Method</h5>
                <div className='modal-content'>
                    <div className='modal-body'>
                        <div className="tabs mt-3">
                            <ul className='nav nav-tabs' id='myTab' role='tablist'>
                                <li className='nav-item' role='presentation' >
                                    <a className={`nav-link ${activeTab === "visa" ? "active" : ""}`} id='visa-tab'onClick={() => handleTabChange("visa")}
                                    data-toggle='tab' role='tab' aria-controls='visa' aria-selected={activeTab === "visa"} href="#visa">
                                        <img src="https://i.imgur.com/sB4jftM.png" alt="" width="80"/>
                                    </a>
                                </li>

                                <li className='nav-item' role='presentation' >
                                    <a className={`nav-link ${activeTab === "paypal" ? "active" : ""}`} id='paypal-tab'onClick={() => handleTabChange("paypal")}
                                    data-toggle='tab' role='tab' aria-controls='paypal' aria-selected={activeTab === "paypal"} href="#paypal">
                                        <img src="https://i.imgur.com/yK7EDD1.png" alt="" width="80"/>
                                    </a>
                                </li>
                                
                            </ul>
                            {/* content */}
                            <div className='tab-content' id='myTabContent'>
                                {/* visa content */}
                                <div className={`tab-pane fade ${activeTab === "visa" ? "show active" : ""}`}
                                id='visa' role='tabpanel' aria-labelledby='visa-tab'>
                                    {/* visa tab content */}
                                    <div className='mt-4 mx-4'>
                                        <div className="text-center">
                                            <h5>Credit Card</h5>
                                        </div>
                                        <div className='form mt-3'>
                                            <div className="inputbox">
                                                <input type="text" name="name" id="name" className='form-control' required/>
                                                <span>Cardholder Name</span>
                                            </div>
                                            
                                            <div className="inputbox">
                                                <input type="text" name="number" id="number" className='form-control' 
                                                min="1" max="999" required/>
                                                <span>Card Number</span><i className='fa fa-eye'></i>
                                            </div>
                                            <div className='d-flex flex-row'>
                                            <div className="inputbox">
                                                <input type="text" name="number" id="number" className='form-control' 
                                                min="1" max="999" required/>
                                                <span>Expiration date</span>
                                            </div>
                                            
                                            <div className="inputbox">
                                                <input type="text" name="number" id="number" className='form-control' 
                                                min="1" max="999" required/>
                                                <span>CVV</span><i className='fa fa-eye'></i>
                                            </div>
                                            </div>
                                            <div className='px-5 pay'>
                                                <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Order Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* paypal content */}
                                  <div className={`tab-pane fade ${activeTab === "paypal" ? "show active" : ""}`}
                                 id='paypal' role='tabpanel' aria-labelledby='paypal-tab'>
                                    <div className='mt-4 mx-4'>
                                        <div className="text-center">
                                            <h5>Paypal Account</h5>
                                        </div>
                                        <div className='form mt-3'>
                                            <div className="inputbox">
                                                <input type="text" name="name" id="name" className='form-control' required/>
                                                <span>Enter your email</span>
                                            </div>
                                            
                                            <div className="inputbox">
                                                <input type="text" name="number" id="number" className='form-control' 
                                                min="1" max="999" required/>
                                                <span>Your Name</span>
                                            </div>
                                            <div className='d-flex flex-row'>
                                            <div className="inputbox">
                                                <input type="text" name="number" id="number" className='form-control' 
                                                min="1" max="999" required/>
                                                <span>Extra info</span>
                                            </div>
                                            <div className="inputbox">
                                                <input type="text" name="number" id="number" className='form-control' 
                                                min="1" max="999" required/>
                                                <span></span>
                                            </div>
                                            </div>
                                            <div className='px-5 pay'>
                                                <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Add Paypal</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </div>

                            {/* Payment desclaimer */}
                            <p className='mt-3 px-4 p-Disclimer'><em>Payment Desclaimer:</em> in no event shall payment or partial 
                            payment owner for any materials services</p>

                        </div>
                    </div>
                </div>
            </div>

        </Modal>
    </div>
  )
}

export default CheckOutPage