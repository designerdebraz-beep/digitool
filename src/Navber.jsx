import React, { memo } from 'react';
import { ShoppingCart } from 'lucide-react';

const Navber = memo(({cart}) => {
    return (
<div className='px-11 bg-white sticky top-0 z-10 shadow-2xl'>
    <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
     
    </div>
    <a className="text-2xl font-extrabold inline-block text-transparent bg-clip-text bg-linear-to-r from-[#4f39f6] via-[#9514fa] to-purple-700">DIGITOOL</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Products</a></li>

      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end ">
    <div className='flex items-center justify-center '>
      {cart.length > 0 ? <span className='absolute w-6 h-6 top-2 bg-red-900 text-center rounded-3xl font-extrabold text-white'>{cart.length}</span> : null

      }
      
    <ShoppingCart className='mr-4 cursor-pointer '/>
     
    </div>
    <a className="pr-4 cursor-pointer">Login</a>
    <a className="text-white  from-blue-500 bg-linear-to-r via-blue-600 to-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5 cursor-pointer">Getstarted</a>

  </div>
</div>
</div>
    );
});

export default Navber;