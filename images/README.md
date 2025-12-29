# Images Directory

This directory contains images for your portfolio website.

## Required Images:

### 1. Profile Photo
- **File**: `profile-photo.webp`
- **Location**: `/public/images/profile-photo.webp`
- **Recommended size**: 560x700 pixels (4:5 ratio, portrait)
- **Format**: JPG or PNG
- **Description**: Your professional headshot for the Hero section (rectangular/portrait format)

### 2. Hackathon Win Photo
- **File**: `hackathon-win.jpg`
- **Location**: `/public/images/hackathon-win.jpg`
- **Recommended size**: 800x400 pixels (2:1 ratio)
- **Format**: JPG or PNG
- **Description**: Photo from your hackathon win (team photo, award ceremony, etc.)

## How to Add Images:

1. **Prepare your images**:
   - Resize them to the recommended dimensions
   - Optimize for web (compress to reduce file size)
   - Use descriptive filenames

2. **Add to this directory**:
   - Copy your profile photo as `profile-photo.webp`
   - Copy your hackathon photo as `hackathon-win.jpg`

3. **Alternative formats**:
   - If using PNG, update the file extensions in the components
   - Supported formats: JPG, PNG, WebP

## Image Guidelines:

### Profile Photo:
- Professional appearance
- Good lighting
- Clear background (solid color preferred)
- Face should be clearly visible
- Smile and make eye contact with camera

### Hackathon Photo:
- High resolution and good quality
- Shows you receiving award or with team
- Good lighting and composition
- Represents the achievement well

## Fallback Behavior:

If images are not found, the website will show placeholder icons with instructions to add the images. This ensures the website works even without images initially.

## File Structure:
```
public/
├── images/
│   ├── profile-photo.webp     (Your profile picture)
│   ├── hackathon-win.jpg     (Hackathon achievement photo)
│   └── README.md             (This file)
```

## Tips:
- Keep file sizes under 500KB for faster loading
- Use consistent naming conventions
- Test images in both light and dark modes
- Consider using WebP format for better compression