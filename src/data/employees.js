// ============================================================
//  EMPLOYEES  —  THIS IS THE ONLY FILE YOU EDIT TO ADD PEOPLE.
// ------------------------------------------------------------
//  To add someone:
//    1. Copy one { ... } block below.
//    2. Change the details.
//    3. Put their photo in  /public/employees/<slug>.jpg
//       (use the same name as "slug", e.g. nimal.jpg)
//    4. Save. Their card is live at  /<slug>
//       e.g.  https://cards.dpvoffshore.com/jayantha
//
//  Notes:
//    - phone:    include country code             ->  "+94 77 738 4934"
//    - officePhone: OPTIONAL second number (e.g. UAE office). Remove if unused.
//    - prefix:   OPTIONAL honorific ("Mr." / "Ms.") saved into the contact.
//    - whatsapp: NO plus sign, NO spaces          ->  "94777384934"
//    - email/website: optional; if website is left out, the
//      company website is used automatically.
//    - address: optional. Leave it out to use the company
//      head-office address. Add one here only to override it.
// ============================================================

export const employees = [
  {
    slug: "jayantha",
    prefix: "Mr.", // optional honorific, saved into the contact
    firstName: "Jayantha",
    lastName: "Bandara",
    title: "Chief Executive Officer (CEO)",
    photo: "/employees/jayantha.jpg",
    phone: "+94 77 738 4934", // mobile (spaces are fine; the dialer strips them)
    officePhone: "+971 4 580 4314", // optional second number (UAE office)
    whatsapp: "94777384934", // no plus, no spaces
    email: "ceo@dpvoffshore.com",
    website: "https://www.dpvoffshore.com",
    // address: {              // <-- optional override, otherwise company address is used
    //   label: "Dubai Office",
    //   street: "...",
    //   city: "Dubai",
    //   region: "",
    //   postal: "",
    //   country: "UAE",
    //   mapUrl: "",
    // },
  },

  // ---- copy from here to add a new employee ----
  // {
  //   slug: "nimal",
  //   firstName: "Nimal",
  //   lastName: "Silva",
  //   title: "Operations Manager",
  //   photo: "/employees/nimal.jpg",
  //   phone: "+94770000000",
  //   whatsapp: "94770000000",
  //   email: "nimal@dpvoffshore.com",
  // },
];

// Helper used by the pages (no need to touch this).
export function getEmployee(slug) {
  return employees.find((e) => e.slug === slug);
}
