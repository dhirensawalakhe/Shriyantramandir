import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Home, Info, Calendar, Phone } from 'lucide-react';
import Hero from './Hero';
import MarathiSlogans from './MarathiSlogans';
import About from './About';
import Services from './Services';
import Events from './Events';
import Gallery from './Gallery';
import Contact from './Contact';

interface TabItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export default function MobileTabContent() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs: TabItem[] = [
    {
      id: 'home',
      label: 'होम',
      icon: <Home className="w-5 h-5" />,
      content: (
        <>
          <Hero />
          <MarathiSlogans />
        </>
      )
    },
    {
      id: 'about',
      label: 'माहिती',
      icon: <Info className="w-5 h-5" />,
      content: (
        <>
          <About />
          <Services />
        </>
      )
    },
    {
      id: 'events',
      label: 'कार्यक्रम',
      icon: <Calendar className="w-5 h-5" />,
      content: (
        <>
          <Events />
          <Gallery />
        </>
      )
    },
    {
      id: 'contact',
      label: 'संपर्क',
      icon: <Phone className="w-5 h-5" />,
      content: <Contact />
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="min-h-screen">
      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen"
      >
        {activeTabData?.content}
      </motion.div>

      {/* Bottom Tab Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-orange-200 z-50">
        <div className="flex justify-around items-center py-2 px-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 min-w-0 flex-1 ${
                activeTab === tab.id
                  ? 'bg-orange-100 text-orange-600'
                  : 'text-gray-600 hover:text-orange-500'
              }`}
            >
              <div className="mb-1">
                {tab.icon}
              </div>
              <span className="text-xs leading-tight">{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-orange-500 rounded-full"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom padding to prevent content from being hidden behind navigation */}
      <div className="h-20"></div>
    </div>
  );
}