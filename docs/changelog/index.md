# Release Notes

---

## 🚀 Latest Release - March 11, 2026

**Released On:** 11-03-2026  \
**Author:** Turiyaskills Admin

### Major Changes

#### View Signed Offer Letter for Accepted Candidates

Developed and integrated a read-only offer letter viewing feature for candidates who have accepted an offer, allowing users to open the finalized offer letter in a modal without editing permissions and download the signed offer as a PDF.

#### Offer Stage "View Accepted Offer" Pipeline Action

Implemented a new action button in the pipeline progress bar that appears when a candidate reaches the Offer Accepted stage, enabling quick access to the finalized offer letter through the offer preview modal.

#### Offer Letter Modal Read-Only Mode

Enhanced the Offer Letter modal to support a read-only state that hides editing capabilities, removes the editor split-pane, and displays only the rendered offer letter preview.

#### Download Signed Offer Letter

Added a download functionality within the read-only offer modal that generates and retrieves the finalized offer letter PDF using the generate_offer_pdf_v2 API.

#### Variable Formatting in Offer Editor

Improved the offer editor so inserted variables inherit active text formatting such as bold, italic, and underline, ensuring formatting consistency across the editor preview and generated PDF.

#### Currency Formatting Standardization

Implemented locale-aware currency formatting across the offer system, ensuring INR values follow Indian numbering conventions (e.g., 5,50,000) while other currencies follow international formatting (e.g., 550,000) in the offer list, preview canvas, and generated PDFs.

#### Preview Canvas Smooth Loading

Enhanced the offer preview experience by introducing a smooth loading overlay during updates and optimizing the preview rendering process to prevent flickering and duplicate API calls.

#### Editable Signature Block Titles

Added the ability to edit signature block titles such as Company Representative and Candidate Acceptance directly within the offer preview editor, with updates reflected instantly in the preview and saved offer letter.

#### Number Input Scroll Protection

Fixed an issue where scrolling while focused on numeric fields in the Offer Form unintentionally modified field values such as CTC, variable pay, bonuses, and other numeric inputs.

#### Zero Amount Component Display Fix

Corrected the display behavior for salary components with a value of zero, ensuring they properly show the monthly hint (≈ INR 0/mo) and appear consistently in the preview and generated PDF.

#### Standardized Date Formatting

Updated all offer-related date fields to display in DD-MM-YYYY format across the preview canvas, paragraph variables, position details tables, candidate acceptance views, organizer approval views, and generated PDFs.

---

## 📌 Previous Release - February 27, 2026

**Released On:** 27-02-2026  \
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

---

## 📌 Previous Release - February 12, 2026

**Released On:** 12-02-2026  \
**Author:** Turiyaskills Admin

### Offer Template Flow Refactor

Migrated the complete Offer Template flow to an AST-based JSON structure across both frontend and backend for improved flexibility and consistency. Implemented server-side PDF rendering using Puppeteer API, enabling reliable, scalable, and accurate offer letter generation from structured template data.

### Pricing & AI Credits Revision

- Revised subscription plan pricing across Turiyaskills.
- Revised AI credits for **AI-Powered Video Proctoring** to **20 AI Credits per response**.
- Added **AI video interview screening** with **60 AI Credits per screening**.

---

## 🚀 Previous Release - December 26, 2025

**Release Date:** 26-Dec-2025  \
**Author:** Turiyaskills Admin

### 🔔 Major Changes

#### UI Revamp
Enhanced the overall user interface for a more intuitive and seamless experience across modules.

#### Resume Parser Update
The existing Resume Parser module has been removed and replaced with the new Candidate Resumes section, improving resume management and candidate tracking efficiency.

#### Pipeline Builder
Introduced the Pipeline Builder, a powerful new tool that allows users to create, customize, and manage recruitment workflows. This feature enables dynamic configuration of recruitment stages, offering full flexibility to define and modify the process flow.

#### AI Proctoring Engine Upgrade
The AI proctoring service has been migrated from AWS Bedrock to Anthropic's direct API. This upgrade improves backend performance and reliability. The integration has also been refactored using the instructor library to ensure highly reliable, structured JSON responses from the Claude model.

#### Comprehensive Two-Image Proctoring Analysis
The two-image proctoring check (used for comparing a live image to a target/registration image) has been enhanced. In addition to detecting candidate matching, other people in the frame, and if the candidate is looking at the screen, the API response now also includes a full analysis of the live image for:

- Lighting Quality
- Head Position
- Unauthorized Materials

---

## 🚀 Previous Release - October 9, 2025

**Release Date:** 9-oct-2025  \
**Author:** Turiyaskills Admin

### 🔔 Major Changes

#### Admin Assessment Notifications
A "Get notified on assessment completion" flip switch button has been added to the **SMARTEVAL Quiz Publish area**. This feature will automatically send an email notification to the administrator/owner of the assessment once a candidate/user completes their assessment.

