# Bjørn Dirdal Personal Website

This folder is the clean publication package for the website.

It contains only the files needed to publish the site, separate from the broader `Jobbsøking copy` folder that also includes private application documents and research material.

## Local Preview

From this folder:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy With GitHub and Vercel

The site is a static HTML/CSS/JS site, so it is a good fit for Vercel.

### 1. Create a GitHub repository

Create an empty repository on GitHub, for example:

```text
bjorn-dirdal-site
```

Do not add a README, `.gitignore`, or license on GitHub when creating it, since this folder already has what it needs.

### 2. Push this folder to GitHub

From inside `website-public`:

```bash
git init
git branch -M main
git add .
git commit -m "Initial website publish package"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

If Git asks for your identity first, set it once with:

```bash
git config user.name "Bjørn Dirdal"
git config user.email "bjorndirdal@hotmail.com"
```

Then repeat the `git add`, `git commit`, and `git push` steps.

### 3. Import the repository into Vercel

In Vercel:

1. Click `Add New...` -> `Project`
2. Import the GitHub repository
3. Keep the project as a static site
4. Leave build settings empty unless Vercel asks for them
5. Deploy

For this site, Vercel should be able to serve the files directly without a build step.

### 4. Add your own domain later

After the first deploy, Vercel will give you a `*.vercel.app` URL.

If you want your own domain after that:

1. Open the project in Vercel
2. Go to `Settings` -> `Domains`
3. Add your custom domain
4. Update DNS where your domain is registered

## Included Files

- `index.html`
- `background.html`
- `what-i-bring.html`
- `contact.html`
- `work.html`
- `styles.css`
- `script.js`
- `assets/`

## Notes

- `contact.html` and `work.html` are kept because the current site structure still references them as redirect pages.
- This package is intentionally separate from the rest of the job-search folder for privacy and cleaner publication.
