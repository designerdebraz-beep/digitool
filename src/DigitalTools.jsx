
import { use } from 'react';
import Card from './Card';
const DigitalTools = ({ productsdata , cart , setcart}) => {
    const products = use(productsdata)

    //    console.log(products)


    return (

        <div className="max-w-6xl mx-auto">


            <section className="bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto">
                 

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, idx) => (

                    <Card product={product} idx={idx} key ={product.title} cart={cart} setcart={setcart}></Card>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    );
};

export default DigitalTools;