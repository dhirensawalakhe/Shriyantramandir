import { Calendar, Users, Book, Gift, Music, Sunrise } from 'lucide-react';
import { motion } from 'motion/react';

const Services = () => {
  const services = [
    {
      icon: <Sunrise className="h-12 w-12 text-orange-600" />,
      title: 'Daily Prayers',
      description: 'Morning and evening aarti with traditional chanting and devotional songs',
      timing: '6:00 AM & 7:00 PM'
    },
    {
      icon: <Calendar className="h-12 w-12 text-orange-600" />,
      title: 'Special Pujas',
      description: 'Personalized prayer services for festivals, birthdays, and special occasions',
      timing: 'By Appointment'
    },
    {
      icon: <Users className="h-12 w-12 text-orange-600" />,
      title: 'Community Events',
      description: 'Cultural programs, religious discourses, and community gatherings',
      timing: 'Weekends'
    },
    {
      icon: <Book className="h-12 w-12 text-orange-600" />,
      title: 'Spiritual Classes',
      description: 'Vedic studies, Sanskrit classes, and spiritual guidance sessions',
      timing: 'Saturdays 10:00 AM'
    },
    {
      icon: <Music className="h-12 w-12 text-orange-600" />,
      title: 'Bhajan Sessions',
      description: 'Devotional singing and kirtan performances with traditional instruments',
      timing: 'Sundays 6:00 PM'
    },
    {
      icon: <Gift className="h-12 w-12 text-orange-600" />,
      title: 'Prasadam',
      description: 'Sacred food offerings blessed by the deity, available after all prayers',
      timing: 'After Each Aarti'
    }
  ];

  const prayerSchedule = [
    { time: '5:00 AM', service: ' Aarti', description: 'Morning prayers to wake the deity' },
    { time: '12:00 PM', service: 'Madhyana Aarti', description: 'Afternoon prayers and offerings' },
    { time: '7:00 PM', service: 'Sandhya Aarti', description: 'Evening prayers with devotional songs' },
    { time: '9:00 PM', service: 'Shayan Aarti', description: 'Night prayers before rest' }
  ];

  return (
    <section id="services" className="py-6 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Section */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Temple Services
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We offer a wide range of spiritual services and activities to serve our 
            community and help devotees on their spiritual journey.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-16 lg:mb-20">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="text-center p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 bg-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <motion.div 
                className="text-orange-600 font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {service.timing}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Prayer Schedule */}
        <motion.div 
          className="bg-orange-50 rounded-lg p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl font-bold text-gray-900 text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Daily Prayer Schedule
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {prayerSchedule.map((prayer, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 font-bold"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "#ea580c",
                    boxShadow: "0 8px 25px rgba(234, 88, 12, 0.4)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {prayer.time.split(' ')[0]}
                </motion.div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {prayer.service}
                </h4>
                <p className="text-sm text-gray-600">
                  {prayer.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;