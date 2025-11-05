# StyleSync - Personal Outfit Generator

A modern React application that generates personalized outfit recommendations based on your style preferences from Pinterest boards and uploaded images.

## Features

✨ **Pinterest Integration** - Sync your outfit boards to analyze your style preferences  
📸 **Image Upload** - Upload photos of outfits you love  
🎨 **AI-Powered Generation** - Get personalized outfit recommendations  
👗 **Style Avatars** - Visualize outfits with chic, classic, and trendy styles  
💾 **Save Favorites** - Keep track of outfits you love  
📊 **Style Analytics** - Understand your fashion preferences with detailed insights  

## Tech Stack

- **React 18** - Modern React with hooks
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Usage Guide

### 1. Getting Started
- Click "Get Started" on the home page
- You'll be taken to the setup page

### 2. Connect Your Style Sources

**Pinterest Sync:**
- Enter your Pinterest board URL
- Click "Connect Board" to sync your pins
- The app will analyze your saved outfits

**Image Upload:**
- Drag and drop images or click to browse
- Upload photos of outfits you love
- The app will analyze your style preferences

### 3. Generate Outfits
- Once you've added style sources, click "Generate Outfits"
- Filter by style: All, Chic, Classic, or Trendy
- Click "Generate New Outfit" for fresh recommendations
- Save outfits you love with the heart icon

### 4. View Your Profile
- Navigate to the Profile page
- See your style distribution and analytics
- Review connected boards and uploaded images
- Get personalized style insights

## Features Breakdown

### Home Page
- Beautiful hero section with feature highlights
- Style avatar previews
- Quick start call-to-action

### Setup Page
- **Pinterest Sync Component**: Connect your Pinterest boards (demo mode)
- **Image Upload Component**: Drag-and-drop interface for uploading outfit photos
- Real-time style analysis

### Outfit Generator
- Interactive outfit display with avatar visualization
- Style filtering (Chic, Classic, Trendy)
- Outfit details including:
  - Top, bottom, shoes, and accessories
  - Style match percentage
  - Occasion tags
- Save, download, and share functionality
- Sidebar with saved outfits

### Style Profile
- Comprehensive style analytics
- Style distribution charts
- Connected Pinterest boards overview
- Uploaded images gallery
- Personalized style insights and recommendations

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Fonts
The app uses:
- **Inter** for body text
- **Playfair Display** for headings

Change fonts in `public/index.html` and `tailwind.config.js`.

## Future Enhancements

- 🔐 Real Pinterest API integration with OAuth
- 🤖 Advanced AI style analysis
- 🛍️ Shopping links for outfit items
- 📱 Mobile app version
- 👥 Social sharing and community features
- 🎯 Seasonal outfit recommendations
- 📅 Calendar integration for outfit planning

## Notes

- **Pinterest Integration**: Currently in demo mode. For production, you'll need to:
  1. Register your app with Pinterest Developer Portal
  2. Implement OAuth authentication
  3. Use Pinterest API to fetch board data
  
- **Image Analysis**: Currently uses mock data. For production, integrate with:
  - Computer vision APIs (Google Vision, AWS Rekognition)
  - Fashion-specific ML models
  - Color and pattern analysis services

## Project Structure

```
src/
├── components/
│   ├── Header.js           # Navigation header
│   ├── Hero.js             # Landing page
│   ├── PinterestSync.js    # Pinterest board connection
│   ├── ImageUpload.js      # Image upload interface
│   ├── OutfitGenerator.js  # Outfit generation and display
│   └── StyleProfile.js     # User style analytics
├── App.js                  # Main app component
├── index.js               # App entry point
└── index.css              # Global styles
```

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue on the repository.

---

**Made with ❤️ for fashion enthusiasts**
