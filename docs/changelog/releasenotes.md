# Release Notes

## 🚀 Latest Release - February 27, 2026

**Released On:** 27-02-2026  
**Author:** Turiyaskills Admin

### Major Changes

#### Starter Plan Updates

- Updated label from **Single-user license** to **Single User** for simplification.
- Removed standalone AI video interview screening entry.
- Updated **Remasto Integration** to **AI video interview screening via Remasto**.

#### Pro Plan Update

- Added new feature: **Candidate Pipeline Builder**.

#### Clone Template Feature (Offer Template)

Added a **Clone Template** feature within the Offer Template module, allowing users to quickly duplicate existing templates and modify them without affecting the original structure.

#### Job Application Customization

Developed and integrated Job Application Customization features across both Frontend and Backend, enabling dynamic configuration of application forms based on company requirements.

#### Screening Intimation & Approval Flow

- Integrated Line Manager and Department Manager approval workflow.
- Developed a new Department Manager Report Page for approval tracking.

#### Next.js SSR Implementation

Implemented Server-Side Rendering (SSR) for candidate job application page.

- Route: `/jobs/{companyName}/{jobId}`

### Bug Fixes

- **Remasto Credit Fix:** Resolved credit deduction issue where the response credit was not getting deducted after creating the AI Interview.
- **N8N Workflow Updates:** Made minor workflow improvements and stability enhancements.

## 📌 Previous Release - February 12, 2026

**Released On:** 12-02-2026  
**Author:** Turiyaskills Admin

### Offer Template Flow Refactor

Migrated the complete Offer Template flow to an AST-based JSON structure across both frontend and backend for improved flexibility and consistency. Implemented server-side PDF rendering using Puppeteer API, enabling reliable, scalable, and accurate offer letter generation from structured template data.

### Pricing & AI Credits Revision

- Revised subscription plan pricing across Turiyaskills.
- Revised AI credits for **AI-Powered Video Proctoring** to **20 AI Credits per response**.
- Added **AI video interview screening** with **60 AI Credits per screening**.
