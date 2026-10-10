# Procedure Pricing

A phone-first price list and quote builder. Prices live in one Google Sheet tab; the site is static (no build step, no framework) and hosted free on GitHub Pages. Edit the sheet, tap ↻, done.

**Files:** `index.html` (the whole app) · `config.js` (the only file you edit) · `manifest.webmanifest`, `sw.js`, icons (installable) · `.nojekyll` · `pricing-template.xlsx` (starter sheet).

The app has no built-in prices: everything comes from your sheet. If the sheet can't be loaded, the list stays blank and a message says why.

## Set up

### 1. Google Sheet
1. Upload `pricing-template.xlsx` to Google Drive → open it → **File → Save as Google Sheets** (or use any sheet with a `Procedures` tab).
2. Row 1 of the **Procedures** tab must be: `code, name, category, unit, price, notes, active`. Replace the blue example rows with your procedures.
3. **Share → General access → Anyone with the link → Viewer.**
4. Copy the sheet ID from the URL: `https://docs.google.com/spreadsheets/d/`**`THIS_PART`**`/edit` and paste it into `config.js` → `sheetId`.

| Column | Meaning |
|---|---|
| `code` | Short ID, e.g. `CON-01` (optional) |
| `name` | Procedure name |
| `category` | Groups the list and makes the filter buttons |
| `unit` | Shown as "per visit", "per scan"… (optional) |
| `price` | `95`, `1250` or `£1,250.00` all work. **Blank = POA** (price on application). `base_price` is accepted as the header too. |
| `notes` | Shown under the name (optional) |
| `active` | `FALSE` hides the row; blank = shown |

### 2. config.js
```js
sheetId: "1AbC…",
tab: "Procedures",
title: "Procedure Pricing", companyName: "Your Company Ltd",
currency: "GBP", locale: "en-GB", vatPct: 20, quoteValidityDays: 30
```
Set `vatPct: 0` if your services are VAT-exempt (most medical care in the UK is).

### 3. GitHub Pages
**Settings → Pages → Deploy from a branch →** pick the branch and `(root)` → Save. The site appears at `https://OWNER.github.io/REPO/` after a minute or two.

### 4. On your phone
- **iPhone (Safari):** open the link → Share button → **Add to Home Screen**.
- **Android (Chrome):** open the link → ⋮ menu → **Install app** / **Add to Home screen**.

## Using it
- **Prices** — search, or tap a category. Tap **+** to add to the quote; a bar above the tabs shows the running total.
- **Quote** — −/+ quantity, type a unit price to override it for this quote only (marked *Manual*; also how you price POA items). Fill in *Prepared for*, reference (auto `Q-YYYYMMDD`), VAT % and notes. **Share** opens your phone's share sheet (or copies the text), **PDF / Print** prints a clean quotation (choose *Save as PDF*), **CSV** downloads for Excel, **Clear** empties it. The quote is kept on the device.
- **Refresh** — ↻ reloads the sheet; it also reloads when you reopen the app after 5+ minutes.

## Privacy — read this
"Anyone with the link" means anyone who has the sheet ID can read the sheet — and the ID is visible in `config.js` on the public site. GitHub Pages sites are public. Fine for a published price list; for anything confidential, put the data behind authentication instead.

## Troubleshooting
- **"Couldn't load the Google Sheet"** — no connection, or the sheet isn't shared *Anyone with the link → Viewer*.
- **"The Google Sheet isn't shared publicly"** — fix the sharing setting above.
- **"Google Sheet not found"** — `sheetId` is wrong (copy only the part between `/d/` and `/edit`).
- **"Tab … wasn't found or has the wrong headers"** — the tab must be named as in `config.js → tab` and row 1 must have at least `name` and `price`. (Google quietly returns the first tab when a name is wrong, so the app checks the headers.)
- **Edits not showing** — tap ↻. Google can take a minute to serve changes.
