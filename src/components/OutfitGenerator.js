import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, RefreshCw, Heart, Download, Share2 } from 'lucide-react';
import { getAllStyleNames, getRandomOutfit, getStyleInfo } from '../data/styleData';

const OutfitGenerator = ({ userStyles, pinterestBoards, uploadedImages, selectedGender, setSelectedGender }) => {
  const [currentOutfit, setCurrentOutfit] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [savedOutfits, setSavedOutfits] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState('all');

  const allStyleNames = getAllStyleNames();
  const styleTypes = ['all', ...allStyleNames];

  const generateOutfit = () => {
    setIsGenerating(true);

    setTimeout(() => {
      const chosenStyle = selectedStyle === 'all' 
        ? allStyleNames[Math.floor(Math.random() * allStyleNames.length)]
        : selectedStyle;
      
      const styleOutfit = getRandomOutfit(chosenStyle, selectedGender);
      const styleInfo = getStyleInfo(chosenStyle);
      
      const outfit = {
        id: Date.now(),
        style: chosenStyle,
        styleName: styleInfo.name,
        styleDescription: styleInfo.description,
        avatar: {
          pose: 'standing',
          items: {
            top: styleOutfit.top,
            bottom: styleOutfit.bottom,
            shoes: styleOutfit.shoes,
            accessories: styleOutfit.accessories,
          }
        },
        confidence: Math.floor(Math.random() * 15) + 85,
        tags: generateTags(chosenStyle),
        colors: styleOutfit.colors,
      };

      setCurrentOutfit(outfit);
      setIsGenerating(false);
    }, 1500);
  };

  const generateTags = (styleName) => {
    const tagsByStyle = {
      minimalist: ['Clean Lines', 'Everyday Wear', 'Timeless'],
      streetwear: ['Urban', 'Casual', 'Trendy'],
      classic: ['Office Ready', 'Timeless', 'Elegant'],
      bohemian: ['Festival', 'Artistic', 'Free-Spirited'],
      preppy: ['Collegiate', 'Polished', 'Brunch'],
      athleisure: ['Active', 'Comfortable', 'Gym to Street'],
      edgy: ['Bold', 'Night Out', 'Statement'],
      romantic: ['Date Night', 'Feminine', 'Soft'],
      business: ['Professional', 'Office', 'Meeting'],
      vintage: ['Retro', 'Unique', 'Nostalgic'],
      casual: ['Weekend', 'Relaxed', 'Everyday'],
      sophisticated: ['Luxe', 'Refined', 'Evening'],
      sporty: ['Athletic', 'Active', 'Performance'],
      artistic: ['Creative', 'Expressive', 'Unique'],
      coastal: ['Vacation', 'Breezy', 'Relaxed'],
      glamorous: ['Evening Out', 'Luxurious', 'Statement'],
    };
    return tagsByStyle[styleName] || ['Stylish', 'Modern', 'Chic'];
  };

  const saveOutfit = () => {
    if (currentOutfit && !savedOutfits.find(o => o.id === currentOutfit.id)) {
      setSavedOutfits(prev => [...prev, currentOutfit]);
    }
  };

  useEffect(() => {
    if (userStyles.length > 0 || pinterestBoards.length > 0) {
      generateOutfit();
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-display font-bold text-neutral-900 mb-4">
          Your Personalized Outfits
        </h1>
        <p className="text-lg text-neutral-600 mb-6">
          Based on your {userStyles.length} style preferences
        </p>
        
        {/* Gender Selection */}
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={() => setSelectedGender('women')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              selectedGender === 'women'
                ? 'bg-gold-500 text-white shadow-elegant'
                : 'bg-white text-neutral-700 border-2 border-gold-200 hover:border-gold-400'
            }`}
          >
            Women's
          </button>
          <button
            onClick={() => setSelectedGender('men')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              selectedGender === 'men'
                ? 'bg-gold-500 text-white shadow-elegant'
                : 'bg-white text-neutral-700 border-2 border-gold-200 hover:border-gold-400'
            }`}
          >
            Men's
          </button>
        </div>
      </div>

      {/* Style Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8 max-w-5xl mx-auto">
        {styleTypes.slice(0, 9).map((style) => (
          <button
            key={style}
            onClick={() => setSelectedStyle(style)}
            className={`px-5 py-2 rounded-full font-medium transition-all capitalize text-sm ${
              selectedStyle === style
                ? 'bg-gold-500 text-white shadow-elegant'
                : 'bg-white text-neutral-700 border border-gold-200 hover:border-gold-400'
            }`}
          >
            {style === 'all' ? 'All Styles' : (getStyleInfo(style)?.name || style)}
          </button>
        ))}
        {styleTypes.length > 9 && (
          <select
            value={selectedStyle}
            onChange={(e) => setSelectedStyle(e.target.value)}
            className="px-5 py-2 rounded-full font-medium text-sm bg-white text-neutral-700 border border-gold-200 hover:border-gold-400 cursor-pointer"
          >
            <option value="">More Styles...</option>
            {styleTypes.slice(9).map((style) => (
              <option key={style} value={style}>
                {getStyleInfo(style)?.name || style}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Main Outfit Display */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Avatar Display */}
        <div className="lg:col-span-2">
          <div className="card">
            <AnimatePresence mode="wait">
              {currentOutfit && (
                <motion.div
                  key={currentOutfit.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Outfit Display */}
                  <div className="aspect-[3/4] bg-gradient-to-br from-gold-50 to-neutral-100 rounded-xl mb-6 p-8 flex flex-col justify-center">
                    <div className="text-center mb-8">
                      <Sparkles className="w-16 h-16 text-gold-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-display font-bold text-neutral-900">
                        {currentOutfit.styleName}
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-5 shadow-elegant">
                        <p className="text-sm text-neutral-600 font-medium mb-2">Top</p>
                        <p className="text-lg font-semibold text-neutral-900">
                          {currentOutfit.avatar.items.top.color} {currentOutfit.avatar.items.top.name}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-5 shadow-elegant">
                        <p className="text-sm text-neutral-600 font-medium mb-2">Bottom</p>
                        <p className="text-lg font-semibold text-neutral-900">
                          {currentOutfit.avatar.items.bottom.color} {currentOutfit.avatar.items.bottom.name}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-5 shadow-elegant">
                        <p className="text-sm text-neutral-600 font-medium mb-2">Shoes</p>
                        <p className="text-lg font-semibold text-neutral-900">
                          {currentOutfit.avatar.items.shoes.color} {currentOutfit.avatar.items.shoes.name}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-5 shadow-elegant">
                        <p className="text-sm text-neutral-600 font-medium mb-2">Accessories</p>
                        <p className="text-base font-semibold text-neutral-900">
                          {currentOutfit.avatar.items.accessories}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Outfit Details */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-display font-semibold text-neutral-900">
                          {currentOutfit.styleName}
                        </h3>
                        <p className="text-sm text-neutral-500 mb-1">
                          {currentOutfit.styleDescription}
                        </p>
                        <p className="text-neutral-600">
                          {currentOutfit.confidence}% match with your style
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={saveOutfit}
                          className="p-3 bg-gold-100 hover:bg-gold-200 rounded-full transition-colors"
                          title="Save outfit"
                        >
                          <Heart className="w-5 h-5 text-gold-600" />
                        </button>
                        <button
                          className="p-3 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors"
                          title="Download"
                        >
                          <Download className="w-5 h-5 text-neutral-700" />
                        </button>
                        <button
                          className="p-3 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors"
                          title="Share"
                        >
                          <Share2 className="w-5 h-5 text-neutral-700" />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {currentOutfit.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={generateOutfit}
              disabled={isGenerating}
              className="btn-primary w-full mt-6 flex items-center justify-center space-x-2"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <RefreshCw className="w-5 h-5" />
                  <span>Generate New Outfit</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Saved Outfits Sidebar */}
        <div className="lg:col-span-1">
          <div className="card sticky top-24">
            <h3 className="text-xl font-display font-semibold text-neutral-900 mb-4">
              Saved Outfits
            </h3>
            
            {savedOutfits.length === 0 ? (
              <div className="text-center py-8">
                <Heart className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
                <p className="text-neutral-600">No saved outfits yet</p>
                <p className="text-sm text-neutral-500 mt-1">
                  Save outfits you love!
                </p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[600px] overflow-y-auto">
                {savedOutfits.map((outfit) => (
                  <motion.div
                    key={outfit.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-gold-400 transition-colors cursor-pointer"
                    onClick={() => setCurrentOutfit(outfit)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-neutral-900">
                        {outfit.styleName}
                      </p>
                      <span className="text-xs text-neutral-600">
                        {outfit.confidence}%
                      </span>
                    </div>
                    <div className="text-sm text-neutral-600 space-y-1">
                      <p>{outfit.avatar.items.top.color} {outfit.avatar.items.top.name}</p>
                      <p>{outfit.avatar.items.bottom.color} {outfit.avatar.items.bottom.name}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutfitGenerator;
