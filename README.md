# SmartRoute AI — Enterprise Logistics Platform

Monorepo layout:

- `client/` — frontend (React 19 + TypeScript + Vite + Tailwind CSS + Framer Motion + React Router). Standalone app with its own toolchain — see `client/README.md` (Section 2 setup) for install/run commands.
- `server/` — backend. Not part of this phase; left untouched.

## Current Status

**Phase 1 — Frontend Foundation** is complete: project setup, design tokens, App Shell (Sidebar/Topbar), routing, Error Boundary, 404 page, visual-only Auth (Login/Register) screens, Landing page, and placeholder pages for every navigation module. No business logic, API calls, or authentication logic are implemented yet — those arrive in later phases.

Design source of truth: `SmartRoute AI.dc.html` prototype (external design handoff), brand colors `#000080` / `#FEFFFE` / `#E5FCF5`.