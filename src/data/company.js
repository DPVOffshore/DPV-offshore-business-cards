// ============================================================
//  COMPANY INFO  —  edit these once; every card uses them.
// ============================================================

// Office addresses shown on every card + saved into the contact.
// The FIRST one is treated as the head office.
const dubaiOffice = {
  label: "Dubai Office",
  street: "P.O.Box 75287, Workshop 5,#W306, Dubai Maritime City,Dubai, UAE.",
  city: "Dubai",
  region: "",
  postal: "",
  country: "UAE",
  // Tapping "Show on map" opens this link.
  mapUrl: "https://maps.app.goo.gl/EcgtVJ7iuwgAT6sk9",
};

const abuDhabiOffice = {
  label: "Abu Dhabi Office",
  street: "No 879, 8th Floor, Al Ghaith Tower, Mohammad Bin Hamdan Street",
  city: "Abu Dhabi",
  region: "",
  postal: "",
  country: "UAE",
  // No short link yet — the map opens a search for the address above.
  mapUrl: "",
};

export const company = {
  name: "DPV Offshore & Marine Services L.L.C",
  shortName: "DPV Offshore",
  tagline: "DPV Offshore & Marine Services",
  website: "https://www.dpvoffshore.com",

  logoFull: "/logo-full.png", // logo with text (in /public)
  logoIcon: "/logo-icon.png", // icon only    (in /public)

  // How the "Email" button behaves:
  //   "mailto"  -> opens the visitor's default mail app (Outlook if it's their default). Recommended.
  //   "outlook" -> always opens Outlook on the web compose window.
  emailMode: "mailto",

  // Every office shown on the cards, in order.
  addresses: [dubaiOffice, abuDhabiOffice],

  // Kept for anything that still expects a single address (head office).
  address: dubaiOffice,

  // Where the company operates (shown as chips at the bottom).
  countries: ["Dubai", "Abu Dhabi", "Sharjah", "Fujairah", "Sri Lanka", "Singapore"],
};
