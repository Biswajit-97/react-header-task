import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'
import './Productcard.style.scss';
import $ from 'jquery';

class  Productcard extends Component {
    state = {  }
    constructor () {
        super();
    }
    componentDidMount() {
        $('.carousel[data-type="multi"] .item').each(function(){
            var next = $(this).next();
            if (!next.length) {
              next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
            
            for (var i=0;i<2;i++) {
              next=next.next();
              if (!next.length) {
                  next = $(this).siblings(':first');
                }
              
              next.children(':first-child').clone().appendTo($(this));
            }
          });
          
      }
    render() { 
        return (  
  




    <React.Fragment>
       


        <div class="col-md-12 text-center display-4 custom"><h3 class="display-3">Lateast Products </h3></div>
        
            <div class="col-md-12 ">
                <div class="carousel slide" data-ride="carousel" data-type="multi" data-interval="5000" id="myCarousel">
                    <div class="carousel-inner">


                        <div class="item active">
                            <div class="col-md-3 col-sm-6">
                                <div class="product-grid4">
                                    <div class="product-image4">
                                        <a href="#">
                                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-1.jpg" />
                                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-2.jpg" />
                                        </a>
                                        <ul class="social">
                                            <li><a href="#" data-tip="Quick View"><i class='bx bx-show-alt'></i></a></li>
                                            <li><a href="#" data-tip="Add to Wishlist"><i class='bx bxs-heart'></i></a></li>
                                            <li><a href="#" data-tip="Add to Cart"><i class='bx bxs-cart-alt' ></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="product-content">
                                        <h3 class="title"><a href="#">Women's Black Top</a></h3>
                                        <div class="price">
                                            $14.40
                                            <span>$16.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="col-md-3 col-sm-6">
                                <div class="product-grid4">
                                    <div class="product-image4">
                                        <a href="#">
                                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-5.jpg" />
                                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-6.jpg" />
                                        </a>
                                        <ul class="social">
                                            <li><a href="#" data-tip="Quick View"><i class='bx bx-show-alt'></i></a></li>
                                            <li><a href="#" data-tip="Add to Wishlist"><i class='bx bxs-heart'></i></a></li>
                                            <li><a href="#" data-tip="Add to Cart"><i class='bx bxs-cart-alt' ></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="product-content">
                                        <h3 class="title"><a href="#">Women's Black Top</a></h3>
                                        <div class="price">
                                             $14.40
                                            <span>$16.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="col-md-3 col-sm-6">
                                <div class="product-grid4">
                                    <div class="product-image4">
                                        <a href="#">
                                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-3.jpg"/>
                                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-4.jpg"/>
                                        </a>
                                        <ul class="social">
                                            <li><a href="#" data-tip="Quick View"><i class='bx bx-show-alt'></i></a></li>
                                            <li><a href="#" data-tip="Add to Wishlist"><i class='bx bxs-heart'></i></a></li>
                                            <li><a href="#" data-tip="Add to Cart"><i class='bx bxs-cart-alt' ></i></a></li>
                                            </ul>
                                    </div>
                                    <div class="product-content">
                                        <h3 class="title"><a href="#">Women's Black Top</a></h3>
                                        <div class="price">
                                            $14.40
                                            <span>$16.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="col-md-3 col-sm-6">
                                <div class="product-grid4">
                                    <div class="product-image4">
                                        <a href="#">
                                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-7.jpg" />
                                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-8.jpg" />
                                        </a>
                                        <ul class="social">
                                            <li><a href="#" data-tip="Quick View"><i class='bx bx-show-alt'></i></a></li>
                                            <li><a href="#" data-tip="Add to Wishlist"><i class='bx bxs-heart'></i></a></li>
                                            <li><a href="#" data-tip="Add to Cart"><i class='bx bxs-cart-alt' ></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="product-content">
                                        <h3 class="title"><a href="#">Women's Black Top</a></h3>
                                            <div class="price">
                                                $14.40
                                                <span>$16.00</span>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="item">
                            <div class="col-md-3 col-sm-6">
                                <div class="product-grid4">
                                    <div class="product-image4">
                                        <a href="#">
                                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-5.jpg"/>
                                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-6.jpg"/>
                                        </a>
                                        <ul class="social">
                                            <li><a href="#" data-tip="Quick View"><i class='bx bx-show-alt'></i></a></li>
                                            <li><a href="#" data-tip="Add to Wishlist"><i class='bx bxs-heart'></i></a></li>
                                            <li><a href="#" data-tip="Add to Cart"><i class='bx bxs-cart-alt' ></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="product-content">
                                        <h3 class="title"><a href="#">Women's Black Top</a></h3>
                                        <div class="price">
                                            $14.40
                                            <span>$16.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="col-md-3 col-sm-6">
                                <div class="product-grid4">
                                    <div class="product-image4">
                                        <a href="#">
                                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-3.jpg"/>
                                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-4.jpg"/>
                                        </a>
                                        <ul class="social">
                                            <li><a href="#" data-tip="Quick View"><i class='bx bx-show-alt'></i></a></li>
                                            <li><a href="#" data-tip="Add to Wishlist"><i class='bx bxs-heart'></i></a></li>
                                            <li><a href="#" data-tip="Add to Cart"><i class='bx bxs-cart-alt' ></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="product-content">
                                        <h3 class="title"><a href="#">Men's Blue Shirt</a></h3>
                                        <div class="price">
                                            $17.60
                                            <span>$20.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="col-md-3 col-sm-6">
                                <div class="product-grid4">
                                    <div class="product-image4">
                                        <a href="#">
                                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-5.jpg"/>
                                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-6.jpg"/>
                                        </a>
                                        <ul class="social">
                                            <li><a href="#" data-tip="Quick View"><i class='bx bx-show-alt'></i></a></li>
                                            <li><a href="#" data-tip="Add to Wishlist"><i class='bx bxs-heart'></i></a></li>
                                            <li><a href="#" data-tip="Add to Cart"><i class='bx bxs-cart-alt' ></i></a></li>
                                            </ul>      
                                    </div>
                                    <div class="product-content">
                                        <h3 class="title"><a href="#">Women's Black Top</a></h3>
                                        <div class="price">
                                             $14.40
                                            <span>$16.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="col-md-3 col-sm-6">
                                <div class="product-grid4">
                                    <div class="product-image4">
                                        <a href="#">
                                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-7.jpg"/>
                                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-8.jpg"/>
                                        </a>
                                        <ul class="social">
                                            <li><a href="#" data-tip="Quick View"><i class='bx bx-show-alt'></i></a></li>
                                            <li><a href="#" data-tip="Add to Wishlist"><i class='bx bxs-heart'></i></a></li>
                                            <li><a href="#" data-tip="Add to Cart"><i class='bx bxs-cart-alt' ></i></a></li>
                                        </ul>                  
                                    </div>
                                    <div class="product-content">
                                        <h3 class="title"><a href="#">Women's Black Top</a></h3>
                                        <div class="price">
                                            $14.40
                                            <span>$16.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <a class="left carousel-control" href="#myCarousel" data-slide="prev"><i class="glyphicon glyphicon-chevron-left"></i></a>
                    <a class="right carousel-control" href="#myCarousel" data-slide="next"><i class="glyphicon glyphicon-chevron-right"></i></a>
                </div>
            </div>



        
                    
    </React.Fragment>

);

}
}
 

export default Productcard;