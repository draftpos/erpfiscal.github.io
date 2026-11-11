# HavanoZimra Cloud API Documentation

> Complete API integration and fiscalization documentation for connecting ERPs, POS, and accounting systems with the Zimbabwe Revenue Authority (ZIMRA) FDMS via HavanoZimra Cloud.

## Overview

**HavanoZimra Cloud** provides a modern, robust, and secure cloud API gateway that simplifies compliance with ZIMRA fiscalization regulations. It handles device authentication, CSRF token management, fiscal sales invoices, credit notes, offline queuing, and direct fiscal device communication.

### Core Features

- **Automated CSRF & Session Management**: Simplified authentication handling for Frappe/ERP backend endpoints.
- **Real-Time ZIMRA Connectivity**: Check device online status and ZIMRA FDMS server reachability with `/api/method/havanozimracloud.api.pingzimra`.
- **Fiscal Sales Invoicing**: Submit B2B and B2C invoices with structured itemized tax calculations (`items_xml`) via `/api/method/havanozimracloud.api.sendinvoice`.
- **Credit Notes & Debit Notes**: Seamlessly process reversals and adjustments linked to original fiscal invoices (`invoice_flag=1`).
- **Offline Invoice Buffering**: Built-in mechanisms to capture transactions when ZIMRA servers are temporarily unreachable, ensuring business continuity.
- **Multi-Language Integration**: Ready-to-use SDK examples for VB.NET, C# (.NET), Python, cURL, and REST clients.

---

## Documentation Site Setup

The documentation site is powered by Nuxt 4 and Docus.

### Prerequisites

- Node.js 18+ (Node 20+ recommended)
- pnpm (recommended) or npm

### Running Locally

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Start the development server:**
   ```bash
   pnpm run dev
   ```

3. **Build for production:**
   ```bash
   pnpm run build
   ```

---

## API Summary at a Glance

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/api/method/havanozimracloud.api.token` | POST / GET | Generate session CSRF token required for subsequent requests |
| `/api/method/havanozimracloud.api.pingzimra` | POST | Ping ZIMRA server and check device serial number status |
| `/api/method/havanozimracloud.api.sendinvoice` | POST | Send fiscal invoice (`invoice_flag=0`) or credit note (`invoice_flag=1`) |
| `/api/method/havanozimracloud.api.sendinvoice` (Offline) | POST | Queue or send offline invoice when ZIMRA server is unavailable |

### Standard Request Headers

```http
Authorization: token <API_KEY>:<API_SECRET>
X-Frappe-CSRF-Token: <CSRF_TOKEN>
Content-Type: application/x-www-form-urlencoded
```

---

## CI/CD & Deployment

This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the documentation site to **GitHub Pages** whenever changes are pushed to `main` or `master`.

### Enabling GitHub Pages in Repository Settings:
1. In your GitHub repository, navigate to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Any push to `main` will automatically trigger the build and deploy pipeline.

### Manual Workflow Trigger:
You can also manually trigger deployment at any time from the **Actions** tab by selecting **Deploy Documentation to GitHub Pages** and clicking **Run workflow**.

---

## License

Proprietary © Havano Systems / HavanoZimra Cloud. All rights reserved.
