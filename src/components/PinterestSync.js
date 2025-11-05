import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link2, Check, AlertCircle, Loader } from 'lucide-react';

const PinterestSync = ({ onSync }) => {
  const [pinterestUrl, setPinterestUrl] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [boards, setBoards] = useState([]);
  const [error, setError] = useState('');

  const handleConnect = async () => {
    if (!pinterestUrl.trim()) {
      setError('Please enter a Pinterest board URL');
      return;
    }

    setIsConnecting(true);
    setError('');

    // Simulate API call to Pinterest
    setTimeout(() => {
      // Mock Pinterest boards data
      const mockBoards = [
        {
          id: 1,
          name: 'Fall Outfits',
          imageCount: 24,
          images: Array(24).fill(null).map((_, i) => ({
            id: `fall-${i}`,
            url: `https://picsum.photos/400/600?random=${i}`,
            style: ['chic', 'classic'][i % 2]
          }))
        },
        {
          id: 2,
          name: 'Street Style',
          imageCount: 18,
          images: Array(18).fill(null).map((_, i) => ({
            id: `street-${i}`,
            url: `https://picsum.photos/400/600?random=${i + 100}`,
            style: 'trendy'
          }))
        },
        {
          id: 3,
          name: 'Workwear',
          imageCount: 15,
          images: Array(15).fill(null).map((_, i) => ({
            id: `work-${i}`,
            url: `https://picsum.photos/400/600?random=${i + 200}`,
            style: 'classic'
          }))
        }
      ];

      setBoards(mockBoards);
      setIsConnected(true);
      setIsConnecting(false);
      onSync(mockBoards);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="card"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-gold-100 rounded-lg">
          <Link2 className="w-6 h-6 text-gold-600" />
        </div>
        <h2 className="text-2xl font-display font-semibold text-neutral-900">
          Connect Pinterest
        </h2>
      </div>

      <p className="text-neutral-600 mb-6">
        Sync your Pinterest outfit boards to help us understand your personal style preferences.
      </p>

      {!isConnected ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Pinterest Board URL
            </label>
            <input
              type="text"
              value={pinterestUrl}
              onChange={(e) => setPinterestUrl(e.target.value)}
              placeholder="https://pinterest.com/username/board-name"
              className="input-field"
              disabled={isConnecting}
            />
            {error && (
              <div className="flex items-center space-x-2 mt-2 text-red-600 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{error}</span>
              </div>
            )}
          </div>

          <button
            onClick={handleConnect}
            disabled={isConnecting}
            className="btn-primary w-full flex items-center justify-center space-x-2"
          >
            {isConnecting ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                <span>Connecting...</span>
              </>
            ) : (
              <>
                <Link2 className="w-5 h-5" />
                <span>Connect Board</span>
              </>
            )}
          </button>

          <div className="mt-4 p-4 bg-gold-50 rounded-lg border border-gold-200">
            <p className="text-sm text-gold-900">
              <strong>Note:</strong> This is a demo. In production, you would authenticate 
              with Pinterest's API to access your boards.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center space-x-2 p-4 bg-green-50 rounded-lg border border-green-200">
            <Check className="w-5 h-5 text-green-600" />
            <span className="text-green-900 font-medium">Successfully connected!</span>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-neutral-900">Synced Boards:</h3>
            {boards.map((board) => (
              <div
                key={board.id}
                className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg border border-neutral-200"
              >
                <div>
                  <p className="font-medium text-neutral-900">{board.name}</p>
                  <p className="text-sm text-neutral-600">{board.imageCount} pins</p>
                </div>
                <Check className="w-5 h-5 text-gold-600" />
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              setIsConnected(false);
              setBoards([]);
              setPinterestUrl('');
            }}
            className="btn-secondary w-full"
          >
            Disconnect
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default PinterestSync;
