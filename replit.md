# Overview

This is a professional consulting website built for Faith Mundia, an EdTech Strategy & AI Learning Consultant. The platform serves as a comprehensive business showcase featuring consultation services, strategic advisory offerings, and freelance project capabilities. It's designed to help institutions, EdTech startups, and global organizations connect with consulting services for learning innovation, AI in education, and instructional design.

The application presents a modern, professional web presence with service offerings across three tiers: Individual/Educator packages, Startup/Small Team solutions, and Enterprise/Institutional consulting. It includes a contact form system for consultation requests with automated email notifications.

# User Preferences

Preferred communication style: Simple, everyday language.

# Recent Changes

## Contact Information Updates (January 2025)
- Updated email address to consult@faithmundia.co.ke for all consultation requests
- Added LinkedIn profile link: https://www.linkedin.com/in/faithmundia/
- Added newsletter subscription link: https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7083044175432007680
- Added Fay Institute website link: https://fayinstitute.co.ke
- All external links now open in new tabs for better user experience

## "Learn More" Content System (January 2025)
- Added comprehensive modal content for each client type in "Who I Work With" section
- Created detailed information including challenges, solutions, outcomes, and case studies
- Implemented interactive modal system with keyboard and backdrop close functionality
- Each modal includes specific success stories with real metrics and call-to-action buttons

## Mobile Responsiveness Implementation (January 2025)
- Complete mobile responsive design implemented across all platform sections
- Added mobile navigation with hamburger menu for optimal mobile UX
- All forms, buttons, and interactive elements optimized for mobile devices
- Text sizing restored to original impactful desktop sizes while maintaining mobile scaling
- Platform now fully functional and visually appealing on desktop, tablet, and mobile devices
- Submit button overflow issue resolved with responsive width constraints

## Production Deployment Configuration (January 2025)
- SMTP email system fully configured with Faith's mail server (mail.faithmundia.co.ke)
- Environment variables properly set for secure production deployment
- PostgreSQL database provisioned and configured for production data persistence
- Build process verified - both frontend and backend compile successfully for production
- Email notifications tested and working for consultation requests
- Platform ready for immediate deployment on Replit

# System Architecture

## Frontend Architecture
The application uses a modern React-based architecture with TypeScript:
- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Framework**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **Build Tool**: Vite for fast development and optimized builds

The frontend follows a component-based architecture with reusable UI components and a clean separation between presentation and business logic. The application is structured as a single-page application with smooth scrolling navigation.

## Backend Architecture
The backend implements a RESTful API using Node.js and Express:
- **Runtime**: Node.js with ES modules
- **Framework**: Express.js for HTTP server and routing
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Validation**: Zod schemas for runtime type validation
- **Email Service**: Nodemailer for automated email notifications

The server uses middleware for request logging, JSON parsing, and error handling. It follows a layered architecture with clear separation between routes, business logic, and data access.

## Data Storage Solutions
The application uses PostgreSQL as the primary database:
- **Database**: PostgreSQL with connection via Neon serverless
- **ORM**: Drizzle ORM for schema definition and migrations
- **Schema**: Structured tables for users and consultation requests
- **Development Storage**: In-memory storage implementation for development/testing

The data layer includes both persistent PostgreSQL storage and an in-memory storage adapter, allowing for flexible deployment and testing scenarios.

## Form Handling and Validation
Form management uses a comprehensive validation approach:
- **Form Library**: React Hook Form for form state management
- **Validation**: Zod schemas shared between frontend and backend
- **User Experience**: Real-time validation feedback with toast notifications
- **Data Flow**: Type-safe data transfer with shared TypeScript interfaces

## Development and Build Process
The project supports both development and production environments:
- **Development**: Hot module replacement with Vite dev server
- **Build Process**: Separate builds for client (Vite) and server (esbuild)
- **TypeScript**: Strict type checking across the entire codebase
- **Code Organization**: Monorepo structure with shared schemas and utilities

# External Dependencies

## Database Service
- **Neon Database**: Serverless PostgreSQL hosting for production data storage
- **Connection**: Uses connection pooling via @neondatabase/serverless driver

## Email Service
- **SMTP Provider**: Configurable SMTP service (defaults to Gmail SMTP)
- **Nodemailer**: Email sending library for consultation request notifications
- **Configuration**: Environment-based SMTP credentials and settings

## UI and Styling
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom theme configuration
- **Lucide Icons**: Modern icon library for consistent iconography
- **Google Fonts**: Web fonts including Inter, Architects Daughter, DM Sans, and Geist Mono

## Development Tools
- **TypeScript**: Static type checking and enhanced developer experience
- **Vite**: Fast build tool with hot module replacement
- **React Query**: Server state management and caching
- **React Hook Form**: Form handling with validation integration

## Deployment Platform
- **Replit Integration**: Configured for Replit deployment with development enhancements
- **Environment Variables**: Support for database URLs, SMTP configuration, and notification settings