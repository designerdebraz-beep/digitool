import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <div className="bg-white py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-400 mt-2">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {/* Starter */}
        <div className="bg-gray-100  text-black rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold">Starter</h2>
          <p className="text-gray-500 text-sm mb-4">
            Perfect for getting started
          </p>

          <h3 className="text-3xl font-bold mb-4">
            $0 <span className="text-base font-medium">/month</span>
          </h3>

          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <Check className="text-green-500 w-4 h-4" />
              Access to 10 free tools
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500 w-4 h-4" />
              Basic templates
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500 w-4 h-4" />
              Community support
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500 w-4 h-4" />
              1 project per month
            </li>
          </ul>

          <button className="w-full py-3 rounded-full text-white font-semibold bg-linear-to-r from-purple-500 to-pink-500">
            Get Started Free
          </button>
        </div>

        {/* Pro (Highlighted) */}
        <div className="relative bg-linear-to-r from-purple-600 to-pink-500 rounded-2xl p-6 shadow-xl scale-105">
          
          {/* Badge */}
          <span className="absolute top-4 right-4 bg-[#fef3c6] text-[#bb4d00] text-xs px-3 py-1 rounded-full">
            Most Popular
          </span>

          <h2 className="text-xl font-semibold text-white">Pro</h2>
          <p className="text-sm mb-4 text-white">Best for professionals</p>

          <h3 className="text-3xl font-bold mb-4 text-white">
            $29 <span className="text-base font-medium text-white">/month</span>
          </h3>

          <ul className="space-y-2 mb-6 text-white">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              Access to all premium tools
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              Unlimited templates
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              Priority support
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              Unlimited projects
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              Cloud sync
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              Advanced analytics
            </li>
          </ul>

          <button className="w-full py-3 rounded-full bg-white text-purple-600 font-semibold">
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-gray-100 text-black rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold">Enterprise</h2>
          <p className="text-gray-500 text-sm mb-4">
            For teams and businesses
          </p>

          <h3 className="text-3xl font-bold mb-4">
            $99 <span className="text-base font-medium">/month</span>
          </h3>

          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <Check className="text-green-500 w-4 h-4" />
              Everything in Pro
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500 w-4 h-4" />
              Team collaboration
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500 w-4 h-4" />
              Custom integrations
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500 w-4 h-4" />
              Dedicated support
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500 w-4 h-4" />
              SLA guarantee
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500 w-4 h-4" />
              Custom branding
            </li>
          </ul>

          <button className="w-full py-3 rounded-full text-white font-semibold bg-linear-to-r from-purple-500 to-pink-500">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
}