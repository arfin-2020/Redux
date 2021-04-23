import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/CartAction";

const initialState ={
    cart:[],
    products:[{ name: 'lenovo Laptop', id : "1", price:"45000tk"},
    { name: 'Asus Laptop', id : "2", price:"40000tk"},
    { name: 'HP Laptop', id : "3", price:"60000tk"},
    { name: 'Dell Laptop', id : "4", price:"50000tk"},
    { name: 'Toshiba Laptop', id : "5", price:"30000tk"},]
}

const cartReducers = (state = initialState, action)=>{
    switch(action.type){
        case ADD_TO_CART:
            const newItem = {
                productId: action.id,
                name: action.name,
                cartId: state.cart.length +1
            }
            const newCart = [...state.cart, newItem];
            return{...state, cart:newCart};
        case REMOVE_FROM_CART:
            const id = action.id
            const remainingCart = state.cart.filter(item =>item.cartId !== id);
            return{...state, cart:remainingCart}
        default:
            return state;
    }
}
export default cartReducers;