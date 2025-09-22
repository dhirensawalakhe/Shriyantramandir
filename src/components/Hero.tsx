import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import templeImage from 'figma:asset/985786fdb457bea890dd297e88d1ac928836e65d.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen h-screen md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src='src/images/t1.jpg'
          alt="Sri Devi Temple Architecture"
          className="w-full h-full object-cover"
        />
        <motion.div 
          className="absolute inset-0 bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        ></motion.div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <motion.div 
          className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-orange-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          श्री गणेशाय नमः
        </motion.div>
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-white leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Shri Yantra Renuka Devi Mandir
        </motion.h1>
        <motion.div 
          className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 text-orange-200 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          सर्व मंगल मांगल्ये शिवे सर्वार्थ साधिके
        </motion.div>
        <motion.p 
          className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          {/* A place of worship, devotion, and spiritual growth. Join us in celebrating 
          the divine presence and finding peace in our beautiful temple community. */}
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;