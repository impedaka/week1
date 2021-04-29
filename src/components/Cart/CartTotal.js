import React from 'react'
import {Link} from 'react-router-dom'
//diaplays total price with props from Cart
function CartTotal({getTotalPrice}) {

        return (
        <div>
            SubTotal: ${getTotalPrice()}
            Total: ${getTotalPrice()*1.13}
            Tax: ${getTotalPrice()*0.13}
            <Link to="/checkout"><button>Check Out</button></Link>
        </div>
    )
}

export default CartTotal