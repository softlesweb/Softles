import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy | SoftLes",
  description:
    "How SoftLes collects, uses, and protects your information when you use our website and services.",
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

export default function PrivacyPolicy() {
  return (
    <>
      <main className="softles-section-primary min-h-[70vh]">
        <div className="service-page-container max-w-3xl">
          <div className="softles-eyebrow mb-3">
            <span className="softles-eyebrow-line" />
            <span className="softles-eyebrow-text">Legal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-[#C7CCD6]/70 text-sm mt-3">Last updated: {UPDATED}</p>

          <p className="text-[#C7CCD6] text-sm sm:text-base leading-relaxed mt-6">
            This Privacy Policy explains how <strong className="text-white">SoftLes</strong>{" "}
            (&quot;SoftLes&quot;, &quot;we&quot;, &quot;us&quot;) handles information when you visit{" "}
            softles.in or use our services. We keep this short and plain-English on purpose.
          </p>

          <Section title="Who we are">
            <p>
              SoftLes is a web design and development studio based in India, operated by{" "}
              <span className="text-white">[Legal entity name]</span>,{" "}
              <span className="text-white">[Registered address, City, State]</span>. For any
              privacy question, email{" "}
              <a href="mailto:info@softles.in" className="text-[#FF4D57] hover:underline">info@softles.in</a>.
            </p>
          </Section>

          <Section title="Information we collect">
            <p>We only collect what we need to respond to you and run the site:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="text-white">Contact details you give us</span> — name, email, phone/WhatsApp number, site URL, and anything you type into our forms or send us on WhatsApp.</li>
              <li><span className="text-white">Usage data</span> — pages viewed, approximate location, device/browser type, and referral source, collected via analytics cookies.</li>
            </ul>
            <p>We do not ask for sensitive personal data, and we do not knowingly collect information from children under 16.</p>
          </Section>

          <Section title="How we use your information">
            <ul className="list-disc pl-5 space-y-2">
              <li>To reply to your enquiry and provide the services you ask for.</li>
              <li>To send project-related communication (proposals, updates, invoices).</li>
              <li>To understand how the site is used and improve it.</li>
              <li>To measure and improve our advertising.</li>
            </ul>
            <p>We do not sell your personal information.</p>
          </Section>

          <Section title="Third-party services we use">
            <p>The site relies on a few trusted providers, each with their own privacy policy:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="text-white">Resend</span> — delivers form submissions to our inbox.</li>
              <li><span className="text-white">Google Analytics</span> — website usage analytics.</li>
              <li><span className="text-white">Meta Pixel</span> — measures and optimises our Facebook/Instagram ads.</li>
              <li><span className="text-white">WhatsApp (Meta)</span> — when you choose to message us.</li>
              <li><span className="text-white">Vercel</span> — hosting and delivery of this website.</li>
            </ul>
          </Section>

          <Section title="Cookies & tracking">
            <p>
              We use cookies for analytics and ad measurement (Google Analytics, Meta Pixel).
              You can block or delete cookies in your browser settings; the site will still work.
            </p>
          </Section>

          <Section title="How long we keep it">
            <p>
              We keep enquiry and client information only as long as needed to serve you and to
              meet legal or accounting requirements, then delete it. You can ask us to delete
              your data at any time.
            </p>
          </Section>

          <Section title="Your rights">
            <p>
              You can ask to access, correct, or delete the personal information we hold about
              you, or opt out of marketing. Email{" "}
              <a href="mailto:info@softles.in" className="text-[#FF4D57] hover:underline">info@softles.in</a>{" "}
              and we&apos;ll action it within a reasonable time.
            </p>
          </Section>

          <Section title="Data security">
            <p>
              We use reputable providers and reasonable safeguards to protect your data. No
              method of transmission over the internet is 100% secure, so we can&apos;t guarantee
              absolute security.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              We may update this policy from time to time. The &quot;last updated&quot; date at the top
              reflects the latest version.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about your privacy? Email{" "}
              <a href="mailto:info@softles.in" className="text-[#FF4D57] hover:underline">info@softles.in</a>{" "}
              or call +91 89540 00202.
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
