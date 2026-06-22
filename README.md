# Ayka Alliance — Next.js + Supabase

Healthcare franchise website migrated from static HTML to Next.js 14 (App Router) with Supabase backend for form submissions.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS v3** (full design token system from DESIGN.md)
- **Supabase** (form submissions)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, Franchise Models, Revenue Streams, Specialties, Who Can Join, Tech Sidebar, Testimonials, FAQs, Contact CTA |
| `/franchise` | Franchise Models & ROI — detailed cards, revenue bento, FAQ accordion, CTA |
| `/technology` | Technology & Support Ecosystem — SaaS platform bento, feature grid, testimonials, CTA |
| `/apply` | Partner Application — full multi-field form with Supabase insert |

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Supabase

1. Create a project at [supabase.com](https://supabase.com)
2. Run `supabase_schema.sql` in your Supabase SQL editor to create the `franchise_applications` table
3. Copy `.env.local.example` to `.env.local` and fill in your Supabase credentials:

```bash
cp .env.local.example .env.local
```

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 3. Run dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production

```bash
npm run build
npm start
```

## Key Components

| File | Purpose |
|------|---------|
| `src/components/Navbar.tsx` | Sticky nav with mobile hamburger menu |
| `src/components/Footer.tsx` | Shared footer |
| `src/components/WhatsAppFAB.tsx` | Floating WhatsApp button |
| `src/components/DarkEnquiryForm.tsx` | Quick enquiry form for dark backgrounds (home + franchise CTA) |
| `src/components/ApplicationForm.tsx` | Full application form (`/apply` page) |
| `src/lib/actions.ts` | Server action for Supabase insert |
| `src/lib/supabase.ts` | Supabase client |
| `supabase_schema.sql` | Database schema with RLS policies |
| `tailwind.config.ts` | Full Vital Ledger design token system |

## Design Tokens (from DESIGN.md / Vital Ledger)

All colors, typography, spacing, and border-radius values from the original `DESIGN.md` are registered as Tailwind tokens. The custom fonts (Plus Jakarta Sans) and Material Symbols Outlined icons are loaded via Google Fonts in the root layout.

## Deployment

Deploy easily on [Vercel](https://vercel.com):
1. Push to GitHub
2. Import project on Vercel
3. Add environment variables (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
4. Deploy
