# Car Blog

A modern car blog built with Next.js, featuring authentication and beautiful UI.

## Features

- 🔐 **Custom Authentication System** - Simple email/password login without external dependencies
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎨 **Modern UI** - Beautiful animations and smooth transitions
- 📝 **Blog Management** - View and read car-related blog posts
- 🔍 **Search Functionality** - Search through blog titles
- 🏷️ **Categories** - Browse blogs by different car categories
- 📊 **Car Specifications** - Detailed car specs for each post

## Authentication

The app uses a custom authentication system with the following demo credentials:

- **Email:** `abc@demo.com`
- **Password:** `123456789`

### How it works:

1. **Login Page** (`/login`) - Users can log in with email/password
2. **Protected Routes** - Blog pages require authentication
3. **Toast Notifications** - Users get feedback when trying to access protected content
4. **Persistent Sessions** - Login state persists across browser sessions

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── login/             # Login page
│   ├── allposts/          # All blog posts (protected)
│   ├── post/[id]/         # Individual blog post (protected)
│   └── ...
├── components/            # Reusable React components
│   ├── Toast.tsx         # Toast notification component
│   └── ...
├── contexts/             # React contexts
│   └── AuthContext.tsx   # Authentication context
├── api/                  # API functions
└── types/                # TypeScript type definitions
```

## Key Components

### Authentication Context (`src/contexts/AuthContext.tsx`)
- Manages user authentication state
- Provides login/logout functions
- Persists user data in localStorage

### Toast Component (`src/components/Toast.tsx`)
- Displays success, error, and info notifications
- Animated with Framer Motion
- Auto-dismisses after 5 seconds

### Protected Routes
- `/allposts` - All blog posts (requires login)
- `/post/[id]` - Individual blog posts (requires login)

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Toastify** - Toast notifications
- **Axios** - HTTP client

## Development

The authentication system is designed to be simple and extensible. In a production environment, you would:

1. Replace the hardcoded credentials with a real backend API
2. Add proper password hashing and security measures
3. Implement JWT tokens or session management
4. Add user registration functionality
5. Include password reset capabilities

## License

This project is open source and available under the [MIT License](LICENSE).
