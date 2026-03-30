import { MessageSquareX } from 'lucide-react';

const Cart = ({ cart }) => {
    console.log(cart)
    const totalPrice = cart.reduce((sum , item )=> sum + item.price, 0)
    return (
        <div className='px-10'>
            <h2 className='text-4xl'>Your cart {cart.length}</h2>
            <div className="border-2 border-amber-100 ">
                {
                    cart.map(product => <div className="text-4xl mb-6 flex items-center justify-between gap-2 py-7 border-2 border-amber-950-100 rounded-lg px-4">
                        <div className='flex items-center justify-center'>
                            <h2>{product.icon}</h2>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                      
                        </div>


                              <div>
                            {<h3 className="text-xl font-bold text-gray-900 mb-3">${product.price}</h3>}
                        </div>
                
                <MessageSquareX className='text-red-600'/>
                    </div>)

                }

                 <div className='flex items-center justify-between bg-amber-100'>
                    <h2 className='text-3xl font-bold'>Total: </h2>
                    <span className='text-5xl px-5'>${totalPrice}</span>
                 </div>
            </div>
            <button className='btn btn-primary w-full mt-2'>Process to checkOut</button>
        </div>
    );
};

export default Cart;