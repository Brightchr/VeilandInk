# Veil & Ink

**Veil & Ink** is a dark, atmospheric, and immersive tattoo artist portfolio website inspired by the aesthetic of Sleep Token. Designed as a modern, elegant single-page application (SPA), it showcases an artist's style, philosophy, and work while providing a smooth and engaging user experience.

## Project Overview

Veil & Ink is a visual and emotional experience built around the artistry of body ink. It features:

- A dark, gothic aesthetic with lavender accents
- A parallax-scrolling forest theme
- Alternating overlay themes per section for dynamic visual flow
- Fully responsive and accessible design
- A working contact form to request tattoo appointments

---

## Features

### Core Sections

| Section      | Overlay Color         | Description                                                 |
|--------------|------------------------|-------------------------------------------------------------|
| **Hero**     | `rgba(0, 0, 0, 0.8)`   | Logo and immersive opening text                             |
| **About**    | `#5F5879`              | Artist's bio, philosophy, and background                    |
| **Gallery**  | `rgba(0, 0, 0, 0.8)`   | Parallax-enabled grid of tattoo work                        |
| **Next**     | `#5F5879`              | Transitional section to guide users forward                 |
| **Contact**  | `#5F5879`              | Appointment request form with email notifications           |

> All sections fade into one another seamlessly with soft top/bottom transitions and alternating overlays.

### Design Language

- Emotive and gothic style
- Elegant typography and minimalistic layout
- Smooth animations and fading effects between sections
- Designed with **Tailwind CSS** and **React**

---

## Tech Stack

- **Frontend**: React (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (optional)
- **Forms**: EmailJS or backend endpoint (depending on deployment needs)
- **Hosting**: Vercel, Netlify, or your preferred static site host

---

## File Structure

```
VeilAndInk/
├── public/
│   └── assets/
│       └── Dark-Forest.jpg
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Gallery.jsx
│   │   ├── NextSection.jsx
│   │   ├── Contact.jsx
│   └── App.jsx
├── tailwind.config.js
└── README.md
```

---

## Contact Form

The contact section includes:
- A form styled to match the lavender overlay
- Input fields for appointment-related questions
- Email submission support (via EmailJS or custom backend)

> Form is responsive and accessible, ensuring usability across devices.

---

## Status

**In Development** — Sections and layout complete. Currently adding:
- Form submission logic
- Gallery content
- SEO optimization
- Accessibility improvements

---

## Demo

Live demo coming soon at: [https://veilandink.vercel.app](https://veilandink.vercel.app)  
[(https://veilandink.netlify.app/)]

---

## Credits
  
Developed by **Christopher Bright** as a showcase of design, front-end engineering, and creative direction.
