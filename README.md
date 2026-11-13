# CoAbility - Jekyll & GitHub Pages Website

CoAbility is a nonprofit initiative dedicated to improving the lives of children and individuals with disabilities through accessible, innovative, and personalized 3D-printed assistive devices.

This website is built with **Ruby & Jekyll**, specifically structured for automatic builds and hosting on **GitHub Pages**.

---

## 📁 Repository Architecture

```
coability-website/
├── _config.yml             # Jekyll site settings, metadata & plugins
├── Gemfile                 # Ruby dependencies (jekyll, webrick, tzinfo-data)
├── .gitignore              # Ignores _site/, caches, and logs
│
├── _layouts/
│   └── default.html        # Shared base template (head, nav, content, footer)
│
├── _includes/
│   ├── head.html           # Meta tags, fonts & stylesheet links
│   ├── header.html         # Accessible navigation & mobile menu
│   └── footer.html         # Accessible footer & organization details
│
├── _data/
│   ├── team.yml            # Easy-to-edit team roster
│   └── projects.yml        # Assistive device catalog & challenges
│
├── index.html              # Landing page (Hero, 3D printing impact, Spotlight)
├── mission.html            # Mission, problem breakdown & engineering loop
├── team.html               # Dynamic team page populated from _data/team.yml
├── projects.html           # Assistive projects populated from _data/projects.yml
├── contact.html            # Contact pathways, accessible inquiry form & FAQ
│
└── assets/
    ├── css/
    │   └── style.css       # Design tokens, accessibility focus & custom classes
    ├── js/
    │   └── components.js   # Mobile navigation toggle & accessible form feedback
    └── images/
        ├── logo.png        # Official CoAbility logo
        └── v2single.PNG    # Original official logo file
```

---

## 🚀 Running Locally with Jekyll

To preview the website locally using your existing Ruby & Jekyll installation:

```powershell
# 1. Navigate to the project directory
cd C:\Users\hesha\.gemini\antigravity\scratch\coability-website

# 2. Install Ruby gems (first time only)
bundle install

# 3. Start the Jekyll local development server
bundle exec jekyll serve --livereload
# or: jekyll serve
```

Then open your browser to **`http://localhost:4000`**. Changes to pages, styles, and YAML data files will update live!

---

## 🐙 Pushing to GitHub & Enabling GitHub Pages

Because Jekyll is natively supported by GitHub, pushing this repository to GitHub will automatically build and publish your website:

### Step 1: Initialize Git and Commit
```powershell
cd C:\Users\hesha\.gemini\antigravity\scratch\coability-website

git init
git add .
git commit -m "Initial commit of CoAbility Jekyll website"
```

### Step 2: Link to Your GitHub Repository
Run:

```powershell
git branch -M main
git remote add origin https://github.com/Hesham-Katabi/CoAbility.git
git push -u origin main
```

### Step 3: Configure GitHub Pages
1. On GitHub, go to your repository's **Settings** &rarr; **Pages**.
2. Under **Build and deployment** &rarr; **Source**, select **Deploy from a branch**.
3. Choose the `main` branch and `/ (root)` folder, then click **Save**.
4. GitHub Pages will build and deploy your site in ~1 minute!

*(Note: If your repository is published under a subfolder URL like `https://<user>.github.io/<repo>/`, simply set `baseurl: "/<repo>"` in `_config.yml`).*

---

## 👥 How to Update Content

### Adding / Editing Team Members
Edit [`_data/team.yml`](_data/team.yml):
```yaml
- name: "Jane Doe"
  role: "Mechanical Design Lead"
  is_placeholder: false
  bio: "Experienced CAD engineer specializing in pediatric 3D-printed orthotics."
  avatar_color: "from-blue-600 to-cyan-500"
  initials: "JD"
  linkedin: "https://www.linkedin.com/in/janedoe"
```

### Adding / Editing Projects
Edit [`_data/projects.yml`](_data/projects.yml):
```yaml
- id: "zipper-pull-assist"
  title: "Adaptive Zipper Pull Attachment"
  category: "Daily Living"
  status: "Concept & Prototyping"
  status_type: "prototype"
  short_desc: "Ergonomic loop attachment..."
  challenge: "Standard metal tabs require fine pinch strength..."
  solution: "Customized 3D-printed contoured loop..."
  material: "PETG / PLA+"
  print_time: "~45 minutes"
  icon_type: "zipper"
```

---

## ♿ Accessibility Compliance (WCAG 2.1 AA/AAA)

* **Contrast**: Deep Slate text (`#0F172A`) on white delivers 14.2:1 contrast ratio.
* **Keyboard Navigation**: Skip-to-content bypass link, visible high-contrast focus rings (`focus-visible:ring-4 focus-visible:ring-sky-400`), and Escape key controls for menus.
* **Semantic HTML**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
* **Reduced Motion**: Full support for `@media (prefers-reduced-motion: reduce)`.
