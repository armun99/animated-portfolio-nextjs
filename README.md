# 🚀 Animated Portfolio - Next.js

A modern, fully animated portfolio website built with Next.js 14, featuring smooth page transitions, scroll-based animations, and an interactive brain SVG component. This portfolio showcases professional work with a beautiful, responsive design.

![Next.js](https://img.shields.io/badge/Next.js-14.1.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23.26-purple?style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.0-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎨 **Smooth Page Transitions** - Beautiful animated transitions between pages with a black overlay effect
- 🧠 **Interactive Brain Animation** - SVG brain component with rotating gears that respond to scroll position
- 📱 **Fully Responsive** - Mobile-first design that works perfectly on all devices
- 🎭 **Scroll-Based Animations** - Elements animate as they come into view using Framer Motion
- 📧 **Contact Form** - Integrated EmailJS for seamless contact form submissions
- 🌈 **Gradient Backgrounds** - Beautiful gradient backgrounds throughout the site
- 🎯 **Modern UI/UX** - Clean, professional design with smooth animations

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) - React framework with App Router
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations:** [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library
- **Email Service:** [EmailJS](https://www.emailjs.com/) - Client-side email service
- **Language:** JavaScript (ES6+)
- **Package Manager:** npm

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18+ 
- npm or yarn
- Git

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/armun99/animated-portfolio-nextjs.git
cd animated-portfolio-nextjs
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

**How to get EmailJS credentials:**
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Public Key from Account settings

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 5. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
next-animated-portfolio/
├── public/                 # Static assets (images, icons)
│   ├── latari.jpg
│   ├── arrow.png
│   └── social-media-icons/
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── portfolio/      # Portfolio page
│   │   ├── layout.js       # Root layout
│   │   ├── page.jsx        # Home page
│   │   └── globals.css     # Global styles
│   └── components/         # React components
│       ├── Navbar.jsx       # Navigation bar
│       ├── NavLink.jsx     # Navigation link component
│       ├── brain.jsx       # Animated brain SVG component
│       └── transitionProvider.jsx  # Page transition wrapper
├── .env.local              # Environment variables (not in git)
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Pages

### Home (`/`)
- Hero section with profile image
- Introduction and professional summary
- Call-to-action buttons

### About (`/about`)
- Biography section
- Skills showcase with scroll animations
- Experience timeline with animated entries
- Interactive brain SVG component (desktop only)

### Contact (`/contact`)
- Animated text effect
- Contact form with EmailJS integration
- Form validation and success/error states

### Portfolio (`/portfolio`)
- Portfolio showcase (ready for your projects)

## 🧩 Key Components

### `transitionProvider.jsx`
- Handles page transitions with AnimatePresence
- Manages scroll progress tracking
- Provides ScrollContext for scroll-based animations

### `brain.jsx`
- Complex SVG brain illustration
- Multiple rotating gears animated based on scroll position
- Uses Framer Motion's `useTransform` for smooth rotations

### `Navbar.jsx`
- Responsive navigation bar
- Mobile hamburger menu with smooth animations
- Active link highlighting

## 🎯 Key Features Explained

### Scroll-Based Animations
The portfolio uses `useInView` from Framer Motion to trigger animations when elements enter the viewport. The brain component rotates based on scroll progress using `useScroll` and `useTransform`.

### Page Transitions
Smooth black overlay transitions between pages using AnimatePresence and motion components, creating a professional feel.

### Responsive Design
Mobile-first approach with Tailwind CSS breakpoints:
- Mobile: Single column layout
- Tablet: Adjusted spacing
- Desktop: Two-column layout with brain animation

## 🔧 Configuration

### Tailwind CSS
Custom configuration in `tailwind.config.js` with scrollbar-hide plugin for clean scrollbars.

### EmailJS Setup
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Add your service credentials to `.env.local`
3. Configure your email template with variables: `from_name`, `from_email`, `message`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

Vercel will automatically:
- Detect Next.js framework
- Build and deploy your app
- Provide a production URL
- Enable automatic deployments on every push

### Other Deployment Options

- **Netlify** - Similar to Vercel, great for static sites
- **AWS Amplify** - For AWS infrastructure
- **Railway** - Simple deployment platform

## 🎨 Customization

### Change Colors
Edit gradient colors in `transitionProvider.jsx`:
```jsx
className="bg-gradient-to-b from-blue-100 to-red-100"
```

### Modify Animations
Adjust animation durations and easing in component files:
```jsx
transition={{ duration: 1.5, ease: "easeInOut" }}
```

### Update Content
- Edit page content in `src/app/[page]/page.jsx` files
- Update skills in `src/app/about/page.jsx`
- Modify experience timeline in the same file

## 🐛 Troubleshooting

### Brain Animation Not Working
- Ensure scroll container is properly set up in `transitionProvider.jsx`
- Check that `scrollYProgress` is being passed correctly
- Verify no conflicting scroll containers

### EmailJS Not Sending
- Verify environment variables are set correctly
- Check EmailJS service and template IDs
- Ensure Public Key is correct

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check Node.js version (requires 18+)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Arman Rezasefat**

- GitHub: [@armun99](https://github.com/armun99)
- LinkedIn: [Arman Rezasefat](https://www.linkedin.com/in/arman-rezasefat-363952214/)
- Instagram: [@arrmun99](https://www.instagram.com/arrmun99/)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Email service by [EmailJS](https://www.emailjs.com/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

⭐ If you like this project, please give it a star on GitHub!
