---
name: Website Replicator
description: Analyzing a target website's design and structure to replicate it as a high-quality Next.js + Tailwind CSS template.
---

# Website Replicator Skill

This skill guides the agent in recreating a target website (or list of URLs) as a modern, responsive web template.

## 1. Analysis Phase
**Goal**: Extract the "Design DNA" of the target site.

*   **Tools**: `browser_subagent` (preferred) or `read_url_content`.
*   **Actions**:
    1.  Visit the target homepage.
    2.  Identify the **Color Palette**:
        *   Backgrounds (Dark/Light modes).
        *   Primary/Accent colors (Buttons, Links, Highlights).
        *   Surface colors (Cards, Footers).
    3.  Identify **Typography**:
        *   Font families (Serif/Sans-serif/Display).
        *   Heading styles vs Body text.
    4.  Analyze **Layout**:
        *   Navbar structure (Links, CTA, Mobile behavior).
        *   Footer sections.
        *   Section spacing and container widths.
    5.  Note **Vibe/Aesthetic**:
        *   Minimalist, Brutalist, Corporate, Playful?
        *   Effects: Glassmorphism, Gradients, Borders.

## 2. Project Setup
**Goal**: Prepare the technical foundation.

*   **Stack**: Next.js (App Router), Tailwind CSS v4, Lucide React.
*   **Actions**:
    1.  Ensure `globals.css` defines CSS variables for the extracted palette (`--background`, `--foreground`, `--primary`, `--accent`, etc.).
    2.  Install essential UI libraries:
        ```bash
        npm install lucide-react clsx tailwind-merge framer-motion
        ```
    3.  Create utility helper `lib/utils.ts` for clean class merging.
    4.  Configure `layout.tsx` with appropriate fonts (use `next/font/google`).

## 3. Component Scaffolding
**Goal**: Build the reusable core.

*   **Actions**:
    1.  **Navbar**: Create `components/layout/navbar.tsx`. Implement responsive mobile menu state.
    2.  **Footer**: Create `components/layout/footer.tsx`.
    3.  **UI Components**: Create base buttons, cards, or section wrappers if needed.

## 4. Page Replication
**Goal**: Recreate specific pages as templates.

*   **Input**: List of URLs provided by user.
*   **Strategy**:
    *   Don't copy HTML source directly. **Re-implement** visually using Tailwind classes.
    *   Use **Placeholders** for dynamic data (text arrays, mock images) so it acts as a template.
    *   **Routes**: Map URLs to Next.js file structure (e.g., `/services` -> `app/services/page.tsx`).
    *   **Images**: Use colored `div` placeholders or generic gradients if real asset extraction is difficult.

## 5. Refinement
**Goal**: Polish the "Premium" feel.

*   **Checklist**:
    *   [ ] **Responsiveness**: Does it stack correctly on mobile?
    *   [ ] **Theme**: Are colors consistent with the analysis?
    *   [ ] **Interactivity**: Add `:hover` states to buttons and links.


