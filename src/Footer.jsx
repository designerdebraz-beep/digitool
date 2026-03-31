import { LayoutGrid ,Annoyed,GlobeX} from 'lucide-react';
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
  
    <footer className="bg-[#0B1220] text-gray-300 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-white text-2xl font-bold mb-3">
              DigiTools
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-3">Product</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Templates</li>
              <li className="hover:text-white cursor-pointer">Integrations</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Documentation</li>
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Community</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-3">Social</h3>
            <div className="flex gap-3">
              
              <div className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 cursor-pointer">
                <FaInstagram  url="https://twitter.com"  className="w-4 h-4 text-white" />
              </div>

              <div className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 cursor-pointer">
                <FaFacebookSquare  className="w-4 h-4 text-white" />
              </div>

              <div className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 cursor-pointer">
                <FaSquareXTwitter  className="w-4 h-4 text-white" />
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© 2026 DigiTools. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
    );
};

export default Footer;