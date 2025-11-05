import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Heart, Zap } from 'lucide-react';
import { styleCategories } from '../data/styleData';

const Hero = ({ onGetStarted, selectedGender, setSelectedGender }) => {
  const features = [
    {
      icon: Heart,
      title: 'Personal Style',
      description: 'Sync with your Pinterest boards to understand your unique taste'
    },
    {
      icon: TrendingUp,
      title: 'Diverse Styles',
      description: 'Explore 16+ style categories from minimalist to glamorous'
    },
    {
      icon: Zap,
      title: 'Instant Generation',
      description: 'Get personalized outfit recommendations in seconds'
    }
  ];

  // Featured styles to showcase
  const featuredStyles = ['minimalist', 'classic', 'streetwear', 'sophisticated', 'bohemian', 'edgy'];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-16 h-16 text-gold-500" />
          </div>
          
          <h1 className="text-6xl font-display font-bold text-neutral-900 mb-6">
            Your Personal
            <span className="block text-gold-600 mt-2">Outfit Generator</span>
          </h1>
          
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
            Discover outfits that reflect your unique style. Sync with Pinterest, 
            upload your favorite looks, and let AI create stunning outfit combinations 
            tailored just for you.
          </p>
          
          {/* Gender Selection */}
          <div className="flex justify-center gap-4 mb-10">
            <button
              onClick={() => setSelectedGender('women')}
              className={`px-8 py-3 rounded-lg font-medium transition-all ${
                selectedGender === 'women'
                  ? 'bg-gold-500 text-white shadow-elegant'
                  : 'bg-white text-neutral-700 border-2 border-gold-200 hover:border-gold-400'
              }`}
            >
              Women's Styles
            </button>
            <button
              onClick={() => setSelectedGender('men')}
              className={`px-8 py-3 rounded-lg font-medium transition-all ${
                selectedGender === 'men'
                  ? 'bg-gold-500 text-white shadow-elegant'
                  : 'bg-white text-neutral-700 border-2 border-gold-200 hover:border-gold-400'
              }`}
            >
              Men's Styles
            </button>
          </div>
          
          <button
            onClick={onGetStarted}
            className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
          >
            <span>Get Started</span>
            <Sparkles className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="card text-center hover:shadow-elegant-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gold-100 rounded-full">
                  <feature.icon className="w-8 h-8 text-gold-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Avatar Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-display font-bold text-center text-neutral-900 mb-4">
            Explore Diverse Style Categories
          </h2>
          <p className="text-center text-neutral-600 mb-10 max-w-2xl mx-auto">
            From minimalist to glamorous, discover outfits for every aesthetic
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredStyles.map((styleKey, index) => {
              const style = styleCategories[styleKey];
              const outfit = style[selectedGender][0];
              return (
                <motion.div 
                  key={styleKey} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="card group hover:shadow-elegant-lg transition-all duration-300"
                >
                  {/* Outfit Details */}
                  <div className="aspect-[3/4] bg-gradient-to-br from-gold-50 to-neutral-100 rounded-lg mb-4 p-6 flex flex-col justify-center">
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="text-xs text-neutral-600 font-medium mb-1">Top</p>
                        <p className="text-sm font-semibold text-neutral-900">
                          {outfit.top.color} {outfit.top.name}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="text-xs text-neutral-600 font-medium mb-1">Bottom</p>
                        <p className="text-sm font-semibold text-neutral-900">
                          {outfit.bottom.color} {outfit.bottom.name}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="text-xs text-neutral-600 font-medium mb-1">Shoes</p>
                        <p className="text-sm font-semibold text-neutral-900">
                          {outfit.shoes.color} {outfit.shoes.name}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="text-xs text-neutral-600 font-medium mb-1">Accessories</p>
                        <p className="text-sm font-semibold text-neutral-900">
                          {outfit.accessories}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-display font-semibold text-neutral-900 mb-1">
                      {style.name}
                    </h3>
                    <p className="text-sm text-neutral-600">
                      {style.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
