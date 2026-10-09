# SK Sahil & Zameema Ghousia — Walima Invitation

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Create a production build with `npm run build`.

## Update details

All names, dates, links, venue, and contact details live in `src/lib/wedding-data.ts`.

## Images

The original couple illustration is at `public/images/couple-illustration.png`. The supplied venue photo was not present in the project materials; place the real image at `public/images/venue.jpg`, then replace the temporary venue card in `src/app/page.tsx` with a Next `Image` using that path.

## Deploy to Vercel

Push this repository to GitHub, import it in Vercel, and use the default Next.js build settings (`npm run build`). No environment variables are needed. Add a custom domain from Vercel Project Settings → Domains after deployment.
