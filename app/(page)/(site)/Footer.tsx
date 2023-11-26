import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGooglePlay, FaApple } from 'react-icons/fa';

const aboutUsLinks = [
  { title: 'Our Story' },
  { title: 'Mission & Vision' },
  { title: 'Team' },
  { title: 'Partners' },
];

const customerCareLinks = [
  { title: 'FAQs' },
  { title: 'Shipping Information' },
  { title: 'Returns & Exchanges' },
  { title: 'Privacy Policy' },
];

const socialMediaLinks = [
  { icon: <FaFacebook />, url: 'https://www.facebook.com/' },
  { icon: <FaTwitter />, url: 'https://twitter.com/' },
  { icon: <FaInstagram />, url: 'https://www.instagram.com/' },
  { icon: <FaLinkedin />, url: 'https://www.linkedin.com/' },
];

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-blue-50">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Our App</h3>
            <p className="mb-4 text-sm">Discover our app on your favorite platforms:</p>
            <div className="flex items-center space-x-4">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white"
              >
                <FaGooglePlay className="text-3xl" />
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white"
              >
                <FaApple className="text-3xl" />
              </a>
            </div>
            <p className="text-sm mt-4">Download now and experience our services on the go!</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">About Us</h3>
            <ul className="list-none">
              {aboutUsLinks.map((item, index) => (
                <li key={index} className="mb-2">
                  <a className="hover:text-white text-sm" href="#">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Customer Care</h3>
            <ul className="list-none">
              {customerCareLinks.map((item, index) => (
                <li key={index} className="mb-2">
                  <a className="hover:text-white text-sm" href="#">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
            <p className="text-sm text-gray-200 mb-4">
              70 Washington Square South, New York, <br />
              NY 10012, United States
            </p>
            <div className="flex items-center space-x-4">
              {socialMediaLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="text-center mt-8">
          <p className="text-sm">&copy; 2023 Abdul Alim | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
