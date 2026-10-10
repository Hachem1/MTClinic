# Procedure Pricing

A phone-first price list and quote builder. Prices live in a Google Sheet; the site is static (no build step, no framework) and hosted free on GitHub Pages. Edit the sheet, tap ↻, done.

**Files:** `index.html` (the whole app: inline CSS + JS) · `config.js` (the only file you edit) · `manifest.webmanifest`, `sw.js`, icons (installable + offline) · `.nojekyll` · `pricing-template.xlsx` (starter sheet).

With `sheetId` empty the app runs on built-in demo data and says so in a banner.

## Set up

### 1. Google Sheet
1. Upload `pricing-template.xlsx` to Google Drive → open it → **File → Save as Google Sheets**.
2. Replace the blue example rows with your procedures, customers and special prices. Keep row 1 (headers) and the tab names `Procedures`, `Customers`, `Prices`. The **How it works** tab explains every column.
3. **Share → General access → Anyone with the link → Viewer.**
4. Copy the sheet ID from the URL: `https://docs.google.com/spreadsheets/d/`**`THIS_PART`**`/edit` and paste it into `config.js` → `sheetId`.

### 2. config.js
```js
sheetId: "1AbC…",                                   // "" = demo data
tabs: { procedures: "Procedures", customers: "Customers", prices: "Prices" },
title: "Procedure Pricing", companyName: "Your Company Ltd",
defaultCurrency: "GBP", locale: "en-GB", vatPct: 20, quoteValidityDays: 30
```

### 3. GitHub Pages
Push the files to a repo, then **Settings → Pages → Deploy from a branch → `main` / `(root)`** (or `gh api -X POST repos/OWNER/REPO/pages -f "source[branch]=main" -f "source[path]=/"`). The site appears at `https://OWNER.github.io/REPO/` after a minute or two.

### 4. On your phone
- **iPhone (Safari):** open the link → Share button → **Add to Home Screen**.
- **Android (Chrome):** open the link → ⋮ menu → **Install app** / **Add to Home screen**.

It opens full-screen like an app and keeps working offline with the last prices it synced.

## Using it
- **Prices** — pick a customer (big dropdown at the top), search, or tap a category chip. Each price shows where it came from (Contract, −10%, Remote −20%, Account −5%) and the struck-through list price when different. Tap **+** to add to the quote; a bar above the tabs shows the running total.
- **Quote** — −/+ quantity, type a unit price to override it for this quote only (marked *Manual*), edit reference (auto `Q-YYYYMMDD-CUSTID`), VAT % and notes. **Share** opens your phone's share sheet (or copies the text), **PDF / Print** prints a clean quotation (choose *Save as PDF*), **CSV** downloads for Excel, **Clear** empties it. The quote is saved on the device.
- **Compare** — one procedure across every customer, cheapest first, normalised to GBP (other currencies show ≈ £). Tap a customer to open their price list.
- **Links** — `…/?customer=CTB` opens straight to a customer; the address updates as you switch.
- **Refresh** — ↻ reloads the sheet; it also refreshes itself when you reopen the app after 5+ minutes. Without signal it shows the last synced copy with an "Offline copy" note.

## How prices are worked out (most specific wins)
1. Contract price for customer + procedure code (Prices tab, `price`; already in the customer's currency)
2. % for customer + code (Prices tab, `code` + `discount_pct`)
3. % for customer + category (Prices tab, `category` + `discount_pct`)
4. Customer's account `discount_pct` (Customers tab)
5. List price = `base_price × fx_rate`

Rules outside `valid_from`/`valid_to` are skipped. Percentages are plain numbers (`10` = 10%; `10%` and `0.1` also work); negatives are surcharges. Prices can include `£`, `€` or thousands commas. Dates: `yyyy-mm-dd` or `dd/mm/yyyy`. A blank `base_price` shows **POA**. Headers are case-insensitive.

## Privacy — read this
"Anyone with the link" means anyone who has the sheet ID can read the whole sheet — and the ID is visible in `config.js` on the public site. GitHub Pages sites are public too (even from a private repo on paid plans, unless you use Enterprise access control). Fine for list prices; for confidential contract pricing put the data behind authentication (e.g. a Google Apps Script endpoint with a key, or Cloudflare Access in front of the site).

## Troubleshooting
- **"The Google Sheet isn't shared publicly"** — Share → General access → *Anyone with the link* → Viewer; also check `sheetId`.
- **"Google Sheet not found"** — `sheetId` is wrong (copy only the part between `/d/` and `/edit`).
- **"Tab … wasn't found"** — a tab was renamed. Google quietly returns the first tab instead, so the app checks headers. Rename the tab back or update `config.js → tabs`.
- **"Tab … has the wrong headers"** — row 1 was edited; the message lists the expected headers.
- **Edits not showing** — tap ↻. Google can take a minute to serve changes.
