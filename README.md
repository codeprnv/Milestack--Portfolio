# 🚀 Milestack Portfolio

Hi, I'm Pranav 👋 and this is **Milestack** — my personal 3D portfolio project. It's a high-end, visually immersive, and interactive web experience built with **React**, **Three.js**, **GSAP**, and **Tailwind CSS**, powered by **Vite** for blazing-fast performance. I created this to showcase my skills, projects, and personal brand in a creative and modern way.

---

## 📸 Homepage Preview

![Milestack Homepage](https://raw.githubusercontent.com/codeprnv/Milestack--Portfolio/master/assets/screenshots/homepage.png)

---

---

## 🧰 Features

- 🌐 Fully responsive and interactive UI
- 🧠 Modular React component architecture
- 🎨 Styled with Tailwind CSS for rapid UI development
- 🧱 Reusable 3D models using **@react-three/fiber** and **drei**
- ⚙️ Smooth scroll animations and motion effects using **GSAP**
- 🚀 Integrated Express backend for email handling

---

---

## 📂 Project Structure

```
milestack/
├── assets/                    # Global assets like images/screenshots
├── Client/                     # Frontend (React + Vite)
│   ├── dist/                   # Build output (ignored in .gitignore)
│   ├── node_modules/           # Node.js dependencies (ignored in .gitignore)
│   ├── public/                 # Public assets (e.g., images, models)
│   ├── src/                    # Source code
│   │   ├── components/         # Reusable React components
│   │   │   ├── Models/         # 3D models and related components
│   │   │   │   ├── Contact/    # Contact-related 3D models
│   │   │   │   ├── HeroModels/ # Hero section 3D models
│   │   │   │   ├── TechLogos/  # Tech stack 3D logos
│   │   ├── constants/          # Static data and constants
│   │   ├── sections/           # Page sections (e.g., Hero, Projects, Contact)
│   │   ├── App.jsx             # Main app component
│   │   ├── main.jsx            # Entry point for React
│   │   ├── index.css           # Global styles (includes Tailwind CSS)
│   ├── .env                    # Environment variables
│   ├── .gitignore              # Git ignore rules
│   ├── index.html              # HTML entry point
│   ├── package.json            # Project metadata and dependencies
│   ├── postcss.config.js       # PostCSS configuration
│   ├── tailwind.config.js      # Tailwind CSS configuration
│   ├── vite.config.js          # Vite configuration
│   ├── README.md               # Project documentation
├── Server/                     # Backend (Express.js)
│   ├── api/                    # API routes
│   │   ├── email.js            # Email API route
│   ├── .env                    # Environment variables
│   ├── index.mjs               # Main server file
│   ├── package.json            # Project metadata and dependencies
├── README.md                   # Root project documentation
```

---

---

## 🛠️ Tech Stack

- **React** – Frontend library
- **Vite** – Build tool for fast development
- **Three.js + @react-three/fiber** – 3D rendering
- **Tailwind CSS** – Styling
- **GSAP** – Scroll-triggered and smooth animations
- **Express.js** – Backend server (for contact APIs)
- **Resend API** – Email handling

---

---

## 🚀 Getting Started

### 📦 Installation

```bash
git clone https://github.com/codeprnv/Milestack--Portfolio.git
cd Milestack---Portfolio/Client
npm install
```

### 💻 Development Server (Frontend)

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view the frontend in your browser.

### 🚀 Running Backend (Server)

```bash
cd ../Server
npm install
node index.mjs
```

Make sure to set your Resend or EmailJS API key in the `.env` file.

---

---

## 📄 .env Configuration

### Server `.env` file
```
RESEND_API_KEY=your_resend_api_key
PORT=5000
```

> ⚠️ Do not share your `.env` file or commit it to version control. Keep these values secret.

---

---

## 📂 Key Files Overview

- `App.jsx`: Main root component
- `main.jsx`: App entry point
- `components/`: UI components & 3D model elements
- `sections/`: Hero, About, Projects, Contact, etc.
- `constants/`: Static content and reusable data
- `tailwind.config.js`: Tailwind customizations
- `vite.config.js`: Vite build configuration
- `Server/api/email.js`: Email handler API route

---

---

## ✨ Customize & Showcase

This portfolio is fully customizable. Update the 3D models, `constants`, and visual sections with your personal branding and content.

---

---

## 🙋‍♂️ Author

Built with ❤️ by [@codeprnv](https://github.com/codeprnv)

---

## 📝 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

