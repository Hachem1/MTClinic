// Edit this file only. Everything else reads from it.
window.PRICING_CONFIG = {
  // The long ID in your Google Sheet URL:
  // https://docs.google.com/spreadsheets/d/THIS_PART/edit
  sheetId: "1IjLWw8yjXlrGNyZV38Oe-8qWh4RaK-hE-OB5EIMwfyg",

  tab: "Procedures",                // name of the tab holding the price list

  // Branding — shown in the app header and on quotes
  title: "MT Clinic",
  subtitle: "Nursing Care",
  companyName: "MT Clinic",
  contactName: "Ramzi Hashem · Registered Nurse",
  phone: "03 894 380 · 71 466 324",
  instagram: "@m.t.clinic_",

  currency: "GBP",                  // currency of the prices in the sheet (e.g. USD, LBP)
  locale: "en-GB",                  // number and date formatting
  vatPct: 20,                       // default VAT on quotes (0 if your services are VAT-exempt)
  quoteValidityDays: 30
};
