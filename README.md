# ByteSpace New

A modern and responsive online learning platform built with **Next.js, TypeScript, and Tailwind CSS**, based on the provided Figma design.

## 🔗 Project Links

* **Live Demo:** https://bytespace-new-lilac-sigma.vercel.app
* **GitHub Repository:** https://github.com/Shimul-DIU/bytespace-new
* **Figma Design:** https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website

---

## 📌 About The Project

ByteSpace New is a responsive e-learning website developed from a provided Figma design.

The project focuses on:

* Clean and reusable component architecture
* Responsive layouts for desktop, laptop, tablet, and mobile
* Modern typography and visual hierarchy
* Reusable UI components
* Course-related pages and sections
* Authentication pages
* Creator and learning-related pages

---

## 🚀 Features

### Landing Page

* Responsive navigation bar
* Hero section
* Brand/company strip
* Course introduction
* Course categories
* Course grid
* Learning paths
* Growth section
* Testimonials
* Call-to-action section
* Responsive footer

### Course Pages

* Courses page
* Course details page
* Course lessons page
* Course reviews page

### Other Pages

* Creator page
* Login page
* Signup page
* Custom 404 / Not Found page

---

## 🛠️ Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### UI & Icons

* Lucide React
* Custom reusable UI components

### Fonts

* Clash Display
* Satoshi

### Deployment

* Vercel

---

## 📁 Project Structure

```text
bytespace-new/
│
├── public/
│
├── src/
│   │
│   ├── app/
│   │   ├── course-details/
│   │   ├── course-lessons/
│   │   ├── course-reviews/
│   │   ├── courses/
│   │   ├── creator/
│   │   ├── login/
│   │   ├── signup/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   │
│   └── components/
│       │
│       ├── sections/
│       │   ├── BrandStrip.tsx
│       │   ├── CallToAction.tsx
│       │   ├── CourseCategories.tsx
│       │   ├── CourseGrid.tsx
│       │   ├── CourseIntro.tsx
│       │   ├── Footer.tsx
│       │   ├── GrowthSection.tsx
│       │   ├── Hero.tsx
│       │   ├── LearningPaths.tsx
│       │   ├── Navbar.tsx
│       │   └── Testimonials.tsx
│       │
│       ├── ui/
│       │   ├── Button.tsx
│       │   ├── FloatingCard.tsx
│       │   └── TestimonialCard.tsx
│       │
│       └── fonts/
│           ├── ClashDisplay-Bold.woff2
│           ├── ClashDisplay-Regular.woff2
│           ├── Satoshi-Medium.woff2
│           └── Satoshi-Regular.woff2
│
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
└── README.md
```

> **Note:** `.next`, `.vercel`, `node_modules`, and `.env.local` are local/generated files and should not be committed to the repository.

---

## 🎨 Design System

The project follows the typography and visual direction provided in the Figma design.

### Clash Display

Used primarily for prominent headings and display text.

* Clash Display Bold
* Clash Display Regular

### Satoshi

Used primarily for body text and supporting UI content.

* Satoshi Medium
* Satoshi Regular

---

## 💻 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Shimul-DIU/bytespace-new.git
```

### 2. Navigate to the project

```bash
cd bytespace-new
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## 📦 Available Scripts

### Development

```bash
npm run dev
```

Runs the development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Start Production Server

```bash
npm run start
```

Starts the production server after building the project.

### Lint

```bash
npm run lint
```

Checks the project for linting issues.

---

## 🌐 Deployment

The project is deployed using **Vercel**.

### Production

https://bytespace-new-lilac-sigma.vercel.app

To create a production deployment:

```bash
npx vercel --prod
```

---

## 📱 Responsive Design

The website is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

Responsive behavior is implemented using Tailwind CSS responsive utilities and flexible layouts.

---

## 🧩 Component Architecture

The project uses reusable React components to keep the application maintainable and scalable.

### Section Components

Located in:

```text
src/components/sections/
```

Examples:

* `Hero.tsx`
* `Navbar.tsx`
* `CourseGrid.tsx`
* `Testimonials.tsx`
* `LearningPaths.tsx`
* `Footer.tsx`

### UI Components

Located in:

```text
src/components/ui/
```

Examples:

* `Button.tsx`
* `FloatingCard.tsx`
* `TestimonialCard.tsx`

This structure keeps individual sections and UI elements modular and reusable.

---

## 🎯 Project Goals

The implementation focuses on:

* Accurate Figma-to-code implementation
* Responsive UI
* Reusable React components
* Clean project structure
* Custom typography
* Course-related page structure
* Authentication page structure
* Production deployment

---

## 👨‍💻 Author

**Md. Shimul Mia**

Frontend Developer | React Developer | Next.js Developer

* GitHub: https://github.com/Shimul-DIU
* LinkedIn: https://www.linkedin.com/in/md-shimul-71a4b331/
* Portfolio: https://shimulportfolio.netlify.app/

---

## 📄 License

This project was created for frontend development and assessment purposes.
