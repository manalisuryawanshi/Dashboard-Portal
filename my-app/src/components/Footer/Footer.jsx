import React from 'react';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#', color: 'bg-blue-600' },
    { name: 'Instagram', icon: '📷', url: '#', color: 'bg-pink-500' },
    { name: 'LinkedIn', icon: '💼', url: '#', color: 'bg-blue-700' },
    { name: 'TikTok', icon: '🎵', url: '#', color: 'bg-black' },
    { name: 'Twitter', icon: '🐦', url: '#', color: 'bg-gray-800' },
    { name: 'YouTube', icon: '📺', url: '#', color: 'bg-red-600' }
  ];

  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-8 mt-auto">
      <div className="w-full px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className={`${social.color} p-3 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg`}
                title={social.name}
              >
                <span className="text-xl">{social.icon}</span>
              </a>
            ))}
          </div>

          {/* Company Info */}
          <div className="text-center">
            <div className="text-lg font-semibold mb-2">InsitesData @ 2025</div>
            <div className="text-sm text-white/80">
              <a 
                href="mailto:info@insitesdata.com" 
                className="hover:text-white transition-colors"
              >
                info@insitesdata.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;