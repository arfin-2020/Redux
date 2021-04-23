import React from 'react';
import { connect } from 'react-redux';
import Products from '../Products/Products';
import { addToCart } from '../Redux/Actions/CartAction';

const Shop = (props) => {
    // console.log(props)
   const {products,addToCart} = props;

    return (
        <div>
            <h1> This is shop components</h1>
            {
                products.map(product =><Products product={product} key={product.id} addToCart={addToCart}/>)
            }
        </div>
    );
};
const mapStateToProps  = state =>{
    return {
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

// const connectToStore = connect(mapStateToProps,mapDispatchToProps)
// connect(mapStateToProps,mapDispatchToProps)(Shop)
export default connect(mapStateToProps,mapDispatchToProps)(Shop);