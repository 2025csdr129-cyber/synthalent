# Synthalent 🚀

> **AI-Powered Content Creator Marketplace & Dynamic Creative Ecosystem**

Synthalent is a next-generation, prompt-driven marketplace that bridges the gap between AI-native creators (animators, prompt engineers, digital artists) and enterprise brands[cite: 1]. It streamlines discovery, brief generation, and project execution through secure server-side AI integrations and robust access controls.

---

## 🌟 Key Features

* **Role-Based Access Guards:** Strict route protection and customized workspace views tailored specifically for "Creators" versus "Brands"[cite: 1].
* **Interactive Discovery Grid:** Responsive portfolio cards, advanced search parameters, multi-criteria filtering, and smooth modal profiles[cite: 1].
* **Prompt-to-Brief Engine:** Natural language text input that automatically generates structured project scopes, dynamic ETAs, and technical requirements[cite: 1].
* **Secure State Management:** Zustand integration for persistent sign-in sessions, marketplace filtering, search queries, active briefs, and live notifications[cite: 1].
* **Secure Server-Side LLM:** Configured to handle Groq API credentials securely on the server with resilient fallback mock generators[cite: 1].
* **UI/UX Resilience:** Built-in error boundaries, loading skeletons, thorough form validation, and fully responsive mobile navigation drawers[cite: 1].

---

## 🛠️ Tech Stack

* **Frontend:** React, Vite, Tailwind CSS, Lucide Icons[cite: 1]
* **State Management:** Zustand[cite: 1]
* **Routing:** React Router DOM
* **AI Integration:** Groq API / Server-side LLM handlers[cite: 1]
* **Quality Assurance:** ESLint, TypeScript[cite: 1]

---

## ⚙️ Getting Started & Installation

Follow these steps to set up and run the project locally in your development environment:

### 1. Clone the Repository
```bash
git clone [https://github.com/your-username/synthalent.git](https://github.com/your-username/synthalent.git)
cd synthalent


npm install
cp .env.example .env
npm run dev
# Run production build compilation check
npm run build

# Run code linting
npm run lint
synthalent/
├── dist/                # Production build output
├── node_modules/        # Project dependencies
├── public/              # Static assets & favicons
├── src/
│   ├── components/      # UI components & feature modules
│   ├── store/           # Zustand state stores
│   ├── App.tsx          # Main application router & layout
│   └── main.tsx         # Application entry point
├── .env.example         # Environment variables template
├── .oxlintrc.json       # Linter configuration
├── package.json         # Project dependencies & scripts
└── README.md            # Project documentation

