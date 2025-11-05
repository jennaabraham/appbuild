# Image Guide - Adding Accurate Outfit Photos

## Current Situation

The app currently uses **random Unsplash photos** which don't accurately match the outfit descriptions. For example:
- "White Cotton T-Shirt + Black Slim Trousers" might show a person in a yellow tracksuit
- "Cream Silk Blouse + Navy Tailored Trousers" might show someone in a brown leather jacket

## Why This Happens

Unsplash provides random fashion photos, but we can't control what specific clothing items appear in those photos. The images are just generic fashion photography.

## Solutions

### Option 1: Use Placeholder Service (Quick Fix)
Use a placeholder image service that shows the outfit description as text:

```javascript
image: 'https://via.placeholder.com/400x600/f5f5f5/666666?text=White+T-Shirt+Black+Pants'
```

**Pros:** Accurate description visible
**Cons:** Not visually appealing, no actual outfit photos

### Option 2: Curate Your Own Images (Best Solution)
Add your own outfit photos that exactly match each description.

#### Steps:
1. **Find or Create Photos:**
   - Take photos of actual outfits
   - Use stock photo services with specific search (Getty Images, Shutterstock)
   - Use AI image generation (Midjourney, DALL-E) with exact prompts
   - Hire a photographer to shoot specific outfits

2. **Store Images:**
   - Upload to a cloud service (Cloudinary, AWS S3, Imgur)
   - Or place in `/public/images/` folder in your app

3. **Update styleData.js:**
   ```javascript
   women: [{
     top: { name: 'White Cotton T-Shirt', color: 'White' },
     bottom: { name: 'Black Slim Trousers', color: 'Black' },
     shoes: { name: 'White Sneakers', color: 'White' },
     accessories: 'Simple Watch',
     colors: ['White', 'Black', 'Gray'],
     image: '/images/women-minimalist-white-tee-black-pants.jpg'  // Your actual photo
   }]
   ```

### Option 3: AI Image Generation (Recommended)
Use AI to generate exact outfit images:

**Midjourney Prompts Example:**
```
"Fashion photography, woman wearing white cotton t-shirt and black slim trousers with white sneakers, minimalist style, clean background, full body shot, professional lighting --ar 2:3"
```

**DALL-E Prompts Example:**
```
"Professional fashion photo of a woman in a white cotton t-shirt, black slim-fit trousers, and white sneakers, minimalist aesthetic, neutral background, portrait orientation"
```

### Option 4: Use Fashion Stock Photos
Services with specific outfit searches:
- **Pexels** (free) - search "woman white shirt black pants"
- **Unsplash** (free) - manual curation needed
- **Shutterstock** (paid) - very specific searches
- **Getty Images** (paid) - professional quality

## Implementation Guide

### For Local Images:

1. **Create images folder:**
   ```bash
   mkdir public/images
   mkdir public/images/women
   mkdir public/images/men
   ```

2. **Add your photos** with descriptive names:
   ```
   public/images/women/minimalist-white-tee-black-pants.jpg
   public/images/women/streetwear-hoodie-cargo-pants.jpg
   public/images/men/minimalist-white-tee-black-chinos.jpg
   ```

3. **Update styleData.js:**
   ```javascript
   image: '/images/women/minimalist-white-tee-black-pants.jpg'
   ```

### For Cloud-Hosted Images:

1. **Upload to Cloudinary/AWS/Imgur**

2. **Get direct URLs**

3. **Update styleData.js:**
   ```javascript
   image: 'https://your-cloud-service.com/your-image.jpg'
   ```

## Naming Convention

Use this format for image filenames:
```
{gender}-{style}-{description}.jpg

Examples:
women-minimalist-white-tee-black-pants.jpg
men-streetwear-hoodie-cargo-pants.jpg
women-classic-silk-blouse-navy-pants.jpg
men-business-suit-navy-charcoal.jpg
```

## Image Specifications

- **Aspect Ratio:** 2:3 (portrait)
- **Minimum Size:** 400x600px
- **Recommended Size:** 800x1200px
- **Format:** JPG or WebP
- **File Size:** Under 500KB (optimized)

## Quick AI Generation Guide

### Using DALL-E (ChatGPT Plus):
1. Go to ChatGPT
2. Use prompt: "Create a professional fashion photograph of a [gender] wearing [exact outfit description], [style] aesthetic, neutral background, portrait orientation"
3. Download and use the image

### Using Midjourney:
1. Join Midjourney Discord
2. Use prompt: "fashion photography, [gender] wearing [exact outfit], [style] style, clean background, full body --ar 2:3 --v 6"
3. Download and use the image

## Current Image Count Needed

- **16 style categories**
- **2 genders** (men/women)
- **1 outfit per gender** (can add more later)
- **Total: 32 images minimum**

## Example Complete Entry

```javascript
minimalist: {
  name: 'Minimalist',
  description: 'Clean lines, neutral colors, and simple silhouettes',
  image: '/images/category/minimalist.jpg',
  women: [{
    top: { name: 'White Cotton T-Shirt', color: 'White' },
    bottom: { name: 'Black Slim Trousers', color: 'Black' },
    shoes: { name: 'White Sneakers', color: 'White' },
    accessories: 'Simple Watch',
    colors: ['White', 'Black', 'Gray'],
    image: '/images/women/minimalist-white-tee-black-pants.jpg'  // EXACT match
  }],
  men: [{
    top: { name: 'White Crew Neck Tee', color: 'White' },
    bottom: { name: 'Black Chinos', color: 'Black' },
    shoes: { name: 'White Sneakers', color: 'White' },
    accessories: 'Leather Watch',
    colors: ['White', 'Black', 'Gray'],
    image: '/images/men/minimalist-white-tee-black-chinos.jpg'  // EXACT match
  }]
}
```

## Temporary Solution

For now, the app works with the current random images. The outfit **descriptions are accurate** in the text overlays - only the background photos are generic. Users can still see exactly what items make up each outfit.

## Next Steps

1. ✅ App is functional with outfit descriptions
2. ⏳ Curate or generate 32 outfit images that match descriptions
3. ⏳ Replace image URLs in `src/data/styleData.js`
4. ✅ App will show accurate outfit photos

---

**Need Help?** The outfit descriptions are the most important part - they're all accurate! The images are just visual enhancement. You can launch with the current setup and update images later.
