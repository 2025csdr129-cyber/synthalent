# Synthalent 🚀

> **AI-Powered Content Creator Marketplace & Dynamic Creative Ecosystem**

Synthalent is a next-generation, prompt-driven marketplace built to bridge the gap between AI-native creators (animators, prompt engineers, digital artists) and enterprise brands. It streamlines portfolio discovery, brief generation, and collaborative execution through secure server-side AI integrations and robust client-side access controls.

---

### 🌐 Quick Access & Deployment
* **Live Production URL:** [https://synthalent.vercel.app](https://synthalent.vercel.app)
* **Instant One-Click Deploy:** 

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/2025csdr129-cyber/synthalent)

---

## 🏗️ Core Architecture & Tech Stack

* **Frontend Framework:** React, Vite, Tailwind CSS, Lucide Icons
* **State Management:** Zustand (persistent sign-in sessions, active filters, search queries, active briefs, and live notifications)
* **Routing & Guards:** React Router DOM with client-side access control for role-based views
* **AI Integration:** Secure server-side Groq LLM API integration with robust local fallback mock generators
* **Quality Assurance:** Built and tested with strict TypeScript checks and ESLint linting rules (`npm run build`, `npm run lint`)

---

## 🌟 Key Features & Modules

1. **Role-Based Access Guards:** 
   * Strict route protection and customized workspace views tailored specifically for "Creators" versus "Brands".
2. **Interactive Discovery Grid:** 
   * Responsive portfolio cards, advanced search parameters, multi-criteria filtering, and smooth modal profiles.
3. **Prompt-to-Brief Engine:** 
   * Natural language text input that automatically parses intents to generate structured project scopes, dynamic ETAs, and technical requirements.
4. **Secure Server-Side AI Routing:** 
   * Decouples API keys (like Groq credentials) from client execution to ensure enterprise-grade security.
5. **UI/UX Resilience:** 
   * Built-in error boundaries, loading skeletons, thorough form validation, and fully responsive mobile navigation drawers.

---

🗺️ Future Roadmap
Database Integration: Implementation of live PostgreSQL/MongoDB persistence layers.

Real-Time Collaboration: Real-time messaging and collaborative brief-editing workspaces.

Containerized Deployment: Dockerized configuration optimized for cloud serverless and Vercel hosting.

## ⚙️ Getting Started & Local Setup

Follow these steps to clone, configure, and run the project locally in your development environment:

### 1. Clone the Repository
```bash
git clone [https://github.com/2025csdr129-cyber/synthalent.git](https://github.com/2025csdr129-cyber/synthalent.git)
cd synthalent
## install the requirements
npm install
cp .env.example .env
npm run dev

# Run production build compilation check
npm run build

# Run code style and syntax linting
npm run lint

synthalent/
├── dist/                # Production build distribution output
├── node_modules/        # Project dependencies
├── public/              # Static assets, icons, and favicons
├── src/
│   ├── components/      # UI components, discovery grid, and brief generators
│   ├── store/           # Zustand state persistence stores
│   ├── App.tsx          # Main application router and core layout
│   └── main.tsx         # Application entry point
├── .env.example         # Environment variables configuration template
├── .oxlintrc.json       # Linter configuration rules
├── package.json         # Project dependencies and script runner configurations
└── README.md            # Project documentation

##USE BELOW LINK FOR DEPLOYMENT##
https://synthalent.vercel.app/
