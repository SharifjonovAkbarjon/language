import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Left side */}
          <div className="mb-6 lg:mb-0">
            <h2 className="font-bold text-lg text-gray-800">Funiro.</h2>
            <p className="text-gray-600">
              400 University Drive Suite 200 Coral Gables,<br />
              FL 33134 USA
            </p>
          </div>

          {/* Links */}
          <div className="mb-6 lg:mb-0">
            <h4 className="font-semibold text-gray-800">Links</h4>
            <ul>
              <li className="text-gray-600 hover:text-gray-800"><a href="#">Home</a></li>
              <li className="text-gray-600 hover:text-gray-800"><a href="#">Shop</a></li>
              <li className="text-gray-600 hover:text-gray-800"><a href="#">About</a></li>
              <li className="text-gray-600 hover:text-gray-800"><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Help */}
          <div className="mb-6 lg:mb-0">
            <h4 className="font-semibold text-gray-800">Help</h4>
            <ul>
              <li className="text-gray-600 hover:text-gray-800"><a href="#">Payment Options</a></li>
              <li className="text-gray-600 hover:text-gray-800"><a href="#">Returns</a></li>
              <li className="text-gray-600 hover:text-gray-800"><a href="#">Privacy Policies</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-gray-800">Newsletter</h4>
            <form>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="border border-gray-400 p-2 rounded w-full lg:w-auto"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 mt-2 rounded-lg w-full lg:w-auto">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-4">
          <p className="text-gray-600 text-sm text-center">2023 Funiro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
