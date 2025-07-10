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

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React SPA with TypeScript, using Vite for development and build tooling
- **Backend**: Express.js server with TypeScript support
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Styling**: Tailwind CSS with custom design system and shadcn/ui components
- **State Management**: React Context for theme management, TanStack Query for server state

## Key Components

### Frontend Architecture
- **Component Architecture**: Atomic design pattern with atoms, molecules, organisms, templates, and pages
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for smooth animations and transitions
- **Theming**: Custom theme system with light/dark mode support

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL dialect
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **API Structure**: RESTful API design with /api prefix for all endpoints
- **Development Tools**: Hot reloading with Vite integration

### Design System
- **Color Scheme**: Retro-inspired purple, indigo, and pink gradients
- **Typography**: Inter font family with JetBrains Mono for code elements
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Animations**: Floating elements and smooth transitions throughout the UI

## Data Flow

1. **Static Data**: Portfolio content (experience, skills, projects) stored in TypeScript data files
2. **Theme Management**: Context-based theme state with localStorage persistence
3. **Form Handling**: Contact form with validation and toast notifications
4. **Database Operations**: User management through abstracted storage interface
5. **API Communication**: TanStack Query for server state management and caching

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

The application is configured for deployment on Replit with the following setup:

1. **Development**: `npm run dev` - Runs both frontend and backend in development mode
2. **Build**: `npm run build` - Builds the frontend with Vite and bundles the backend with ESBuild
3. **Production**: `npm start` - Serves the built application
4. **Database**: Uses Neon Database (PostgreSQL) with connection via environment variables

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string for production database
- **NODE_ENV**: Environment flag for development/production modes
- **REPL_ID**: Replit-specific environment variable for development features

The application includes Replit-specific optimizations like runtime error overlays and development banners for enhanced development experience.