// Edit this file only. Everything else reads from it.
window.PRICING_CONFIG = {
  // The long ID in your Google Sheet URL:
  // https://docs.google.com/spreadsheets/d/THIS_PART/edit
  // Leave empty to run with demo data.
  sheetId: "1IjLWw8yjXlrGNyZV38Oe-8qWh4RaK-hE-OB5EIMwfyg",

  // Tab names in the sheet (change only if you rename the tabs)
  tabs: { procedures: "Procedures", customers: "Customers", prices: "Prices" },

  title: "Procedure Pricing",       // shown at the top of the app
  companyName: "Your Company Ltd",  // shown on printed / shared quotes
  defaultCurrency: "GBP",           // currency of base_price in the sheet
  locale: "en-GB",                  // number and date formatting
  vatPct: 20,                       // default VAT on quotes (0 to hide)
  quoteValidityDays: 30
};
