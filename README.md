# Developer Portfolio

A single-page developer portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion. The site presents profile information, skills, experience, education, competencies, and projects, with a responsive contact form backed by Firebase Firestore and EmailJS.

## Features

- Responsive portfolio layout for desktop and mobile screens
- App Router-based Next.js application
- Animated sections and transitions using Framer Motion
- Centralized portfolio content in [`lib/portfolioData.ts`](./lib/portfolioData.ts)
- Project cards defined in [`project.ts`](./project.ts)
- Contact form validation and submission throttling
- Contact submissions saved to the `contact-submissions` Firestore collection
- Email notifications sent through EmailJS
- Firebase Functions workspace under [`functions/`](./functions/)
- ESLint, TypeScript compilation, production-build, runtime, and data-contract checks

## Technology

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Framer Motion](https://motion.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Firebase Firestore](https://firebase.google.com/docs/firestore)
- [EmailJS](https://www.emailjs.com/)

## Requirements

- Node.js 24.12 or newer is recommended for the upgraded Firebase dependency tree
- npm
- A Firebase project with Firestore enabled
- An EmailJS service and email template if the contact form is enabled

The Firebase Functions workspace currently declares Node.js 22 in [`functions/package.json`](./functions/package.json), so its runtime should be upgraded and retested before changing that declaration. Until that work is complete, keep the Functions deployment aligned with Node.js 22 and use Node.js 24.12 or newer for the main application.

## Local setup

From the application directory:

```bash
cd nextjs-animated-portfolio-template
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production-style local run:

```bash
npm run build
npm start
```

## Environment variables

Copy [`.env.example`](./.env.example) to `.env.local` and fill in the Firebase web-app configuration:

```dotenv
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

The `NEXT_PUBLIC_` prefix is required because these values are read by the browser-side Firebase client in [`lib/firebase.ts`](./lib/firebase.ts).

The server-side Firebase Admin helper in [`lib/firebase-admin.ts`](./lib/firebase-admin.ts) expects these additional variables if it is used by a server route or function:

```dotenv
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

Do not commit `.env.local`, service-account credentials, private keys, or Firebase Admin credentials.

### EmailJS configuration

The contact component sends EmailJS requests from [`components/contact.tsx`](./components/contact.tsx). Configure the service ID, template ID, and public key in `.env.local`:

```dotenv
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

The EmailJS template must accept the `name`, `email`, `message`, and `time` parameters sent by the form.

## Updating portfolio content

Update the content files below without changing the component structure:

- [`lib/portfolioData.ts`](./lib/portfolioData.ts): profile, hero section, skills, competencies, experience, and education
- [`project.ts`](./project.ts): project titles, descriptions, technology lists, links, and images
- [`public/`](./public/): static images and other public assets
- [`app/layout.tsx`](./app/layout.tsx): page metadata and global layout

Keep project images inside `public/` and reference them with paths beginning with `/`, for example `/images/project.png`.

## Available commands

Run these commands from `nextjs-animated-portfolio-template/`:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js development server with Turbopack |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run portfolio data contract tests |

## Firebase Functions

The [`functions/`](./functions/) directory is a separate TypeScript Firebase Functions workspace. Run its commands from that directory:

```bash
cd functions
npm install
npm run build
npm run lint
npm test
```

Firebase deployment is configured in [`firebase.json`](./firebase.json). From the repository root, deploy the Functions workspace with:

```bash
firebase deploy --only functions
```

Before deploying, make sure Firebase CLI authentication, the selected Firebase project, Functions configuration, and Firestore security rules are set up for the target environment.

## Project structure

```text
app/             Next.js routes, layout, and global styles
components/      Portfolio UI sections and reusable components
functions/       Firebase Functions workspace
lib/             Firebase clients and centralized portfolio data
public/          Static assets
project.ts       Project data and project type
next.config.ts   Next.js configuration
eslint.config.mjs ESLint flat configuration
```

## Deployment notes

The application can be deployed to any platform that supports Next.js, such as Vercel or a Node.js hosting service. Configure the Firebase web variables and any EmailJS configuration in the deployment environment rather than committing them to the repository.

For Firebase Functions, use the Node.js version declared by the Functions workspace and run the configured predeploy checks:

```bash
cd functions
npm run lint
npm run build
```

## License

This project is licensed under the MIT License. See [`LICENSE`](./LICENSE).
