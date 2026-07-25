// ============================================================
//  COMPANY INFO  —  edit these once; every card uses them.
// ============================================================

export const company = {
  name: "DPV Offshore & Marine Services (Pvt) Ltd",
  shortName: "DPV Offshore",
  tagline: "DPV Offshore & Marine Services",
  website: "https://www.dpvoffshore.com",

  logoFull: "/logo-full.png", // logo with text (in /public)
  logoIcon: "/logo-icon.png", // icon only    (in /public)

  // How the "Email" button behaves:
  //   "mailto"  -> opens the visitor's default mail app (Outlook if it's their default). Recommended.
  //   "outlook" -> always opens Outlook on the web compose window.
  emailMode: "mailto",

  // Head office address shown on every card + saved into the contact.
  // Edit with your real address.
  address: {
    label: "Head Office",
    street: "P.O.Box 75287, Workshop 5,#W306, Dubai Maritime City,Dubai, UAE.",
    city: "Dubai",
    region: "",
    postal: "",
    country: "UAE",
    // Tapping "Show on map" opens this link.
    mapUrl: "https://maps.app.goo.gl/47QfEh2tjNksU1618",
  },

  // Where the company operates (shown as chips at the bottom).
  countries: ["Dubai", "Abu Dhabi", "Fujairah", "Sri Lanka", "Singapore"],
};
