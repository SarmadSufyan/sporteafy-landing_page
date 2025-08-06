# Sporteafy Landing Page

A professional, static landing page for Sporteafy - the indoor sports court booking platform. This landing page is the basic idea of the website , the full and complete website will be launch soon in (August 2025)

## 🎯 Purpose

This static website serves as:
- **Professional presence** 
- **Marketing landing page** showcasing Sporteafy's features
- **Legal compliance** with Terms & Conditions and Privacy Policy
- **Zero-cost hosting** solution using GitHub Pages

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Exact Brand Matching** - Uses same fonts, colors, and styling as main app
- **SEO Optimized** - Meta tags, structured data, and performance optimized
- **Interactive Elements** - Hero carousel, smooth scrolling, animations
- **Legal Pages** - Complete Terms & Conditions and Privacy Policy
- **Fast Loading** - Optimized images, minified CSS/JS, lazy loading

## 📁 Structure

```
landing_page/
├── index.html              # Main landing page
├── terms.html              # Terms & Conditions
├── privacy.html            # Privacy Policy
├── assets/
│   ├── css/
│   │   └── styles.css      # Complete styling (matches main app)
│   ├── js/
│   │   └── script.js       # Interactive functionality
│   └── images/             # Hero images and assets
├── README.md               # This file
└── CNAME                   # Custom domain configuration
```

## 🎨 Design System

### Fonts
- **Logo**: RACESPORT (fallback: Arial)
- **Headings**: Bebas Neue
- **Body**: Space Grotesk

### Colors
- **Primary Green**: #22c55e
- **Background**: #000000 (primary), #111111 (secondary)
- **Text**: #ffffff (primary), #e5e7eb (secondary)
- **Accent**: #22c55e

### Sections
1. **Hero** - Carousel with call-to-action buttons
2. **Features** - 6 key benefits with icons
3. **How It Works** - 3-step process
4. **Pricing** - 3 pricing tiers for different sports
5. **CTA** - Main call-to-action section
6. **Contact** - Contact information and coming soon message
7. **Footer** - Links and legal pages

## 🛠️ Deployment Instructions

### Step 1: GitHub Repository Setup

1. **Create New Repository**
   ```bash
   # Create new repository on GitHub named 'sporteafy-landing'
   # Initialize with README
   ```

2. **Upload Files**
   ```bash
   git clone https://github.com/yourusername/sporteafy-landing.git
   cd sporteafy-landing
   
   # Copy all files from landing_page/ folder to repository root
   cp -r landing_page/* .
   
   git add .
   git commit -m "Initial landing page deployment"
   git push origin main
   ```

### Step 2: GitHub Pages Configuration

1. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

2. **Wait for Deployment**
   - GitHub will provide a URL like: `https://yourusername.github.io/sporteafy-landing`
   - Deployment usually takes 5-10 minutes

### Step 3: Custom Domain Setup (Namecheap)

1. **Update CNAME File**
   ```bash
   # Edit CNAME file to include your domain
   echo "yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push origin main
   ```

2. **Configure Namecheap DNS**
   - Login to Namecheap account
   - Go to Domain List → Manage
   - Navigate to "Advanced DNS" tab
   - Add these records:

   ```
   Type: A Record
   Host: @
   Value: 185.199.108.153
   TTL: Automatic
   
   Type: A Record
   Host: @
   Value: 185.199.109.153
   TTL: Automatic
   
   Type: A Record
   Host: @
   Value: 185.199.110.153
   TTL: Automatic
   
   Type: A Record
   Host: @
   Value: 185.199.111.153
   TTL: Automatic
   
   Type: CNAME Record
   Host: www
   Value: yourusername.github.io
   TTL: Automatic
   ```

3. **Verify SSL Certificate**
   - GitHub automatically provides SSL
   - Check "Enforce HTTPS" in repository settings
   - Certificate may take 24-48 hours to activate

### Step 4: Testing & Validation

1. **Test All Pages**
   - Homepage: `https://yourdomain.com`
   - Terms: `https://yourdomain.com/terms.html`
   - Privacy: `https://yourdomain.com/privacy.html`

2. **Mobile Responsiveness**
   - Test on various device sizes
   - Verify touch interactions work

3. **Performance Check**
   - Use Google PageSpeed Insights
   - Ensure fast loading times

## 🖼️ Adding Hero Images

To add hero images for the carousel:

1. **Prepare Images**
   - Size: 1920x1080px (recommended)
   - Format: JPG or WebP for best performance
   - Optimize for web (compress to <500KB each)

2. **Add to Repository**
   ```bash
   # Add images to assets/images/ folder
   assets/images/hero-1.jpg
   assets/images/hero-2.jpg
   assets/images/hero-3.jpg
   assets/images/hero-4.jpg
   ```

3. **Update HTML (if needed)**
   - Hero images are already referenced in index.html
   - No code changes needed if using suggested filenames

## 📊 SEO & Analytics

### Meta Tags Included
- Title, Description, Keywords
- Open Graph (Facebook/LinkedIn)
- Twitter Cards
- Viewport and mobile optimization

### Future Enhancements
- Google Analytics tracking code
- Google Search Console verification
- Schema.org structured data
- Sitemap.xml generation

## 🔧 Customization

### Updating Content
- **Hero Text**: Edit `index.html` lines 45-60
- **Features**: Modify features grid in `index.html`
- **Pricing**: Update pricing cards with current rates
- **Contact Info**: Change email/phone in multiple locations

### Styling Changes
- **Colors**: Update CSS variables in `styles.css` (lines 8-30)
- **Fonts**: Modify font imports and variables
- **Layout**: Adjust grid systems and spacing

### Adding New Pages
1. Create new HTML file
2. Include same header/footer structure
3. Link from navigation and footer
4. Update sitemap if implementing SEO

## 📞 Support

For technical issues with this landing page:
- **Email**: sporteafy.com
- **Phone/WhatsApp**: 0337-0104838

## 📝 Legal

This landing page includes:
- Complete Terms & Conditions
- Comprehensive Privacy Policy
- GDPR-compliant data handling information
- Pakistan law compliance

---

**🎯 Ready for AWS Startup Credits Application!**

This professional landing page provides the active website URL needed for AWS startup credit applications while maintaining zero hosting costs through GitHub Pages.