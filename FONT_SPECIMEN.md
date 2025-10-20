# Syntalix Typography System
## Font Specimen & Usage Guide

### Overview
The Syntalix Typography System is a comprehensive type system designed specifically for Syntalix Consultancy Services. It combines modern web fonts with custom styling to create a unique, professional, and AI-focused brand identity.

---

## Font Stack

### Primary Fonts
- **Space Grotesk** - Display & Headings
- **Inter** - Body Text & UI Elements  
- **JetBrains Mono** - Code & Technical Content

### Font Loading
```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap");
```

---

## Typography Classes

### Base Font Classes
| Class | Font Family | Usage |
|-------|-------------|-------|
| `.syntalix-font` | Space Grotesk, Inter | General purpose |
| `.syntalix-font-display` | Space Grotesk | Hero sections, large headings |
| `.syntalix-font-heading` | Space Grotesk | Section headings |
| `.syntalix-font-body` | Inter | Body text, paragraphs |
| `.syntalix-font-mono` | JetBrains Mono | Code, technical content |

### Size Scale
| Class | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `.syntalix-text-xs` | 0.75rem | 1rem | Captions, labels |
| `.syntalix-text-sm` | 0.875rem | 1.25rem | Small text |
| `.syntalix-text-base` | 1rem | 1.5rem | Body text |
| `.syntalix-text-lg` | 1.125rem | 1.75rem | Subheadings |
| `.syntalix-text-xl` | 1.25rem | 1.75rem | Card titles |
| `.syntalix-text-2xl` | 1.5rem | 2rem | Small headings |
| `.syntalix-text-3xl` | 1.875rem | 2.25rem | Section titles |
| `.syntalix-text-4xl` | 2.25rem | 2.5rem | Page headings |
| `.syntalix-text-5xl` | 3rem | 1 | Large headings |
| `.syntalix-text-6xl` | 3.75rem | 1 | Display text |
| `.syntalix-text-7xl` | 4.5rem | 1 | Hero text |
| `.syntalix-text-8xl` | 6rem | 1 | Extra large display |
| `.syntalix-text-9xl` | 8rem | 1 | Massive display |

### Weight Classes
| Class | Weight | Numeric |
|-------|---------|---------|
| `.syntalix-weight-light` | Light | 300 |
| `.syntalix-weight-normal` | Normal | 400 |
| `.syntalix-weight-medium` | Medium | 500 |
| `.syntalix-weight-semibold` | Semibold | 600 |
| `.syntalix-weight-bold` | Bold | 700 |
| `.syntalix-weight-extrabold` | Extra Bold | 800 |
| `.syntalix-weight-black` | Black | 900 |

---

## Gradient Effects

### Gradient Classes
| Class | Colors | Usage |
|-------|--------|-------|
| `.syntalix-logo-text` | Purple to Indigo | Brand logo text |
| `.syntalix-gradient-primary` | Purple gradient | Main brand elements |
| `.syntalix-gradient-secondary` | Pink to Purple | Secondary elements |
| `.syntalix-gradient-tech` | Green gradient | Technology content |
| `.syntalix-gradient-ai` | Multi-color | AI-themed content |

### Example Usage
```html
<h1 class="syntalix-logo-text syntalix-text-6xl">Syntalix</h1>
<h2 class="syntalix-gradient-primary syntalix-text-4xl">AI Solutions</h2>
<code class="syntalix-gradient-tech syntalix-font-mono">const ai = "future";</code>
```

---

## Special Effects

### Glow Animation
```css
.syntalix-text-glow
```
Creates an animated glow effect perfect for highlighting important text.

### Responsive Typography
```css
.syntalix-hero-title {
  font-size: clamp(2rem, 5vw, 4rem);
}
```

---

## Component-Specific Classes

### Pre-built Components
| Class | Description |
|-------|-------------|
| `.syntalix-hero-title` | Responsive hero titles with gradient |
| `.syntalix-section-title` | Consistent section headings |
| `.syntalix-card-title` | Card and component titles |
| `.syntalix-body-text` | Optimized body text |
| `.syntalix-caption` | Small descriptive text |
| `.syntalix-code` | Code blocks with tech gradient |

---

## Usage Examples

### Hero Section
```html
<section class="hero">
  <h1 class="syntalix-hero-title">
    Innovation with AI
  </h1>
  <p class="syntalix-body-text syntalix-text-lg">
    Syntalix delivers cutting-edge AI solutions
  </p>
</section>
```

### Service Card
```html
<div class="service-card">
  <h3 class="syntalix-card-title">ChatGPT Integration</h3>
  <p class="syntalix-body-text">
    Custom ChatGPT applications and integrations
  </p>
  <span class="syntalix-caption syntalix-gradient-primary">
    ₹15,000 - ₹30,000
  </span>
</div>
```

### Code Block
```html
<pre class="code-block">
  <code class="syntalix-code">
    import { GoogleGenerativeAI } from '@google/generative-ai';
  </code>
</pre>
```

---

## Design Principles

### Hierarchy
1. **Display Text** - Space Grotesk 800-900 weight
2. **Headings** - Space Grotesk 600-700 weight
3. **Body Text** - Inter 400-500 weight
4. **Captions** - Inter 400-500 weight, smaller sizes
5. **Code** - JetBrains Mono 500 weight

### Spacing
- **Letter Spacing**: Tighter for larger text (-0.02em to -0.05em)
- **Line Height**: Tighter for headings (1.1-1.2), comfortable for body (1.6)

### Color Strategy
- **Gradients**: Use sparingly for emphasis and branding
- **Monochrome**: Rely on CSS variables for theme compatibility
- **Contrast**: Ensure WCAG AA compliance for all text

---

## Browser Support

### Font Features
- **Ligatures**: Enabled for all fonts
- **Kerning**: Automatic kerning enabled
- **OpenType Features**: Space Grotesk stylistic sets enabled

### Fallbacks
```css
font-family: "Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

---

## Performance Considerations

### Font Loading Strategy
- **display=swap**: Prevents invisible text during font swap
- **Preload**: Critical fonts loaded with high priority
- **Subset**: Only necessary character sets loaded

### Optimization
- **Variable Fonts**: Not used to maintain broad compatibility
- **WOFF2**: Modern format with excellent compression
- **Font-display**: Swap strategy for better UX

---

## Implementation Checklist

- [ ] Import font stylesheets
- [ ] Apply base font classes to elements
- [ ] Test gradient effects across themes
- [ ] Verify responsive scaling
- [ ] Check contrast ratios
- [ ] Test across different browsers
- [ ] Validate performance impact

---

## Version History

- **v1.0** - Initial typography system
- **v1.1** - Added gradient effects
- **v1.2** - Enhanced responsive scaling
- **v1.3** - Component-specific classes added

---

*Created for Syntalix Consultancy Services - AI-Powered Solutions*