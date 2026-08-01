# AuditPulse website

This project is a Vite + React website for AuditPulse.

## Production deployment

For the custom domain to work correctly, deploy the built static site through Cloudflare Pages and keep the contact worker as a separate API endpoint.

Recommended setup:
- Build command: npm run build
- Output directory: dist
- SPA fallback: public/_redirects
- Contact form endpoint: https://auditpulse-contact-worker.theauditpulse.workers.dev/api/contact
