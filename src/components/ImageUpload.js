import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, Image as ImageIcon, Check } from 'lucide-react';

const ImageUpload = ({ onUpload }) => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    const newImages = imageFiles.map((file, index) => ({
      id: Date.now() + index,
      file,
      url: URL.createObjectURL(file),
      name: file.name,
      style: analyzeStyle(file.name) // Mock style analysis
    }));

    setUploadedImages(prev => [...prev, ...newImages]);
    onUpload(newImages);
  };

  const analyzeStyle = (filename) => {
    // Mock style analysis based on filename
    const styles = ['chic', 'classic', 'trendy'];
    return styles[Math.floor(Math.random() * styles.length)];
  };

  const removeImage = (id) => {
    setUploadedImages(prev => prev.filter(img => img.id !== id));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="card"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-gold-100 rounded-lg">
          <Upload className="w-6 h-6 text-gold-600" />
        </div>
        <h2 className="text-2xl font-display font-semibold text-neutral-900">
          Upload Images
        </h2>
      </div>

      <p className="text-neutral-600 mb-6">
        Upload photos of outfits you love to help us learn your style preferences.
      </p>

      {/* Upload Area */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
          isDragging
            ? 'border-gold-500 bg-gold-50'
            : 'border-neutral-300 hover:border-gold-400 hover:bg-neutral-50'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
        />
        
        <div className="flex flex-col items-center space-y-3">
          <div className="p-4 bg-gold-100 rounded-full">
            <ImageIcon className="w-8 h-8 text-gold-600" />
          </div>
          <div>
            <p className="text-lg font-medium text-neutral-900">
              Drop images here or click to browse
            </p>
            <p className="text-sm text-neutral-600 mt-1">
              Support for JPG, PNG, and WEBP
            </p>
          </div>
        </div>
      </div>

      {/* Uploaded Images Grid */}
      {uploadedImages.length > 0 && (
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-neutral-900">
              Uploaded Images ({uploadedImages.length})
            </h3>
            <div className="flex items-center space-x-2 text-green-600">
              <Check className="w-4 h-4" />
              <span className="text-sm font-medium">Analyzed</span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            <AnimatePresence>
              {uploadedImages.map((image) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="relative group aspect-square"
                >
                  <img
                    src={image.url}
                    alt={image.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeImage(image.id);
                      }}
                      className="p-2 bg-red-500 hover:bg-red-600 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5 text-white" />
                    </button>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-xs font-medium px-2 py-1 bg-white/90 rounded-full text-neutral-900 capitalize">
                      {image.style}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-gold-50 rounded-lg border border-gold-200">
        <p className="text-sm text-gold-900">
          <strong>Tip:</strong> Upload at least 5-10 images for better outfit recommendations.
        </p>
      </div>
    </motion.div>
  );
};

export default ImageUpload;
