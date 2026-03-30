
import { Check } from 'lucide-react';
const DigitalTools = () => {
//    const products = use(productsdata)
//    console.log(products)
const products = [
  {
     title: "AI Writing Pro",
     description: "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
     price: "$29",
     period: "/Mo",
     features: ["Unlimited AI generations", "50+ writing templates", "Grammar checker"],
     badge: "Best Seller",
     badgeColor: "bg-orange-100 text-[#bb4d00]",
     icon: "📝",
   },
   {
     title: "Design Templates Pack",
    description: "2000+ premium templates for social media, presentations, and marketing materials.",
     price: "$49",
     period: "/One-Time",
     features: ["2000+ templates", "Monthly updates", "Commercial license"],
    badge: "Popular",
     badgeColor: "bg-purple-100 text-purple-600",
     icon: "🎨",
  },
   {
     title: "Premium Stock Assets",
     description: "Access millions of royalty-free photos, videos, and graphics for your projects.",
     price: "$19",
    period: "/Mo",
    features: ["10M+ assets", "Commercial use", "No attribution"],
    badge: "New",
     badgeColor: "bg-green-100 text-green-600",
    icon: "📷",
   },
   {
    title: "Automation Toolkit",
     description: "Automate repetitive tasks and streamline your workflow with powerful tools.",
    price: "$79",
     period: "/Mo",
     features: ["50+ automations", "API access", "Custom workflows"],
     badge: "Popular",
    badgeColor: "bg-purple-100 text-purple-600",
     icon: "⚙️",
   },
   {
    title: "Resume Builder Pro",
    description: "Create professional resumes and cover letters that land interviews.",
    price: "$15",
    period: "/One-Time",
     features: ["100+ templates", "ATS optimization", "Export to PDF"],
     badge: "New",
     badgeColor: "bg-green-100 text-green-600",
     icon: "📄",
   },
  {
    title: "Social Media Content Kit",
    description: "Complete toolkit for creating engaging social media content across all platforms.",
     price: "$39",
    period: "/Mo",
     features: ["5000+ assets", "Scheduler included", "Analytics dashboard"],
    badge: "Best Seller",
    badgeColor: "bg-orange-100 text-orange-600",
    icon: "📱",
   },
];

    return (
        <div className="max-w-6xl mx-auto">
           

        <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Digital Tools</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>

          {/* Toggle Switch */}
          <div className="inline-flex items-center p-1 bg-gray-50 border border-gray-200 rounded-full">
            <button className="px-6 py-2 bg-[#7C3AED] text-white rounded-full font-medium text-sm">Products</button>
            <button className="px-6 py-2 text-gray-500 rounded-full font-medium text-sm">Cart (2)</button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
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
              <button className="w-full py-3 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold rounded-xl transition-colors">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>
    );
};

export default DigitalTools;