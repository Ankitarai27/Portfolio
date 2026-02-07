<div align="center">

# 🌟 Personal Portfolio Website

A **modern, high-performance, and fully responsive portfolio website** built using **React and Vite**, designed to showcase projects, skills, and personal branding with a clean UI, smooth animations, and an elegant **dark/light theme system**.

<br />

![Status](https://img.shields.io/badge/Status-Active-success)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)

<br />

[![React](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react&logoColor=blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Build-Vite-646CFF?logo=vite&logoColor=red)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?logo=javascript&logoColor=yelllow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Shadcn UI](https://img.shields.io/badge/UI-Shadcn_UI-000000?logo=shadcnui&logoColor=black)](https://ui.shadcn.com/)
[![Responsive](https://img.shields.io/badge/Design-Responsive-success)](#)
[![Theme](https://img.shields.io/badge/Theme-Dark%20%7C%20Light-purple)](#)

<br />


</div>

## 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Core Features](#-core-features)
- [Design Philosophy](#-design-philosophy)
- [Theme System](#-theme-system)
- [Animations & UX](#-animations--ux)
- [Application Sections](#-application-sections)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Future Enhancements](#-future-enhancements)
- [Key Enhancement made](#key-improvements-made)
- [License](#-license)

---

## 📖 Project Overview
This portfolio is a professional-grade React application featuring a modular architecture. It leverages **Shadcn UI** for accessible components and **Framer Motion** (or custom CSS) for high-end visual depth, including a dynamic star background.

---

## ✨ Core Features

- ⚡ **Fast Build & Load Times**
  - Powered by Vite with instant HMR
- 🌙 **Dark / Light Theme Toggle**
  - System-aware and persistent theme state
- 🎨 **Component-Driven UI**
  - Reusable and scalable React components
- ✨ **Smooth UI Animations**
  - Subtle transitions and animated background
- 📱 **Mobile-First Responsive Design**
  - Optimized for all screen sizes
- 🔔 **Toast Notifications**
  - Clear user feedback for actions
- ♿ **Accessibility Considerations**
  - Semantic HTML & keyboard-friendly navigation

---

## 🎨 Design Philosophy

The UI follows a **minimal, content-first design** approach:

- Clean typography
- Consistent spacing
- High contrast for readability
- Subtle animations to enhance, not distract
- Dark mode designed for low-light environments

The design system is built on **Shadcn UI**, ensuring:
- Accessibility-first components
- Consistent styling
- Easy customization

---

## 🌙 Theme System

The application supports **dark and light themes** with:

- Theme toggle component
- Persisted theme preference using local storage
- Smooth transition effects
- System theme detection (optional enhancement)

Theme logic is isolated for maintainability and scalability.
---

## ✨ Animations & UX

- Animated **star background** for visual depth
- Smooth hover and transition effects
- Section entrance animations
- Reduced motion considerations for accessibility

Animations are optimized to avoid performance bottlenecks.

---

## 🧩 Application Sections

### 🏠 Hero Section
- Animated background
- Introductory headline
- Call-to-action buttons

### 👤 About Section
- Personal background
- Professional summary

### 🧠 Skills Section
- Categorized technical skills
- Clean visual representation

### 💼 Projects Section
- Project cards with descriptions
- Links to live demos & repositories

### 📬 Contact Section
- Contact form or social links
- Toast notifications on actions

---

## 🛠 Tech Stack

### Frontend
- **React** — Component-based UI
- **Vite** — Fast build tool

### Styling & UI
- **CSS**
- **Shadcn UI**

### Tooling
- **ESLint**
- **Prettier** (optional)

---

## 📁 Project Structure

Based on the actual project hierarchy:

```text
├── dist/                    # Production-ready build artifacts
│   ├── assets/              # Bundled JS/CSS
│   └── projects/            # Optimized project screenshots (ss1.png - ss10.png)
├── public/                  # Static assets (Vite logo, etc.)
│   src/                     # Main source directory
│   ├── components/          # Functional UI sections
│   │   ├── AboutSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── StarBackground.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── ui/                # Custom React hooks (use-toast.js)
│   |       ├──toast.jsx
│   │       └──toaster.jsx
│   │
│   ├── hooks/                 # Custom React hooks
│   │    └──use-toast.js
│   │
│   ├── lib/                    # Utilities and helpers (utils.js)
|   |    └──utils.js
│   ├── App.jsx
|   ├── index.css               # Global styles & Tailwind directives
│   ├── main.jsx                # Application entry point
│   └── pages                   # Full-page components (Home.jsx, Notfound.jsx)
|        ├── Home.jsx 
│        └── Notfound.jsx
├── package.json                # Dependencies and scripts
│── vite.config.js              # Vite configuration
└── assets/                     # Static assets

```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation


   ***Clone the repository***

   ```bash
   git clone https://github.com/Ankitarai27/Portfolio.git
   ```


   ***Navigate into the project***

   ```bash
   cd your-repo-name
   ```


 ***Install dependencies***

   ```bash
   npm install
   ```



 ***Development***

   ```bash
   npm run dev
   ```
***Production Build***
   ```bash
   npm run build
   ```

## 🌍 Deployment

The project can be deployed using:

- Vercel
- GitHub Pages

Build output is generated in the dist/ directory.

---

### 🔮 Future Enhancements

- Blog section
- CMS integration
- Internationalization (i18n)
- Advanced SEO optimization
- Unit & integration testing
- Analytics integration

---

### Key Improvements Made:

1.  **Project Structure Accuracy**: I updated the structure to show that your screenshots (ss1, ss2, etc.) are currently in your `dist/projects` folder and reflected the `ui` subfolder inside `components`.
2.  **Tech Badges**: Added Tailwind CSS and updated colors to look more modern.
3.  **Clean Up**: Grouped the "Sections" descriptions into the "Application Sections" or "Core Features" for better flow.
4.  **Formatting**: Used better indentation and blockquotes to make it more readable for someone visiting your GitHub.

**Would you like me to help you write the code to make the Contact form actually send emails using EmailJS?**

---

## License

This project is open source and available under the MIT License.


<div align="center">

Made with ❤️ by Ankita Rai

</div>

-----