RESUMIZ: AI Resume Analyzer
Tech Stack: React · React Router v7 · TypeScript · Tailwind CSS · Zustand · Vite · Puter.js
Deployed on: Vercel
Authentication & Storage: Puter.js
Architecture: Serverless · Full-stack React

🔍 Overview
Resumiz is a modern, responsive web app that helps users assess how well a resume aligns with a job description. Users can upload their resumes, optionally provide job title and description, and instantly receive match scores with feedback.

Whether you're a recruiter or a job seeker, Resumiz streamlines the process of evaluating resumes for relevance and quality—making job applications and hiring decisions faster and more informed.

🚀 Features
Simple, secure authentication using Puter.js—no backend or API server required.

Resume uploads directly to the user's Puter cloud storage.

LLM-based resume matching, powered by Claude and GPT (via Puter SDK integration).

Modular, reusable UI components built with React and Tailwind CSS.

Responsive design for seamless use across desktops, tablets, and phones.

Client-side routing with React Router v7, ready for server-side rendering (SSR).

Global state management using Zustand with minimal boilerplate.

Modern dev workflow powered by Vite for fast builds and hot-module reloading.

🛠 How It Works
Users log in with Puter.js (no external sign-up process required).

Resume files are securely uploaded and stored in the user's cloud.

Job info can optionally be entered.

Match score and feedback are returned using integrated language models (LLMs).

Users can view, update, or delete uploaded resumes.

📦 Deployment
The project is deployed on Vercel, offering a globally fast and reliable frontend experience.
Authentication, storage, and AI features are all handled via Puter.js, keeping the app entirely serverless.
