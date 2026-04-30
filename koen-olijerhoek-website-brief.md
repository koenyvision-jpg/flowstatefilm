# Koen Olijerhoek — Portfolio Website Rebuild

## Project Overview

Migrating from Squarespace to a self-built static site. Goal: a faster, cheaper, more bespoke portfolio that the owner can iterate on with AI assistance.

- **Current site:** https://www.flowstatefilm.com (Squarespace)
- **Domain:** flowstatefilm.com (currently registered through Squarespace — will need to be transferred or pointed elsewhere)
- **Target stack:** Static HTML/CSS/JS, hosted on a free tier (Netlify, Vercel, or Cloudflare Pages — TBD)

## About the Owner

- **Name:** Koen Olijerhoek
- **Location:** Netherlands
- **Discipline:** Filmmaker, specialised in skydiving and outdoor/extreme sports cinematography
- **Brand note:** Site should be presented under his own name (Koen Olijerhoek), not "Flowstate Film"

## Services Offered

1. **Full Production** — commercials, promos, events/weddings, instructionals, mini-documentaries
2. **Post-Production** — 2D/3D animation, VFX, 3D renders, visualisations
3. **Freefall Camera** — specialised skydiving and air-sports camerawork
4. **Stock Footage** — RAW video files from existing library

## Target Audience

Brand managers, production houses, producers, and directors looking to collaborate. Industry-literate, time-poor, visually demanding.

## Strategic Positioning

- Limited "stats on paper" / no big-name client list yet
- Differentiation comes from **craft + specialism**: aerial and extreme-sports access that most filmmakers can't deliver
- The visuals must do the heavy lifting

## Design Direction

- **Feeling target:** "Holy shit" + "this guy goes places others can't"
- **Aesthetic:** Clean, minimalist, sans serif, polished but bold
- **Avoid:** "Homemade" feel, generic-filmmaker-portfolio templates, GoPro-bro energy
- **Keep:** Visual restraint, generous spacing, let the work breathe
- A separate design has been created in Claude Design and will be provided alongside this brief — follow that as the visual source of truth.

## Content Structure (Current Squarespace Site, for Reference)

**Home page:**
- Hero header with logo
- 3 featured project tiles linking to case studies
- Services section (4 service cards with icons)
- About section ("Koen — skydiver & filmmaker")
- Contact info (email, phone, Utrecht/Netherlands)

**Work page:**
- Full grid of all projects with titles

**Project pages:**
- Individual case studies (currently a few exist on Squarespace)

The owner is open to a different structure if the design proposes one — not married to the current layout.

## Practical Notes for Build

- **Videos:** Hosted on YouTube. Owner will provide YouTube links per project — embed or link out as appropriate. Thumbnails can be pulled from YouTube directly (`https://img.youtube.com/vi/{VIDEO_ID}/maxresdefault.jpg`).
- **Images:** Existing project thumbnails can be scraped from the current Squarespace site if needed, or replaced.
- **No backend needed:** No forms, no booking, no shop, no auth. Static site only. (A simple `mailto:` link for contact is fine.)
- **Performance matters:** Visual-heavy site for industry viewers — needs to feel fast and snappy, not laggy.
- **Responsive:** Must work cleanly on desktop and mobile.

## Migration Plan (High Level)

1. Build the new site locally with Claude Code, following the Claude Design output
2. Deploy to a free static host (Netlify / Vercel / Cloudflare Pages)
3. Point the domain (currently with Squarespace) at the new host — either by transferring the domain to a cheaper registrar or by updating DNS
4. Cancel Squarespace subscription once the new site is live and verified

## What Claude Code Should Do First

1. Review the Claude Design output (provided separately) and confirm understanding of the visual direction
2. Propose a project structure (folders, files, build tooling — or no build tooling, if a plain HTML/CSS/JS approach fits)
3. Ask clarifying questions before scaffolding, especially around: framework choice (vanilla vs. lightweight framework like Astro), how to handle project case-study pages, and any interactions/animations implied by the design
