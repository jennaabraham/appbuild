import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import PinterestSync from './components/PinterestSync';
import ImageUpload from './components/ImageUpload';
import OutfitGenerator from './components/OutfitGenerator';
import StyleProfile from './components/StyleProfile';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedGender, setSelectedGender] = useState('women');
  const [userStyles, setUserStyles] = useState([]);
  const [pinterestBoards, setPinterestBoards] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);

  const handlePinterestSync = (boards) => {
    setPinterestBoards(boards);
    // Extract style preferences from boards
    const styles = boards.flatMap(board => board.images || []);
    setUserStyles(prev => [...prev, ...styles]);
  };

  const handleImageUpload = (images) => {
    setUploadedImages(prev => [...prev, ...images]);
    setUserStyles(prev => [...prev, ...images]);
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Hero onGetStarted={() => setCurrentView('setup')} selectedGender={selectedGender} setSelectedGender={setSelectedGender} />;
      case 'setup':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <PinterestSync onSync={handlePinterestSync} />
              <ImageUpload onUpload={handleImageUpload} />
            </div>
            {(userStyles.length > 0 || pinterestBoards.length > 0) && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setCurrentView('generator')}
                  className="btn-primary text-lg"
                >
                  Generate Outfits
                </button>
              </div>
            )}
          </div>
        );
      case 'generator':
        return (
          <OutfitGenerator 
            userStyles={userStyles}
            pinterestBoards={pinterestBoards}
            uploadedImages={uploadedImages}
            selectedGender={selectedGender}
            setSelectedGender={setSelectedGender}
          />
        );
      case 'profile':
        return (
          <StyleProfile 
            userStyles={userStyles}
            pinterestBoards={pinterestBoards}
            uploadedImages={uploadedImages}
          />
        );
      default:
        return <Hero onGetStarted={() => setCurrentView('setup')} selectedGender={selectedGender} setSelectedGender={setSelectedGender} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-gold-50/30 to-neutral-50">
      <Header currentView={currentView} setCurrentView={setCurrentView} />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentView}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderView()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
