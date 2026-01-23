# Portfolio - Bento Style Design

A modern portfolio template built with React, Vite, and Tailwind CSS featuring a Bento-style grid layout.

## Features

- **Bento Grid Layout**: Modern card-based design with varied sizes
- **Responsive Design**: Works on all screen sizes
- **Tailwind CSS**: Utility-first styling
- **Component-Based**: Modular React components

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Sticky navigation with pill-style buttons
│   ├── HeroSection.jsx      # Main hero with profile and intro
│   ├── AboutSection.jsx     # About me with info cards (Bento grid)
│   ├── ProjectsSection.jsx  # Featured projects gallery (Bento grid)
│   ├── SkillsSection.jsx    # Skills & technologies with progress bars
│   ├── ExperienceSection.jsx # Work timeline with achievements
│   ├── ContactSection.jsx   # Contact form and info cards
│   ├── ScrollIndicator.jsx  # Animated scroll indicator
│   ├── Footer.jsx           # Footer with links and newsletter
│   └── SocialIcons.jsx      # Social media icons
├── App.jsx                  # Main app component
├── App.css                  # Custom animations
├── index.css                # Tailwind imports
└── main.jsx                 # Entry point
```

## Getting Started

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

## Design Notes

- Uses placeholder elements for images (replace with your actual images)
- Animations will be added in future updates
- Color scheme: Light background with slate accents

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4
