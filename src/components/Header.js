import React from 'react';
import { Sparkles, Home, Image, User } from 'lucide-react';

const Header = ({ currentView, setCurrentView }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setCurrentView('home')}
          >
            <Sparkles className="w-8 h-8 text-gold-500" />
            <h1 className="text-2xl font-display font-bold text-neutral-900">
              StyleSync
            </h1>
          </div>
          
          <nav className="flex items-center space-x-6">
            <button
              onClick={() => setCurrentView('home')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                currentView === 'home'
                  ? 'bg-gold-100 text-gold-700'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              <Home className="w-5 h-5" />
              <span className="font-medium">Home</span>
            </button>
            
            <button
              onClick={() => setCurrentView('generator')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                currentView === 'generator'
                  ? 'bg-gold-100 text-gold-700'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              <Image className="w-5 h-5" />
              <span className="font-medium">Generator</span>
            </button>
            
            <button
              onClick={() => setCurrentView('profile')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                currentView === 'profile'
                  ? 'bg-gold-100 text-gold-700'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              <User className="w-5 h-5" />
              <span className="font-medium">Profile</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
