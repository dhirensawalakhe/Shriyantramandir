import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const MarathiSlogans = () => {
  const slogans = [
    {
      marathi: "श्री राम जयराम जय जय राम",
      english: "Sri Ram Jayram Jay Jay Ram",
      meaning: "Glory to Lord Rama"
    },
    {
      marathi: "ॐ गं गणपतये नमः",
      english: "Om Gam Ganapataye Namah",
      meaning: "Salutations to Lord Ganesha"
    },
    {
      marathi: "सत्यं शिवं सुंदरम्",
      english: "Satyam Shivam Sundaram",
      meaning: "Truth, Consciousness, Beauty"
    },
    {
      marathi: "लोका समस्ता सुखिनो भवन्तु",
      english: "Loka Samasta Sukhino Bhavantu",
      meaning: "May all beings be happy and free"
    },
    {
      marathi: "वसुधैव कुटुम्बकम्",
      english: "Vasudhaiva Kutumbakam",
      meaning: "The world is one family"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slogans.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slogans.length]);

  return (
    <section className="bg-gradient-to-r from-orange-600 to-red-600 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="text-2xl md:text-3xl font-bold mb-3"
              animate={{ 
                scale: [1, 1.02, 1],
                textShadow: [
                  "0 0 10px rgba(255,255,255,0.3)",
                  "0 0 20px rgba(255,255,255,0.5)",
                  "0 0 10px rgba(255,255,255,0.3)"
                ]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {slogans[currentIndex].marathi}
            </motion.div>
            <motion.div 
              className="text-lg md:text-xl text-orange-100 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {slogans[currentIndex].english}
            </motion.div>
            <motion.div 
              className="text-sm md:text-base text-orange-200 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              "{slogans[currentIndex].meaning}"
            </motion.div>
          </motion.div>
        </AnimatePresence>
        
        {/* Indicator dots */}
        <motion.div 
          className="flex justify-center space-x-2 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {slogans.map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarathiSlogans;