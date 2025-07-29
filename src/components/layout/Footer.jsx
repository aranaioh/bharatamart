// footer for both the cases but dosn't include the cart , wishlist and  Compare section

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../ui/accordion';

export default function Footer() {
  return (
    <>
      {/* Mobile/Small screen: Accordion */}
      <div className="block md:hidden w-full bg-[#e6e6e6] pt-10 pb-6 px-4">
        <Accordion type="single" collapsible>
          {/* Logo and Description at the bottom for mobile */}
          <div className="flex flex-col items-start gap-4 mt-8 pl-2">
            <img src="/Bharatmart_logo_200.png" alt="Bharat Mart Logo" className="w-20 h-20 object-contain" />
            <p className="text-gray-600 pr-4 text-sm">
              We’re more than just a store – we’re a community of savvy shoppers who care about what they buy and who they buy it from. Explore our collection and see the difference for yourself.
            </p>
          </div>
          <AccordionItem value="categories">
            <AccordionTrigger className="font-semibold text-lg">Categories</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-2 pl-4 pb-2">
                <a href="#" className="font-medium text-sm hover:underline">Electronics</a>
                <a href="#" className="font-medium text-sm hover:underline">Fashion</a>
                <a href="#" className="font-medium text-sm hover:underline">Home Decor</a>
                <a href="#" className="font-medium text-sm hover:underline">Televisions</a>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="about">
            <AccordionTrigger className="font-semibold text-lg">About & Social Presence</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-2 pl-4 pb-2">
                <a href="#" className="font-medium text-sm hover:underline">About Us</a>
                <a href="#" className="font-medium text-sm hover:underline">Contact Us</a>
                <div className="mt-4">
                  <h4 className="font-semibold text-base mb-2">Social Presence</h4>
                  <div className="flex gap-2 pb-2 flex-wrap">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#4267B2] text-white text-lg transition-transform hover:scale-110 hover:bg-[#365899]">
                      <FaFacebookF />
                    </a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white text-lg transition-transform hover:scale-110 hover:bg-gray-800">
                      <FaXTwitter />
                    </a>
                    <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E60023] text-white text-lg transition-transform hover:scale-110 hover:bg-[#ad081b]">
                      <FaPinterestP />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0077b5] text-white text-lg transition-transform hover:scale-110 hover:bg-[#005983]">
                      <FaLinkedinIn />
                    </a>
                    <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#229ED9] text-white text-lg transition-transform hover:scale-110 hover:bg-[#157ab3]">
                      <FaTelegram />
                    </a>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="support">
            <AccordionTrigger className="font-semibold text-lg">Support</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-2 pl-4 pb-2">
                <a href="#" className="font-medium text-sm hover:underline">Privacy Policy</a>
                <a href="#" className="font-medium text-sm hover:underline">Terms and Conditions</a>
                <a href="#" className="font-medium text-sm hover:underline">Refund and Cancellation Policy</a>
                <a href="#" className="font-medium text-sm hover:underline">Shipping Policy</a>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </div>
      {/* Desktop/Tablet: Grid Layout */}
      <footer className="hidden md:block w-full bg-[#e6e6e6] pt-28 pb-16 pl-10 pr-8">
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-start md:items-stretch">
          {/* Logo and Description */}
          <div className="flex-1 min-w-[250px] lg:min-w-2/5 flex flex-col items-start gap-4">
            <img src="/Bharatmart_logo_200.png" alt="Bharat Mart Logo" className="w-20 h-20 object-contain" />
            <p className="text-gray-600 pr-10">
              We’re more than just a store – we’re a community of savvy shoppers who care about what they buy and who they buy it from. Explore our collection and see the difference for yourself.
            </p>
          </div>
          
          <div className='lg:w-3/5 flex flex-wrap max-sm:gap-4'>
            {/* Categories */}
            <div className="flex-1 min-w-[190px] lg:w-1/3 flex flex-col gap-2">
              <h3 className="text-lg font-semibold mb-1">Categories</h3>
              <a href="#" className="font-medium text-sm hover:underline">Electronics</a>
              <a href="#" className="font-medium text-sm hover:underline">Fashion</a>
              <a href="#" className="font-medium  text-sm  hover:underline">Home Decor</a>
              <a href="#" className="font-medium  text-sm  hover:underline">Televisions</a>
            </div>
            {/* About */}
            <div className="flex-1 min-w-[190px] lg:w-1/3 flex flex-col gap-2">
              <h3 className="text-xl font-semibold mb-1">About</h3>
              <a href="#" className="font-medium text-sm hover:underline">About Us</a>
              <a href="#" className="font-medium text-sm hover:underline">Contact Us</a>
              <h3 className="text-xl font-semibold mt-6 mb-2">Social Presence</h3>
              <div className="flex gap-2 group pb-4 flex-wrap">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#4267B2] text-white text-lg transition-transform hover:scale-110 hover:bg-[#365899] opacity-80 group-hover:opacity-100">
                  <FaFacebookF />
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white text-lg transition-transform hover:scale-110 hover:bg-gray-800 opacity-80 group-hover:opacity-100">
                  <FaXTwitter />
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E60023] text-white text-lg transition-transform hover:scale-110 hover:bg-[#ad081b] opacity-80 group-hover:opacity-100">
                  <FaPinterestP />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0077b5] text-white text-lg transition-transform hover:scale-110 hover:bg-[#005983] opacity-80 group-hover:opacity-100">
                  <FaLinkedinIn />
                </a>
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#229ED9] text-white text-lg transition-transform hover:scale-110 hover:bg-[#157ab3] opacity-80 group-hover:opacity-100">
                  <FaTelegram />
                </a>
              </div>
            </div>
            {/* Support */}
            <div className="flex-1 min-w-[190px] lg:w-1/3 flex flex-col gap-2">
              <h3 className="text-xl font-semibold mb-1">Support</h3>
              <a href="#" className="font-medium text-sm hover:underline">Privacy Policy</a>
              <a href="#" className="font-medium text-sm hover:underline">Terms and Conditions</a>
              <a href="#" className="font-medium text-sm hover:underline">Refund and Cancellation Policy</a>
              <a href="#" className="font-medium text-sm hover:underline">Shipping Policy</a>
            </div>

          </div>
        </div>
      </footer>
      {/* Copyright */}
      <div className="w-full max-lg:mb-16 text-center max-sm:pb-5 pb-10 pt-4 bg-white text-lg border-gray-200">
        <span className="text-gray-700 text-[15px]">© <span className="font-semibold">Bharat Mart.</span> All Rights Reserved</span>
      </div>
    </>
  );
}
