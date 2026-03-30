import React, { useState } from 'react';

import { Check } from 'lucide-react';

const Card = ({ product, idx , cart , setcart}) => {
    const [addtocart, setaddtocart] = useState(true);
    const handlesuscription = () => {
        setaddtocart()
        setcart([...cart,product])

    }
    return (
        <div key={idx} className="relative border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
            {/* Badge */}
            <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${product.badgeColor}`}>
                {product.badge}
            </span>

            {/* Icon & Title */}
            <div className="text-4xl mb-6">{product.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">{product.description}</p>

            {/* Price */}
            <div className="mb-6">
                <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                <span className="text-gray-400 text-sm">{product.period}</span>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8 grow">
                {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                    </li>
                ))}
            </ul>

            {/* Button */}
            <button onClick={handlesuscription}
                className={`w-full py-3 font-semibold rounded-xl transition-all duration-300 text-white 
    ${addtocart
                        ? "bg-[#7C3AED] hover:bg-[#6D28D9]" // Color when "Buy Now" (Clicked)
                        : "bg-green-600 hover:bg-green-700"  // Color when "Add to cart" (Default)
                    }`}
            >
                {addtocart ? " Buy Now" : "Add to cart"}
            </button>
        </div>
    );
};

export default Card;