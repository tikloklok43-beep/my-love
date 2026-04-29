# Digital Love Letter - Premium Romantic Web Experience

## Project Overview

- **Project Name**: Digital Love Letter
- **Type**: Mobile-first romantic web experience
- **Core Functionality**: A cinematic, ultra-aesthetic digital love letter designed to be shared via QR code, featuring immersive storytelling, animations, and ambient audio
- **Target Users**: Couples, loved ones, anyone wanting to express deep romantic feelings

---

## UI/UX Specification

### Layout Structure

**Page Sections (Storytelling Flow)**:
1. Opening Scene - Fullscreen cinematic intro
2. Personal Message - Centered emotional message with typing effect
3. Emotional Highlights - Floating cards with affirmations
4. Memory/Feeling Section - Image placeholder with gradient overlay
5. Final Confession - Large centered romantic text
6. Ending Scene - Thank you message with glow effects

**Responsive Breakpoints**:
- Mobile: 320px - 767px (primary)
- Tablet: 768px - 1023px
- Desktop: 1024px+

### Visual Design

**Color Palette**:
- Background: `#FFF8F5` (Soft cream)
- Primary: `#FADADD` (Blush pink)
- Accent Gold: `#D4AF37` → `#FDE68A` (Gold gradient)
- Rose: `#E11D48` (Deep rose accent)
- Text Primary: `#1E1B2E` (Deep purple)
- Text Secondary: `#6B5B6B` (Muted rose)
- Glass Card: `rgba(255, 255, 255, 0.25)` (Glassmorphism)
- Glow: `#FFD700` (Golden glow)

**Typography**:
- Headings: `"Playfair Display", serif` (elegant, romantic)
- Script Font: `"Great Vibes", cursive` (personal signature)
- Body: `"Inter", sans-serif` (clean readability)
- Body Alt: `"Lora", serif` (poetic text)

**Font Sizes**:
- Hero Title: 2.5rem (mobile) → 4rem (desktop)
- Section Titles: 1.75rem (mobile) → 2.5rem (desktop)
- Body: 1rem (mobile) → 1.125rem (desktop)
- Caption: 0.875rem

**Spacing System**:
- Section padding: 4rem vertical (mobile) → 6rem (desktop)
- Component gap: 1.5rem
- Card padding: 1.5rem

**Visual Effects**:
- Glassmorphism: `backdrop-filter: blur(20px)`, `background: rgba(255,255,255,0.3)`
- Bokeh glow: CSS radial gradients with animation
- Floating particles: CSS keyframe animations (20+ particles)
- Gold shimmer: Animated gradient text
- Soft shadows: `0 20px 60px rgba(30, 27, 46, 0.1)`

### Components

**1. Opening Scene**:
- Full viewport height (100vh)
- Background: Soft gradient + floating particles
- Title text with fade-in animation (delayed)
- CTA Button: Large, pill-shaped, gold gradient
- Hover: Scale 1.05 + glow intensify

**2. Personal Message Section**:
- Centered container with glassmorphism card
- Typing effect for message text (50ms per character)
- "Dear [Name]" with script font
- Fade-in on scroll entry

**3. Emotional Highlight Cards**:
- 3 cards in vertical stack (mobile) / horizontal (desktop)
- Glassmorphism style
- Icon + text layout
- Hover: Translate-y -8px + glow

**4. Memory Section**:
- Full-width image placeholder
- Soft gradient overlay (bottom)
- Centered text overlay
- Parallax scroll effect

**5. Final Confession**:
- Large centered text (Playfair Display)
- Gold gradient underline animation
- Signature line with Great Vibes font

**6. Ending Scene**:
- Animated golden glow background
- Thank you text
- Floating heart/symbol particles

**7. Audio Control**:
- Floating button (bottom-right)
- Circular, glassmorphism style
- Play/Pause icon toggle
- Smooth fade in/out (2s)

---

## Functionality Specification

### Core Features

1. **Cinematic Opening**:
   - User lands on opening scene
   - Click "Open My Heart" to play music and reveal content
   - Smooth scroll to next section

2. **Personalized Message**:
   - Read name from URL parameter `?name=...`
   - Default to "My Love" if no name provided
   - Typing animation plays when section enters viewport

3. **Audio Experience**:
   - Soft romantic instrumental loops
   - Triggered on user interaction (click)
   - Floating control button for play/pause
   - Persists across scroll

4. **Scroll Animations**:
   - Sections fade in on scroll into view
   - Parallax effect on background elements
   - Staggered animation for card reveals

5. **QR Code / Link Sharing**:
   - Page accessible via direct link
   - URL parameters for personalization
   - Mobile-optimized for QR scanning

### User Interactions

- **Click "Open My Heart"**: Start experience + play music
- **Scroll**: Reveal sections with animations
- **Tap audio button**: Toggle play/pause music
- **Hover on cards**: Subtle lift + glow effect

### Edge Cases

- No name parameter: Use default "My Love"
- Audio blocked by browser: Show unmute hint
- Slow connection: Loading state for images

---

## Acceptance Criteria

1. ✅ Opening scene displays fullscreen with animated background
2. ✅ "Open My Heart" button initiates music and scrolls to message
3. ✅ Name from URL (?name=) displays in greeting
4. ✅ Typing animation plays for personal message
5. ✅ All 6 sections render with proper styling
6. ✅ Audio plays/pauses with floating control
7. ✅ Scroll animations trigger smoothly
8. ✅ Mobile-responsive at all breakpoints
9. ✅ Floating particles visible throughout
10. ✅ Glassmorphism cards render correctly
11. ✅ No console errors on load
12. ✅ Performance: Smooth 60fps animations on mobile

---

## Technical Stack

- **Framework**: React 18 (Create React App)
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion
- **Audio**: Howler.js
- **Fonts**: Google Fonts (Playfair Display, Great Vibes, Inter, Lora)

## Asset Requirements

- **Audio**: Royalty-free romantic instrumental (fallback: embedded base64 or placeholder)
- **Images**: Graceful placeholder images for memory section