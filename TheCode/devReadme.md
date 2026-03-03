# 🛠️ Developer Documentation

> **Technical overview of the portfolio's architecture and technologies**

This document provides a comprehensive breakdown of the technologies, tools, and architectural decisions used to build this portfolio.

---

## 📦 Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| **Framework** | React | 19.2.0 |
| **Build Tool** | Vite (Rolldown) | 7.2.5 |
| **Styling** | Tailwind CSS | 4.1.18 |
| **Routing** | React Router DOM | 7.13.0 |
| **Animations** | GSAP | 3.14.2 |
| **Animations** | Motion | 12.29.2 |
| **Linting** | ESLint | 9.39.1 |

---

## 🏗️ Project Architecture

```
src/
├── assets/          # Static assets (images, icons, etc.)
├── components/      # Reusable UI components
│   ├── AboutSection.jsx
│   ├── Animations.jsx
│   ├── ContactSection.jsx
│   ├── CVModal.jsx
│   ├── ExperienceSection.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── IntroAnimation.jsx
│   ├── Navbar.jsx
│   ├── ProjectModal.jsx
│   ├── ProjectsSection.jsx
│   ├── SkillsSection.jsx
│   ├── SocialIcons.jsx
│   └── TestimonialSection.jsx
├── context/         # React Context providers
│   └── ThemeContext.jsx
├── pages/           # Page-level components
│   ├── AboutPage.jsx
│   ├── ContactPage.jsx
│   ├── ErrorPage.jsx
│   ├── HomePage.jsx
│   └── ProjectsPage.jsx
├── App.jsx          # Root application component
├── App.css          # Global application styles
├── main.jsx         # Application entry point
└── index.css        # Base CSS styles
```

---

## ⚡ Key Features

### 🎨 Theme System
- **Dark/Light mode** with automatic system preference detection
- Theme persistence via `localStorage`
- Smooth transitions between themes using Tailwind's `dark:` variant
- Centralized theme management through React Context API

### 🎬 Animations
- **GSAP** - Used for complex timeline animations and scroll-triggered effects
- **Motion** - React-specific animations with declarative syntax
- **Intro Animation** - First-visit animation with session-based detection

### 🧭 Routing
- Client-side routing with **React Router DOM v7**
- Pages: Home, About, Projects, Contact, and Error (404)
- Clean URL structure

### 📱 Responsive Design
- Mobile-first approach with Tailwind CSS
- Utility-first styling for rapid development
- Consistent spacing and typography system

---

## 🔧 Build Configuration

### Vite Configuration
The project uses **Rolldown-Vite** for optimized builds with the following features:

- **Code Splitting** - Automatic chunking for better caching:
  - `vendor-react` - React DOM and Router
  - `vendor-gsap` - GSAP animation library
  - `vendor-motion` - Motion animation library

### Tailwind CSS
- Integrated via `@tailwindcss/vite` plugin
- Version 4 with native CSS configuration

### ESLint
- React-specific linting rules
- React Hooks plugin for rules of hooks enforcement
- React Refresh plugin for Fast Refresh compatibility

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation

```bash
# Navigate to the project directory
cd TheCode

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 📁 File Conventions

- **Components** - PascalCase (e.g., `HeroSection.jsx`)
- **Pages** - PascalCase with "Page" suffix (e.g., `HomePage.jsx`)
- **Context** - PascalCase with "Context" suffix (e.g., `ThemeContext.jsx`)
- **Styles** - kebab-case for CSS files

---

## 🔮 Dependencies Overview

### Production Dependencies
- `react` & `react-dom` - Core React library
- `react-router-dom` - Client-side routing
- `gsap` - Professional-grade animations
- `motion` - Declarative React animations
- `motion-plus-dom` & `motion-plus-react` - Extended motion capabilities

### Development Dependencies
- `vite` - Next-generation build tool
- `tailwindcss` - Utility-first CSS framework
- `eslint` - Code quality and consistency
- `@vitejs/plugin-react` - React Fast Refresh support

---

## 📝 Notes

- The project uses **React 19** with the latest features
- **Rolldown-Vite** is used as an experimental faster alternative to standard Vite
- Session storage is used for intro animation to show only once per session
- Theme preference is preserved across browser sessions

---

<p align="center">
  <strong>Built with ❤️ and modern web technologies</strong>
</p>
