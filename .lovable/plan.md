# Redesign Tara Product Cards

## Goal
Refine every product card across the menu sections (Cookies, Cold Drinks, Hot Drinks, Mojito) so they feel softer, cuter, more premium, and more appetizing. Improve image presentation, spacing, typography, price display, rounded corners, and shadows while keeping the cozy Tara vibe.

## What will change
- Redesign the `MenuSectionBlock` card markup in `src/routes/index.tsx`.
- Update supporting design tokens/utilities in `src/styles.css` if needed (new shadow, price-chip, or card-surface tokens).
- Keep all existing product names, prices, and images untouched.

## Design process
1. Pin the taste: ask the user to choose a palette preset, a typography pairing, and a card layout wireframe.
2. Generate 3 rendered card design directions that share the chosen palette/type/layout but vary in composition, density, and emphasis.
3. Let the user pick one direction.
4. Implement the chosen direction exactly, matching composition, spacing, and polish.

## Constraints
- Display-only menu: no cart, no ordering, no quantity buttons.
- Arabic RTL must remain intact.
- Keep the single-page scroll experience.
- Preserve existing section backgrounds and header.
- Respect `prefers-reduced-motion`.

## Verification
- Build passes with no errors.
- Playwright screenshots confirm cards look polished on desktop and mobile.
- No horizontal overflow or console errors.