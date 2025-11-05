// Style categories with detailed gender-specific outfits
export const styleCategories = {
  minimalist: {
    name: 'Minimalist',
    description: 'Clean lines, neutral colors, and simple silhouettes',
    women: [{
      top: { name: 'White Organic Cotton T-Shirt', color: 'White' },
      bottom: { name: 'Black High-Waisted Slim Trousers', color: 'Black' },
      shoes: { name: 'White Leather Low-Top Sneakers', color: 'White' },
      accessories: 'Silver Minimalist Watch, Small Hoop Earrings',
      colors: ['White', 'Black', 'Silver']
    }],
    men: [{
      top: { name: 'White Crew Neck Cotton Tee', color: 'White' },
      bottom: { name: 'Black Slim-Fit Chinos', color: 'Black' },
      shoes: { name: 'White Canvas Minimalist Sneakers', color: 'White' },
      accessories: 'Black Leather Watch, Simple Silver Ring',
      colors: ['White', 'Black', 'Gray']
    }]
  },
  streetwear: {
    name: 'Streetwear',
    description: 'Urban, casual, and trend-focused with bold graphics',
    women: [{
      top: { name: 'Oversized Black Graphic Hoodie', color: 'Black' },
      bottom: { name: 'High-Waisted Olive Cargo Pants', color: 'Olive' },
      shoes: { name: 'White Platform Chunky Sneakers', color: 'White' },
      accessories: 'Black Bucket Hat, Gold Chain Necklace, Small Crossbody Bag',
      colors: ['Black', 'Olive', 'White']
    }],
    men: [{
      top: { name: 'Black Graphic Print Hoodie', color: 'Black' },
      bottom: { name: 'Olive Green Cargo Joggers', color: 'Olive' },
      shoes: { name: 'White High-Top Sneakers', color: 'White' },
      accessories: 'Black Baseball Cap, Silver Chain Bracelet',
      colors: ['Black', 'Olive', 'White']
    }]
  },
  classic: {
    name: 'Classic',
    description: 'Timeless, elegant pieces that never go out of style',
    women: [{
      top: { name: 'Cream Silk Button-Up Blouse', color: 'Cream' },
      bottom: { name: 'Navy Blue Tailored Wide-Leg Trousers', color: 'Navy' },
      shoes: { name: 'Black Pointed-Toe Leather Pumps', color: 'Black' },
      accessories: 'Pearl Stud Earrings, Gold Watch, Black Leather Handbag',
      colors: ['Cream', 'Navy', 'Black']
    }],
    men: [{
      top: { name: 'Light Blue Oxford Button-Down Shirt', color: 'Light Blue' },
      bottom: { name: 'Khaki Tailored Chinos', color: 'Khaki' },
      shoes: { name: 'Brown Leather Oxford Dress Shoes', color: 'Brown' },
      accessories: 'Brown Leather Belt, Gold Watch, Navy Pocket Square',
      colors: ['Light Blue', 'Khaki', 'Brown']
    }]
  },
  bohemian: {
    name: 'Bohemian',
    description: 'Free-spirited, artistic with flowing fabrics and patterns',
    women: [{
      top: { name: 'Cream Embroidered Flowy Tunic', color: 'Cream' },
      bottom: { name: 'Terracotta Tiered Maxi Skirt', color: 'Terracotta' },
      shoes: { name: 'Brown Strappy Leather Sandals', color: 'Brown' },
      accessories: 'Layered Gold Necklaces, Beaded Bracelets, Fringe Crossbody Bag, Wide-Brim Hat',
      colors: ['Cream', 'Terracotta', 'Brown']
    }],
    men: [{
      top: { name: 'White Lightweight Linen Shirt', color: 'White' },
      bottom: { name: 'Beige Loose-Fit Linen Pants', color: 'Beige' },
      shoes: { name: 'Brown Leather Sandals', color: 'Brown' },
      accessories: 'Wooden Beaded Bracelet, Woven Belt, Canvas Tote Bag',
      colors: ['White', 'Beige', 'Brown']
    }]
  },
  preppy: {
    name: 'Preppy',
    description: 'Polished, collegiate-inspired with clean cuts',
    women: [{
      top: { name: 'Pink Cotton Polo Shirt', color: 'Pink' },
      bottom: { name: 'Navy Pleated Tennis Skirt', color: 'Navy' },
      shoes: { name: 'Burgundy Leather Penny Loafers', color: 'Burgundy' },
      accessories: 'Pearl Stud Earrings, Gold Tennis Bracelet, Navy Headband',
      colors: ['Pink', 'Navy', 'Burgundy']
    }],
    men: [{
      top: { name: 'Navy Blue Polo Shirt', color: 'Navy' },
      bottom: { name: 'Khaki Flat-Front Shorts', color: 'Khaki' },
      shoes: { name: 'Brown Leather Boat Shoes', color: 'Brown' },
      accessories: 'Canvas Belt, Aviator Sunglasses, Leather Watch',
      colors: ['Navy', 'Khaki', 'Brown']
    }]
  },
  athleisure: {
    name: 'Athleisure',
    description: 'Athletic-inspired comfort meets everyday style',
    women: [{
      top: { name: 'Black Cropped Athletic Zip-Up Jacket', color: 'Black' },
      bottom: { name: 'Black High-Waisted Leggings', color: 'Black' },
      shoes: { name: 'White Running Sneakers', color: 'White' },
      accessories: 'Rose Gold Smartwatch, Wireless Earbuds, Black Gym Bag',
      colors: ['Black', 'White', 'Gray']
    }],
    men: [{
      top: { name: 'Gray Performance Hoodie', color: 'Gray' },
      bottom: { name: 'Black Tapered Joggers', color: 'Black' },
      shoes: { name: 'White Athletic Training Sneakers', color: 'White' },
      accessories: 'Black Fitness Tracker, Wireless Earbuds, Gym Backpack',
      colors: ['Gray', 'Black', 'White']
    }]
  },
  edgy: {
    name: 'Edgy',
    description: 'Bold, rebellious with leather and dark tones',
    women: [{
      top: { name: 'Black Leather Moto Jacket', color: 'Black' },
      bottom: { name: 'Black Distressed Skinny Jeans', color: 'Black' },
      shoes: { name: 'Black Leather Combat Boots', color: 'Black' },
      accessories: 'Silver Studded Belt, Layered Silver Chain Necklaces, Black Choker, Dark Sunglasses',
      colors: ['Black', 'Black', 'Silver']
    }],
    men: [{
      top: { name: 'Black Leather Biker Jacket', color: 'Black' },
      bottom: { name: 'Black Slim-Fit Jeans', color: 'Black' },
      shoes: { name: 'Black Leather Combat Boots', color: 'Black' },
      accessories: 'Silver Chain Necklace, Leather Cuff Bracelet, Black Sunglasses',
      colors: ['Black', 'Black', 'Silver']
    }]
  },
  romantic: {
    name: 'Romantic',
    description: 'Soft, feminine with delicate details and pastels',
    women: [{
      top: { name: 'Blush Pink Lace Blouse', color: 'Blush' },
      bottom: { name: 'Cream Flowy Midi Skirt', color: 'Cream' },
      shoes: { name: 'Nude Strappy Heeled Sandals', color: 'Nude' },
      accessories: 'Delicate Gold Necklace, Rose Gold Bracelet, Pearl Earrings, Small Clutch',
      colors: ['Blush', 'Cream', 'Gold']
    }],
    men: [{
      top: { name: 'Cream Soft Cashmere Sweater', color: 'Cream' },
      bottom: { name: 'Beige Tailored Dress Pants', color: 'Beige' },
      shoes: { name: 'Tan Suede Loafers', color: 'Tan' },
      accessories: 'Silk Pocket Square, Gold Watch, Leather Belt',
      colors: ['Cream', 'Beige', 'Tan']
    }]
  },
  business: {
    name: 'Business',
    description: 'Professional, polished, and commanding',
    women: [{
      top: { name: 'Black Tailored Blazer with White Blouse', color: 'Black' },
      bottom: { name: 'Gray Wool Pencil Skirt', color: 'Gray' },
      shoes: { name: 'Black Pointed-Toe Pumps', color: 'Black' },
      accessories: 'Pearl Earrings, Gold Watch, Black Structured Handbag, Simple Necklace',
      colors: ['Black', 'Gray', 'White']
    }],
    men: [{
      top: { name: 'Navy Wool Suit Jacket with White Dress Shirt', color: 'Navy' },
      bottom: { name: 'Charcoal Gray Dress Pants', color: 'Charcoal' },
      shoes: { name: 'Black Leather Oxford Shoes', color: 'Black' },
      accessories: 'Navy Silk Tie, Silver Cufflinks, Black Leather Belt, Leather Briefcase',
      colors: ['Navy', 'Charcoal', 'Black']
    }]
  },
  vintage: {
    name: 'Vintage',
    description: 'Retro-inspired with nostalgic charm',
    women: [{
      top: { name: 'Burgundy Vintage Floral Print Blouse', color: 'Burgundy' },
      bottom: { name: 'Mustard Yellow A-Line Midi Skirt', color: 'Mustard' },
      shoes: { name: 'Black Patent Mary Jane Heels', color: 'Black' },
      accessories: 'Vintage Brooch, Cat-Eye Sunglasses, Pearl Bracelet, Small Handbag',
      colors: ['Burgundy', 'Mustard', 'Black']
    }],
    men: [{
      top: { name: 'Black Vintage Band T-Shirt', color: 'Black' },
      bottom: { name: 'Blue High-Waisted Straight-Leg Jeans', color: 'Blue' },
      shoes: { name: 'White Retro Canvas Sneakers', color: 'White' },
      accessories: 'Round Vintage Sunglasses, Leather Watch, Canvas Belt',
      colors: ['Black', 'Blue', 'White']
    }]
  },
  casual: {
    name: 'Casual',
    description: 'Comfortable, relaxed everyday wear',
    women: [{
      top: { name: 'White Basic Cotton T-Shirt', color: 'White' },
      bottom: { name: 'Medium Wash Boyfriend Jeans', color: 'Blue' },
      shoes: { name: 'White Canvas Sneakers', color: 'White' },
      accessories: 'Simple Stud Earrings, Denim Crossbody Bag, Sunglasses',
      colors: ['White', 'Blue', 'White']
    }],
    men: [{
      top: { name: 'Gray Henley Long-Sleeve Shirt', color: 'Gray' },
      bottom: { name: 'Dark Blue Straight-Fit Jeans', color: 'Blue' },
      shoes: { name: 'White Casual Sneakers', color: 'White' },
      accessories: 'Leather Watch, Canvas Backpack, Baseball Cap',
      colors: ['Gray', 'Blue', 'White']
    }]
  },
  sophisticated: {
    name: 'Sophisticated',
    description: 'Refined, luxurious, and elegant',
    women: [{
      top: { name: 'Champagne Silk Satin Blouse', color: 'Champagne' },
      bottom: { name: 'Cream High-Waisted Wide-Leg Pants', color: 'Cream' },
      shoes: { name: 'Nude Leather Heeled Mules', color: 'Nude' },
      accessories: 'Gold Statement Necklace, Diamond Stud Earrings, Designer Handbag, Gold Watch',
      colors: ['Champagne', 'Cream', 'Gold']
    }],
    men: [{
      top: { name: 'Champagne Silk Dress Shirt', color: 'Champagne' },
      bottom: { name: 'Black Tailored Wool Trousers', color: 'Black' },
      shoes: { name: 'Black Italian Leather Loafers', color: 'Black' },
      accessories: 'Gold Watch, Silk Tie, Leather Belt, Cufflinks',
      colors: ['Champagne', 'Black', 'Gold']
    }]
  },
  sporty: {
    name: 'Sporty',
    description: 'Athletic, active, and energetic',
    women: [{
      top: { name: 'Navy Moisture-Wicking Athletic Tank', color: 'Navy' },
      bottom: { name: 'Black Athletic Running Shorts', color: 'Black' },
      shoes: { name: 'White Running Shoes', color: 'White' },
      accessories: 'Sports Watch, Sweatband, Athletic Socks, Water Bottle',
      colors: ['Navy', 'Black', 'White']
    }],
    men: [{
      top: { name: 'Navy Performance Track Jacket', color: 'Navy' },
      bottom: { name: 'Black Athletic Shorts', color: 'Black' },
      shoes: { name: 'White Athletic Training Sneakers', color: 'White' },
      accessories: 'Sports Watch, Sweatband, Athletic Socks',
      colors: ['Navy', 'Black', 'White']
    }]
  },
  artistic: {
    name: 'Artistic',
    description: 'Creative, expressive, and unique',
    women: [{
      top: { name: 'Multi-Color Abstract Print Silk Shirt', color: 'Multi' },
      bottom: { name: 'Black Cropped Wide-Leg Pants', color: 'Black' },
      shoes: { name: 'Colorful Patterned Sneakers', color: 'Colorful' },
      accessories: 'Statement Geometric Earrings, Artistic Ring, Canvas Tote Bag',
      colors: ['Multi', 'Black', 'Gold']
    }],
    men: [{
      top: { name: 'Multi-Color Patterned Button-Up Shirt', color: 'Multi' },
      bottom: { name: 'Burgundy Slim-Fit Chinos', color: 'Burgundy' },
      shoes: { name: 'Colorful Designer Sneakers', color: 'Colorful' },
      accessories: 'Artistic Watch, Silver Ring, Canvas Messenger Bag',
      colors: ['Multi', 'Burgundy', 'White']
    }]
  },
  coastal: {
    name: 'Coastal',
    description: 'Breezy, relaxed, beach-inspired',
    women: [{
      top: { name: 'White Linen Button-Up Shirt', color: 'White' },
      bottom: { name: 'Beige Linen Wide-Leg Pants', color: 'Beige' },
      shoes: { name: 'Brown Leather Flat Sandals', color: 'Brown' },
      accessories: 'Straw Sun Hat, Shell Necklace, Woven Beach Bag, Sunglasses',
      colors: ['White', 'Beige', 'Brown']
    }],
    men: [{
      top: { name: 'White Linen Short-Sleeve Shirt', color: 'White' },
      bottom: { name: 'Navy Linen Chino Shorts', color: 'Navy' },
      shoes: { name: 'Brown Leather Boat Shoes', color: 'Brown' },
      accessories: 'Aviator Sunglasses, Rope Bracelet, Canvas Belt',
      colors: ['White', 'Navy', 'Brown']
    }]
  },
  glamorous: {
    name: 'Glamorous',
    description: 'Luxe, eye-catching, and show-stopping',
    women: [{
      top: { name: 'Gold Sequin Embellished Top', color: 'Gold' },
      bottom: { name: 'Black Satin High-Waisted Skirt', color: 'Black' },
      shoes: { name: 'Gold Strappy High Heels', color: 'Gold' },
      accessories: 'Statement Diamond Earrings, Gold Clutch, Cocktail Ring, Layered Necklaces',
      colors: ['Gold', 'Black', 'Silver']
    }],
    men: [{
      top: { name: 'Burgundy Velvet Blazer with Black Dress Shirt', color: 'Burgundy' },
      bottom: { name: 'Black Tailored Dress Pants', color: 'Black' },
      shoes: { name: 'Black Patent Leather Dress Shoes', color: 'Black' },
      accessories: 'Gold Pocket Square, Cufflinks, Luxury Watch, Tie Bar',
      colors: ['Burgundy', 'Black', 'Gold']
    }]
  }
};

export const getRandomOutfit = (styleName, gender = 'women') => {
  const style = styleCategories[styleName];
  if (!style) return null;
  const outfits = style[gender] || style.women;
  return outfits[Math.floor(Math.random() * outfits.length)];
};

export const getAllStyleNames = () => {
  return Object.keys(styleCategories);
};

export const getStyleInfo = (styleName) => {
  return styleCategories[styleName];
};
