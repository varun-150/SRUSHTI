# Srushti Technologies — Execution OS

A premium, execution-first engineering ecosystem built for digital craftsmen. This platform is designed strictly for deep work, architectural discipline, and high-end product building. 

There are no fake metrics, no gamified badges, and no startup hype. Just a calm, structurally rigorous environment meant to mimic a production engineering workspace.

## Technical Architecture

Built with a focus on speed, precision, and zero UI bloat.

- **Core:** React + Vite
- **Routing:** React Router v6 (featuring intelligent state bridging)
- **Motion Engine:** Framer Motion (Strictly utilizing native OS-level `cubic-bezier` curves)
- **Styling:** Pure Vanilla CSS / CSS Modules
- **Iconography:** Lucide React

## Design Philosophy & Constraints

The interface is intentionally restricted to enforce extreme focus and aesthetic restraint:
- **Surfaces:** Pure matte black (`#0a0a0b`) and graphite (`#121214`).
- **Typography:** Cinematic architectural spacing using `Inter` for extreme readability and `Outfit` for geometric heading structure.
- **Motion:** All interactions follow the `[0.25, 0.1, 0.25, 1]` easing curve. No bouncy physics, no fast snap transitions. The interface must "breathe calmly."
- **Integrity:** Zero radial gradients, zero purple neon effects, and zero template-style SaaS layouts.
- **Tactile Physics:** All interactive elements feature OS-level inset box-shadows and subtle `whileTap` hardware-like scale reductions.

## Platform Ecosystem

The application architecture is split into distinct, deeply refined premium experiences:
1. **`/` (The Core OS):** Cinematic hero introduction, a dynamic vertical Execution Engine pipeline, and the philosophical origins of the platform.
2. **`/courses` (Curriculum Architecture):** The immersive creator environment housing the asymmetrical engineering pathways (Full Stack Flagship, Python, AI, UI/UX, etc.) and the Full Summer Bundle.
3. **`/register` (The Onboarding Sequence):** A dedicated, split-panel cinematic registration flow. Features state-bridged course pre-filling and isolates the user by hiding global navigation to enforce absolute focus.
4. **`/dashboard` (The Workspace):** An honest execution tracking system mimicking premium operating systems, featuring frosted-glass sidebar active states.
5. **`/about` & `/contact` (The Infrastructure):** Philosophy-driven narrative and high-end support gateways featuring fluid, structural accordion interactions.

## Local Development

Initialize the workspace and run the development server:

```bash
# Install dependencies
npm install

# Start the Vite development environment
npm run dev
```

The application will be available at `http://localhost:5173`.

## Deployment

This platform is configured for automated deployment via Render Blueprints. 
A `render.yaml` configuration is included to easily spin up a Node web service that serves the static Vite output seamlessly.

---
*We build the systems that shape the modern web. Crafted with extreme discipline.*
