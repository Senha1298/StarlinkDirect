# Overview

This is a Starlink Direct-to-Cell marketing website built as a full-stack application. The project creates a funnel-style user experience that guides visitors through a questionnaire, device detection, location detection, and ultimately presents service plans. The application simulates the process of checking compatibility and selling Starlink satellite internet services with a focus on "no monthly fees" and global coverage messaging.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built with React and TypeScript using Vite as the build tool. The application follows a single-page application (SPA) pattern with client-side routing using Wouter. The UI is built with shadcn/ui components for consistent design and styling, utilizing Tailwind CSS for responsive layouts and dark theme support.

The application structure includes:
- **Component Library**: Comprehensive set of reusable UI components from shadcn/ui (buttons, forms, dialogs, etc.)
- **Custom Hooks**: Device detection, location detection, mobile responsiveness, and toast notifications
- **Page-based Routing**: Questionnaire → Device Detection → Location Detection → Loading → Offer flow
- **State Management**: React Query for server state and local React state for UI interactions
- **Animations**: Framer Motion for smooth transitions and interactive elements

## Backend Architecture
The server is built with Express.js and TypeScript, providing a RESTful API architecture. The backend serves both API endpoints and static assets, with separate development and production configurations.

Key backend features:
- **API Endpoints**: Health checks, location detection proxy, compatibility validation, and order processing
- **Development Setup**: Vite integration for hot module replacement and development tooling
- **Request Logging**: Comprehensive logging middleware for API requests with response tracking
- **Error Handling**: Centralized error handling middleware with proper status codes

## Data Storage Solutions
The application uses a dual storage approach:
- **Development Storage**: In-memory storage implementation for user data during development
- **Production Database**: Drizzle ORM configured with PostgreSQL for production deployments
- **Database Schema**: User management with username/password authentication structure
- **Migration System**: Drizzle Kit for database migrations and schema management

## Authentication and Authorization
Currently implements a basic user management system with:
- **User Schema**: Username and password-based authentication model
- **Storage Interface**: Abstracted storage layer supporting both memory and database implementations
- **Session Management**: PostgreSQL session store integration via connect-pg-simple

## External Service Integrations
- **Location Detection**: Integration with IP geolocation APIs (ipapi.co with ip-api.com fallback)
- **Neon Database**: Serverless PostgreSQL database for production data storage
- **Replit Platform**: Development environment integration with Replit-specific tooling and error handling