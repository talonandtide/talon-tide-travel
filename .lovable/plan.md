

## Plan: Create a Starter Prompt for the New Talon & Tide PWA Project

Since you chose to build this as a **separate Lovable project**, I cannot create that project from here. Instead, I will prepare a comprehensive starter prompt that you can paste into a brand new Lovable project. This prompt will contain everything the AI needs to scaffold Phase 1 correctly.

Here is what you should do:

---

### Step 1: Create a New Lovable Project

Go to your Lovable dashboard and create a new project. Paste the following prompt as your first message:

---

### The Starter Prompt

Copy and paste this entire block into your new project:

```text
Build the Phase 1 scaffold of the Talon & Tide PWA — a luxury wildlife experience aggregator app. This is a SaaS PWA that answers: "Where can I see a ___?" It aggregates ethically vetted wildlife experiences worldwide, from $20 zoo tours to private jet safaris.

## DESIGN SYSTEM (must match exactly)

### Colors (Tailwind custom colors under "talon" prefix)
- talon-green: #2C3E35 (primary brand, headers, nav)
- talon-navy: #1A2A40 (deep backgrounds, text)
- talon-gold: #BC9A5F (CTAs, links, accents, borders)
- talon-sand: #E5DFD3 (warm backgrounds)
- talon-stone: #A9A295 (muted text, borders)
- talon-ivory: #F9F7F3 (page backgrounds)
- talon-charcoal: #222222 (dark text)
- talon-midnight: #121A26 (deep sections)
- talon-espresso: #3A2618 (rich brown accent)
- talon-champagne: #E8DDCB (warm neutral)
- talon-bronze: #CD7F32 (metallic accent)
- talon-emerald: #046307 (conservation badges)

### Typography (Google Fonts)
- Headings: font-serif → Playfair Display, Cormorant Garamond, serif
- Body: font-sans → Montserrat, Lato, sans-serif
- Display: font-display → Cormorant Garamond, serif
- Script accents: font-script → Mrs Saint Delafield, cursive
- Import: Playfair Display (400,500,600,700), Cormorant Garamond (300,400,500,600), Montserrat (300,400,500,600), Lato (300,400,700), Mrs Saint Delafield (400)

### Visual Style
- Luxury, cinematic, editorial — like a high-end travel magazine
- Full-bleed hero imagery, elegant animations (fade-in with translateY)
- Minimal border-radius (2px / rounded-sm), subtle shadows
- Custom shadows: shadow-luxury (0 10px 30px -5px rgba(0,0,0,0.1)), shadow-card (0 5px 15px rgba(0,0,0,0.08))
- Gradient overlays: gradient-luxury (navy to green), gradient-gold (#BC9A5F to #E8DDCB)
- Icons: Lucide React only
- Voice: Sophisticated, warm, approachable — elegant storytelling, never clinical

### Key CSS Classes
- .btn-primary: inline-flex items-center gap-2 px-6 py-3 bg-talon-green text-white rounded-sm hover:bg-talon-green/90
- .btn-secondary: inline-flex items-center gap-2 px-6 py-3 border border-talon-gold text-talon-gold rounded-sm hover:bg-talon-gold/10
- .card-luxury: border border-talon-stone/20 bg-white shadow-sm rounded-sm hover:shadow-md transition-shadow
- .container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

## APP ARCHITECTURE

### Tech Stack
- React + Vite + TypeScript + Tailwind CSS + shadcn/ui
- PWA enabled via vite-plugin-pwa
- Supabase (Lovable Cloud) for auth, database, storage, edge functions
- Mapbox GL for maps
- Stripe for payments (later phase)

### User Roles (4 tiers, stored in user_roles table — NOT on profiles)
1. Visitor (not logged in): overview map, region-level location, short description, species, 1-2 photos
2. Member (free, logged in): full descriptions, 3-4 photos, save to lists, follow species, buy bundles
3. Conservationist (paid): exact location, supplier name, booking links, all media, itineraries, ethics notes
4. Admin (hidden): full CRUD, analytics dashboard

### Content Gating UX
- Premium content uses soft blur + elegant gold-bordered CTA overlay (not hidden entirely)
- Members see supplier as "Premium Partner", approximate map pin, blurred booking info
- CTA copy: "Unlock full details — supplier, exact location, and booking — from $X/month"
- Some experiences rotate as "Free Preview" (is_free_preview flag) showing full details to all users

## PHASE 1 — BUILD THIS NOW

### 1. Project Scaffold
- Set up Tailwind config with all custom colors, fonts, shadows, gradients listed above
- PWA manifest and service worker config
- App shell with header (logo "Talon & Tide" with gold ampersand, nav links), footer matching marketing site style
- Header: fixed, transparent on hero → white/blurred on scroll. Links: Explore, Bundles, My Lists, Profile. Links back to main site: About, Blog, Contact, Our Standards (external links to talonandtide.com)

### 2. Auth (Supabase)
- Sign up, sign in, password reset pages
- Profiles table (user_id FK to auth.users, username, avatar_url, created_at)
- user_roles table with enum (visitor, member, conservationist, admin) — use security definer function has_role() for RLS
- Auto-create profile + default "member" role on signup via trigger
- Auth context provider wrapping app

### 3. Database Schema (Supabase)
Create these tables:

experiences: id (uuid PK), title, slug, short_description, full_description, editorial_copy (text), continent, country, city, region, approximate_lat, approximate_lng, exact_lat, exact_lng, primary_species_id (FK), secondary_species (uuid[]), experience_type (enum: zoo_encounter, expedition_cruise, walking_tour, safari, diving, birdwatching, whale_watching, private_expedition, bespoke_adventure, day_trip, multi_day, other), price_range_min (int), price_range_max (int), duration_days (int), supplier_id (FK), booking_url, ethics_notes, itinerary (jsonb), photos (text[]), videos (text[]), hero_image_url, conservation_impact (text), is_promoted (bool), promoted_until (timestamp), is_free_preview (bool), free_preview_until (timestamp), editorial_status (enum: draft, review, published, archived), best_months (int[]), physical_difficulty (enum: easy, moderate, strenuous), family_friendly (bool), group_size_min (int), group_size_max (int), nearest_airport_code (text), languages (text[]), includes_meals (bool), includes_lodging (bool), minimum_age (int), season_tags (text[]), created_at, updated_at

species: id (uuid PK), common_name, scientific_name, category (enum: mammal, bird, reptile, amphibian, fish, invertebrate, marine_mammal), conservation_status (enum: LC, NT, VU, EN, CR, EW, EX), description, habitat_regions (text[]), hero_image_url, created_at

suppliers: id (uuid PK), name, website, logo_url, description, verified (bool), promotion_tier (enum: none, basic, premium), created_at

bundles: id (uuid PK), title, description, hero_image_url, price_cents (int), stripe_price_id, experience_ids (uuid[]), created_at

user_lists: id (uuid PK), user_id (FK), name, description, experience_ids (uuid[]), is_public (bool), created_at

user_follows: id (uuid PK), user_id (FK), species_id (FK), created_at

species_requests: id (uuid PK), user_id (FK nullable), species_name, preferred_region, notes, email, created_at, status (enum: new, reviewed, fulfilled)

search_logs: id (uuid PK), user_id (FK nullable), query, species_id (FK nullable), results_count (int), had_results (bool), fallback_used (bool), created_at

RLS: experiences/species/suppliers/bundles readable by all, writable by admin only. user_lists/user_follows scoped to own user. species_requests insertable by all, readable by admin.

### 4. Home Page — Cinematic Explore Page
- Full-bleed hero section with cinematic wildlife image, overlay gradient, centered search bar: "Where can I see a ___?" with species autocomplete
- Below hero: "Staff Picks" editorial row (3-4 featured experiences as large cinematic cards)
- "Trending Species" row with circular species images
- "Seasonal Highlights" section
- "Surprise Me" gold button that navigates to a random experience

### 5. Explore / Search Results Page
- Left sidebar: progressive filters (continent → country, species, experience type, budget range $/$$/$$$/$$$, difficulty, family-friendly). Each filter shows result count before selection.
- Main area: Mapbox map (top) + experience card grid (bottom), toggleable between map and list view
- Cards: hero image, title, region, primary species badge, price range indicator, "Staff Pick"/"Trending"/"New" badges
- Results capped at 12-20 per page with pagination
- Quick view: clicking a card opens a drawer/modal with hero image, editorial excerpt, species, region, price range, and CTA to view full details or upgrade

### 6. Smart Fallback Search
- When primary_species yields 0 results → query secondary_species
- If still 0 → query same region/habitat
- If still thin → show "You might love" curated suggestions
- Always show inline species request form at bottom: "Looking for something specific? Tell us" — captures species_name, preferred_region, email, notes
- Never show an empty state

### 7. Seed Data
- Create 15-20 sample experiences across different continents, types, and price ranges
- Create 20-30 species entries
- Create 3-5 sample suppliers
- Create 2-3 sample bundles
- Make 2-3 experiences flagged as is_free_preview

## IMPORTANT NOTES
- The app header should include links back to the main marketing site (talonandtide.com) for About, Blog, Contact, Our Standards
- Use HashRouter for GitHub Pages compatibility OR BrowserRouter if deploying on Lovable's domain
- This is Phase 1 only. Do NOT build: Stripe payments, admin dashboard, email notifications, onboarding quiz, shareable wishlists, compare feature, or supplier portal yet.
```

---

### Step 2: After the Project Scaffolds

Once the new project is created with Phase 1, return here and I will:

1. Add CTA buttons on the marketing site linking to the PWA (`app.talonandtide.com` or the new project's Lovable URL)
2. Ensure the header/footer cross-links work between both projects
3. Help you connect Supabase and configure the database schema if the AI doesn't do it automatically

### Step 3: Subsequent Phases

After Phase 1 is working, you will build iteratively:
- **Phase 2**: Content gating by role, experience detail pages, species profile pages, user profile/settings
- **Phase 3**: Admin dashboard, Stripe integration (enable Stripe in the new project)
- **Phase 4**: Discovery engine, email notifications, shareable wishlists, supplier promotions

