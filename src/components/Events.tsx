import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Diwali Celebrations',
      date: 'October 20, 2025',
      time: '6:00 PM',
      description: 'Festival of lights with prayers, cultural programs, and community feast',
      image: 'https://www.excelsior.edu/wp-content/uploads/2022/10/CSJ-23-915701_Diwali-Celebration_BLOG_1000x568-1000x568.jpg'
    },
    {
      title: 'Navratri Festival',
      date: 'September 22, 2025',
      time: '7:00 PM',
      description: 'Nine nights of devotion, dance, and worship of the divine feminine',
      image: 'https://www.hindisoch.com/wp-content/uploads/2017/09/Happy-Navratri-Image.jpg'
    },
    {
      title: 'Holi Festival',
      date: 'March 25, 2025',
      time: '10:00 AM',
      description: 'Festival of colors with traditional music, dance, and community celebration',
      image: 'https://cdn.zeebiz.com/sites/default/files/2024/03/25/285353-happy-holi-2024-wishes-images.jpg'
    }
  ];

  const festivals = [
    'Navaratri - Nine nights of divine worship',
    'Janmashtami - Birth celebration of Lord Krishna',
    'Ganesh Chaturthi - Festival honoring Lord Ganesha',
    'Ram Navami - Celebration of Lord Rama\'s birth',
    'Dussehra - Victory of good over evil',
    'Diwali - festival of lights'
  ];

  return (
    <section id="events" className="py-8 sm:py-16 lg:py-20 bg-gray-50">
      {/* Mobile Section Header */}
      <div className="block sm:hidden text-center mb-4 px-4">
        <h2 className="text-xl font-semibold text-orange-600 mb-1">Community & Events</h2>
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
            {/* हर हर महादेव • भवानी माता की जय */}
          </motion.div>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Events & Festivals
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join us in celebrating the rich traditions and festivals that bring our 
            community together in devotion and joy throughout the year.
          </motion.p>
        </motion.div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Upcoming Events
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
                <div className="p-4 sm:p-6">
                  <motion.h4 
                    className="text-xl font-semibold text-gray-900 mb-3"
                    whileHover={{ color: '#ea580c' }}
                    transition={{ duration: 0.2 }}
                  >
                    {event.title}
                  </motion.h4>
                  <motion.div 
                    className="flex items-center text-gray-600 mb-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center text-gray-600 mb-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </motion.div>
                  <p className="text-gray-600 text-sm">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Annual Festivals */}
        <motion.div 
          className="bg-white rounded-lg p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Annual Festivals We Celebrate
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {festivals.map((festival, index) => (
              <motion.div 
                key={index} 
                className="flex items-start space-x-3 p-4 rounded-lg bg-orange-50"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02, 
                  backgroundColor: '#fed7aa',
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
                <p className="text-gray-700">{festival}</p>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-gray-600 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Stay updated with our festival calendar and special events
            </motion.p>
            <motion.a
              href="#contact"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-all duration-200"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 8px 25px rgba(234, 88, 12, 0.3)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Event Notifications
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;