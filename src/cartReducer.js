export default function cartReducer(cart, action) {
    switch (action.type){
        case "empty":
            return [];
        case "add": {
            const {id, sku} = action;
            const itemInCart = cart.find((item) => item.sku === sku);
            if (itemInCart) {
                // Return a new array with the matching item replaced
                return cart.map((i) => i.sku === sku ? {...i, quantity: i.quantity + 1} : i);
            } else {
                return [...cart, {id, sku, quantity: 1}];
            }
        }
        case "update": {
            const {quantity, sku} = action;
            return quantity === 0 ? cart.filter((item) => item.sku !== sku) :
                cart.map(i => i.sku === sku ? {...i, quantity} : i);
        }
        default:
            throw new Error(`Unhandled action ${action.type}`);
    }
}