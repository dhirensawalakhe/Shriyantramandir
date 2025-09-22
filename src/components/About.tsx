import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Users, Clock, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import templeImage from 'figma:asset/985786fdb457bea890dd297e88d1ac928836e65d.png';

const About = () => {
  const features = [
    {
      icon: <Heart className="h-8 w-8 text-orange-600" />,
      title: 'Devotion',
      description: 'A place of deep spiritual connection and divine worship'
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: 'Community',
      description: 'Bringing together devotees from all walks of life'
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      title: 'Tradition',
      description: 'Preserving ancient customs and rituals'
    },
    {
      icon: <MapPin className="h-8 w-8 text-orange-600" />,
      title: 'Heritage',
      description: 'A testament to our rich cultural and spiritual heritage'
    }
  ];

  return (
    <section id="about" className="py-8 sm:py-12 lg:py-20 bg-gray-50">
      {/* Mobile Section Header */}
      <div className="block sm:hidden text-center mb-4 px-4">
        <h2 className="text-xl font-semibold text-orange-600 mb-1">Temple Information</h2>
        <div className="w-16 h-0.5 bg-orange-300 mx-auto"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-orange-600 mb-3 font-medium px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            वक्रतुंड महाकाय सूर्यकोटि समप्रभ
          </motion.div>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Our Temple
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Sri Devi Temple has been a beacon of spiritual light for over a century, 
            serving as a sacred space where devotees come to seek blessings, find peace, 
            and connect with the divine.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              A Journey of Faith
            </motion.h3>
            <motion.p 
              className="text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              The Shri Yantra Temple located within the premises of Shri Renuka Devi Mandir in Arvi, Maharashtra, India, is a truly unique structure of global significance. This is the only known temple in the world designed in the shape of a star (resembling a 6-pointed star) with 12 outer walls, symbolizing the cosmic form of energy.
            </motion.p>
            <motion.p 
              className="text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              The architectural form is inspired by the sacred Shri Yantra, a powerful and ancient symbol used in Vedic traditions to represent divine feminine energy (Shakti), balance, and spiritual harmony. The design incorporates six points (forming a star-like shape) and twelve supporting walls, aligning with the symbolic aspects of lunar energy and twelve directions.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <img
                src={templeImage}
                alt="Shri Yantra Renuka Devi Mandir Architecture"
                className="rounded-lg shadow-lg w-full"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent rounded-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;