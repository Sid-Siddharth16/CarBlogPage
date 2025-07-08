# Car Blog

A modern car blog built with Next.js, featuring car reviews, tips, news, and more. Users can browse blog posts, search dynamically, and authenticate with Google, Facebook, or GitHub.

## Features
- Responsive design with mobile-first UI
- Dynamic search for blog posts
- Authentication (Google, Facebook, GitHub, and demo credentials)
- Protected routes: only logged-in users can access blogs and subscribe
- Toast notifications for actions and errors
- Newsletter subscription form
- Modern UI with Tailwind CSS

## Tech Stack
- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NextAuth.js (Auth.js)](https://authjs.dev/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)

## Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd car-blog
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env.local` file in the root directory and add your OAuth credentials:
```
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
FACEBOOK_CLIENT_ID=your-facebook-client-id
FACEBOOK_CLIENT_SECRET=your-facebook-client-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
NEXTAUTH_URL=http://localhost:3000
```

### 4. Run the development server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

## Authentication
- **Social login:** Google, Facebook, GitHub
- **Demo credentials:**
  - Email: `abc@demo.com`
  - Password: `123456789@Abc`
- Unauthenticated users are redirected to the login page when trying to access protected features.

## Usage Notes
- Only authenticated users can access the Blogs page or subscribe to the newsletter.
- Toast notifications provide feedback for login, logout, and restricted actions.
- The UI is fully responsive and works well on mobile and desktop.

## License
This project is for educational/demo purposes.