#### Offline Assessment Submission
The system now temporarily saves assessment data locally if internet connectivity is lost, ensuring that user submissions are not lost and can be processed once the connection is restored.

#### Judge0 Compiler Integration
The **Judge0 compiler** has been integrated into the front-end candidate assessment pages (chat as well as standard windows), enabling real-time code compilation and execution within the assessment environment for coding questions.

### 🛠️ Enhancements and Bug Fixes

#### PDF Report Generation
The backend logic for generating and downloading PDF reports has been significantly modified for better performance and reliability.

#### Assessment Access Control
Users in a published list are now prevented from opening the same assessment in multiple tabs or sessions simultaneously.

#### Duplicate Entry Issue
Addressed a critical bug that was causing double entries to be created under certain conditions.

#### Assessment Generation Complexity
Addressed an issue where the complexities of the questions are not actually complex. So made some changes to the guidelines and also prompt to give proper complexities.

#### Email Template Update
The standard email template has been updated with a new design and improved content.

---

## 🚀 Previous Release - July 18, 2025

**Release Date:** 18-07-2025  
**Author:** Turiyaskills Admin

### 🔌 Enhanced Resume Pipeline Connectors
- **ContactOut People Search Integration**: Complete integration with ContactOut database for candidate sourcing
- **📊 API Usage Statistics (NEW)**: Real-time monitoring of ContactOut quota consumption with:
  - Profile Access Tracking and Phone Access Monitoring
  - Search Query Counting with remaining quotas display
  - Color-Coded Indicators: Green (0-50%), Blue (50-75%), Yellow (75-90%), Red (90%+)
  - Billing Period Display with monthly cycle and renewal dates
  - Smart Alerts and Progress Bars for quota management
- **🔍 Similar JD Search (NEW)**: Search matching profiles from existing resumes from other similar job descriptions
  - Skill-Based Matching from historical candidate data
  - Smart JD Ranking by skill match percentage
  - Cross-JD Profile Search across multiple job postings
  - Bulk Profile Import with comprehensive candidate data access

### 🏢 Enhanced Team Recruitment Features
- **Centralized JD & Resume Management**: Single consolidated location for all Job Descriptions and candidate resumes
  - Real-time visibility of document review status and ownership
  - Enhanced collaboration and transparency across team members
- **Common Assessment Sharing**: Standardized assessment templates for consistent candidate evaluation
  - Unified evaluation criteria across all team members
  - Reduced redundancy in assessment creation
- **Ownership Transfer of Artefacts**: Seamless transfer of assessments, JDs, and other work items between team members
  - Flexible task management and resource allocation
  - Smooth handovers and continuity assurance

---

## 🚀 Previous Release - June 2, 2025

**Release Date:** 02-06-2025  
**Author:** Turiyaskills Admin

### 💼 Resume Management Enhancements
- Introduced new **Resume Parser UI**:
  - Card view and table view options
  - Resume download functionality
  - Advanced search and filtering capabilities
- Enhanced filtering options for processed resumes
- Improved search functionality for better candidate discovery

### 💰 New Subscription Plans
- Introduced flexible pricing options:
  - **Free Plan**:
    - Available in INR (₹0/year)
    - Free license (1 user)
    - Daily 100 AI Credits + 10 Response Credits
  - **Starter Plan**:
    - Available in INR (₹2,999/month incl. 18% GST)
    - ₹27,000 + 18% GST yearly (Save ₹8,988)
    - 2,000 AI Credits + 200 Response Credits per month
  - **Pro Plan**:
    - Available in INR (₹12,999/month incl. 18% GST)
    - ₹117,000 + 18% GST yearly (Save ₹38,988)
    - 5,000 AI Credits + 500 Response Credits per month
  - **Enterprise Plan**:
    - Custom pricing
    - Unlimited users with custom AI/Response credits allocation
- Multi-currency support for global accessibility

### ✅ Added JD-Based Quiz Generation
- Automatically generates quizzes based on **Job Descriptions (JD)**.
- Enables **role-aligned assessments** to better match candidate skills with job requirements.

### 🧠 Integrated Skill Clustering
- Clusters **related skills** for:
  - Improved quiz section organization.
  - Higher relevance of questions to targeted skill sets for automatic assessment generation in sections/skills.

### 👥 Enhanced Team Management System
- Introduced structured **role and status flows** for users:
  - **Roles:** Master Admin, Admin, Member.
  - **Statuses:** Invited, Active, Deactivated.
- Email-based **invitation system** with a 7-day expiration.
- **Permissions:**
  - Master Admins and Admins can invite users.
  - Members have **view-only** access.
- **Status transitions** (e.g., Invited → Active) are tracked with **timestamps**.

---
