## StoreRepublic Landing Page

A responsive React single-page application built with Vite for the **StoreRepublic** brand.
It showcases key sections like internships, case studies, news, awards, team, and contact.

### Tech Stack

- **React** (with React Compiler)
- **Vite**
- **Tailwind CSS** + **daisyUI**
- **ESLint** for linting

### Getting Started

- **Install dependencies**

```bash
npm install
```

- **Run the dev server**

```bash
npm run dev
```

The app will start on the port shown in the terminal (typically `http://localhost:5173`).

- **Build for production**

```bash
npm run build
```

- **Preview production build**

```bash
npm run preview
```

- **Run linter**

```bash
npm run lint
```

### Project Structure (key folders)

- `src/App.jsx` – main app layout and routing.
- `src/main.jsx` – React entry point.
- `src/index.css` – global styles and Tailwind setup.
- `src/Component/Navbar` – `Navbar` and `TopNavbar` components.
- `src/Component/Banner` – hero/banner components.
- `src/Component/InternshipLanding` – internship landing section.
- `src/Component/Information` – info and internship page sections.
- `src/Component/CaseStudies` – case studies section.
- `src/Component/TeamSection` – team listing section.
- `src/Component/AwardsStats` – awards and stats section.
- `src/Component/NewsSection` – news/blog section.
- `src/Component/ContactSection` – contact form / CTA.
- `src/Component/Footer` – footer component.

Static images and assets live in the `public` directory.

### Scripts (from `package.json`)

- **`npm run dev`**: start Vite dev server.
- **`npm run build`**: production build.
- **`npm run preview`**: preview the build locally.
- **`npm run lint`**: run ESLint on the project.

### License

This project is for demonstration and assessment purposes. Adjust the license section as needed for your use case.

