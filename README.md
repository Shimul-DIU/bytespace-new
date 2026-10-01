# ByteSpace New

A modern and responsive online learning platform landing page built with **Next.js, TypeScript, and Tailwind CSS**, based on the provided Figma design.

## 🔗 Project Links

* **Live Demo:** https://bytespace-new-lilac-sigma.vercel.app
* **GitHub Repository:** https://github.com/Shimul-DIU/bytespace-new
* **Figma Design:** https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website
* **Development Branch:** `feature/landing-page`

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
├── .next/
├── .vercel/
├── node_modules/
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
├── .env.local
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
└── package.json
```

> **Note:** `.next`, `.vercel`, and `node_modules` are generated/local directories and should not normally be committed to Git.

---

## 🎨 Design System

The project follows the typography and visual direction provided in the Figma design.

### Fonts

**Clash Display**

Used primarily for prominent headings and display text.

```text
Clash Display Bold
Clash Display Regular
```

**Satoshi**

Used primarily for body text and supporting UI content.

```text
Satoshi Medium
Satoshi Regular
```

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

Open:

```text
http://localhost:3000
```

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

For a new deployment:

```bash
npx vercel --prod
```

---

## 🔀 Git Workflow

The main implementation work is maintained on:

```text
feature/landing-page
```

Typical workflow:

```bash
git checkout feature/landing-page

git add .

git commit -m "feat: implement ByteSpace landing page"

git push origin feature/landing-page
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

The project uses reusable React components instead of placing the entire UI inside a single page.

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

This structure makes individual sections easier to maintain, reuse, and update.

---

## 🎯 Assessment Implementation

This project was developed as a frontend implementation based on the provided ByteSpace Figma design.

The implementation focuses on:

* Accurate UI implementation
* Responsive behavior
* Reusable components
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
