# Triangle Home Defense Deployment

Build date: 2026-05-29

This repository is a flat static GitHub Pages site. Public pages live at the repository root and use `styles.css`, `thd-mark.svg`, and `favicon.svg`.

## Local Test

From the repository root, run a simple static server if available:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy

GitHub Pages should publish from the `main` branch root. The custom domain is controlled by `CNAME` and must remain:

```text
trianglehomedefense.com
```

Do not delete `CNAME`, `robots.txt`, `sitemap.xml`, brand SVG files, or any hosting/verification files added later.

## Post-Deploy Checks

- Open `https://trianglehomedefense.com/`.
- Check Home, Services, Inspections, Prevention, Stewardship, About, and Contact.
- Confirm the contact form uses `mailto:info@trianglehomedefense.com`.
- Confirm phone/email and service area are correct.
- Check `robots.txt` and `sitemap.xml`.

GitHub Pages and DNS can take a few minutes to settle.
