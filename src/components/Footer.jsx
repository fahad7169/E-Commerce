import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full pt-12 pb-4 px-4 md:px-12 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
        {/* Subscribe */}
        <div>
          <h3 className="font-bold text-lg mb-2">Exclusive</h3>
          <div className="mb-2 font-semibold">Subscribe</div>
          <div className="mb-2 text-sm text-gray-300">Get 10% off your first order</div>
          <form className="flex items-stretch mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-l-md px-3 py-2 bg-white text-black focus:outline-none w-40 md:w-48 border border-gray-200 h-11"
            />
            <button type="submit" className="bg-white text-black px-3 rounded-r-md border-l border-gray-200 hover:bg-gray-200 transition h-11 flex items-center">
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </form>
        </div>
        {/* Support */}
        <div>
          <h3 className="font-bold text-lg mb-2">Support</h3>
          <div className="text-sm text-gray-300 mb-2">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</div>
          <div className="text-sm text-gray-300 mb-2">exclusive@gmail.com</div>
          <div className="text-sm text-gray-300">+88015-88888-9999</div>
        </div>
        {/* Account */}
        <div>
          <h3 className="font-bold text-lg mb-2">Account</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="font-medium hover:underline">My Account</a></li>
            <li><a href="#" className="font-medium hover:underline">Login / Register</a></li>
            <li><a href="#" className="font-medium hover:underline">Cart</a></li>
            <li><a href="#" className="font-medium hover:underline">Wishlist</a></li>
            <li><a href="#" className="font-medium hover:underline">Shop</a></li>
          </ul>
        </div>
        {/* Quick Link */}
        <div>
          <h3 className="font-bold text-lg mb-2">Quick Link</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="font-medium hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="font-medium hover:underline">Terms Of Use</a></li>
            <li><a href="#" className="font-medium hover:underline">FAQ</a></li>
            <li><a href="#" className="font-medium hover:underline">Contact</a></li>
          </ul>
        </div>
        {/* Download App */}
        <div>
          <h3 className="font-bold text-lg mb-2">Download App</h3>
          <div className="text-xs text-gray-300 mb-2">Save $3 with App New User Only</div>
          <div className="flex gap-2 mb-3">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=https://yourapp.com" alt="QR Code" className="w-14 h-14 bg-white rounded" />
            <div className="flex flex-col gap-2">
              <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-7" /></a>
              <a href="#"><img src="https://www.pngmart.com/files/10/Download-on-the-App-Store-PNG-Image.png" alt="App Store" className="h-7 w-auto" /></a>
            </div>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f text-xl hover:text-gray-400"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter text-xl hover:text-gray-400"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram text-xl hover:text-gray-400"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in text-xl hover:text-gray-400"></i></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-10 pt-4 text-center text-gray-400 text-sm">
        <span className="material-symbols-outlined align-middle text-base mr-1">copyright</span>
        Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
} 