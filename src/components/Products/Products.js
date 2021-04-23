import React from 'react';

const Products = (props) => {
    const {addToCart,product} = props;
    return (
        <div style={{border: '1px solid green', padding:'10px'}}>
            <h4>{product.name}</h4>
            <h4>{product.price}</h4>
            <button onClick = {()=>addToCart(product.id,product.name)}>Add to cart</button>
        </div>
    );
};

export default Products;