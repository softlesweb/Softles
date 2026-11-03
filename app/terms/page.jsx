import Footer from "../components/Footer";

export const metadata = {
  title: "Terms of Service | SoftLes",
  description:
    "The terms that apply when you use the SoftLes website and engage us for design and development services.",
  alternates: { canonical: "/terms" },
};

const UPDATED = "August 2026";

function Section({ title, children }) {
  return (
    <section className="mt-8">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">{title}</h2>
      <div className="space-y-3 text-[#C7CCD6] text-sm sm:text-base leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function TermsOfService() {
  return (
    <>
      <main className="softles-section-primary min-h-[70vh]">
        <div className="service-page-container max-w-3xl">
          <div className="softles-eyebrow mb-3">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">Legal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-[#C7CCD6]/70 text-sm mt-3">Last updated: {UPDATED}</p>

          <p className="text-[#C7CCD6] text-sm sm:text-base leading-relaxed mt-6">
            These terms apply when you use the <strong className="text-white">SoftLes</strong>{" "}
            website (softles.in) and when you engage us for design or development work. By using
            the site or working with us, you agree to them.
          </p>

          <Section title="1. Who we are">
            <p>
              SoftLes is a web design and development studio operated by{" "}
              <span className="text-white">[Legal entity name]</span>, based in{" "}
              <span className="text-white">[City, State], India</span>.
            </p>
          </Section>

          <Section title="2. Our services">
            <p>
              We provide design, WordPress and Shopify development, custom web development, and
              related automation and integration services. The exact scope, deliverables, and
              timeline for any project are defined in a written proposal or scope of work agreed
              between you and us.
            </p>
          </Section>

          <Section title="3. Quotes, proposals & payment">
            <ul className="list-disc pl-5 space-y-2">
              <li>Quotes are based on the scope discussed and may change if the scope changes.</li>
              <li>Pricing is fixed-cost or value-based, as stated in your proposal.</li>
              <li>Payment terms (deposits, milestones, due dates) are set out in the proposal or invoice.</li>
              <li>Late payment may pause work until the account is settled.</li>
            </ul>
          </Section>

          <Section title="4. Your responsibilities">
            <p>To deliver on time, we&apos;ll need timely input from you — content, assets, approvals,
              access to accounts (hosting, domain, WordPress/Shopify), and feedback within the
              agreed windows. Delays on these may affect the timeline.</p>
          </Section>

          <Section title="5. Intellectual property">
            <p>
              On full payment, ownership of the final deliverables we create for your project
              transfers to you, except for third-party assets (themes, plugins, fonts, stock
              media) and any pre-existing tools or code we reuse, which remain under their
              respective licences. We may showcase the work in our portfolio unless you ask us not to.
            </p>
          </Section>

          <Section title="6. Third-party platforms">
            <p>
              Our work often runs on platforms we don&apos;t control — WordPress, Shopify, plugins,
              hosting, and payment providers. We&apos;re not responsible for outages, changes, or
              pricing from those third parties, though we&apos;ll help you navigate them.
            </p>
          </Section>

          <Section title="7. Warranties & disclaimers">
            <p>
              We deliver our work with reasonable skill and care. Beyond what&apos;s written in your
              proposal, the site and services are provided &quot;as is&quot; without further warranties.
              We don&apos;t guarantee specific business results (rankings, traffic, or sales), as
              those depend on many factors outside our control.
            </p>
          </Section>

          <Section title="8. Limitation of liability">
            <p>
              To the extent permitted by law, our total liability for any claim related to a
              project is limited to the fees you paid us for that project. We&apos;re not liable for
              indirect or consequential losses.
            </p>
          </Section>

          <Section title="9. Confidentiality">
            <p>
              We keep your confidential information private and expect the same in return. We only
              share it with team members or providers who need it to deliver your project.
            </p>
          </Section>

          <Section title="10. Termination">
            <p>
              Either party may end an engagement in writing. You&apos;ll be invoiced for work
              completed up to that point. Sections that are meant to survive (IP, confidentiality,
              liability) continue after termination.
            </p>
          </Section>

          <Section title="11. Governing law">
            <p>
              These terms are governed by the laws of India, with courts in{" "}
              <span className="text-white">[City, State]</span> having jurisdiction.
            </p>
          </Section>

          <Section title="12. Changes & contact">
            <p>
              We may update these terms; the &quot;last updated&quot; date reflects the current version.
              Questions? Email{" "}
              <a href="mailto:info@softles.in" className="text-[#FF4D57] hover:underline">info@softles.in</a>.
            </p>
          </Section>

          <p className="text-[#C7CCD6]/50 text-xs mt-10 border-t border-[#2E3446] pt-6">
            This page is a general template, not legal advice. Please have it reviewed and fill in
            the bracketed details before relying on it.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
