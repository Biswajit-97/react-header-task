import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './Header.style.scss';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';


const Header = props => ( 
        <React.Fragment>


            <div className="header-top">
                <div className="container">
                    <div className="ht-left">
                        <div className="open-service">
                        <i className='bx bx-calendar-heart'></i>
                            Open store event discount 60%
                        </div>
                        <div className="store-service">
                        <i className='bx bxs-map'></i>
                             store location
                        </div>
                    </div>
                    <div className="ht-right">
                        <div className="login-panel">
                        <i className='bx bxs-envelope' ></i>
                            Support@domain.com
                        </div>
            
                    <div className="lan-selector">
                        <select className="language_drop" name="countries" id="countries">
                            <option value='yt' 
                                data-title="United">USD</option>
                            <option value='yu'
                                data-title="India">INR</option>
                        </select>
                    </div>
                    <div className="top-social">
                    <i className='bx bxs-rocket'></i>
                    Free Shipping on Orders $50
                    </div>
                    </div>
                </div>
            </div>



            <div className="container">
                <div className="inner-header">
                    <div className="row">
                        <div className="col-lg-2 col-md-2">
                            <div className="logo">
                                <a href="/"> <h3>Logo</h3> </a>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 " >
                            <div className="advanced-search">
                                <button type="button" className="category-btn">All Categories </button>
                                <div className="input-group">
                                    <input type="text" placeholder="What do you need?" />
                                    <button type="button"><i className='bx bx-search-alt' ></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 text-right col-md-3">
                            <ul className="nav-right">
                                <li className="heart-icon">
                                    <a href="/" > <i className='bx bxs-user'></i> </a>
                                </li>
                                <li className="heart-icon"> 
                                    <a href="/" > <i className='bx bxs-heart' ></i> <span>0</span> </a>
                                </li>
                                <li className="cart-icon">
                                    <a href="/" > <i className='bx bxs-cart' ></i> <span>0</span> </a>   
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



            <div className="nav-item">
                <div className="container">
                    <div className="nav-depart">
                        <div className="depart-btn">
                            <i className='bx bx-menu' ></i>
                            <span>All departments</span>
                            <ul className="depart-hover">
                                <li className="active"><a href="/" >Women’s Clothing</a></li>
                                <li><a href="/" >Men’s Clothing</a></li>
                                <li><a href="/" >Underwear</a></li>
                                <li><a href="/" >Kid's Clothing</a></li>
                                <li><a href="/" >Brand Fashion</a></li>
                                <li><a href="/" >Accessories/Shoes</a></li>
                                <li><a href="/" >Luxury Brands</a></li>
                                <li><a href="/" >Brand Outdoor Apparel</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu">
                        <nav className="nav-menu mobile-menu">
                            <ul>
                                <li className="active"><a href="/">Home</a></li>
                                <li><a href="/" >Shop</a></li>
                                <li><a href="/" >Collection</a>
                                    <ul className="dropdown">
                                        <li><a href="/" >Men's</a></li>
                                        <li><a href="/" >Women's</a></li>
                                        <li><a href="/" >Kid's</a></li>
                                    </ul>
                                </li>
                                <li><a href="/" >Blog</a></li>
                                <li><a href="/" >Contact</a></li>
                                <li><a href="/" >Pages</a>
                                    <ul className="dropdown">
                                        <li><a href="/">Blog Details</a></li>
                                        <li><a href="/">Shopping Cart</a></li>
                                        <li><a href="/">Checkout</a></li>
                                        <li><a href="/">Faq</a></li>
                                        <li><a href="/">Register</a></li>
                                        <li><a href="/">Login</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            
                <div className="toolbar_toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
            </div>
        

     </React.Fragment>
         );

 
export default Header;