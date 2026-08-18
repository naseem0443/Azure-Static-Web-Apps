# Apex Solutions Enterprise Website

A high-performance, responsive React 18 frontend website optimized for deployment on Azure Static Web Apps Standard. This application serves as a corporate landing portal featuring services, about profile, and a validation-protected, mockable Contact Form prepared to integrate with a future Azure Function API endpoint `/api/contact`.

---

## 1. Project Overview
Apex Solutions is a modern enterprise web portal designed with a mobile-responsive, dark-themed, and glassmorphic UI. Built without heavy CSS framework dependencies, it achieves maximum performance using Vanilla CSS3 variables, custom SVGs, and modular React hooks.

---

## 2. Architecture
The project is built on the following stack:
- **Client Library**: React 18+ (Single Page Application)
- **Tooling**: Vite (ESM-based bundler and fast dev server)
- **Routing**: React Router v6 (using client-side `BrowserRouter`)
- **Styling**: Modern Vanilla CSS with HSL properties, Grid, and Flexbox layouts.
- **Testing**: Vitest + JSDOM + React Testing Library (for unit testing and form validation checks)
- **Azure Integration**: Optimized configuration via `staticwebapp.config.json` supporting client-side routing fallbacks, MIME mapping, and security headers.

### Directory Structure
```
/
├── public/                 # Static assets (Favicons, shared SVGs)
├── src/
│   ├── assets/             # Brand images and assets
│   ├── components/         # Reusable UI components (Navbar, Footer, Button, Loading, etc.)
│   ├── hooks/              # Custom React hooks (SEO metadata controls)
│   ├── pages/              # Routing pages (Home, About, Services, Contact, NotFound)
│   ├── services/           # Client API services (Contact form client)
│   ├── utils/              # Data models and validation logic
│   ├── App.jsx             # Root layout and client-side routing definitions
│   ├── index.css           # Global stylesheet and responsive design system tokens
│   ├── main.jsx            # Entry point rendering App root
│   └── setupTests.js       # Test runner configuration overrides
├── .env.example            # Environment variables placeholder
├── eslint.config.js        # ESLint flat config
├── staticwebapp.config.json# Azure Static Web Apps hosting config
├── vite.config.js          # Vite config bundling and vitest setup
└── package.json            # Scripts, dependencies, and build chains
```

---

## 3. Prerequisites
Ensure you have the following installed:
- **Node.js**: v18.0.0 or later (v20+ recommended)
- **npm**: v9.0.0 or later

---

## 4. Local Installation
Follow these commands to clone and set up the codebase:

1. Extract/clone project files in your workspace directory.
2. Initialize environment parameters by copying example file:
   ```bash
   cp .env.example .env
   ```
3. Install package dependencies:
   ```bash
   npm install
   ```

---

## 5. Development Commands
Launch the local Hot Module Replacement (HMR) dev server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

Run automated ESLint code checks:
```bash
npm run lint
```

Run unit tests in Vitest:
```bash
npm run test
```

---

## 6. Production Build Commands
Compile and bundle the project files:
```bash
npm run build
```
This command compiles and outputs static SPA assets inside the `/dist` directory. You can test the built assets locally using:
```bash
npm run preview
```

---

## 7. Environment Variables
Local dev behaviors are configured using standard Vite prefix rules. See `.env.example`:
- `VITE_API_BASE_URL`:
  - `mock`: Bypasses backend services and simulates network latency (1.5s) and submission logic locally.
  - `http://localhost:7071`: Directs requests to a locally running Azure Functions Core Tools port.
  - Leave empty (undefined) in production to request relatively against `/api/contact` on the same domain.

---

## 8. Azure Static Web Apps Deployment
Azure Static Web Apps separates static client-side asset serving from optional API endpoints.
1. The build asset source folder is set to `dist`.
2. The `staticwebapp.config.json` file configures SPA fallback rules ensuring that accessing `/about` or `/contact` directly doesn't throw a HTTP 404 from Azure's reverse proxies.

---

## 9. Contact API Architecture
The contact form submits JSON payloads relatively to `/api/contact` (POST):
```json
{
  "name": "Full Name",
  "email": "user@example.com",
  "phone": "+1 (206) 555-0100",
  "company": "Acme Corp",
  "subject": "Services Inquiry",
  "message": "Project description..."
}
```
Client-side integrations are isolated inside `src/services/contactService.js`. When deploying to Azure SWA, this endpoint naturally maps to a corresponding Azure Function configured inside your API folder in the repository.

---

## 10. GitHub Actions Deployment Explanation
When you link this repository to Azure Static Web Apps, Azure automatically commits a YAML deployment workflow to `.github/workflows/`.
Key workflow actions:
- Monitors changes targeting the production branch (e.g. `main`).
- Triggers a build action on pull requests or commits.
- Uses `Azure/static-web-apps-deploy` Action.
- Required configurations inside the workflow:
  - `app_location`: `"/"` (Vite app root)
  - `api_location`: `"api"` (or your backend Azure Functions directory)
  - `output_location`: `"dist"` (Location of build files relative to app_location)
  - `repo_token`: `${{ secrets.GITHUB_TOKEN }}`
  - `azure_static_web_apps_api_token`: `${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN_... }}`
