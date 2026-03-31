import { MessageSquareX } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { toast } from 'react-toastify';

const Cart = ({ cart,setcart }) => {
    console.log(cart)
    const totalPrice = cart.reduce((sum , item )=> sum + item.price, 0)

    const handlePayment =() =>{
        setcart([])
    }
    const handleDelete =(product) => {
        const fillterData = cart.filter(d => d.title !== product.title )
        console.log(fillterData)
        setcart(fillterData)
        toast('item deleted Successfully')
    }
    return (
        <>
          {cart.length === 0 ? <div className='flex justify-center items-center'>
            <p className='text-4xl font-bold text-center  my-12'> Your cart is empty </p>
            
          </div>
           :  <div className='px-10'>
            
            <h2 className='text-4xl py-3 font-bold'>Your cart {cart.length}</h2>
            <div className="">

          

                {
                    cart.map(product => <div key={product.title} className="text-4xl mb-6 flex items-center justify-between gap-2 py-7 rounded-lg px-4 shadow-2xl">
                        <div className='flex items-center justify-center'>
                            <h2>{product.icon}</h2>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                      
                        </div>

                        
                              <div>
                            {<h3 className="text-xl font-bold text-gray-900 mb-3">${product.price}</h3>}
                        </div>
                
                <MessageSquareX onClick={()=> handleDelete(product)} className='text-red-600 cursor-pointer'/>
                    </div>)

                }

                 <div className='flex items-center justify-between bg-gray-100 px-2.5 py-2.5 text-black rounded-2xl'>
                    <h2 className='text-3xl font-bold'>Total: </h2>
                    <span className='text-5xl px-5 font-bold'>${totalPrice}</span>
                 </div>
            </div>
            <button onClick={handlePayment} className='btn  w-full mt-2 bg-[#7C3AED] font-bold text-xl text-white py-5'>Process to checkOut</button>
        </div>}
       </>
    );
};

export default Cart;