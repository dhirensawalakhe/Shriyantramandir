import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

// Import local images from src/images
import t1 from '../images/t1.jpg';
import t2 from '../images/t2.jpg';
import t3 from '../images/t3.jpg';
import t4 from '../images/t4.jpg';
import t5 from '../images/t5.jpg';
import t6 from '../images/t6.jpg';

const Gallery = () => {
  const galleryImages = [
    { src: t3, alt: 'Sri Devi Temple Architecture', title: 'Sacred Architecture' },
    { src: t1, alt: 'Prayer Ceremony', title: 'Daily Prayers' },
    { src: t2, alt: 'Festival Celebrations', title: 'Festival of Lights' },
    { src: t4, alt: 'Meditation Session', title: 'Spiritual Practice' },
    { src: t6, alt: 'Community Gathering', title: 'Devotee Fellowship' },
    { src: t5, alt: 'Temple Interior', title: 'Divine Ambiance' }
  ];

  return (
    <section id="gallery" className="py-6 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Temple Gallery
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover the beauty and serenity of our temple through these captured
            moments of devotion, celebration, and spiritual gathering.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                <img src={image.src} alt={image.alt} className="w-full h-64 object-cover" />
              </motion.div>

              <motion.div
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.h3
                  className="text-white font-semibold text-lg px-4 text-center"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {image.title}
                </motion.h3>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call To Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Want to see more photos from our temple events and celebrations?
          </motion.p>

          <motion.button
            onClick={() =>
              window.open(
                'https://drive.google.com/drive/folders/1Bski9eidxHl6jRqWE-vXV91sQFHESAn7?usp=drive_link',
                '_blank'
              )
            }
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg transition-all duration-200"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 30px rgba(234, 88, 12, 0.3)',
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Gallery
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
