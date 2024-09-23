import { FaTruck, FaPhoneAlt, FaGift, FaUndo, FaLock } from 'react-icons/fa';
import Image, { StaticImageData } from "next/image";
import FooterImg from '../../../../../public/assets/footer.jpeg'
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 w-full">
      <div className="w-full px-4">
        {" "}
        {/* Use w-full for full width */}
        {/* Upper section: offers */}
        <div className="flex flex-wrap justify-between items-center bg-white p-4 rounded-lg shadow-md mb-8">
        <div className="flex items-center justify-center p-4 border-2 border-pink-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 transform hover:scale-105">
            <FaTruck className="text-pink-600 text-xl" />
            <div>
              <span className="font-bold text-pink-600">Free Delivery</span>
              <p className="text-gray-500 text-sm">From all orders over $10</p>
            </div>
          </div>
          <div className="flex items-center justify-center p-4 border-2 border-pink-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 transform hover:scale-105">
            <FaPhoneAlt className="text-pink-600 text-3xl mr-4" />
            <div>
              <span className="font-bold text-pink-600 text-lg">
                Support 24/7
              </span>
              <p className="text-gray-500 text-sm">Shop with an expert</p>
            </div>
          </div>

          <div className="flex items-center justify-center p-4 border-2 border-pink-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 transform hover:scale-105">
            <FaGift className="text-pink-600 text-xl" />
            <div>
              <span className="font-bold text-pink-600">Gift Voucher</span>
              <p className="text-gray-500 text-sm">Refer a friend</p>
            </div>
          </div>
          <div className="flex items-center justify-center p-4 border-2 border-pink-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 transform hover:scale-105">
            <FaUndo className="text-pink-600 text-xl" />
            <div>
              <span className="font-bold text-pink-600">Return & Refund</span>
              <p className="text-gray-500 text-sm">Free return over $200</p>
            </div>
          </div>
          <div className="flex items-center justify-center p-4 border-2 border-pink-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 transform hover:scale-105">
            <FaLock className="text-pink-600 text-xl" />
            <div>
              <span className="font-bold text-pink-600">Secure Payment</span>
              <p className="text-gray-500 text-sm">100% Protected</p>
            </div>
          </div>
        </div>
        {/* Middle section: subscribe with image */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex items-center justify-between w-full">
          {/* Left side: Image */}
          <div className="w-1/2">
            <img
              src={FooterImg} // Replace this with your image path
              alt="Subscribe"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right side: Subscribe form */}
          <div className="w-1/2 pl-8">
            <h3 className="text-xl font-bold text-center">
              Subscribe & Get 10% Discount
            </h3>
            <p className="text-gray-500 text-center">
              Get E-mail updates about our latest shop and special offers.
            </p>
            <div className="mt-4 flex justify-center">
              <input
                type="email"
                placeholder="Enter email address..."
                className="border border-gray-300 rounded-l-lg py-2 px-4"
              />
              <button className="bg-pink-600 text-white px-6 py-2 rounded-r-lg">
                Sign up
              </button>
            </div>
          </div>
        </div>
        {/* Lower section: footer links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full">
          {" "}
          {/* Add w-full here */}
          {/* Contact section */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <address className="not-italic text-sm text-gray-500">
              502 New Design Str,
              <br />
              Melbourne, San Francisco, CA 94110, United States
              <br />
              <a href="tel:+01123456789" className="block mt-2">
                (+01) 123-456-789
              </a>
              <a href="mailto:contact@ecom-market.com" className="block">
                contact@ecom-market.com
              </a>
              <p className="mt-2">Hours: 8:00 - 17:00, Mon - Sat</p>
            </address>
            <div className="flex space-x-2 mt-4">
              <a href="#" className="text-blue-600">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-red-600">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="text-blue-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-teal-600">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
          {/* Make Money with Us */}
          <div>
            <h4 className="font-bold mb-4">Make Money with Us</h4>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>
                <a href="#">Mission & Vision</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press & Media</a>
              </li>
              <li>
                <a href="#">Advertising</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>
                <a href="#">Our Blog</a>
              </li>
              <li>
                <a href="#">Plans & Pricing</a>
              </li>
              <li>
                <a href="#">Knowledge Base</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
              <li>
                <a href="#">Office Center</a>
              </li>
              <li>
                <a href="#">News & Events</a>
              </li>
            </ul>
          </div>
          {/* My Account */}
          <div>
            <h4 className="font-bold mb-4">My Account</h4>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Editor Help</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Live Chatting</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Support Center</a>
              </li>
            </ul>
          </div>
          {/* App & Payment */}
          <div>
            <h4 className="font-bold mb-4">App & Payment</h4>
            <p className="text-sm text-gray-500">
              Download our Apps and get extra 15% Discount on your first
              Order...!
            </p>
            <div className="mt-4 flex space-x-4">
              <img src="/visa.png" alt="Visa" className="h-8" />
              <img src="/mastercard.png" alt="MasterCard" className="h-8" />
              <img src="/paypal.png" alt="PayPal" className="h-8" />
            </div>
          </div>
        </div>
        {/* Bottom copyright section */}
        <div className="mt-8 border-t pt-4 text-sm text-center text-gray-500">
          <p>&copy; Safenax. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
