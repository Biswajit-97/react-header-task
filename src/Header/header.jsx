import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './header.style.scss';

class Header extends Component {
    state = {  }

    componentDidMount() {
        const menu = document.querySelector('.menu');
        const btn = menu.querySelector('.nav-tgl');
        btn.addEventListener('click', evt => {
	    menu.classList.toggle('active');
        })

    }

    render() { 
        return (
        <React.Fragment>
            <div className="header-top">

                <div className="container">
                    <div className="ht-left">
                        <div className="open-service">
                            <i className="fa fa-clock"></i>
                            Open store event discount 60%
                        </div>
                        <div className="store-service">
                             <i className=" fa fa-map-marker-alt"></i>
                             store location
                        </div>
                    </div>
                    <div className="ht-right">
                        <div className="login-panel">
                            <i className=" fa fa-envelope"></i>
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
                        <i className=" fa fa-rocket"></i> 
                        Open store event discount 60%
                    </div>
                    </div>
                </div>
            </div>

<div className="container">
<div className="inner-header">
    <div className="row">
        <div className="col-lg-2 col-md-2">
            <div className="logo">
                <a >
                    <h3>Logo</h3>
                </a>
            </div>
        </div>
        <div className="col-lg-7 col-md-7">
            <div className="advanced-search">
                <button type="button" class="category-btn">All Categories </button>
                <div className="input-group">
                    <input type="text" placeholder="What do you need?" />
                    <button type="button"><i className="fa fa-search"></i></button>
                </div>
            </div>
        </div>
        <div className="col-lg-3 text-right col-md-3">
            <ul className="nav-right">
            <li className="heart-icon">
                    <a >
                    <i class="fa fa-user"></i>
                    </a>
                </li>
                <li className="heart-icon">
                    <a >
                    <i class="fa fa-heart"></i>
                        <span>0</span>
                    </a>
                </li>
                <li className="cart-icon">
                    <a >
                    <i class="fa fa-shopping-cart"></i>
                        <span>0</span>
                    </a>
                   
                </li>
            </ul>
        </div>
    </div>
</div>
</div>


        <div class="nav-item">
            <div class="container">
                <div class="nav-depart">
                    <div class="depart-btn">
                    <i className="fa fa-bars"></i>
                        <span>All departments</span>
                        <ul class="depart-hover">
                            <li class="active"><a>Women’s Clothing</a></li>
                            <li><a >Men’s Clothing</a></li>
                            <li><a >Underwear</a></li>
                            <li><a >Kid's Clothing</a></li>
                            <li><a >Brand Fashion</a></li>
                            <li><a >Accessories/Shoes</a></li>
                            <li><a >Luxury Brands</a></li>
                            <li><a >Brand Outdoor Apparel</a></li>
                        </ul>
                    </div>
            </div>

            <div className="menu">
                <button className="nav-tgl" type="button">
                    <span aria-hidden="true"></span>
                </button>
                <nav class="nav-menu mobile-menu">
                    
                    <ul>
                        <li class="active"><a >Home</a></li>
                        <li><a >Shop</a></li>
                        <li><a >Collection</a>
                            <ul class="dropdown">
                                <li><a >Men's</a></li>
                                <li><a >Women's</a></li>
                                <li><a >Kid's</a></li>
                            </ul>
                        </li>
                        <li><a >Blog</a></li>
                        <li><a >Contact</a></li>
                        <li><a >Pages</a>
                            <ul class="dropdown">
                                <li><a >Blog Details</a></li>
                                <li><a >Shopping Cart</a></li>
                                <li><a >Checkout</a></li>
                                <li><a >Faq</a></li>
                                <li><a >Register</a></li>
                                <li><a >Login</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                </div>
                <div id="mobile-menu-wrap"></div>
            </div>
        </div>
        

     </React.Fragment>
         );
    }
}
 
export default Header;