import { Heart, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Temple Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-xl font-bold mb-4 flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              श्री यंत्र रेणुका देवी मंदिर
            </motion.h3>
            <motion.div 
              className="text-sm text-orange-300 mb-3 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <br/>
            </motion.div>
            <motion.p 
              className="text-gray-300 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              A place of worship, devotion, and spiritual growth. 
              Serving our community with love and dedication.
            </motion.p>
            <motion.div 
              className="flex items-center space-x-2 text-orange-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="h-4 w-4" />
              </motion.div>
              <span className="text-sm">Established 1925</span>
            </motion.div>
          </motion.div>

          {/* Mobile: Quick Links and Services Side by Side */}
          <div className="md:hidden col-span-1 grid grid-cols-2 gap-6">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About Us', 'Services', 'Events', 'Gallery', 'Contact'].map((link, index) => (
                  <motion.li 
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.a 
                      href={`#${link.toLowerCase().replace(' ', '')}`} 
                      className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-300">
                {['Daily Prayers', 'Special Pujas', 'Wedding Ceremonies', 'Spiritual Classes', 'Community Events', 'Festival Celebrations'].map((service, index) => (
                  <motion.li 
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5, color: '#fbbf24' }}
                    className="cursor-pointer text-sm"
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Desktop: Quick Links */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Events', 'Gallery', 'Contact'].map((link, index) => (
                <motion.li 
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.a 
                    href={`#${link.toLowerCase().replace(' ', '')}`} 
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Desktop: Services */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              {['Daily Prayers', 'Special Pujas', 'Spiritual Classes', 'Community Events', 'Festival Celebrations'].map((service, index) => (
                <motion.li 
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, color: '#fbbf24' }}
                  className="cursor-pointer"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              {[
                { icon: <MapPin className="h-4 w-4 text-orange-400 mt-1 flex-shrink-0" />, content: "123 Temple Street\nSacred City, SC 12345" },
                { icon: <Phone className="h-4 w-4 text-orange-400 flex-shrink-0" />, content: "(555) 123-4567" },
                { icon: <Mail className="h-4 w-4 text-orange-400 flex-shrink-0" />, content: "info@srideviTemple.org" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div className="text-gray-300 text-sm whitespace-pre-line">
                    {item.content}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              className="text-gray-300 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              © 2025 Shri Yantra Renuka Mandir. All rights reserved.
            </motion.p>
            <motion.div 
              className="flex space-x-6 mt-4 md:mt-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              {['Privacy Policy', 'Terms of Service', 'Donate'].map((link, index) => (
                <motion.a 
                  key={link}
                  href="#" 
                  className="text-gray-300 hover:text-orange-400 text-sm transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2, scale: 1.05 }}
                >
                  {link}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;