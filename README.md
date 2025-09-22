# Animated Next.js Developer Portfolio Template

A modern, animated, and easily customizable developer portfolio built with Next.js, Tailwind CSS, and Framer Motion. Includes a functional contact form powered by EmailJS and Firebase (Firestore).

![Portfolio Screenshot](./public/images/screenshot.png) 
*You should replace this with a screenshot of your own finished portfolio!*

**View the Live Demo:** [https://your-live-demo-url.com](https://your-live-demo-url.com)

---

## ✨ Features

* **Modern Tech Stack:** Built with the latest **Next.js 14** (App Router) & **TypeScript**.
* **Styled with Tailwind CSS:** A utility-first CSS framework for rapid, consistent styling.
* **Functional Contact Form:**
    * Sends emails directly to your inbox using **EmailJS**.
    * Saves form submissions to a **Firebase Firestore** database.
* **Smooth Animations:** Engaging user experience with page-load and on-scroll animations powered by **Framer Motion**.
* **Easy to Customize:** All portfolio data (projects, experience, etc.) is managed in a single, central file. No need to dig through components.
* **Responsive Design:** Looks and works great on all devices, from mobile phones to desktops.

## 🛠️ Tech Stack

* [Next.js](https://nextjs.org/) – React Framework
* [TypeScript](https://www.typescriptlang.org/) – Strongly Typed JavaScript
* [Tailwind CSS](https://tailwindcss.com/) – CSS Framework
* [Framer Motion](https://www.framer.com/motion/) – Animation Library
* [Firebase (Firestore)](https://firebase.google.com/) – Database for Contact Form
* [EmailJS](https://www.emailjs.com/) – Email Service for Contact Form

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### 1. Prerequisites

Make sure you have Node.js (version 18.17 or later) installed on your machine.

### 2. Clone the Repository

```bash
git clone [https://github.com/Muhamed-Yasin/nextjs-animated-portfolio-template.git](https://github.com/Muhamed-Yasin/nextjs-animated-portfolio-template.git)
cd nextjs-animated-portfolio-template
````

### 3\. Install Dependencies

```bash
npm install
```

### 4\. Set Up Environment Variables

This project requires API keys from Firebase and EmailJS to function correctly.

First, rename the `.env.example` file to `.env.local`:

```bash
mv .env.example .env.local
```

Now, open `.env.local` and add your keys.

#### Firebase Setup:

1.  Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2.  Go to **Project settings** \> **General** and create a new web app (`</>`).
3.  Copy the `firebaseConfig` object values into the `.env.local` file.
4.  Go to **Firestore Database**, create a database, and start in **production mode**.

#### EmailJS Setup:

1.  Go to [EmailJS.com](https://www.emailjs.com/) and create a free account.
2.  Connect your email service (e.g., Gmail).
3.  Create an email template and note its **Template ID**.
4.  Find your **Service ID** and **Public Key** in your account settings.

<!-- end list -->

```
# .env.local

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY="YOUR_API_KEY"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="YOUR_SENDER_ID"
NEXT_PUBLIC_FIREBASE_APP_ID="YOUR_APP_ID"

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID="YOUR_SERVICE_ID"
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="YOUR_TEMPLATE_ID"
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="YOUR_PUBLIC_KEY"
```

### 5\. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

## 🎨 Making It Your Own

All personal data—projects, work experience, principles, skills, etc.—is located in the `/data/portfolioData.ts` file. Open this file and replace the placeholder content with your own information to personalize the portfolio.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](https://www.google.com/search?q=./LICENSE) file for details.

```
```
