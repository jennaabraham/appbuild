import React from 'react';
import { motion } from 'framer-motion';
import { User, TrendingUp, Heart, Image as ImageIcon, PieChart } from 'lucide-react';

const StyleProfile = ({ userStyles, pinterestBoards, uploadedImages }) => {
  // Calculate style distribution
  const styleDistribution = userStyles.reduce((acc, style) => {
    const styleType = style.style || 'classic';
    acc[styleType] = (acc[styleType] || 0) + 1;
    return acc;
  }, {});

  const totalStyles = userStyles.length;
  const stylePercentages = Object.entries(styleDistribution).map(([style, count]) => ({
    style,
    count,
    percentage: Math.round((count / totalStyles) * 100)
  }));

  const topStyle = stylePercentages.sort((a, b) => b.count - a.count)[0];

  const stats = [
    {
      icon: ImageIcon,
      label: 'Total Images',
      value: userStyles.length,
      color: 'primary'
    },
    {
      icon: Heart,
      label: 'Pinterest Boards',
      value: pinterestBoards.length,
      color: 'primary'
    },
    {
      icon: TrendingUp,
      label: 'Uploaded Photos',
      value: uploadedImages.length,
      color: 'primary'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-gold-100 rounded-full">
            <User className="w-12 h-12 text-gold-600" />
          </div>
        </div>
        <h1 className="text-4xl font-display font-bold text-neutral-900 mb-4">
          Your Style Profile
        </h1>
        <p className="text-lg text-neutral-600">
          Understanding your unique fashion preferences
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        {stats.map((stat, index) => (
          <div key={index} className="card text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-gold-100 rounded-full">
                <stat.icon className="w-8 h-8 text-gold-600" />
              </div>
            </div>
            <p className="text-3xl font-bold text-neutral-900 mb-1">
              {stat.value}
            </p>
            <p className="text-neutral-600">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Style Distribution */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="card"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-gold-100 rounded-lg">
              <PieChart className="w-6 h-6 text-gold-600" />
            </div>
            <h2 className="text-2xl font-display font-semibold text-neutral-900">
              Style Distribution
            </h2>
          </div>

          {stylePercentages.length > 0 ? (
            <div className="space-y-4">
              {stylePercentages.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-neutral-900 capitalize">
                      {item.style}
                    </span>
                    <span className="text-neutral-600">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      className="bg-gradient-to-r from-gold-400 to-gold-500 h-full rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-neutral-600">
                No style data available yet. Upload images or connect Pinterest to get started!
              </p>
            </div>
          )}

          {topStyle && (
            <div className="mt-6 p-4 bg-gold-50 rounded-lg border border-gold-200">
              <p className="text-sm text-gold-900">
                <strong>Your Signature Style:</strong> {topStyle.style.charAt(0).toUpperCase() + topStyle.style.slice(1)}
              </p>
            </div>
          )}
        </motion.div>

        {/* Pinterest Boards */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="card"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-gold-100 rounded-lg">
              <Heart className="w-6 h-6 text-gold-600" />
            </div>
            <h2 className="text-2xl font-display font-semibold text-neutral-900">
              Connected Boards
            </h2>
          </div>

          {pinterestBoards.length > 0 ? (
            <div className="space-y-3">
              {pinterestBoards.map((board) => (
                <div
                  key={board.id}
                  className="p-4 bg-neutral-50 rounded-lg border border-neutral-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-neutral-900">{board.name}</p>
                      <p className="text-sm text-neutral-600 mt-1">
                        {board.imageCount} pins
                      </p>
                    </div>
                    <Heart className="w-5 h-5 text-gold-600" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Heart className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
              <p className="text-neutral-600">No Pinterest boards connected</p>
              <p className="text-sm text-neutral-500 mt-1">
                Connect your boards to enhance your style profile
              </p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Uploaded Images Gallery */}
      {uploadedImages.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card mt-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-gold-100 rounded-lg">
              <ImageIcon className="w-6 h-6 text-gold-600" />
            </div>
            <h2 className="text-2xl font-display font-semibold text-neutral-900">
              Your Uploaded Images
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {uploadedImages.slice(0, 12).map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="aspect-square rounded-lg overflow-hidden shadow-elegant hover:shadow-elegant-lg transition-shadow"
              >
                <img
                  src={image.url}
                  alt={image.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          {uploadedImages.length > 12 && (
            <p className="text-center text-neutral-600 mt-4">
              And {uploadedImages.length - 12} more images...
            </p>
          )}
        </motion.div>
      )}

      {/* Style Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="card mt-8"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-gold-100 rounded-lg">
            <TrendingUp className="w-6 h-6 text-gold-600" />
          </div>
          <h2 className="text-2xl font-display font-semibold text-neutral-900">
            Style Insights
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gold-50 rounded-lg border border-gold-200">
            <h3 className="font-semibold text-gold-900 mb-2">
              Your Style Strengths
            </h3>
            <ul className="space-y-2 text-sm text-gold-800">
              <li>• Consistent color palette preferences</li>
              <li>• Strong affinity for timeless pieces</li>
              <li>• Balanced mix of casual and formal</li>
            </ul>
          </div>

          <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
            <h3 className="font-semibold text-neutral-900 mb-2">
              Recommendations
            </h3>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li>• Try experimenting with bolder accessories</li>
              <li>• Consider adding more seasonal pieces</li>
              <li>• Explore complementary color combinations</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StyleProfile;
