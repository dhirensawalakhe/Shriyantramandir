import { MapPin, Phone, Mail, Heart } from 'lucide-react';
import { motion } from 'motion/react';

const TELEGRAM_BOT_TOKEN = '8444288578:AAEsbCZXtFo1Xhl8Jxf8_k-8uz3pRPLj7OE';
const TELEGRAM_CHAT_ID = '5109458783';

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.fullName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const telegramMessage = `
New Contact Form Submission:
Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message: ${message}
    `;

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${encodeURIComponent(
      telegramMessage
    )}`;

    try {
      await fetch(telegramUrl);
      alert('Message sent successfully!');
      form.reset();
    } catch (error) {
      alert('Failed to send message. Try again later.');
      console.error(error);
    }
  };

  return (
    <section id="contact" className="py-8 sm:py-16 lg:py-20 bg-gray-50">
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
            Visit Our Temple
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We welcome all devotees and visitors. Come experience the divine presence and peaceful atmosphere of our sacred temple.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Temple Information & Donation Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Temple Information */}
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Temple Information
            </motion.h3>

            <div className="space-y-6">
              {[
                {
                  icon: <MapPin className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />,
                  title: 'Address',
                  content: (
                    <p className="text-gray-600">
                      Shripur Road <br />
                      Arvi, Dist Wardha 442201 <br />
                      Maharashtra, India
                    </p>
                  ),
                },
                {
                  icon: <Phone className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />,
                  title: 'Phone',
                  content: (
                    <p className="text-gray-600">
                      Main Office: 9405529191
                    </p>
                  ),
                },
                {
                  icon: <Mail className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />,
                  title: 'Email',
                  content: (
                    <p className="text-gray-600">
                      info@srideviTemple.org
                    </p>
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    {item.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Donation Section */}
            <motion.div
              className="mt-12 bg-orange-50 rounded-lg p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="flex items-center space-x-3 mb-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="h-6 w-6 text-orange-600" />
                </motion.div>
                <h4 className="text-xl font-semibold text-gray-900">Support Our Temple</h4>
              </motion.div>
              <p className="text-gray-600 mb-4">
                Your generous donations help us maintain the temple, organize festivals, and serve our community. Every contribution is deeply appreciated.
              </p>
              <motion.button
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-all duration-200"
                whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(234, 88, 12, 0.3)', transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                Make a Donation
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-8"
            initial={{ opacity: 0, x: 50 }}
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
              Get in Touch
            </motion.h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                <label className="block text-gray-700 mb-2">Full Name *</label>
                <motion.input type="text" name="fullName" placeholder="Enter your full name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
                <label className="block text-gray-700 mb-2">Email Address *</label>
                <motion.input type="email" name="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <motion.input type="tel" name="phone" placeholder="Enter your phone number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}>
                <label className="block text-gray-700 mb-2">Subject</label>
                <motion.select name="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>General Inquiry</option>
                  <option>Special Puja Booking</option>
                  <option>Event Information</option>
                  <option>Volunteer Opportunity</option>
                  <option>Donation</option>
                </motion.select>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
                <label className="block text-gray-700 mb-2">Message *</label>
                <motion.textarea name="message" rows={4} placeholder="Write your message here..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(234, 88, 12, 0.3)' }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
