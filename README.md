# 🚀 SaaS Landing Page

<div align="center">
  
  ![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?style=for-the-badge&logo=next.js)
  ![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
  ![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-ff69b4?style=for-the-badge&logo=framer)

**A modern, animated SaaS landing page built with cutting-edge web technologies**

[🌟 Live Demo](#) | [📖 Documentation](#features) | [🚀 Quick Start](#getting-started)

</div>

---

## ✨ Features

### 🎨 **Modern Design System**

- **Responsive Layout**: Mobile-first design that looks perfect on all devices
- **Glass Morphism**: Beautiful backdrop blur effects and modern UI elements
- **Gradient Backgrounds**: Eye-catching radial and linear gradients
- **Typography**: Clean, readable fonts with perfect contrast ratios

### 🎭 **Advanced Animations**

- **Scroll-Triggered Animations**: Elements animate as you scroll using `useScroll` and `useTransform`
- **Infinite Smooth Scrolling**: Testimonials section with seamless bottom-to-top animation
- **3D Transform Effects**: Rotating and translating elements with parallax effects
- **Micro Interactions**: Hover states, button animations, and loading states

### 🧩 **Reusable Components**

- **Button Component**: Multiple variants (primary, secondary, outline, ghost) with loading states
- **Navigation**: Flexible nav component with customizable items and styling
- **Pricing Cards**: Animated pricing cards with "Most Popular" badge animation
- **Testimonial Cards**: Clean testimonial layout with user avatars
- **Logo Ticker**: Infinite horizontal scrolling company logos

### 🏗️ **Landing Page Sections**

1. **Header**: Sticky navigation with call-to-action banner
2. **Hero**: Compelling headline with animated 3D elements
3. **Logo Ticker**: Trusted by leading companies showcase
4. **Product Showcase**: Feature highlights with parallax images
5. **Pricing**: Three-tier pricing with animated popular badge
6. **Testimonials**: Infinite scrolling user reviews
7. **Call to Action**: Final conversion section with animated elements
8. **Footer**: Clean footer with social links and navigation

---

## 🛠️ Tech Stack

| Category       | Technology         | Purpose                            |
| -------------- | ------------------ | ---------------------------------- |
| **Framework**  | Next.js 15.3.4     | React framework with App Router    |
| **Language**   | TypeScript         | Type-safe development              |
| **Styling**    | Tailwind CSS 4.0   | Utility-first CSS framework        |
| **Animation**  | Framer Motion      | Production-ready motion library    |
| **Icons**      | Lucide React       | Beautiful, customizable icons      |
| **Font**       | Geist & Geist Mono | Modern, readable typography        |
| **Build Tool** | Turbopack          | Ultra-fast bundler for development |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/saas-landing-page.git
   cd saas-landing-page
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the landing page in action!

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page combining all sections
├── sections/               # Landing page sections
│   ├── Header.tsx         # Navigation and top banner
│   ├── Hero.tsx           # Main hero section with animations
│   ├── LogoTicker.tsx     # Infinite scrolling company logos
│   ├── ProductShowcase.tsx # Feature showcase with parallax
│   ├── Pricing.tsx        # Pricing tiers with animations
│   ├── Testimonials.tsx   # Infinite scrolling testimonials
│   ├── CallToAction.tsx   # Final conversion section
│   └── Footer.tsx         # Footer with links and social icons
├── components/             # Reusable UI components
│   ├── Button.tsx         # Versatile button component
│   ├── Nav.tsx           # Navigation component
│   ├── PricingCard.tsx   # Individual pricing card
│   ├── TestimonialCard.tsx # Individual testimonial card
│   └── *Examples.tsx     # Component usage examples
└── assets/                # Images and static assets
    ├── avatars/           # User profile images
    ├── logos/             # Company logos
    └── decorative/        # 3D elements and graphics
```

---

## 🎯 Key Animations

### 📜 **Infinite Testimonials Scroll**

```tsx
<motion.div
  animate={{ translateY: "-50%" }}
  transition={{
    duration: 40,
    ease: "linear",
    repeat: Infinity,
    repeatType: "loop",
  }}
>
  {/* Testimonials content */}
</motion.div>
```

### 🌀 **3D Parallax Elements**

```tsx
const translateY = useTransform(scrollYProgress, [0, 1], [400, -400]);
const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);

<motion.img
  style={{ translateY, rotateX, rotateZ: rotateY }}
  // ... other props
/>;
```

### 🎨 **Animated Gradient Text**

```tsx
<motion.span
  className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] text-transparent bg-clip-text"
  animate={{ backgroundPositionX: ["0%", "200%"] }}
  transition={{ duration: 3, repeat: Infinity }}
>
  Most Popular
</motion.span>
```

---

## 🎨 Customization

### **Colors & Themes**

The design system uses a carefully crafted color palette:

- **Primary**: `#000000` (Black)
- **Secondary**: `#001E80` (Deep Blue)
- **Accent**: `#183EC2` (Bright Blue)
- **Background**: `#FFFFFF` to `#D2DCFF` (Gradient)

### **Animation Timing**

All animations are tuned for optimal user experience:

- **Micro interactions**: 200ms
- **Page transitions**: 300ms
- **Infinite scrolls**: 40-70s for readability
- **Parallax effects**: Tied to scroll progress

### **Typography Scale**

- **Headings**: 3xl to 7xl (responsive)
- **Body**: lg to xl
- **Small text**: sm
- **Font weights**: 400 (normal) to 700 (bold)

---

## 📱 Browser Support

- ✅ **Chrome** 90+
- ✅ **Firefox** 88+
- ✅ **Safari** 14+
- ✅ **Edge** 90+
- ✅ **Mobile browsers** (iOS Safari, Chrome Mobile)

---

## 🚀 Deployment

### **Vercel (Recommended)**

```bash
npm install -g vercel
vercel
```

### **Netlify**

```bash
npm run build
# Upload /out directory to Netlify
```

### **Docker**

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Framer Motion** for incredible animation capabilities
- **Tailwind CSS** for the utility-first approach
- **Next.js** team for the amazing framework
- **Vercel** for hosting and deployment
- **Lucide** for beautiful icons

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with ❤️ by [MasudurSourav](https://github.com/masudursourav)

</div>
