# Personal Portfolio 🚀

A fast, responsive, and modern personal portfolio website built to showcase my projects, skills, and experiences.

**Live Demo:** [www.yuvrajsahu.in](https://www.yuvrajsahu.in/)

---

## 🛠️ Tech Stack

This project is built using a lightweight and fast modern web stack:

* **Build Tool:** [Vite](https://vitejs.dev/)
* **Languages:** JavaScript, TypeScript, HTML, CSS
* **Environment:** Node.js

## ✨ Features

* **Modern UI/UX:** Clean, responsive design optimized for all screen sizes.
* **Fast Loading:** Bundled and optimized with Vite for lightning-fast performance.
* **Automated Image Processing:** Custom scripts (`convert-heic.mjs`, `check-photos.mjs`) to handle, convert, and manage high-efficiency image formats automatically.

## 📁 Project Structure

```text
├── public/                 # Static assets (images, fonts, etc.)
├── src/                    # Source files (JS/TS logic, CSS styles)
├── check-photos.mjs        # Script to validate/check photo assets
├── convert-heic.mjs        # Script to convert HEIC images to web-friendly formats
├── index.html              # Main HTML entry point
├── package.json            # Project dependencies and npm scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.js          # Vite build configuration




🚀 Getting Started
Follow these instructions to set up the project locally on your machine.

Prerequisites
Node.js (Version 16.x or higher recommended)

npm, yarn, or pnpm

Installation
1.Clone the repository:
git clone [https://github.com/Theonlyunknowncoder/portfolio.git](https://github.com/Theonlyunknowncoder/portfolio.git)
cd portfolio

2.Install dependencies:
npm install

3.Start the development server:
npm run dev
The site will be available at http://localhost:5173 (or the port specified by Vite).

Building for Production
To create a production-ready build:

 npm run build
The optimized files will be generated in the dist/ folder, ready to be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

📜 Custom Scripts
This project includes a few custom Node scripts for image optimization:

node convert-heic.mjs: Utility script designed to convert .heic images into standard web formats (like JPEG or PNG) for better browser compatibility.

node check-photos.mjs: Utility to manage and validate the photo directory.

🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

👤 Author
Yuvraj Sahu

GitHub: @Theonlyunknowncoder

Website: www.yuvrajsahu.in
