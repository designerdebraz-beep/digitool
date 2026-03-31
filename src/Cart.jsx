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
          {cart.length === 0 ? <div>
            <h2 className='px-12 font-extrabold ml-16 mt-10 text-3xl'>Your Cart</h2>
            <div>
                <div className='flex flex-col justify-center items-center  shadow-2xl mx-20 mt-4 py-12'>
            
            <ShoppingCart  size={50} className='mt-5 text-gray-400'></ShoppingCart>
            <p className='text-4xl font-bold text-center mb-11 shadow-2xl'> Your cart is empty </p>
            
          </div>
            </div>
          </div>
           :  <div className='px-16'>
            
            <h2 className='text-4xl py-3 font-bold'>Your cart {cart.length}</h2>
            <div className="">

          

                {
                    cart.map(product => <div key={product.title} className="text-4xl mb-6 flex  items-center justify-between gap-2 py-7 rounded-lg px-10 shadow-2xl ">
                        <div className='flex flex-col items-start justify-center'>
                            <h2>{product.icon}</h2>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                        <div>
                            {<h3 className="text-[30px] font-medium text-gray-500 mb-3">${product.price}</h3>}
                        </div>
                        </div>

                        
                            
                <button type="button" className='text-2xl font-bold text-red-600 cursor-pointer' onClick={()=> handleDelete(product)}>Remove</button>
                
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