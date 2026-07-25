import { webHref, addressLine } from "./links";

// Builds a vCard 3.0 string. When downloaded as a .vcf file,
// the phone offers "Add to contacts" with all fields filled in.
export function buildVCard(emp, company) {
  const website = webHref(emp.website || company.website);
  const address = emp.address || company.address;

  const tel = (n) => (n || "").replace(/\s+/g, "");

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${emp.lastName};${emp.firstName};;${emp.prefix || ""};`,
    `FN:${[emp.prefix, emp.firstName, emp.lastName].filter(Boolean).join(" ")}`,
    `ORG:${company.name}`,
    `TITLE:${emp.title}`,
    `TEL;TYPE=CELL,VOICE:${tel(emp.phone)}`,
  ];

  if (emp.officePhone) {
    lines.push(`TEL;TYPE=WORK,VOICE:${tel(emp.officePhone)}`);
  }

  lines.push(`EMAIL;TYPE=INTERNET,WORK:${emp.email}`);
  lines.push(`URL:${website}`);

  if (address) {
    // ADR fields: ;;street;city;region;postal;country
    lines.push(
      `ADR;TYPE=WORK:;;${address.street || ""};${address.city || ""};${address.region || ""};${address.postal || ""};${address.country || ""}`
    );
    lines.push(`LABEL;TYPE=WORK:${addressLine(address)}`);
  }

  lines.push("END:VCARD");
  return lines.join("\r\n");
}

// Triggers a download of the vCard in the browser.
export function downloadVCard(emp, company) {
  const text = buildVCard(emp, company);
  const blob = new Blob([text], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${emp.firstName}_${emp.lastName}.vcf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
