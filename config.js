// Edit this file only. Everything else reads from it.
window.PRICING_CONFIG = {
  // The long ID in your Google Sheet URL:
  // https://docs.google.com/spreadsheets/d/THIS_PART/edit
  sheetId: "1IjLWw8yjXlrGNyZV38Oe-8qWh4RaK-hE-OB5EIMwfyg",

  tab: "Procedures",                // name of the tab holding the price list

  title: "Procedure Pricing",       // shown at the top of the app
  companyName: "Your Company Ltd",  // shown on printed / shared quotes
  currency: "GBP",                  // currency of the prices in the sheet
  locale: "en-GB",                  // number and date formatting
  vatPct: 20,                       // default VAT on quotes (0 if your services are VAT-exempt)
  quoteValidityDays: 30
};
