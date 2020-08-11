import React from 'react';

import './SideDrawer.style.scss';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
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
  );
};

export default sideDrawer;