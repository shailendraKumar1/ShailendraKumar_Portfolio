# Shailendra Kumar — Portfolio

A responsive React + Vite portfolio designed for GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

## Before publishing

1. In `src/App.jsx`, replace:
   - `YOUR_GITHUB_USERNAME`
   - `YOUR_LINKEDIN_USERNAME`
   - Any project links and case-study placeholders
2. Check every role, date, and achievement before making the site public.
3. Add your resume PDF at `public/resume.pdf`.
4. If your repository name is not `shailendra-portfolio`, update `base` in `vite.config.js` to `"/YOUR_REPOSITORY_NAME/"`.

## Deploy to GitHub Pages

Create a GitHub repository named `shailendra-portfolio`, then:

```bash
git init
git add .
git commit -m "Add portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/shailendra-portfolio.git
git push -u origin main
npm run deploy
```

In GitHub, open **Settings → Pages** and select the `gh-pages` branch as the publishing source if needed.

The project site URL will be:

`https://YOUR_GITHUB_USERNAME.github.io/shailendra-portfolio/`

## Notes

- This site is a static frontend; it does not need a backend.
- The metric and experience text is based on the supplied resume. Confirm that public wording and numbers are approved before publishing.
- The project cards are presented as experience/case-study summaries. Only add public links to repositories you own or are authorized to share.
