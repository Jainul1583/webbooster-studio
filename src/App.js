// File: src/App.jsx
// This project is intentionally built in a single file so you can launch quickly.
// Later, you can split it into components (Navbar, Hero, Services, etc.).
// 
// Setup steps:
// 1. Ensure Tailwind CSS is installed and configured.
// 2. Replace the placeholder WhatsApp number with your own.
// 3. Update email and portfolio items as needed.
//
// Suggested project structure:
// src/
// ├── App.jsx              <-- Use this file for now
// ├── index.js
// └── index.css            <-- Tailwind imports (@tailwind base; @tailwind components; @tailwind utilities;)
//
// If you are using Create React App:
// src/index.js should contain:
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
//
// If you are using Vite:
// src/main.jsx should contain:
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
//
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
//
// Google Fonts (optional): add to public/index.html inside <head>
// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
//
// Optional custom CSS for font in src/index.css:
// body {
//   font-family: 'Poppins', sans-serif;
// }
//
// App.js / App.jsx path:
//   src/App.jsx
//
// No additional CSS files are required because all styling uses Tailwind utility classes.

export default function App() {
  const services = [
    {
      title: 'Website Development',
      desc: 'Modern WordPress and custom websites designed to convert visitors into customers.',
      icon: '🌐',
    },
    {
      title: 'Web Applications',
      desc: 'Custom dashboards and business tools built with React, NestJS, and scalable databases.',
      icon: '⚙️',
    },
    {
      title: 'Digital Marketing',
      desc: 'SEO, social media, and lead generation strategies to grow your business online.',
      icon: '📈',
    },
  ];

  const portfolio = [
    {
      title: 'Coaching Institute Website',
      category: 'Education Platform',
    },
    {
      title: 'Furniture Business Website',
      category: 'E-commerce Showcase',
    },
    {
      title: 'Student Management Dashboard',
      category: 'Custom Web Application',
    },
    {
      title: 'Diagnostic Lab Management System',
      category: 'Healthcare Software',
    },
    {
      title: 'Restaurant Ordering Website',
      category: 'Food Business Website',
    },
    {
      title: 'Real Estate Lead Generation Site',
      category: 'Marketing Landing Page',
    },
  ];

  const stats = [
    { value: 'Fast', label: 'Delivery' },
    { value: 'Modern', label: 'Design' },
    { value: 'Growth', label: 'Focused' },
    { value: '100%', label: 'Responsive' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-40 right-1/4 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 font-bold text-slate-950 shadow-lg shadow-cyan-500/25">
              WB
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight">WebBooster Studio</div>
              <div className="text-xs text-slate-400">Build • Boost • Grow</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <a
            href="https://wa.me/918755650098"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-violet-500/25 transition hover:scale-105"
          >
            Get Free Demo
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-screen-2xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <div className="mb-6 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            🚀 Growth-Focused Digital Agency
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            We Build Websites That{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Boost Your Business
            </span>
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-8 text-slate-300">
            Modern websites, web applications, SEO, and digital marketing solutions designed to help businesses attract customers and grow online.
          </p>

          <div className="mb-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-violet-500/25 transition hover:scale-105"
            >
              Get Free Consultation
            </a>
            <a
              href="https://wa.me/918755650098"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="text-xl font-bold">{item.value}</div>
                <div className="text-sm text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-400/20 to-violet-500/20 blur-2xl" />
          <div className="relative rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-400">Dashboard Preview</div>
                <div className="text-lg font-semibold">Business Growth Analytics</div>
              </div>
              <div className="rounded-xl bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
                +127% Leads
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-slate-800 p-4">
                <div className="mb-2 text-sm text-slate-400">Website Performance</div>
                <div className="h-3 rounded-full bg-slate-700">
                  <div className="h-3 w-[92%] rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-slate-800 p-4">
                  <div className="text-sm text-slate-400">SEO Score</div>
                  <div className="mt-2 text-3xl font-bold">98</div>
                </div>
                <div className="rounded-2xl bg-slate-800 p-4">
                  <div className="text-sm text-slate-400">Conversions</div>
                  <div className="mt-2 text-3xl font-bold">4.8%</div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-800 p-4">
                <div className="mb-3 text-sm text-slate-400">Services Included</div>
                <div className="flex flex-wrap gap-2 text-sm">
                  {['Web Design', 'SEO', 'Marketing', 'Branding'].map((tag) => (
                    <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-screen-2xl px-6 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Our Services</h2>
          <p className="mt-4 text-slate-400">
            Everything you need to build a strong and profitable online presence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <div className="mb-4 text-4xl">{service.icon}</div>
              <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
              <p className="leading-7 text-slate-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="mx-auto max-w-screen-2xl px-6 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Demo Projects</h2>
          <p className="mt-4 text-slate-400">
            Sample projects to showcase our design and development capabilities.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {portfolio.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <div className="mb-4 h-40 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-violet-500/20 to-emerald-400/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🚀</div>
                  <div className="text-sm text-slate-300">Project Preview</div>
                </div>
              </div>
              <div className="mb-2 inline-block rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                {item.category}
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-screen-xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-violet-500/10 p-10 text-center backdrop-blur-xl md:p-16">
          <h2 className="text-3xl font-bold md:text-5xl">Ready to Grow Your Business Online?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Let’s build a modern website and digital strategy that attracts more customers.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/918755650098"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 font-semibold text-slate-950"
            >
              Get Free Consultation
            </a>
            <a
              href="mailto:webbboosterstudio@gmail.com"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold"
            >
              webbboosterstudio@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} WebBooster Studio. All rights reserved.
      </footer>
    </div>
  );
}
