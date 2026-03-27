# Agile Flow Frontend Skeleton

This folder contains the **frontend skeleton** for the Agile Flow project, built with **React + Vite** and **TailwindCSS**, with routing handled by **React Router DOM**.

Notes: API integration is not yet implemented; use the src/api/api.js helper for future requests.
Team members should always pull before starting work to avoid conflicts!

This is a starting point for the frontend. Pages included:

- Landing Page
- Dashboard
- Current User
- Login
- Signup

---

## Table of Contents

1. [Getting Started](#getting-started)  
2. [Project Structure](#project-structure)  
3. [Running Locally](#running-locally)  
4. [Recommended Workflow](#recommended-workflow)  
5. [Common Commands](#common-commands)

---

## Getting Started

These instructions will help any team member sync the frontend branch and get the project running locally.

**Prerequisites:**

- Node.js (v18+ recommended)
- npm (comes with Node.js)
- Git
- SSH key configured with GitHub (recommended for push/pull)

---

## Project Structure
agile-flow/front-end/
├── public/ # Static files
├── src/
│ ├── api/ # API helpers
│ ├── assets/ # Images and icons
│ ├── components/ # React components (Navbar, etc.)
│ ├── pages/ # Page components (Landing, Dashboard, etc.)
│ ├── App.jsx # Main React component
│ ├── index.css # Tailwind + global styles
│ └── main.jsx # ReactDOM entry point
├── package.json # Project dependencies and scripts
├── tailwind.config.js # TailwindCSS configuration
├── postcss.config.js # PostCSS configuration
└── vite.config.js # Vite config


---

## Running Locally

1. **Clone the repository** (use SSH for write access):

```bash
git clone git@github.com:Agile9-3308/3308GroupProject.git
cd 3308GroupProject

2. Switch to the frontend branch:
```bash
git checkout esFrontendMockUp

3. Install dependencies:
```bash
cd front-end
npm install

4. Start the development server:
```bash
npm run dev

5. Open the browser at the URL shown in the terminal (http://localhost:5173).

You should see Agile Flow Running with the placeholder pages.


Recommended Workflow For other developers syncing this branch:
1. Pull the latest changes from remote:
git checkout esFrontendMockUp
git pull origin esFrontendMockUp

2. Make your changes in a new feature branch:
git checkout -b feature/<your-feature-name>

3. Stage, commit, and push your changes:
git add .
git commit -m "Add <feature-name> feature"
git push -u origin feature/<your-feature-name>

4. Open a pull request to merge into esFrontendMockUp.



