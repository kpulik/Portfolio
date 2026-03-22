# Kevin Pulikkottil - Portfolio

Live site: [kpulik.github.io/Portfolio](https://kpulik.github.io/Portfolio/)

Built with React + Vite, deployed to GitHub Pages.

---

## Tech stack

- React 19
- Vite 6
- Material UI icons
- Custom CSS with OKLCH color system (no component library)
- Fonts: Space Grotesk, DM Sans, JetBrains Mono

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173/Portfolio/](http://localhost:5173/Portfolio/) in your browser.

---

## Updating content

All portfolio content lives in one file:

```
src/portfolio.js
```

Edit that file to update your name, about text, projects, skills, experience, education, certifications, and contact info. No other files need to change for content updates.

To add a project image, drop the file in `public/img/` and reference it as `image: '/Portfolio/img/your-file.png'` in the project object.

---

## Deploying changes

Run this every time you want to save your changes and update the live site:

```bash
git add .
git commit -m "describe your changes"
git push origin main
npm run deploy
```

What each step does:

- `git push origin main` saves your source code to GitHub
- `npm run deploy` builds the project and publishes the output to the `gh-pages` branch, which GitHub Pages serves automatically
- The live site updates within 1-2 minutes after deploying
- Hard refresh (`Cmd+Shift+R`) if the site looks stale after deploying

> Do not commit the `dist/` folder to `main`. It is generated output and is handled automatically by `npm run deploy`.

---

## Project structure

```
src/
  portfolio.js          # All content lives here
  App.jsx / App.css     # Root component and global styles + theme variables
  hooks/
    useScrollAnimation.js
  components/
    About/              # Hero section
    Header/             # Fixed nav bar
    Navbar/             # Nav links and theme toggle
    Projects/           # Project grid
    ProjectContainer/   # Individual project card
    Skills/             # Categorized skills
    Experience/         # Custom timeline (work + education)
    Certifications/     # Certifications with status badges
    Contact/            # Contact section
    Footer/
    ScrollToTop/
public/
  img/                  # Static images (toyota-logo.svg, hackerrank-icon.webp, og-image.svg)
  favicon.svg
  404.html              # GitHub Pages redirect fallback
```
