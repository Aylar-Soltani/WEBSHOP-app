import React from 'react'
import Rating from '../components/Rating'
import data from '../data'

export default function ProductPage(props) {
    const product= data.products.find(p => p._id === props.match.params.id)
    if (!product) {
        return <div>Product Not Found</div>
    }
    return (
        <div>
            <div className="row">
                <div className="col-2">
                    <img src={product.image} alt={product.name}></img>
                </div>

                <div className="col-2">
                  <div className="product-container">
                      <ul>
                        <li>
                            {product.name}
                        </li>
                        <li>
                        <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                        </li>
                        <li>
                           € {product.price}
                        </li>
                        <li>
                            <button className="addCard">
                                ADD TO BAG
                            </button>
                        </li>
                        <li className="wishlist">
                           <a href="#">  ADD TO WISH LIST </a>
                        </li>
                      </ul>       
                  </div>
                </div>
                
            </div>
        </div>
    )
}
