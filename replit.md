# Portfolio Website

## Overview

This is a modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. It showcases a frontend developer's professional experience, skills, and projects with a clean, retro-inspired design system. The application is built using a full-stack architecture with Express.js backend and Vite for the frontend development experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Updates (January 2025)

✓ **Complete Portfolio Implementation** - Built a fully functional React portfolio website with:
  - Retro gaming aesthetic with purple, indigo, and pink color palette
  - Dark/light theme toggle with smooth transitions
  - Responsive design following mobile-first approach
  - Atomic Design structure (atoms, molecules, organisms, templates, pages)
  - Complete sections: Hero, About, Experience, Projects, Contact
  - Framer Motion animations throughout
  - Real CV integration from attached assets
  - Professional timeline with work experience
  - Contact form with toast notifications
  - Clean, modern UI with retro gaming influences

## System Architecture

The application is now a pure React-only frontend project:

- **Frontend**: React SPA with TypeScript, using Vite for development and build tooling
- **No Backend**: Completely static React application with no server dependencies
- **No Database**: All data is static and stored in TypeScript files
- **Styling**: Tailwind CSS with custom design system and shadcn/ui components
- **State Management**: React Context for theme management only

## Key Components

### Frontend Architecture
- **Component Architecture**: Atomic design pattern with atoms, molecules, organisms, templates, and pages
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for smooth animations and transitions
- **Theming**: Custom theme system with light/dark mode support

### File Structure
- **Root Level**: All React files moved to root directory
- **Static Data**: Portfolio content stored in `src/data/portfolio.ts`
- **Components**: Atomic design structure in `src/components/`
- **Assets**: Static files served from `public/` directory
- **No Server Dependencies**: Completely removed server folder and backend code

### Design System
- **Color Scheme**: Retro-inspired purple, indigo, and pink gradients
- **Typography**: Inter font family with JetBrains Mono for code elements
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Animations**: Floating elements and smooth transitions throughout the UI

## Data Flow

1. **Static Data**: Portfolio content (experience, skills, projects) stored in TypeScript data files
2. **Theme Management**: Context-based theme state with localStorage persistence
3. **Contact Information**: Static contact details with direct links (email, LinkedIn)
4. **CV Download**: PDF served directly from public directory
5. **No API Communication**: Pure frontend application with no server requests

## External Dependencies

### Core Libraries
- **React 18**: Main UI framework
- **TypeScript**: Type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework
- **Drizzle ORM**: Type-safe database operations
- **Express.js**: Backend web framework

### UI and UX
- **shadcn/ui**: Pre-built accessible components
- **Radix UI**: Headless UI primitives
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **React Hook Form**: Form handling with validation

### Development Tools
- **Vite**: Fast development server and build tool
- **TanStack Query**: Server state management
- **Wouter**: Lightweight routing
- **PostCSS**: CSS processing
- **ESBuild**: Fast JavaScript bundler

## Deployment Strategy

The application is configured for deployment on Replit as a React-only frontend:

1. **Development**: `vite --host 0.0.0.0 --port 5173` - Runs only the Vite development server
2. **Build**: `vite build` - Builds the React application for production
3. **Production**: `vite preview` - Serves the built static files
4. **Static Assets**: CV and other files served from the public directory

### Environment Configuration
- **NODE_ENV**: Environment flag for development/production modes
- **REPL_ID**: Replit-specific environment variable for development features

The application includes Replit-specific optimizations like runtime error overlays and development banners for enhanced development experience.