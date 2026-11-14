import EditorialHero from "@/app/components/_components/EditorialHero";

export default function IntegrationsHero() {
  // Three deliberate lines: "Stop moving data between tools" is too long to sit
  // on one, and left to wrap it stranded "tools" on a line of its own.
  return (
    <EditorialHero
      variant="integrations"
      eyebrow="Integrations & Automation"
      thin="Stop moving data"
      name="between tools"
      mid="by"
      fillWord="hand."
      breakAfterThin
      sub="We connect your site to the CRM, payments and ops tools you already run — and automate the handoffs your team still does manually."
      projectsLabel="See connected builds"
    />
  );
}
