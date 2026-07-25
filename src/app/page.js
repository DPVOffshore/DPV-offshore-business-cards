import Link from "next/link";
import Image from "next/image";
import { employees } from "@/data/employees";
import { company } from "@/data/company";

// A small directory index at "/". Handy for testing; you can
// keep it private or replace it with a redirect if you prefer.
export default function Home() {
  return (
    <main
      style={{
        maxWidth: 520,
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "var(--font-body)",
      }}
    >
      <Image src={company.logoFull} alt={company.name} width={260} height={80} style={{ height: "auto", width: 220 }} />
      <h1 style={{ fontFamily: "var(--font-display)", color: "var(--navy)", margin: "24px 0 4px", fontSize: 24 }}>
        Digital Business Cards
      </h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>Tap a name to open their card.</p>

      <div style={{ display: "grid", gap: 10 }}>
        {employees.map((e) => (
          <Link
            key={e.slug}
            href={`/${e.slug}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "12px 16px",
              background: "var(--card)",
              borderRadius: 12,
              boxShadow: "0 2px 10px rgba(20,41,63,.08)",
            }}
          >
            <Image
              src={e.photo}
              alt=""
              width={44}
              height={44}
              style={{ borderRadius: "50%", objectFit: "cover", width: 44, height: 44 }}
            />
            <span>
              <strong style={{ display: "block", color: "var(--navy)" }}>
                {e.firstName} {e.lastName}
              </strong>
              <small style={{ color: "var(--muted)" }}>{e.title}</small>
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
