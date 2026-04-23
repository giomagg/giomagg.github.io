# Giovanni Maggi - Personal Academic Website

A modern, clean academic website inspired by the Oxford LLMs design, featuring a responsive layout, dark/light theme toggle, and elegant typography.

## Features

- **Modern Design**: Clean, card-based layout with smooth animations
- **Dark/Light Theme**: Toggle between themes with persistent preference storage
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Fast & Lightweight**: Pure HTML/CSS/JS with no dependencies
- **Accessible**: Semantic HTML and ARIA labels for screen readers

## Files Structure

```
├── index.html          # Home page
├── research.html       # Research page
├── publications.html   # Publications page
├── cv.html            # CV page
├── styles.css         # All styles and design tokens
├── script.js          # Theme toggle and interactions
└── README.md          # This file
```

## Customization

### Colors

Edit the CSS variables in `styles.css` (lines 7-47) to change colors:

```css
:root {
    --color-primary: #1a5490;        /* Main brand color */
    --color-accent: #d84315;         /* Accent color */
    --color-bg: #fafafa;            /* Background color */
    /* ... more variables */
}
```

### Typography

The website uses:
- **Display font**: Libre Baskerville (serif) for headings
- **Body font**: Work Sans (sans-serif) for text

To change fonts, update the Google Fonts import in the HTML files and the CSS variables:

```css
--font-display: 'Your Display Font', serif;
--font-body: 'Your Body Font', sans-serif;
```

### Content

Simply edit the HTML files to update your content. The structure is straightforward:
- Hero section for page title
- Main content area with cards and prose
- Sidebar (on home page) for contact and links

## Deployment to GitHub Pages

1. **Create a GitHub repository** named `your-username.github.io`

2. **Upload all files** to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-username.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Click "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"

4. **Visit your site** at `https://your-username.github.io`

## Adding Content

### Adding a Publication

In `publications.html`, add a new card in the appropriate section:

```html
<div class="card" style="margin-bottom: 1.5rem;">
    <div class="card-header">
        <span class="tag">Published</span>
    </div>
    <h3 class="card-title">Your Paper Title</h3>
    <p class="card-text">Paper description...</p>
</div>
```

### Adding a Research Area

In `research.html`, add to the card grid:

```html
<div class="card">
    <div class="card-header">
        <span class="tag">Category</span>
    </div>
    <h3 class="card-title">Research Area Title</h3>
    <p class="card-text">Description of research area...</p>
</div>
```

### Updating Contact Information

Edit the sidebar in `index.html`:

```html
<div class="contact-item">
    <svg class="contact-icon">...</svg>
    <a href="mailto:your.email@domain.com">your.email@domain.com</a>
</div>
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## License

© 2024 Giovanni Maggi. All rights reserved.

## Credits

Design inspired by the Oxford LLMs website (llmsforsocialscience.net)
Built with pure HTML, CSS, and JavaScript
