

## Content Strategy: Marketing Site vs. PWA App

### The Problem

Right now, the PWA header links About, Our Standards, and Contact as external links back to `talonandtide.com`. If a user clicks any of these, they leave the app, lose their context, and may not easily return. This breaks the seamless experience.

### The Solution: Lightweight In-App Versions + Deep Links Back

The PWA should have its own **condensed, app-native versions** of these pages — not full copies of the marketing site pages. Think of it like how Spotify has an "About" in its app settings that is not the same as spotify.com/about. The marketing site remains the canonical, SEO-rich, full-storytelling destination. The app versions are functional and trust-building.

Here is what each page should look like **in the app**:

---

### About (App Version)

**Keep in-app (condensed):**
- Lindsay's founder story (2-3 paragraphs, not the full page)
- The founder photo with baboons
- The quote blockquote
- The mission statement (3-column grid: For Wildlife, For Communities, For Travelers)

**Cut from app version:**
- Expert Network details (too long for app context)
- Affiliations/Partnerships section (marketing-focused)

**Add to app version:**
- A "Read our full story" link at the bottom that opens the marketing site About page in a new tab (not a redirect — user stays in the app tab)

---

### Our Standards (App Version)

**Keep in-app (condensed):**
- The "Why Different" intro paragraph
- The 3 credential cards (Zoological Expertise, Expert Network, Professional Understanding)
- The mission blockquote

**Cut from app version:**
- The 6-card "Our Collaborative Approach" grid (too detailed for app)
- The "For Experience Partners" section (this is B2B content, not relevant to app users browsing experiences)

**Add to app version:**
- A brief "How We Vet Experiences" section (3-4 bullet points) — this is what app users actually care about: "How do I know these experiences are ethical?"
- "Read our full standards" link opening marketing site in new tab

---

### Contact (App Version)

**This needs the most thought.** The marketing site contact form is designed for trip planning inquiries with package selection. The app contact should serve different purposes:

**Keep in-app (simplified):**
- Email address (hello@talonandtide.com)
- Instagram link
- A simple general contact form: name, email, subject, message (no trip type or package fields — those belong to the marketing site's consulting flow)

**Cut from app version:**
- Package/investment selection dropdowns
- Pricing information cards
- The "Inquiries Welcome" sidebar (press, partnerships — B2B)

**Add to app version:**
- "Report an issue" option in the form subject dropdown
- "Suggest an experience" option (links to species request form already planned)
- For paid users: a more prominent "Get help planning a trip" CTA that could link to the full marketing site contact form in a new tab

---

### Implementation in the PWA Starter Prompt

Add these 3 pages to Phase 1 as lightweight app-native pages:

1. **`/about`** — Condensed founder story + mission + "Read full story →" external link
2. **`/standards`** — Condensed vetting philosophy + "How We Vet" bullets + "Read full standards →" external link  
3. **`/contact`** — Simple form (name, email, subject dropdown, message) + email/Instagram/location info

The PWA header nav changes from external links to internal routes. The footer can include both internal app links and a small "Visit talonandtide.com" link for users who want the full marketing site.

### Key UX Rule

**External links always open in a new tab** (`target="_blank"`), so the user never loses the app. The app should feel self-contained — the marketing site is a bonus, not a dependency.

---

### Changes to This Marketing Site

Once the PWA is live, update this site's header/footer to add a CTA linking to the app (e.g., "Explore Experiences →" button pointing to `app.talonandtide.com`). No pages need to be removed from this site — it remains the full canonical source.

