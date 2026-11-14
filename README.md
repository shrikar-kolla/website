# Shrikar Kolla: personal portfolio (Vite + React)

A single-page portfolio with Home, Experience, Work, Skills and Contact sections.
All the text lives in **one file**: `src/data.js`.

## Run it on your computer

You need [Node.js](https://nodejs.org) (version 18 or newer).

```bash
npm install
npm run dev
```

Open the address it prints (usually http://localhost:5173). The page updates as you edit.

## Updating the site

- **Text, roles, projects, skills, links:** edit `src/data.js`.
- **Résumé:** replace `public/Shrikar_Kolla_Resume.pdf` (keep the same file name, or change `resume` in `src/data.js`).
- **Photo:** replace `public/profile.jpg`.
- **Link preview image** (shown when you share the URL): `public/social-preview.png`, 1200x630.
- **Colors:** the variables at the top of `src/styles.css`.
- **Page title, description, link-preview tags:** `index.html`.

## Deploy for free (Vercel)

1. Put this folder in a GitHub repository.
2. On vercel.com, sign in with GitHub, choose "Add New Project" and import the repo.
   Vercel detects Vite automatically. Name the project `shrikar-kolla` and click Deploy.
3. The site goes live at `https://shrikar-kolla.vercel.app`.

If Vercel gives you a different address, update the three URLs in `index.html`
(`og:url`, `og:image`, `canonical`) to match.

## Using a custom domain later (for example shrikar.tech)

In the Vercel project go to Settings, then Domains, add the domain, and add the DNS records Vercel shows at
the company where you registered it. Then change the three URLs in `index.html` to the new domain.

## Project layout

```
index.html        page title, description and link-preview tags
public/           favicon, photo, résumé PDF, link-preview image (served as-is)
src/data.js       YOUR CONTENT: edit this
src/App.jsx       the page sections
src/styles.css    colors, fonts and layout
```
