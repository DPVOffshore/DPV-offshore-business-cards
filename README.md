# DPV Offshore — Digital Business Cards

A small Next.js site that gives each employee a mobile-friendly digital
business card at its own URL (e.g. `/jayantha`). Each card has clickable
call, WhatsApp, email, website and address, plus a **Save Contact** button
that adds the person to the visitor's phone.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 — you'll see a directory. Click a name, or go
straight to http://localhost:3000/jayantha

## Add a new employee (the easy part)

1. Open `src/data/employees.js`.
2. Copy one `{ ... }` block and change the details.
3. Put their photo in `public/employees/<slug>.jpg` — use the same name as
   the `slug` (e.g. slug `nimal` → `public/employees/nimal.jpg`).
4. Save. Their card is live at `/<slug>`.

Company-wide info (logo, address, operating locations) lives in
`src/data/company.js` — edit it once and every card updates.

## The links

- **Call** → `tel:` opens the phone dialer on mobile.
- **WhatsApp** → opens WhatsApp with a pre-filled greeting.
- **Email** → opens the mail app. Set `emailMode` in `company.js`:
  - `"mailto"` (default) → visitor's default mail app (Outlook if it's their default).
  - `"outlook"` → always opens Outlook-on-the-web compose.
- **Website / Address** → open the site / Google Maps.
- **Save Contact** → downloads a `.vcf` the phone offers to add to contacts.

## QR codes

Point each QR at the card URL, e.g. `https://your-domain.com/jayantha`.
Generate the images from any QR generator once the site is deployed.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel, "Add New → Project" and import the repo. Framework is detected
   automatically (Next.js). Click Deploy.
3. Add your custom domain in Project → Settings → Domains.

> Note: this is a company (commercial) site, so use a Vercel **Pro** plan —
> the free Hobby plan is for non-commercial use only.
